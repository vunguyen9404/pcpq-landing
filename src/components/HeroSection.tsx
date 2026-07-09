"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const imgMapTienIch2 = "/assets/f20c3cec8cfad7dad8dc6c8d3a9e6b8e34c2c0df.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

export default function HeroSection() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Delay matches Splash Screen's entrance, duration and exit slides
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 2.6, // (Logo animate 1.2s + slogan text 0.8s + wait 0.8s - overlap) => ~2.6s when splash slides up
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <section
      className={OUTER}
      style={{ backgroundImage: `url(${imgMapTienIch2})` }}
    >
      {/* Figma overlay: rgba(0,78,104,0.4)→transparent, full width */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,78,104,0.4)] to-transparent pointer-events-none" />

      <div className={INNER}>
        {/* BRAND VIDEO — centered */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            ref={buttonRef}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full opacity-0
                       border border-white/50 bg-white/10 backdrop-blur-sm
                       text-white hover:bg-white/20 transition-all duration-200 cursor-pointer group"
          >
            <span className="font-be-vietnam font-semibold text-xs uppercase tracking-widest">BRAND VIDEO</span>
            <span className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-white/20 transition-all">
              <svg className="w-3 h-3 ml-0.5" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
