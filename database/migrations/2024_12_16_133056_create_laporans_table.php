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
        Schema::create('laporans', function (Blueprint $table) {
            $table->id();
            $table->string('judul', 255);
            $table->text('deskripsi');
            $table->dateTime('tanggal_laporan');
            $table->enum('status', ['diterima', 'dalam proses', 'selesai']);
            $table->string('nama_pelapor', 255)->nullable();
            $table->string('kontak_pelapor', 255)->nullable();
            $table->string('lokasi', 255);
            $table->string('gambar', 255)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laporans');
    }
};
