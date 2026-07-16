"use client";

import OverviewSectionDesktop from "./OverviewSectionDesktop";
import OverviewSectionMobile from "./OverviewSectionMobile";

export default function OverviewSection() {
  return (
    <>
      <div className="hidden lg:block">
        <OverviewSectionDesktop />
      </div>
      <div className="block lg:hidden">
        <OverviewSectionMobile />
      </div>
    </>
  );
}
