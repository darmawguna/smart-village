import React, { useState } from 'react';
import SearchBar from '@/Components/Elements/Search';
import CardArticle from '@/Components/Fragments/CardArticle';
import HomeLayout from '@/Layouts/HomeLayout';
import ButtonElements from '@/Components/Elements/Button';

const Article = (props) => {
  const { artikel, storageBaseUrl, kategori } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArtikel = artikel.data.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeLayout>
      <div className="flex flex-col min-h-screen mt-[80px] px-4">
        <div className="flex justify-between">
          <h1 className="text-color5 font-bold text-2xl">Artikel Edukasi</h1>
          {/* TODO: perbarui search ini untuk menyimpan data di state */}
          <SearchBar
            placeholder="Cari artikel di sini"
            variant="border-none bg-white shadow-xl w-[300px]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex gap-10 py-4 ssm:justify-center">
          {kategori.map((item) => (
            <ButtonElements
              key={item.id}
              variant="bg-white shadow-xl py-4 px-6 rounded-full"
            >
              {item.name}
            </ButtonElements>
          ))}
        </div>
        <div className="flex py-10 flex-wrap justify-center gap-5">
          {filteredArtikel.length > 0 ? (
            filteredArtikel.map((item) => (
              <CardArticle
                key={item.id}
                image={`${storageBaseUrl}/${item.gambar}`}
                title={item.judul}
                date={item.tanggal_publikasi}
                description={item.konten}
                id={item.id}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Tidak ada artikel yang ditemukan.</p>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Article;
