const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 pb-10 w-full">
      {/* Container Konten Atas */}
      <div className="py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-600">
          Portofolio
        </h1>
        
        <div className="flex gap-7 ">
          <a href="#beranda" className="hover:text-amber-600 transition-colors">Beranda</a>
          <a href="#tentang" className="hover:text-amber-600 transition-colors">Tentang</a>
          <a href="#proyek" className="hover:text-amber-600 transition-colors">Proyek</a>
          <a href="#sertifikat" className="hover:text-amber-600 transition-colors">Sertifikat</a>
        </div>

        <div className="flex items-center gap-3 ">
          <a href="https://www.instagram.com/kepalaadua/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/rae-triadi-990513215/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a href="https://wa.me/6285887920128?text=Halo%20Rae%2C%20saya%20melihat%20portfolio%20kamu%20dan%20tertarik%20untuk%20diskusi." target="_blank" rel="noopener noreferrer">
            <i className="ri-whatsapp-fill ri-2x"></i>
          </a>
        </div>
      </div>

      {/* Bagian Copyright Paling Bawah & Tengah */}
      <div className="mt-5 text-center border-white/10 pt-5">
        <p className="text-sm opacity-50">
          &copy; {currentYear} <span className="font-medium">Rae Triadi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;