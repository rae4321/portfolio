import { useState, useEffect } from "react";
import Toogle from "./Toogle.jsx";
import { Link } from 'react-router-dom';

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
  <div className="Navbar flex items-center justify-between relative z-50 px-4 md:px-10">
    <div className="logo flex items-center gap-2">
      <Link to="/">
    <img
        src="/logo_1.png"
        alt="Logo Portofolio" 
        className="h-30 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </Link>
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
      <li><a href="#tentang" className="text-base font-medium hover:text-lime-400">Tentang</a></li>
      <li><a href="#proyek" className="text-base font-medium hover:text-lime-400">Proyek</a></li>
      <li><a href="#sertifikat" className="text-base font-medium hover:text-lime-400">Sertifikat</a></li>
      <li><a href="#kontak" className="text-base font-medium hover:text-lime-400">Kontak</a></li>
    </ul>


    <Toogle />
  </div>
</div>
  );
};

export default Navbar;