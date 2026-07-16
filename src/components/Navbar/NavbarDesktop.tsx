"use client";

import { useState, useEffect } from "react";

interface NavbarDesktopProps {
  onOpenSidebar: () => void;
  sectionLabel?: string;
}

export default function NavbarDesktop({ onOpenSidebar, sectionLabel }: NavbarDesktopProps) {
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
        onClick={(e) => e.preventDefault()}
        className="pointer-events-auto relative w-[100px] md:w-[160px] h-[55px] md:h-[100px] hover:opacity-90 transition-opacity"
      >
        <img
          src="/images/logo.png"
          alt="PHÚ CƯỜNG PHÚ QUÝ"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </a>

      {/* Menu & Label Container */}
      <div className="pointer-events-auto flex items-center gap-[36px]">
        {/* Section label — changes per section, hidden on hero (empty string) */}
        {displayedLabel && (
          <span
            className="hidden lg:block
                        tracking-widest whitespace-nowrap select-none
                        transition-all duration-300"
            style={{
              opacity,
              color: "#FFF",
              textAlign: "right",
              textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
              fontFamily: '"Be Vietnam Pro", var(--font-be-vietnam-pro), sans-serif',
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              textTransform: "uppercase",
            }}
          >
            {displayedLabel}
          </span>
        )}

        {/* Menu Icon */}
        <button
          onClick={onOpenSidebar}
          className="hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center"
          style={{
            width: "46px",
            height: "46px",
            aspectRatio: "1/1",
            background: "rgba(120, 187, 214, 0.25)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "8px",
            padding: 0,
          }}
          aria-label="Open menu"
        >
          <img
            src="/icons/menu_br.svg"
            alt="Menu"
            className="w-full h-full object-contain"
          />
        </button>
      </div>
    </nav>
  );
}
