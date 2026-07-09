"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch6 = "/assets/5e2598ca19341ffb7c72e1186afbec20793d9d51.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

export default function DetailedPhasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const titleRight = el.querySelector(".animate-title-right");
    const titleLeft = el.querySelector(".animate-title-left");
    const cards = el.querySelectorAll(".animate-card");

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
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
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
      ref={containerRef}
      className={OUTER}
      style={{ backgroundImage: `url(${imgMapTienIch6})` }}
    >
      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0`}>
        <p className="animate-title-right lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 text-right mt-16 lg:mt-0 opacity-0">
          Phân khu
        </p>

        <div className="animate-title-left lg:absolute lg:left-[18.2%] lg:top-[11.1%] mt-20 lg:mt-0 opacity-0">
          <h2 className="font-anton uppercase text-2xl md:text-4xl lg:text-[2.2vw]
                         tracking-wide bg-clip-text text-transparent
                         bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                         drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            PHÂN KHU ĐÔ THỊ CHI TIẾT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
                        my-10 lg:my-0 lg:absolute lg:left-[5.2%] lg:right-[5.2%] lg:top-[26%]">
          {[
            { title: "Phân khu đất thương mại",   image: "/assets/55fd4fdb5f8d7974813ad1ea329ff4ca25384553.png" },
            { title: "Phân khu nhà ở thương mại", image: "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.png" },
            { title: "Khu biệt thự đơn lập",       image: "/assets/067da7bd90d8c1685256d0883c0168d9569d9e1c.png" },
            { title: "Khu nhà ở xã hội",           image: "/assets/262042861f5dcd8037aeef0af0f2b5af43aa0a1c.png" },
          ].map((item, idx) => (
            <div key={idx}
              className="animate-card bg-[#004e68]/90 border border-white/10 rounded-xl overflow-hidden
                         shadow-xl hover:shadow-[#95e8ff]/10 hover:-translate-y-2 transition-all duration-300 opacity-0">
              <div className="relative h-52 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-be-vietnam font-semibold text-white text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
