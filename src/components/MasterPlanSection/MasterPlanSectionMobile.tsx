"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch4 = "/assets/0aaa1e6e5fe25e77a8640d92e7f3b17766201a15.jpg";

export default function MasterPlanSectionMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Map animation
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Buttons animation
    if (buttonsRef.current) {
      const links = buttonsRef.current.querySelectorAll("a");
      gsap.fromTo(
        links,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="masterplan"
      ref={containerRef}
      className="relative w-full bg-[#004e68] select-none flex flex-col py-[32px] gap-6"
    >
      {/* Title */}
      <h2
        ref={titleRef}
        className="opacity-0 tracking-widest px-[22px]"
        style={{
          color: "#FFF",
          textAlign: "center",
          textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
          fontFamily: '"Be Vietnam Pro", var(--font-be-vietnam-pro), sans-serif',
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          textTransform: "uppercase",
        }}
      >
        TỔNG QUAN PHÂN KHU
      </h2>

      {/* Map Image */}
      <div
        ref={mapRef}
        className="relative w-full h-[349px] overflow-hidden opacity-0"
      >
        <img
          src={imgMapTienIch4}
          alt="Master Plan Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,78,104,0.4)] to-transparent pointer-events-none" />
      </div>

      {/* Buttons */}
      <div
        ref={buttonsRef}
        className="flex flex-col gap-4 items-center w-full px-[22px]"
      >
        <a
          href="#contact"
          className="opacity-0 w-[300px] h-[59px] flex items-center justify-center rounded-[32px] font-be-vietnam font-normal text-[16px] leading-[16px] uppercase
                     text-[#f5f5f5] bg-gradient-to-r from-[#009ace] to-[#004e68] border border-[#fffcd8]
                     hover:brightness-110 hover:scale-105 shadow-lg transition-all duration-200 text-center gap-2 p-3"
        >
          BROCHURE DỰ ÁN
        </a>
        <a
          href="https://duan.vrtour360.vn/PhuCuongPhuQuy"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 w-[300px] h-[59px] flex items-center justify-center rounded-[32px] font-be-vietnam font-normal text-[16px] leading-[16px] uppercase
                     text-[#0065ad] bg-gradient-to-r from-[#95e8ff] to-[#fdffd9] border border-[#fffcd8]
                     hover:brightness-110 hover:scale-105 shadow-lg transition-all duration-200 text-center gap-2 p-3"
        >
          THAM QUAN VR360
        </a>
      </div>
    </section>
  );
}
