"use client";

interface NavbarMobileProps {
  onOpenSidebar: () => void;
}

export default function NavbarMobile({ onOpenSidebar }: NavbarMobileProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 w-full h-[71px] select-none pointer-events-none backdrop-blur-md"
      style={{
        background: "linear-gradient(180deg, rgba(0, 78, 104, 0.8) 36.06%, rgba(0, 154, 206, 0.8) 100%)",
      }}
    >
      <div className="relative w-full h-full">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="absolute left-[22px] top-[6px] w-[92.8px] h-[57.4px] pointer-events-auto hover:opacity-90 transition-opacity"
        >
          <img
            src="/images/logo.png"
            alt="PHÚ CƯỜNG PHÚ QUÝ"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.3))",
            }}
          />
        </a>

        {/* Menu Icon */}
        <button
          onClick={onOpenSidebar}
          className="absolute right-[22px] top-[22px] w-[26.5px] h-[26.5px] pointer-events-auto cursor-pointer hover:scale-105 transition-transform flex items-center justify-center"
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
