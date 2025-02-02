import React, { useState } from 'react';
import SearchBar from '@/Components/Elements/Search';
import CardArticle from '@/Components/Fragments/CardArticle';
import HomeLayout from '@/Layouts/HomeLayout';
import ButtonElements from '@/Components/Elements/Button';

const Article = (props) => {
  const { artikel, storageBaseUrl, kategori } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null); // State untuk kategori yang dipilih

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredArtikel = artikel.data.filter((item) => {
    const matchesSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.kategori_id === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <HomeLayout>
      <div className="flex flex-col min-h-screen mt-[80px] sm:mt-[80px] px-4 lg:mt-[130px]">
        <div className="flex justify-between ssm:flex-col">
          <h1 className="text-color5 font-bold text-2xl ssm:mb-3">Artikel Edukasi</h1>
          <SearchBar
            placeholder="Cari artikel di sini"
            variant="border-none bg-white shadow-xl w-[300px] ssm:w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex gap-10 py-4 ssm:py-2 ssm:justify-center">
          {kategori.map((item) => (
            <ButtonElements
              key={item.id}
              onClick={() => handleCategoryClick(item.id)}
              variant={`bg-white shadow-xl py-4 px-6 rounded-full ${
                selectedCategory === item.id ? 'bg-gray-200' : ''
              }`}
            >
              {item.name}
            </ButtonElements>
          ))}
        </div>
        <div className="flex py-10 flex-wrap justify-center gap-5 ssm:justify-around">
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
