import { useState, useEffect } from "react";
import Toogle from "./Toogle.jsx";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div className="Navbar py-7 flex items-center justify-between relative z-50 px-4 md:px-10">
    <div className="logo flex items-center gap-2">
    <img 
        src="/logo.png"
        alt="Logo Portofolio" 
        className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
      />
  </div>

  <div className="flex items-center gap-5">
    <ul
      className={`menu flex items-center gap-5
      md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0
      bg-white/30 backdrop-blur-md p-4 rounded-b-2xl md:bg-transparent
      transition-all duration-300
      z-50
      ${active 
        ? "top-0 opacity-100" 
        : "-top-32 opacity-0 md:opacity-100"
      } 
      md:top-0 md:pointer-events-auto`}>
      <li><a href="#tentang" className="text-base font-medium hover:text-blue-500">Tentang</a></li>
      <li><a href="#proyek" className="text-base font-medium hover:text-blue-500">Proyek</a></li>
      <li><a href="#sertifikat" className="text-base font-medium hover:text-blue-500">Sertifikat</a></li>
      <li><a href="#kontak" className="text-base font-medium hover:text-blue-500">Kontak</a></li>
    </ul>


    <Toogle />
  </div>
</div>
  );
};

export default Navbar;