import { useState, useEffect } from "react";

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
    <div className="navbar py-7 flex items-center justify-between relative z-50">
      
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white rounded-lg">
          Portfolio
        </h1>
      </div>

      <ul
        className={`menu flex items-center gap-10 
        md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100
        bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent
        transition-all-none
        z-50
        ${active 
          ? "top-0 opacity-100" 
          : "-top-32 opacity-0 pointer-events-none"
        } 
        
        md:top-0 md:opacity-100 md:pointer-events-auto`}
      >
        <li><a href="#" className="text-base font-medium hover:text-blue-500">Beranda</a></li>
        <li><a href="#" className="text-base font-medium hover:text-blue-500">Tentang</a></li>
        <li><a href="#" className="text-base font-medium hover:text-blue-500">Proyek</a></li>
        <li><a href="#" className="text-base font-medium hover:text-blue-500">Kontak</a></li>
      </ul>
    </div>
  );
};

export default Navbar;