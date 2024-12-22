<?php

use App\Http\Controllers\ProfileController;
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
