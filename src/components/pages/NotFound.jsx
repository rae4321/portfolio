import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
      {/* Animasi DotLottie 404 */}
      <div className="w-72 h-72 sm:w-96 sm:h-80 mx-auto mb-4">
        <DotLottieReact
          src="/error-404.json"
          loop
          autoplay
        />
      </div>

      {/* Judul & Keterangan */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">
        Oops! Halaman Tidak Ditemukan
      </h1>
      <p className="text-base opacity-60 max-w-md mb-8 leading-relaxed">
        Maaf, tautan demo, atau halaman yang Anda tuju belum tersedia saat ini.
      </p>

      {/* Tombol Kembali */}
      <Link
        to="/#proyek"
        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-amber-500/20"
      >
        <i className="ri-arrow-left-line text-lg"></i> Kembali
      </Link>
    </div>
  );
};

export default NotFound;