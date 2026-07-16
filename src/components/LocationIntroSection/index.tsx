"use client";

import LocationIntroSectionDesktop from "./LocationIntroSectionDesktop";
import LocationIntroSectionMobile from "./LocationIntroSectionMobile";

export default function LocationIntroSection() {
  return (
    <>
      <div className="hidden lg:block">
        <LocationIntroSectionDesktop />
      </div>
      <div className="block lg:hidden">
        <LocationIntroSectionMobile />
      </div>
    </>
  );
}
