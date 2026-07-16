"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch6 = "/assets/5e2598ca19341ffb7c72e1186afbec20793d9d51.jpg";

export default function DetailedPhasesSectionMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    // Gentle zoom-out on image load
    gsap.fromTo(
      imageRef.current,
      { scale: 1.06, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Staggered stack push-up animation for all cards
    const cards = el.querySelectorAll(".animate-card-mobile");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    // Force ScrollTrigger refresh after components mount to calculate coordinates correctly
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
    };
  }, []);

  const smallCards = [
    { title: "Nhà ở xã hội PCH", unit: " (căn)", value: "1.203" },
    { title: "Nhà phố",           unit: " (căn)", value: "1.566" },
    { title: "Shophouse",         unit: " (căn)", value: "356" },
    { title: "Biệt thự đơn lập",  unit: " (căn)", value: "75" },
    { title: "Biệt thự song lập", unit: " (căn)", value: "113" },
    { title: "Biệt thự phố",      unit: " (căn)", value: "164" },
  ];

  return (
    <section
      id="detailed-phases"
      ref={containerRef}
      className="relative w-full bg-[#004e68] select-none flex flex-col"
    >
      {/* Top Image Container */}
      <div className="relative w-full h-[483px]">
        <div className="relative w-full h-full overflow-hidden">
          <img
            ref={imageRef}
            src={imgMapTienIch6}
            alt="Detailed Phases"
            className="w-full h-full object-cover opacity-0 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,78,104,0.4)] to-transparent pointer-events-none" />
        </div>

        {/* Overlapping "TỔNG MỨC ĐẦU TƯ" Card */}
        <div
          className="animate-card-mobile opacity-0 absolute bottom-[-65px] left-[21px] right-[21px] h-[130px] z-10
                     bg-[#ffee00]/20 border border-[#fffcd8]/50 backdrop-blur-md rounded-[7.4px]
                     flex flex-col gap-[10px] pt-[23px] pb-[24px] px-[24px] justify-center"
        >
          <span
            className="font-be-vietnam font-bold uppercase text-white tracking-[0.11px] select-none"
            style={{ fontSize: "10.5px", lineHeight: "12.6px" }}
          >
            Tổng mức đầu tư
          </span>
          <span
            className="font-anton text-white uppercase select-none tracking-[-1px]"
            style={{ fontSize: "clamp(32px, 12vw, 62.6px)", lineHeight: "1" }}
          >
            ~5.100 tỷ VNĐ
          </span>
        </div>
      </div>

      {/* Solid Background Content Area */}
      {/* pt-[85px] covers the 65px overflow of the top card + 20px extra spacing */}
      <div
        className="w-full px-[21px] pt-[85px] pb-[32px] flex flex-col gap-[32.6px]"
      >
        {/* "QUY MÔ DỰ ÁN" Card */}
        <div
          className="animate-card-mobile opacity-0 w-full h-[130px]
                     bg-[#ffee00]/20 border border-[#fffcd8]/50 backdrop-blur-md rounded-[7.4px]
                     flex flex-col gap-[10px] pt-[23px] pb-[24px] px-[24px] justify-center"
        >
          <span
            className="font-be-vietnam font-bold uppercase text-white tracking-[0.11px] select-none"
            style={{ fontSize: "10.5px", lineHeight: "12.6px" }}
          >
            Quy mô dự án
          </span>
          <span
            className="font-anton text-white uppercase select-none tracking-[-1px]"
            style={{ fontSize: "clamp(32px, 12vw, 62.6px)", lineHeight: "1" }}
          >
            99,99ha
          </span>
        </div>

        {/* 6 Small Cards Grid */}
        <div className="grid grid-cols-2 gap-x-[19.4px] gap-y-[32.6px] w-full">
          {smallCards.map((card, index) => (
            <div
              key={index}
              className="animate-card-mobile opacity-0 bg-[#004e68]/50 rounded-[6.2px] border border-white/5
                         flex flex-col gap-[8.7px] pt-[19px] pb-[20px] px-[20px] justify-between min-h-[110px]"
            >
              <h5
                className="font-be-vietnam uppercase text-white tracking-[0.09px] select-none text-left w-full"
                style={{ fontSize: "8.8px", lineHeight: "11px" }}
              >
                <span className="font-bold">{card.title}</span>
                <span className="font-light">{card.unit}</span>
              </h5>
              <span
                className="font-anton text-white/80 uppercase select-none tracking-[-1px] text-left w-full"
                style={{ fontSize: "clamp(24px, 10vw, 52.6px)", lineHeight: "1" }}
              >
                {card.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
