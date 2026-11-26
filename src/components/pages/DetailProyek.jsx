import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { listProyek } from '../../data';
import NotFound from './NotFound';
import UiverseButton from '../UiverseButton';

const DetailProyek = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const proyek = listProyek.find((item) => item.id === parseInt(id));

  // Jika ID tidak ditemukan, tampilkan halaman NotFound
  if (!proyek) {
    return <NotFound />;
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
          <span className="py-1 px-4 border border-zinc-500 rounded-full">
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
            <span key={index} className="py-1 px-3 border border-zinc-500 rounded-md">
              {tool}
            </span>
          ))}
          {proyek.fitur && proyek.fitur.map((fitur, index) => (
            <span key={index} className="py-1 px-3 border border-zinc-500 rounded-md">
              {fitur}
            </span>
          ))}
        </div>
      </div>

      {/* Tombol Aksi: Demo & GitHub Repo */}
      <div className="flex flex-wrap gap-6 pt-2">
        {/* Tombol 1: Demo (Kuning) */}
        <UiverseButton
          href={proyek.link && proyek.link.trim() !== "" ? proyek.link : undefined}
          to={!proyek.link || proyek.link.trim() === "" ? "/404" : undefined}
        >
          <i className="ri-external-link-line text-lg"></i> Demo
        </UiverseButton>

        {/* Tombol 2: GitHub Repo (Biru) */}
        <UiverseButton
          variant="blue"
          href={proyek.github && proyek.github.trim() !== "" ? proyek.github : undefined}
          to={!proyek.github || proyek.github.trim() === "" ? "/404" : undefined}
        >
          <i className="ri-github-fill text-lg"></i> GitHub Repo
        </UiverseButton>
      </div>
    </div>
  );
};

export default DetailProyek;
