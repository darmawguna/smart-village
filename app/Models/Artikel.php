<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    /** @use HasFactory<\Database\Factories\ArtikelFactory> */
    use HasFactory;

    protected $fillable = [
        'judul',
        'konten',
        'tanggal_publikasi',
        'gambar',
        'penulis_id',
        'kategori_id'
    ];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class);
    }



    public function penulis()
    {
        return $this->belongsTo(User::class);
    }

    public function komentar()
    {
        return $this->hasMany(Komentar::class);
    }
}
