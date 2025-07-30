<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\KomentarController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use App\Models\Artikel;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;


Route::get('/', [BerandaController::class, 'index']);

Route::get('/about', function () {
    return Inertia::render('About');
});

// Route Pelaporan publik
Route::get('pelaporan', [LaporanController::class, 'index'])->name('laporan.index');
Route::get('pelaporan/{id}', [LaporanController::class, 'show']);
Route::get('pelaporan-publik', [LaporanController::class, 'create']);
Route::post('laporan', [LaporanController::class, 'store'])->name('laporan.store');
Route::get('histori-pelaporan', [LaporanController::class, 'showAllReport']);


// Route Produk
Route::get('product', [ProdukController::class, 'index']);
Route::get('product/{id}', [ProdukController::class, 'show']);


// Route Artikel
Route::get('artikel', [ArtikelController::class, 'index']);
Route::get('artikel/{id}', [ArtikelController::class, 'show']);

// Route Komentar
Route::post('komentar', [KomentarController::class, 'store'])->name('komentar.store');

// Route Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/upload-artikel-file', function (Request $request) {
    $request->validate([
        'file' => 'required|file|mimes:jpg,jpeg,png,gif|max:2048',
    ]);

    $file = $request->file('file');
    $fileName = time() . '_' . $file->getClientOriginalName(); // Tambahkan timestamp untuk menghindari nama duplikat
    $filePath = $file->storeAs('public/uploads/artikel', $fileName);

    return response()->json([
        'url' => asset('storage/uploads/artikel/' . $fileName), // URL untuk digunakan di RichEditor
    ]);
})->name('upload.artikel.file');

// require __DIR__.'/auth.php';
