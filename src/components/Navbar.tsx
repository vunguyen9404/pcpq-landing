"use client";

import Image from "next/image";

interface NavbarProps {
  onOpenSidebar: () => void;
}

export default function Navbar({ onOpenSidebar }: NavbarProps) {
  return (
    <nav className="fixed left-[3.75%] right-[3.75%] top-[4.63%] z-40 pointer-events-none
                    flex justify-between items-start">
      {/* Logo */}
      <a
        href="#"
        onClick={e => e.preventDefault()}
        className="pointer-events-auto relative w-[120px] md:w-[160px] h-[75px] md:h-[100px] hover:opacity-90 transition-opacity"
      >
        <Image 
          src="/images/logo.png" 
          alt="PHÚ CƯỜNG PHÚ QUÝ" 
          fill 
          className="object-contain" 
          priority 
        />
      </a>

      {/* Menu Icon */}
      <button
        onClick={onOpenSidebar}
        className="pointer-events-auto relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-105 transition-transform cursor-pointer"
        aria-label="Open menu"
      >
        <Image 
          src="/icons/menu.svg" 
          alt="Menu" 
          fill 
          className="object-contain" 
        />
      </button>
    </nav>
  );
}
