"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch4 = "/assets/0aaa1e6e5fe25e77a8640d92e7f3b17766201a15.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

export default function MasterPlanSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const titleLeft = el.querySelector(".animate-title-left");
    const buttonContainers = el.querySelectorAll(".animate-buttons");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleLeft,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 10%",
            toggleActions: "play none none reverse",
          },
        }
      );

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
      style={{ backgroundImage: `url(${imgMapTienIch4})` }}
    >
      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0`}>

        <div className="animate-title-left lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[11.1%] mt-20 lg:mt-0 w-full text-center opacity-0 px-6">
          <h2 className="font-be-vietnam font-bold uppercase text-2xl md:text-4xl lg:text-[2.135vw] lg:leading-[3.2vw] leading-[1.5] text-center py-2
                          tracking-wide bg-clip-text text-transparent
                          bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                          drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            QUY HOẠCH TỔNG THỂ VÀ CÁC PHÂN KHU
          </h2>
        </div>

        {/* Mobile/Tablet Fallback (Flows naturally within INNER) */}
        <div className="lg:hidden animate-buttons flex flex-col gap-6 items-start mt-8">
          <a href="#contact"
            className="opacity-0 w-[240px] h-[40px] flex items-center justify-center rounded-full font-bold uppercase tracking-wider text-xs
                       text-[#fffcd8] border border-[#95e8ff]
                       hover:bg-[#95e8ff]/10 hover:scale-105 transition-all duration-200 text-center">
            Brochure dự án
          </a>
          <a href="https://vr360.pchg.vn" target="_blank" rel="noopener noreferrer"
            className="opacity-0 w-[240px] h-[40px] flex items-center justify-center rounded-full font-bold uppercase tracking-wider text-xs
                       text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                       hover:brightness-110 shadow-lg hover:scale-105 transition-all duration-200 text-center">
            Tham quan VR360
          </a>
        </div>
      </div>

      {/* Desktop Only Buttons (Absolute to viewport-width section to align with Navbar logo) */}
      <div className="hidden lg:flex animate-buttons flex-col gap-8 items-start
                      absolute left-[3.75%] top-[26.5%]">
        <a href="#contact"
          className="opacity-0 w-[240px] h-[40px] flex items-center justify-center rounded-full font-bold uppercase tracking-wider text-xs
                     text-[#fffcd8] border border-[#95e8ff]
                     hover:bg-[#95e8ff]/10 hover:scale-105 transition-all duration-200 text-center">
          Brochure dự án
        </a>
        <a href="https://vr360.pchg.vn" target="_blank" rel="noopener noreferrer"
          className="opacity-0 w-[240px] h-[40px] flex items-center justify-center rounded-full font-bold uppercase tracking-wider text-xs
                     text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                     hover:brightness-110 shadow-lg hover:scale-105 transition-all duration-200 text-center">
          Tham quan VR360
        </a>
      </div>
    </section>
  );
}
