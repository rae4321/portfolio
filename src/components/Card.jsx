import React from 'react';

const Card = ({ 
  title = "Window", 
  children, 
  variant = "white", 
  className = "",
  ...props
}) => {
  const bgColors = {
    white: "bg-white dark:bg-zinc-900 text-black dark:text-white",
    pink: "bg-[#ff66a3] text-black",
    lime: "bg-[#a3e635] text-black",
    yellow: "bg-[#facc15] text-black",
  };

  return (
    <div 
      {...props}
      className={`font-['Montserrat',sans-serif] w-full border-[3px] border-black shadow-[8px_8px_0_#000] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#000] flex flex-col ${bgColors[variant] || bgColors.white} ${className}`}
    >
      {/* Header Window */}
      <div className="w-full min-h-8.5 bg-lime-400 px-3 py-1.5 text-xs sm:text-sm font-black text-black border-b-[3px] border-black flex items-center justify-between uppercase tracking-wider">
        <span className="truncate">{title}</span>
        <div className="flex items-center gap-1.5 ml-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff66a3] border border-black"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] border border-black"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] border border-black"></span>
        </div>
      </div>

      {/* Konten */}
      <div className="p-4 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Card;