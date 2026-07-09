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
 
    const cardContainers = el.querySelectorAll(".animate-cards-group");
 
    const ctx = gsap.context(() => {
      cardContainers.forEach((container) => {
        const items = container.querySelectorAll(".animate-card");
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
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
      ref={containerRef}
      className={OUTER}
      style={{ backgroundImage: `url(${imgMapTienIch6})` }}
    >
      {/* Mobile/Tablet Fallback Version (Inside INNER, Scrollable Flow) */}
      <div className={`${INNER} lg:hidden flex flex-col justify-end h-full p-6 pb-20 overflow-y-auto`}>
        <div className="animate-cards-group">
          {/* 2 Large Cards on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="animate-card bg-[#ffee00]/20 border border-[#fffcd8] backdrop-blur-md rounded-[9px] p-6 flex flex-col gap-3 opacity-0">
              <h4 className="font-be-vietnam font-bold uppercase text-[#fffcd8] text-xs tracking-wider">Tổng mức đầu tư</h4>
              <span className="font-anton text-2xl text-white uppercase mt-2 block">~5.100 TỶ VNĐ</span>
            </div>
            <div className="animate-card bg-[#ffee00]/20 border border-[#fffcd8] backdrop-blur-md rounded-[9px] p-6 flex flex-col gap-3 opacity-0">
              <h4 className="font-be-vietnam font-bold uppercase text-[#fffcd8] text-xs tracking-wider">Quy mô dự án</h4>
              <span className="font-anton text-2xl text-white uppercase mt-2 block">99,99HA</span>
            </div>
          </div>
 
          {/* 6 Small Cards on Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Nhà ở xã hội PCH", unit: " (Căn)", value: "1.203" },
              { title: "Nhà phố",           unit: " (Căn)", value: "1.566" },
              { title: "Shophouse",         unit: " (Căn)", value: "356" },
              { title: "Biệt thự đơn lập",  unit: " (Căn)", value: "75" },
              { title: "Biệt thự song lập", unit: " (Căn)", value: "113" },
              { title: "Biệt thự phố",      unit: " (Căn)", value: "164" },
            ].map((s, idx) => (
              <div key={idx} className="animate-card bg-[#004e68]/50 backdrop-blur-md rounded-[9px] p-4 flex flex-col justify-start items-start gap-2 opacity-0">
                <h5 className="font-be-vietnam uppercase text-white text-[10px] tracking-wide leading-tight text-left w-full">
                  <span className="font-bold">{s.title}</span>
                  <span className="font-light">{s.unit}</span>
                </h5>
                <span className="font-anton text-xl text-white uppercase mt-2 block leading-none text-left w-full">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Desktop Only Version (Outside INNER, Viewport-Relative Absolute to align with Navbar and Grid Layout) */}
      <div className="hidden lg:flex absolute left-[3.75%] right-[3.75%] lg:bottom-[35px] animate-cards-group flex-col gap-6">
        {/* Top Row: 2 Large Cards */}
        <div className="flex justify-between items-center w-full">
          <div className="animate-card flex flex-col justify-start items-start opacity-0 shadow-2xl backdrop-blur-md
                          lg:w-[22.7vw] lg:min-h-[8.22vw] lg:h-auto lg:pt-[1.45vw] lg:pb-[1.5vw] lg:px-[1.5vw] lg:gap-[0.66vw]
                          rounded-[9px] border border-[#fffcd8] bg-[#ffee00]/20">
            <h4 className="font-be-vietnam font-bold uppercase text-white lg:text-[0.66vw] lg:leading-[0.8vw] leading-[1.2] lg:tracking-[0.007vw] tracking-wide">Tổng mức đầu tư</h4>
            <span className="font-anton lg:text-[3.95vw] lg:leading-[3.98vw] lg:tracking-[-0.08vw] font-normal text-white uppercase block py-1 whitespace-nowrap">~5.100 TỶ VNĐ</span>
          </div>
          <div className="animate-card flex flex-col justify-start items-start opacity-0 shadow-2xl backdrop-blur-md
                          lg:w-[22.7vw] lg:min-h-[8.22vw] lg:h-auto lg:pt-[1.45vw] lg:pb-[1.5vw] lg:px-[1.5vw] lg:gap-[0.66vw]
                          rounded-[9px] border border-[#fffcd8] bg-[#ffee00]/20">
            <h4 className="font-be-vietnam font-bold uppercase text-white lg:text-[0.66vw] lg:leading-[0.8vw] leading-[1.2] lg:tracking-[0.007vw] tracking-wide">Quy mô dự án</h4>
            <span className="font-anton lg:text-[3.95vw] lg:leading-[3.98vw] lg:tracking-[-0.08vw] font-normal text-white uppercase block py-1 whitespace-nowrap">99,99HA</span>
          </div>
        </div>
 
        {/* Bottom Row: 6 Small Cards */}
        <div className="flex justify-between items-center w-full">
          {[
            { title: "Nhà ở xã hội PCH", unit: " (Căn)", value: "1.203" },
            { title: "Nhà phố",           unit: " (Căn)", value: "1.566" },
            { title: "Shophouse",         unit: " (Căn)", value: "356" },
            { title: "Biệt thự đơn lập",  unit: " (Căn)", value: "75" },
            { title: "Biệt thự song lập", unit: " (Căn)", value: "113" },
            { title: "Biệt thự phố",      unit: " (Căn)", value: "164" },
          ].map((s, idx) => (
            <div key={idx} className="animate-card flex flex-col justify-start items-start opacity-0 shadow-xl backdrop-blur-md
                                      lg:w-[13.95vw] lg:h-[7.5vw] lg:pt-[1.45vw] lg:pb-[1.5vw] lg:px-[1.5vw] lg:gap-[0.66vw]
                                      rounded-[9px] bg-[#004e68]/50">
              <h5 className="font-be-vietnam uppercase text-white lg:text-[0.66vw] lg:leading-[0.8vw] leading-[1.2] lg:tracking-[0.007vw] tracking-wide text-left w-full">
                <span className="font-bold">{s.title}</span>
                <span className="font-light">{s.unit}</span>
              </h5>
              <span className="font-anton lg:text-[3.95vw] lg:leading-[3.98vw] lg:tracking-[-0.08vw] font-normal text-white/80 uppercase block whitespace-nowrap text-left w-full">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
