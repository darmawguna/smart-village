<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Artikel;
use App\Models\Kategori;
use App\Http\Requests\StoreArtikelRequest;
use App\Http\Requests\UpdateArtikelRequest;


class ArtikelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artikel = Artikel::paginate(15);
        $kategori = Kategori::all();
        $storageBaseUrl = env('APP_URL') . '/storage';
        return Inertia::render('Article', [
            'artikel' => $artikel,
            'kategori' => $kategori,
            'storageBaseUrl' => $storageBaseUrl
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArtikelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $storageBaseUrl = env('APP_URL') . '/storage';
        $artikel = Artikel::findOrFail($id);
        return Inertia::render('DetailArticle', [
            'artikel' => $artikel,
            'storageBaseUrl' => $storageBaseUrl
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artikel $artikel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArtikelRequest $request, Artikel $artikel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artikel $artikel)
    {
        //
    }
}
