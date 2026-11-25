import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { listProyek } from '../../data'; //
import { useEffect } from 'react';

const DetailProyek = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman dimuat
  }, [id]);
  
  // Mencari data proyek yang ID-nya cocok dengan URL
  const proyek = listProyek.find((item) => item.id === parseInt(id));

  // Jika ID tidak ditemukan di data
  if (!proyek) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Proyek tidak ditemukan</h2>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">

<Link 
  to="/#proyek" 
  aria-label="Kembali ke Daftar Proyek"
  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-500 adaptive-card hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all mb-6"
>
  <i className="ri-arrow-left-line text-xl"></i>
</Link>

      {/* Gambar Proyek */}
      <img 
        src={proyek.gambar} 
        alt={proyek.nama} 
        className="w-full h-auto max-w-full object-cover rounded-xl border border-zinc-500 mb-8" 
      />

      {/* Judul & Role */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">{proyek.nama}</h1>
        {proyek.role && (
          <span className="py-1 px-4 border border-zinc-500 rounded-full ">
            {proyek.role}
          </span>
        )}
      </div>

      {/* Deskripsi Lengkap */}
      <p className="text-base/loose opacity-80 mb-8">
        {proyek.deskLengkap || proyek.desk}
      </p>

      {/* Teknologi & Fitur */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Teknologi & Fitur</h3>
        <div className="flex flex-wrap gap-2">
          {proyek.tools.map((tool, index) => (
            <span key={index} className="py-1 px-3 border border-zinc-500 rounded-md ">
              {tool}
            </span>
          ))}
          {proyek.fitur && proyek.fitur.map((fitur, index) => (
            <span key={index} className="py-1 px-3 border border-zinc-500 rounded-md ">
              {fitur}
            </span>
          ))}
        </div>
      </div>

{/* Tombol Aksi (Demo & GitHub Repo) */}
      <div className="flex flex-wrap gap-4">
        {/* Tombol 1: Demo */}
        {proyek.link && proyek.link.trim() !== "" ? (
          <a 
            href={proyek.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all"
          >
            <i className="ri-external-link-line text-lg"></i> Demo
          </a>
        ) : (
          <Link 
            to="/404" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all"
          >
            <i className="ri-external-link-line text-lg"></i> Demo
          </Link>
        )}

        {/* Tombol 2: GitHub Repo */}
        {proyek.github && proyek.github.trim() !== "" ? (
          <a 
            href={proyek.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 border border-zinc-500 adaptive-card hover:bg-zinc-800 hover:text-white px-6 py-3 rounded-lg transition-all"
          >
            <i className="ri-github-fill text-lg"></i> GitHub Repo
          </a>
        ) : (
          <Link 
            to="/404" 
            className="inline-flex items-center gap-2 border border-zinc-500 adaptive-card hover:bg-zinc-800 hover:text-white px-6 py-3 rounded-lg transition-all"
          >
            <i className="ri-github-fill text-lg"></i> GitHub Repo
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailProyek;