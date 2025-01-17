import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function CreateForm() {
    const { data, setData, post, processing, errors } = useForm({
        judul: '',
        deskripsi: '',
        tanggal_laporan: '',
        status: 'dalam proses',
        nama_pelapor: '',
        kontak_pelapor: '',
        lokasi: '',
        gambar: null,
    });

    const [previewImage, setPreviewImage] = useState(null); // State untuk menyimpan URL preview gambar

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('gambar', file); // Mengupdate data form dengan gambar
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result); // Set preview URL dari gambar
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null); // Reset preview jika tidak ada file yang dipilih
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judul', data.judul);
        formData.append('deskripsi', data.deskripsi);
        formData.append('tanggal_laporan', data.tanggal_laporan);
        formData.append('status', data.status);
        formData.append('nama_pelapor', data.nama_pelapor);
        formData.append('kontak_pelapor', data.kontak_pelapor);
        formData.append('lokasi', data.lokasi);

        if (data.gambar) {
            formData.append('gambar', data.gambar);
        }

        // Kirimkan data ke server
        post(route('laporan.store'), { data: formData });
    };


    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto mb-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Buat Laporan</h1>
            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                <div className="grid sm:grid-cols-1 gap-6">
                    {/* Kolom 1 */}
                    <div className='flex flex-row sm:flex-col sm:gap-4 gap-10 items-center justify-center'>
                        <div className="space-y-4 w-full">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Judul</label>
                                <input
                                    type="text"
                                    value={data.judul}
                                    onChange={(e) => setData('judul', e.target.value)}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.judul && <div className="text-red-500 text-sm">{errors.judul}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tanggal Laporan</label>
                                <input
                                    type="datetime-local"
                                    value={data.tanggal_laporan}
                                    onChange={(e) => setData('tanggal_laporan', e.target.value)}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.tanggal_laporan && <div className="text-red-500 text-sm">{errors.tanggal_laporan}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    value={data.status}
                                    // onChange={(e) => setData('status', e.target.value)}
                                    disabled
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="diterima">Diterima</option>
                                    <option value="dalam proses">Dalam Proses</option>
                                    <option value="selesai">Selesai</option>
                                </select>
                                <p className='text-xs text-slate-400'>status laporan cukup dibiarkan</p>
                                {errors.status && <div className="text-red-500 text-sm">{errors.status}</div>}
                            </div>
                        </div>
                        <div className="space-y-4 w-full">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nama Pelapor</label>
                                <input
                                    type="text"
                                    value={data.nama_pelapor}
                                    onChange={(e) => setData('nama_pelapor', e.target.value)}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.nama_pelapor && <div className="text-red-500 text-sm">{errors.nama_pelapor}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Kontak Pelapor</label>
                                <input
                                    type="text"
                                    value={data.kontak_pelapor}
                                    onChange={(e) => setData('kontak_pelapor', e.target.value)}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <p className='text-xs text-slate-400'>masukan nomor telepon jika setuju</p>
                                {errors.kontak_pelapor && <div className="text-red-500 text-sm">{errors.kontak_pelapor}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Lokasi</label>
                                <input
                                    type="text"
                                    value={data.lokasi}
                                    onChange={(e) => setData('lokasi', e.target.value)}
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.lokasi && <div className="text-red-500 text-sm">{errors.lokasi}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                            <textarea
                                value={data.deskripsi}
                                onChange={(e) => setData('deskripsi', e.target.value)}
                                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.deskripsi && <div className="text-red-500 text-sm">{errors.deskripsi}</div>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gambar</label>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.gambar && <div className="text-red-500 text-sm">{errors.gambar}</div>}
                        </div>
                        {previewImage && (
                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-700">Preview Gambar:</h3>
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="max-w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        {processing ? 'Menyimpan...' : 'Buat Laporan'}
                    </button>
                </div>
            </form>
        </div>
    );
}
