<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use App\Http\Requests\StoreLaporanRequest;
use App\Http\Requests\UpdateLaporanRequest;
use Inertia\Inertia;

class LaporanController extends Controller
{
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $laporan = Laporan::paginate(15);
        $storageBaseUrl = env('APP_URL') . '/storage';
        return Inertia::render('ReportPage', [
            'laporan' => $laporan,
            'storageBaseUrl' => $storageBaseUrl,
            'flash' => session('success') ? ['success' => session('success')] : [],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ReportForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLaporanRequest $request)
    {
        // dd($request->all());
        $data = $request->validated();

        if ($request->hasFile('gambar')) {
            $data['gambar'] = $request->file('gambar')->store('pelaporan', 'public');
        }

        Laporan::create($data);

        // Kembalikan respon atau redirect
        return redirect()->route('laporan.index')->with('success', 'Laporan berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $laporan = Laporan::findOrFail($id);
        $storageBaseUrl = env('APP_URL') . '/storage';
        return Inertia::render('DetailReport', [
            'laporan' => $laporan,
            'storageBaseUrl' => $storageBaseUrl
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Laporan $laporan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLaporanRequest $request, Laporan $laporan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Laporan $laporan)
    {
        //
    }

    public function showAllReport()
    {
        $laporan = Laporan::paginate(15);
        $storageBaseUrl = env('APP_URL') . '/storage';
        return Inertia::render('AllReport', [
            'laporan' => $laporan,
            'storageBaseUrl' => $storageBaseUrl
        ]);
    }
}
