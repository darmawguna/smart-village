<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use App\Models\Artikel;
use App\Models\Produk;
use App\Models\Laporan;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget\Card;
use Illuminate\Support\Facades\Cache;
class DashboardWidget extends BaseWidget
{
    protected function getStats(): array
    {
        $totalLaporan = Cache::remember('total_laporan', 600, fn() => Laporan::count());
        $belumSelesai = Cache::remember('belum_selesai_laporan', 600, fn() => Laporan::where('status', '!=', 'selesai')->count());
        $totalKonten = Cache::remember('total_konten', 600, fn() => Artikel::count());
        $totalProduk = Cache::remember('total_konten', 600, fn() => Produk::count());
        return [
            Card::make('Total Konten', $totalKonten)
                // ->description('10 baru bulan ini')
                ->descriptionIcon('heroicon-s-arrow-up')
                ->url(route('filament.admin.resources.artikels.index'))
                ->color('success'), // Warna hijau untuk penanda positif

            Card::make('Total Produk', $totalProduk)
                // ->description('3 baru minggu ini')
                ->descriptionIcon('heroicon-s-arrow-down')
                ->url(route('filament.admin.resources.produks.index'))
                ->color('warning'), // Warna kuning untuk penanda peringatan

            Card::make('Total Laporan', $totalLaporan)
                ->description("$belumSelesai belum selesai") // Tampilkan jumlah belum selesai
                ->url(route('filament.admin.resources.laporans.index'))
                ->color($belumSelesai > 0 ? 'danger' : 'success'), // Warna berdasarkan kondisi

        ];
    }
}
