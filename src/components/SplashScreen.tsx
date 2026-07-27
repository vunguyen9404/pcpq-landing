"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef      = useRef<HTMLDivElement>(null);
  const textRef      = useRef<HTMLDivElement>(null);
  // useRef persists through StrictMode's artificial unmount/remount —
  // the second effect invocation sees true and bails out immediately.
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // 1. Set initial state
    gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
    gsap.set(textRef.current, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ onComplete });

    // 2. Animate In
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        textRef.current,
        { y: 0, opacity: 0.8, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      // 3. Pause
      .to({}, { duration: 0.8 })
      // 4. Animate Out
      .to([logoRef.current, textRef.current], {
        scale: 0.95,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      })
      // 5. Slide up container
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
      });

    return () => {
      tl.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#004e68]"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Wrapper */}
        <div ref={logoRef} style={{ opacity: 0 }} className="relative w-48 h-32 md:w-64 md:h-44">
          <img src="/images/logo.png" alt="PHÚ CƯỜNG PHÚ QUÝ" className="absolute inset-0 w-full h-full object-contain" />
        </div>
        
        {/* Slogan */}
        <div ref={textRef} style={{ opacity: 0 }} className="text-center">
          <p className="font-be-vietnam text-[#95e8ff] tracking-[0.25em] text-xs font-semibold uppercase">
            Khai mở tương lai bền vững
          </p>
          
          {/* Animated Loading Bar */}
          <div 
            className="mt-5 w-32 h-[2px] bg-white/15 relative mx-auto"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
            }}
          >
            <style>{`
              @keyframes loader-slide {
                0% { transform: translateX(-100%); }
                50% { transform: translateX(200%); }
                100% { transform: translateX(-100%); }
              }
              .animate-loader-slide {
                animation: loader-slide 2s infinite ease-in-out;
              }
            `}</style>
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#95e8ff] to-transparent animate-loader-slide" />
          </div>
        </div>
      </div>
    </div>
  );
}
