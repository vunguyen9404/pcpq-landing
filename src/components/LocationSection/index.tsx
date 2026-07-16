"use client";

import LocationSectionDesktop from "./LocationSectionDesktop";
import LocationSectionMobile from "./LocationSectionMobile";

export default function LocationSection() {
  return (
    <>
      <div className="hidden lg:block">
        <LocationSectionDesktop />
      </div>
      <div className="block lg:hidden">
        <LocationSectionMobile />
      </div>
    </>
  );
}
