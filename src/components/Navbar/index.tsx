"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

interface NavbarProps {
  onOpenSidebar: () => void;
  sectionLabel?: string;
}

export default function Navbar({ onOpenSidebar, sectionLabel }: NavbarProps) {
  return (
    <>
      <div className="hidden lg:block">
        <NavbarDesktop onOpenSidebar={onOpenSidebar} sectionLabel={sectionLabel} />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile onOpenSidebar={onOpenSidebar} />
      </div>
    </>
  );
}
