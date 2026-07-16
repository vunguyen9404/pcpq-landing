"use client";

import DeveloperSectionDesktop from "./DeveloperSectionDesktop";
import DeveloperSectionMobile from "./DeveloperSectionMobile";

export default function DeveloperSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DeveloperSectionDesktop />
      </div>
      <div className="block lg:hidden">
        <DeveloperSectionMobile />
      </div>
    </>
  );
}
