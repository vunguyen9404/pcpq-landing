"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // 1. Initial State: Logo slightly scaled down and hidden, text hidden below
    gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
    gsap.set(textRef.current, { y: 20, opacity: 0 });

    // 2. Animate In: Logo scale and fade-in, followed by slogan text
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(textRef.current, {
      y: 0,
      opacity: 0.8,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    // 3. Pause momentarily for visual premium feel
    .to({}, { duration: 0.8 })
    // 4. Animate Out: Elements fade out
    .to([logoRef.current, textRef.current], {
      scale: 0.95,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    })
    // 5. Slide up the entire screen overlay container
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#004e68]"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Wrapper */}
        <div ref={logoRef} className="relative w-48 h-32 md:w-64 md:h-44">
          <Image
            src="/images/logo.png"
            alt="PHÚ CƯỜNG PHÚ QUÝ"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Slogan */}
        <div ref={textRef} className="text-center">
          <p className="font-be-vietnam text-[#95e8ff] tracking-[0.25em] text-xs font-semibold uppercase">
            Khai mở tương lai bền vững
          </p>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#95e8ff] to-transparent mx-auto mt-3 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
