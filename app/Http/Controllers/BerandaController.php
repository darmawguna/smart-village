<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Inertia\Inertia;


class BerandaController extends Controller
{

public function index()
    {
        $produk = Produk::paginate(8);
        $storageBaseUrl = env('APP_URL') . '/storage';
        return Inertia::render('Beranda', [
            'produk' => $produk,
            'storageBaseUrl' => $storageBaseUrl
        ]);
    }

}