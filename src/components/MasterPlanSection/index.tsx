"use client";

import MasterPlanSectionDesktop from "./MasterPlanSectionDesktop";
import MasterPlanSectionMobile from "./MasterPlanSectionMobile";

export default function MasterPlanSection() {
  return (
    <>
      <div className="hidden lg:block">
        <MasterPlanSectionDesktop />
      </div>
      <div className="block lg:hidden">
        <MasterPlanSectionMobile />
      </div>
    </>
  );
}
