<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    /** @use HasFactory<\Database\Factories\LaporanFactory> */
    use HasFactory;
    const STATUS_SELESAI = 'selesai';
    const STATUS_BELUM_SELESAI = 'belum selesai'; // Contoh status lain

    // Tambahkan scope untuk laporan yang belum selesai
    public function scopeBelumSelesai($query)
    {
        return $query->where('status', '!=', self::STATUS_SELESAI);
    }


}
