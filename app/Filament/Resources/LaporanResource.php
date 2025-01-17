<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LaporanResource\Pages;
use App\Filament\Resources\LaporanResource\RelationManagers;
use App\Models\Laporan;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Actions\ViewAction;
use Filament\Infolists\Components\TextEntry;

// use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\Split;
// use Filament\Infolists\Components\TextEntry;
use Filament\Support\Enums\FontWeight;
use Filament\Infolists\Components\ImageEntry;


class LaporanResource extends Resource
{
    protected static ?string $model = Laporan::class;

    protected static ?string $navigationIcon = 'heroicon-o-paper-clip';
    // protected static ?string $navigationLabel = 'Manajemen Laporan';

    protected static ?string $navigationLabel = 'Laporan Publik';

    protected static ?string $pluralLabel = 'Laporan';
    protected static ?string $modelLabel = 'Laporan';



    // TODO ubah ketika sudah siap melakukan pengujian 
    public static function canCreate(): bool
    {
        return false;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('judul')
                    ->label('Judul')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('deskripsi')
                    ->label('Deskripsi')
                    ->required(),
                Forms\Components\DatePicker::make('tanggal_laporan')
                    ->label('Tanggal Laporan')
                    ->required(),
                Forms\Components\Select::make('status')
                    ->label('Status')
                    ->options([
                        'diterima' => 'Diterima',
                        'dalam proses' => 'Dalam Proses',
                        'selesai' => 'Selesai',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('nama_pelapor')
                    ->label('Nama Pelapor')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('kontak_pelapor')
                    ->label('Kontak Pelapor')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('lokasi')
                    ->label('Lokasi')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('gambar')
                    ->label('Gambar')
                    ->image()
                    ->directory('pelaporan')
                    ->required(),
            ]);

    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Section::make([
                    TextEntry::make('judul')
                        ->weight(FontWeight::Bold),
                    ImageEntry::make('gambar')
                        ->width(600)
                        ->height(400)
                    ,
                    TextEntry::make('deskripsi')
                        ->markdown()
                        ->prose(),
                ])
                    ->grow(true) // Membiarkan section ini tumbuh sesuai kebutuhan
                    ->columnSpan(['default' => 'full', 'lg' => 2]), // Mengambil 2 bagian grid di layar besar (lg)

                Section::make([
                    TextEntry::make('nama_pelapor')
                        ->label('Nama Pelapor'),
                    TextEntry::make('created_at')
                        ->dateTime(),
                ])
                    ->grow(false) // Tidak mengambil ruang lebih dari yang dibutuhkan
                    ->columnSpan(['default' => 'full', 'lg' => 1]), // Mengambil 1 bagian grid di layar besar (lg)
            ])
            ->columns([
                'default' => 1, // Satu kolom untuk layar kecil
                'lg' => 3, // Tiga kolom untuk layar besar
            ]);
    }







    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('judul')
                    ->label('Judul Laporan')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('nama_pelapor')
                    ->label('nama pelapor')
                    ->searchable()
                ,

                TextColumn::make('created_at')
                    ->label('Dibuat Pada')
                    ->dateTime()
                    ->sortable(),

                SelectColumn::make('status')
                    ->label('Status')
                    ->options([
                        'diterima' => 'Diterima',
                        'dalam proses' => 'Dalam Proses',
                        'selesai' => 'Selesai',
                    ])
                    // ->editable() // Mengaktifkan inline editing
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                // Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
        ;
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLaporans::route('/'),
            'create' => Pages\CreateLaporan::route('/create'),
            'view' => Pages\ViewLaporan::route('/{record}'),
            'edit' => Pages\EditLaporan::route('/{record}/edit'),
        ];
    }
}
