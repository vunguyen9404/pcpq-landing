"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch4 = "/assets/0aaa1e6e5fe25e77a8640d92e7f3b17766201a15.jpg";

const OUTER = "relative w-full h-screen overflow-hidden bg-[#004e68]";

export default function MasterPlanSectionDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const buttonContainers = el.querySelectorAll(".animate-buttons");

    const ctx = gsap.context(() => {
      buttonContainers.forEach((container) => {
        const items = container.querySelectorAll("a");
        gsap.fromTo(
          items,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="masterplan"
      ref={containerRef}
      className={OUTER}
    >
      {/* Desktop Background Map */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imgMapTienIch4})` }}
      />

      {/* Desktop Only Buttons (Absolute to viewport-width section to align with Navbar logo) */}
      <div className="animate-buttons flex flex-col gap-8 items-start absolute left-[3.75%] top-[26.5%] z-10 pointer-events-auto">
        <a href="#contact"
          className="opacity-0 w-[300px] h-[59px] flex items-center justify-center rounded-[32px] font-be-vietnam font-normal text-[16px] leading-[16px] uppercase
                     text-[#f5f5f5] bg-gradient-to-r from-[#009ace] to-[#004e68] border border-[#fffcd8]
                     hover:brightness-110 hover:scale-105 shadow-lg transition-all duration-200 text-center gap-2 p-3">
          Brochure dự án
        </a>
        <a href="https://duan.vrtour360.vn/PhuCuongPhuQuy" target="_blank" rel="noopener noreferrer"
          className="opacity-0 w-[300px] h-[59px] flex items-center justify-center rounded-[32px] font-be-vietnam font-normal text-[16px] leading-[16px] uppercase
                     text-[#0065ad] bg-gradient-to-r from-[#95e8ff] to-[#fdffd9] border border-[#fffcd8]
                     hover:brightness-110 hover:scale-105 shadow-lg transition-all duration-200 text-center gap-2 p-3">
          Tham quan VR360
        </a>
      </div>
    </section>
  );
}
