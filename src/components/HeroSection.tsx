"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const imgMapTienIch2 = "/assets/f20c3cec8cfad7dad8dc6c8d3a9e6b8e34c2c0df.png";
const YOUTUBE_VIDEO_ID = "sfmmy-PqQ5o";

const OUTER = "relative w-full h-screen overflow-hidden";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

export default function HeroSection() {
  const bgRef      = useRef<HTMLDivElement>(null);
  const buttonRef  = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const frameRef   = useRef<HTMLDivElement>(null);
  const shimRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // BG zoom + button entrance
  useEffect(() => {
    gsap.fromTo(bgRef.current, { scale: 1.12 }, {
      scale: 1, duration: 1.8, delay: 2.4, ease: "power2.out",
    });
    gsap.fromTo(buttonRef.current, { opacity: 0, scale: 0.9 }, {
      opacity: 1, scale: 1, duration: 1, delay: 2.6, ease: "power3.out",
    });
  }, []);

  // Open: elegant fade + scale up
  useEffect(() => {
    if (!isVideoOpen) return;

    gsap.timeline()
      // 1. Backdrop fades in
      .fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      )
      // 2. Frame scales up softly from slightly below
      .fromTo(frameRef.current,
        { opacity: 0, scale: 0.88, y: 24 },
        { opacity: 1, scale: 1,    y: 0, duration: 0.55, ease: "power3.out" },
        "-=0.15"
      )
      // 3. Shimmer sweep across the frame top
      .fromTo(shimRef.current,
        { x: "-110%" },
        { x: "110%", duration: 0.8, ease: "power1.inOut" },
        "-=0.25"
      )
      // 4. Video content fades in
      .fromTo(contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.35"
      );
  }, [isVideoOpen]);

  const openVideo = () => setIsVideoOpen(true);

  const closeVideo = () => {
    gsap.timeline()
      .to(frameRef.current,  { opacity: 0, scale: 0.92, y: 16, duration: 0.3, ease: "power2.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in",
          onComplete: () => setIsVideoOpen(false) }, "-=0.1");
  };

  return (
    <section className={OUTER}>
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${imgMapTienIch2})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,78,104,0.4)] to-transparent pointer-events-none" />

      <div className={INNER}>
        {/* BRAND VIDEO button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            ref={buttonRef}
            onClick={openVideo}
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

      {/* ── BRAND VIDEO POPUP ── */}
      {isVideoOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          {/* Soft backdrop */}
          <div
            className="absolute inset-0 bg-[#003a50]/80 backdrop-blur-md"
            onClick={closeVideo}
          />

          {/* Brand frame */}
          <div
            ref={frameRef}
            className="relative z-10 w-[90vw] max-w-3xl rounded-2xl
                       bg-gradient-to-b from-[#004e68]/95 to-[#009ace]/80
                       shadow-[0_8px_60px_rgba(0,30,50,0.7),0_0_0_1px_rgba(149,232,255,0.06)] p-4"
            style={{ opacity: 0 }}
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 rounded-2xl">
              <div
                ref={shimRef}
                className="absolute inset-y-0 w-1/3"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(149,232,255,0.08), transparent)",
                  transform: "translateX(-110%)",
                }}
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#95e8ff] to-[#fdffd9]" />
                <span className="font-be-vietnam font-semibold text-xs uppercase tracking-widest text-[#fffcd8]/90">
                  Brand Video
                </span>
                <span className="text-white/20 text-xs">—</span>
                <span className="font-be-vietnam text-white/50 text-xs tracking-wide">
                  Phú Cường Phú Quý
                </span>
              </div>
              <button
                onClick={closeVideo}
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10
                           flex items-center justify-center
                           text-white/50 hover:text-white hover:bg-white/10
                           transition-all duration-200 cursor-pointer text-sm"
              >
                ✕
              </button>
            </div>

            {/* Video — padded, rounded */}
            <div
              ref={contentRef}
              className="relative aspect-video rounded-xl overflow-hidden
                         ring-1 ring-white/10 shadow-inner"
              style={{ opacity: 0 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Brand Video Phú Cường Phú Quý"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="font-be-vietnam text-white/35 text-[10px] uppercase tracking-widest">
                Khai mở tương lai bền vững
              </span>
              <div className="flex gap-[3px] items-end">
                {[3, 5, 4, 6, 3].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2px] rounded-full bg-[#95e8ff]/30"
                    style={{ height: `${h * 2}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
