"use client";

import DetailedPhasesSectionDesktop from "./DetailedPhasesSectionDesktop";
import DetailedPhasesSectionMobile from "./DetailedPhasesSectionMobile";

export default function DetailedPhasesSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DetailedPhasesSectionDesktop />
      </div>
      <div className="block lg:hidden">
        <DetailedPhasesSectionMobile />
      </div>
    </>
  );
}
