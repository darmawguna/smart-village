<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLaporanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'tanggal_laporan' => 'required|date',
            'status' => 'required|in:diterima,dalam proses,selesai',
            'nama_pelapor' => 'nullable|string|max:255',
            'kontak_pelapor' => 'nullable|string|max:255',
            'lokasi' => 'required|string|max:255',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validasi file gambar
        ];
    }

    public function messages()
    {
        return [
            'judul.required' => 'Judul laporan wajib diisi.',
            'judul.max' => 'Judul tidak boleh lebih dari 255 karakter.',
            'deskripsi.required' => 'Deskripsi laporan wajib diisi.',
            'tanggal_laporan.required' => 'Tanggal laporan wajib diisi.',
            'tanggal_laporan.date' => 'Tanggal laporan harus berupa tanggal yang valid.',
            'status.required' => 'Status laporan wajib diisi.',
            'status.in' => 'Status laporan harus salah satu dari: diterima, dalam proses, selesai.',
            'lokasi.required' => 'Lokasi laporan wajib diisi.',
            'lokasi.max' => 'Lokasi tidak boleh lebih dari 255 karakter.',
            'gambar.image' => 'File gambar harus berupa gambar.',
            'gambar.mimes' => 'File gambar harus berupa format jpeg, png, jpg, atau gif.',
            'gambar.max' => 'Ukuran file gambar tidak boleh lebih dari 2MB.',
        ];
    }
}
