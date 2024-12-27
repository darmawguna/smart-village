<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArtikelResource\Pages;
use App\Filament\Resources\ArtikelResource\RelationManagers;
use App\Models\Artikel;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

use PhpParser\Node\Stmt\Label;
use Filament\Notifications\Notification;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Facades\Storage;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use PHPUnit\Framework\Reorderable;



class ArtikelResource extends Resource
{
    protected static ?string $model = Artikel::class;
    protected static ?string $navigationLabel = 'Manajemen Artikel';
    protected static ?string $pluralLabel = 'Artikel';
    protected static ?string $modelLabel = 'Artikel';

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('judul')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Masukkan judul artikel'),

                Forms\Components\DateTimePicker::make('tanggal_publikasi'),

                Forms\Components\Select::make('penulis_id')
                    ->relationship('penulis', 'name') // Asumsi kolom "name" ada di tabel "users"
                    ->required(),

                Forms\Components\Select::make('kategori_id')
                    ->relationship('kategori', 'name') // Asumsi kolom "name" ada di tabel "kategoris"
                    ->required(),
                FileUpload::make('gambar')
                    ->image()
                    ->required()
                    ->directory('uploads/thumbnails')
                    ->openable()
                    ->reorderable()
                    ->appendFiles()
                    ->visibility('public')
                    ->columnSpan(2),


                Forms\Components\RichEditor::make('konten')
                    ->required()
                    ->maxLength(65535)
                    ->fileAttachmentsDisk('public') // Gunakan disk public
                    ->fileAttachmentsDirectory('uploads/artikel') // Direktori tujuan
                    ->fileAttachmentsVisibility('public') // Pastikan file dapat diakses publik
                    ->columnSpan(2),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('judul')
                    ->label('Judul Artikel')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('penulis.name')
                    ->searchable()
                    ->label('Penulis')
                    ->sortable(),
                ImageColumn::make('gambar')
                    ->width(200),
                TextColumn::make('kategori.name')
                    ->searchable()
                    ->label('Kategori')
                    ->sortable(),
                TextColumn::make("tanggal_publikasi")
                    ->searchable()
                    ->label("tanggal publikasi")
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->action(function (Artikel $record) {
                        $record->delete();

                        Notification::make()
                            ->title('Kategori berhasil dihapus')
                            ->success()
                            ->send();
                    })
                    ->requiresConfirmation()
                    ->modalHeading('Hapus Artikel')
                    ->modalDescription('Apakah anda yakin akan menghapus artikel? proses tidak bisa diulang.')
                    ->modalSubmitActionLabel('Ya, Hapus itu')
                    ->successNotificationTitle('Kategori berhasil dihapus')

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
            'index' => Pages\ListArtikels::route('/'),
            'create' => Pages\CreateArtikel::route('/create'),
            'edit' => Pages\EditArtikel::route('/{record}/edit'),
        ];
    }
}
