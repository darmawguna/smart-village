<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('artikels', function (Blueprint $table) {
            $table->id();
            $table->string('judul', 255);
            $table->text('konten');
            $table->dateTime('tanggal_publikasi')->nullable();
            $table->string('gambar', 255)->nullable();
            $table->foreignId('penulis_id')->constrained('users');
            $table->foreignId('kategori_id')->constrained('kategoris');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('artikels');
    }
};
