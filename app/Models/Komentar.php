<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komentar extends Model
{
    /** @use HasFactory<\Database\Factories\KomentarFactory> */
    use HasFactory;

    protected $fillable = [
        'nama',
        'content',
        'artikel_id',
    ];

    public function artikel()
    {
        return $this->belongsTo(Artikel::class);
    }


}
