<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProdukResource\Pages;
use App\Filament\Resources\ProdukResource\RelationManagers;
use App\Models\Produk;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Filament\Notifications\Notification;




class ProdukResource extends Resource
{
    protected static ?string $model = Produk::class;
    protected static ?string $navigationLabel = 'Manajemen Produk';
    protected static ?string $pluralLabel = 'Produk';
    protected static ?string $modelLabel = 'Produk';

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nama')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Masukkan nama produk'),
                Forms\Components\TextInput::make('harga')
                    ->label('Harga Produk')
                    ->numeric()
                    ->required()
                    ->helperText('Masukkan angka tanpa titik atau koma, otomatis akan diformat.')
                    ->dehydrateStateUsing(fn($state) => str_replace('.', '', $state))
                    ->afterStateHydrated(function ($state, callable $set) {
                        if (!empty($state)) {
                            $set('harga', number_format($state, 0, ',', '.'));
                        }
                    }),
                FileUpload::make('gambar_produk')
                    ->image()
                    ->required()
                    ->directory('uploads/produk')
                    ->openable()
                    ->reorderable()
                    ->appendFiles()
                    ->visibility('public')
                    ->columnSpan(2),
                Forms\Components\TextArea::make('deskripsi')
                    ->required()
                    ->maxLength(65535)
                    ->columnSpan(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('nama')
                    ->label('Nama Produk')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('harga')
                    ->searchable()
                    ->label('Harga Produk')
                    ->money('IDR', locale: 'id')
                    ->sortable(),
                ImageColumn::make('gambar_produk')
                    ->label('Gambar Produk')
                    ->width(200),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->action(function (Produk $record) {
                        $record->delete();
                        Notification::make()
                            ->title('Produk berhasil dihapus')
                            ->success()
                            ->send();
                    })
                    ->requiresConfirmation()
                    ->modalHeading('Hapus Produk')
                    ->modalDescription('Apakah anda yakin akan menghapus produk? proses tidak bisa diulang.')
                    ->modalSubmitActionLabel('Ya, Hapus itu')
                    ->successNotificationTitle('Produk  berhasil dihapus')
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
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
            'index' => Pages\ListProduks::route('/'),
            'create' => Pages\CreateProduk::route('/create'),
            'edit' => Pages\EditProduk::route('/{record}/edit'),
        ];
    }
}
