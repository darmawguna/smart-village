<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use App\Models\Artikel;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Beranda');
});
Route::get('/about', function () {
    return Inertia::render('About');
});
// Route::get('/report', function () {
//     return Inertia::render('ReportPage');
// });
Route::get('/reportForm', function () {
    return Inertia::render('ReportForm');
});
// Route::get('/allReportHistory', function () {
//     return Inertia::render('AllReport');
// });
// Route::get('/reportDetail', function () {
//     return Inertia::render('DetailReport');
// });
// Route::get('/article', function () {
//     return Inertia::render('Article');
// });
// Route::get('/articleDetail', function () {
//     return Inertia::render('DetailArticle');
// });
// Route::get('/product', function () {
//     return Inertia::render('Product');
// });
// Route::get('/productDetail', function () {
//     return Inertia::render('DetailProduct');
// });

// Route Pelaporan publik
Route::get('pelaporan', [LaporanController::class, 'index']);
Route::get('pelaporan/{id}', [LaporanController::class, 'show']);
Route::get('pelaporan/pelaporan-publik', [LaporanController::class, 'create']);


// Route Produk
Route::get('product', [ProdukController::class, 'index']);
Route::get('product/{id}', [ProdukController::class, 'show']);


// Route Artikel
Route::get('artikel', [ArtikelController::class, 'index']);
Route::get('artikel/{id}', [ArtikelController::class, 'show']);


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

require __DIR__.'/auth.php';
