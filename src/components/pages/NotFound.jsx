import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import UiverseBitron from './CSS/UiverseButton.css';


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

      {/* Judul */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">
        Oops! Halaman Tidak Ditemukan
      </h1>
      <p className="text-base opacity-60 max-w-md mb-8 leading-relaxed">
        Maaf, tautan demo, atau halaman yang Anda tuju belum tersedia saat ini.
      </p>

      {/* Button Kembali */}
      <UiverseButton to="/">
  <i className="ri-arrow-left-line"></i> Kembali ke Beranda
</UiverseButton>
    </div>
  );
};

export default NotFound;