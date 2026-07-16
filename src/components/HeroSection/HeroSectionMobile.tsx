"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const imgMapTienIch2 = "/assets/f20c3cec8cfad7dad8dc6c8d3a9e6b8e34c2c0df.jpg";

export default function HeroSectionMobile() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gentle entrance scale down + fade in
    gsap.fromTo(
      bgRef.current,
      { scale: 1.06, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="relative w-full h-[278px] mt-[71px] bg-[#004e68] overflow-hidden select-none">
      <div className="relative w-full h-full">
        {/* Background Image Container */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${imgMapTienIch2})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,78,104,0.4)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
