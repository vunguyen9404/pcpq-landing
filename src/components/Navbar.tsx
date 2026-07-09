"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavbarProps {
  onOpenSidebar: () => void;
  sectionLabel?: string;
}

export default function Navbar({ onOpenSidebar, sectionLabel }: NavbarProps) {
  const [displayedLabel, setDisplayedLabel] = useState(sectionLabel || "");
  const [opacity, setOpacity] = useState(sectionLabel ? 1 : 0);

  useEffect(() => {
    if (sectionLabel !== displayedLabel) {
      setOpacity(0);
      const timer = setTimeout(() => {
        setDisplayedLabel(sectionLabel || "");
        if (sectionLabel) {
          setOpacity(1);
        }
      }, 300); // Đợi text cũ fade out hoàn toàn (300ms)
      return () => clearTimeout(timer);
    } else if (sectionLabel && opacity === 0) {
      setOpacity(1);
    }
  }, [sectionLabel, displayedLabel, opacity]);


  return (
    <nav className="fixed left-[3.75%] right-[3.75%] top-[3%] md:top-[4.63%] z-40 pointer-events-none
                    flex justify-between items-center lg:items-start select-none">
      {/* Logo */}
      <a
        href="#"
        onClick={e => e.preventDefault()}
        className="pointer-events-auto relative w-[100px] md:w-[160px] h-[55px] md:h-[100px] hover:opacity-90 transition-opacity"
      >
        <Image 
          src="/images/logo.png" 
          alt="PHÚ CƯỜNG PHÚ QUÝ" 
          fill 
          className="object-contain" 
          priority 
        />
      </a>

      {/* Menu & Label Container */}
      <div className="pointer-events-auto flex items-center gap-[36px]">
        {/* Section label — changes per section, hidden on hero (empty string) */}
        {displayedLabel && (
          <span
            className="hidden lg:block
                        font-be-vietnam text-[16px] leading-normal text-white
                        uppercase tracking-widest whitespace-nowrap select-none
                        transition-all duration-300"
            style={{
              opacity,
            }}
          >
            {displayedLabel}
          </span>
        )}

        {/* Menu Icon */}
        <button
          onClick={onOpenSidebar}
          className="relative w-8 md:w-[46px] h-8 md:h-[46px] hover:scale-105 transition-transform cursor-pointer"
          aria-label="Open menu"
        >
          <Image 
            src="/icons/menu.svg" 
            alt="Menu" 
            fill 
            className="object-contain transition-all duration-300"
          />
        </button>
      </div>
    </nav>
  );
}
