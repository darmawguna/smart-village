<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KategoriResource\Pages;
use App\Filament\Resources\KategoriResource\RelationManagers;
use App\Models\Kategori;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Actions\DeleteAction;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Collection;

class KategoriResource extends Resource
{
    protected static ?string $model = Kategori::class;
    protected static ?string $navigationLabel = 'Manajemen Kategori';
    protected static ?string $pluralLabel = 'Kategori';
    protected static ?string $modelLabel = 'Kategori';

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label(__('Nama Kategori'))
                    ->helperText('Masukan nama kategori yang akan dibuat')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Category Name')
                    ->sortable(),
                TextColumn::make('artikels_count')->counts('artikels')
                    ->label("Jumlah Artikel terkait")

            ])
            ->filters([
                //
            ])
            ->actions([

                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->action(function (Kategori $record) {
                        if ($record->artikels()->exists()) {
                            // Tampilkan notifikasi jika ada artikel terkait
                            return Notification::make()
                                ->title('Data tidak dapat dihapus karena sedang digunakan')
                                ->danger()
                                ->send();
                        }
                        $record->delete();
                    })
                    ->requiresConfirmation()
                    ->modalHeading('Hapus Kategori')
                    ->modalDescription('Apakah anda yakin akan menghapus kategori? proses tidak bisa diulang.')
                    ->modalSubmitActionLabel('Ya, Hapus itu')
                    ->successNotification(
                        Notification::make()
                            ->success()
                            ->title('Kategori Berhasil dihapus')
                            ->body(`Berhasil menghapus kategori`),
                    )

            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->action(action: function (Collection $records) {
                            foreach ($records as $record) {
                                if ($record->artikels()->exists()) {
                                    // Tampilkan notifikasi jika ada artikel terkait
                                    return Notification::make()
                                        ->title('Data tidak dapat dihapus karena sedang digunakan')
                                        ->danger()
                                        ->send();
                                }
                            }
                            $records->each->delete();
                        })
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
            'index' => Pages\ListKategoris::route('/'),
            'create' => Pages\CreateKategori::route('/create'),
            'edit' => Pages\EditKategori::route('/{record}/edit'),
        ];
    }
}
