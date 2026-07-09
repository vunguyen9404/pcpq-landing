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

    const titleRight = el.querySelector(".animate-title-right");
    const titleLeft = el.querySelector(".animate-title-left");
    const buttons = el.querySelector(".animate-buttons");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRight,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

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
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        buttons,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
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
        <p className="animate-title-right lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 text-right mt-16 lg:mt-0 opacity-0">
          Quy hoạch tổng thể
        </p>

        <div className="animate-title-left lg:absolute lg:left-[18.2%] lg:top-[11.1%] mt-20 lg:mt-0 opacity-0">
          <h2 className="font-anton uppercase text-2xl md:text-4xl lg:text-[2.2vw]
                          tracking-wide bg-clip-text text-transparent
                          bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                          drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            QUY HOẠCH TỔNG THỂ VÀ CÁC PHÂN KHU
          </h2>
        </div>

        <div className="animate-buttons flex flex-col sm:flex-row gap-6 justify-center
                        mb-16 lg:mb-0 lg:absolute lg:left-[5.2%] lg:bottom-[18%] opacity-0">
          <a href="#contact"
            className="px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm
                       text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                       hover:brightness-110 shadow-lg hover:scale-105 transition-all duration-200 text-center">
            Tải Brochure dự án
          </a>
          <a href="https://vr360.pchg.vn" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm
                       text-[#fffcd8] border border-[#95e8ff]
                       hover:bg-[#95e8ff]/10 hover:scale-105 transition-all duration-200
                       text-center flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#95e8ff] animate-ping" />
            Tham quan VR360
          </a>
        </div>
      </div>
    </section>
  );
}
