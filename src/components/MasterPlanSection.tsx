"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch4 = "/assets/0aaa1e6e5fe25e77a8640d92e7f3b17766201a15.jpg";

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-[#004e68]";
const INNER = "relative w-full h-auto lg:h-full max-w-[1920px] mx-auto";

export default function MasterPlanSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const buttonContainers = el.querySelectorAll(".animate-buttons");
    const mapCard = el.querySelector(".animate-map");
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    const ctx = gsap.context(() => {

      if (isMobile && mapCard) {
        gsap.fromTo(
          mapCard,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapCard,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      buttonContainers.forEach((container) => {
        const items = container.querySelectorAll("a");
        gsap.fromTo(
          items,
          { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: isMobile ? container : el,
              start: isMobile ? "top 90%" : "top 10%",
              once: isMobile,
              toggleActions: isMobile ? "play none none none" : "play none none reverse",
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
        className="hidden lg:block absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imgMapTienIch4})` }}
      />

      <div className={`${INNER} flex flex-col lg:block p-6 md:p-12 lg:p-0 z-10`}>


        {/* Mobile-Only Map Image (No cropping, boxed) */}
        <div className="lg:hidden w-full my-4 pointer-events-auto">
          <div className="relative w-full aspect-[400/250] rounded-[10px] overflow-hidden border border-white/10 shadow-2xl animate-map opacity-0 lg:opacity-100">
            <img src={imgMapTienIch4} alt="Master Plan Map" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Mobile/Tablet Fallback Buttons (Positioned below the map image on solid background) */}
        <div className="lg:hidden animate-buttons flex flex-col gap-4 items-center w-full mt-6 pb-12 pointer-events-auto">
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
      </div>

      {/* Desktop Only Buttons (Absolute to viewport-width section to align with Navbar logo) */}
      <div className="hidden lg:flex animate-buttons flex-col gap-8 items-start
                      absolute left-[3.75%] top-[26.5%]">
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
