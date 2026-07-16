"use client";

import InternalUtilitiesSectionDesktop from "./InternalUtilitiesSectionDesktop";
import InternalUtilitiesSectionMobile from "./InternalUtilitiesSectionMobile";

export default function InternalUtilitiesSection() {
  return (
    <section
      id="internal-utilities"
      className="relative w-full h-auto lg:h-screen lg:overflow-hidden bg-[#004e68]"
    >
      <div className="hidden lg:block w-full h-full">
        <InternalUtilitiesSectionDesktop />
      </div>
      <div className="block lg:hidden w-full h-full">
        <InternalUtilitiesSectionMobile />
      </div>
    </section>
  );
}
