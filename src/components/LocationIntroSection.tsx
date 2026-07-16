"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch1 = "/images/map tien ich_ 1.jpg";

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-auto lg:h-full max-w-[1920px] mx-auto";

export default function LocationIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const leftContent = el.querySelector(".animate-left");
    const rightContent = el.querySelector(".animate-right");
    const mobileCard = el.querySelector(".animate-card");
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      if (isMobile && mobileCard) {
        gsap.fromTo(
          mobileCard,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileCard,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (!isMobile && leftContent) {
        gsap.fromTo(
          leftContent,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top center",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (!isMobile && rightContent) {
        gsap.fromTo(
          rightContent,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top center",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="location"
      ref={containerRef}
      className="relative w-full h-auto lg:h-screen lg:overflow-hidden"
      style={{
        background: `url("${imgMapTienIch1}") lightgray 50% / cover no-repeat`,
      }}
    >

      {/* Mobile/Tablet Layout (Scrollable flow) */}
      <div className={`${INNER} lg:hidden flex flex-col p-6 mt-16 pb-12 z-10 relative`}>
        <p className="font-be-vietnam text-[14px] uppercase text-white text-right mb-4 border-b border-[#95e8ff]/50 pb-2">
          Vị trí
        </p>

        <div className="rounded-[15px] bg-[#004e68]/95 backdrop-blur-md border border-white/10 p-6 shadow-2xl flex flex-col gap-4 animate-card opacity-0 lg:opacity-100">
          <div className="flex flex-col gap-2">
            <p className="font-be-vietnam text-xs md:text-sm text-white/90 leading-relaxed text-justify">
              Không chỉ là một khu đô thị ven biển, Khu đô thị Phú Cường Phú Quý được định vị như
            </p>
            <h2 className="font-be-vietnam font-bold uppercase text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] leading-snug">
              tâm điểm giao thương và dòng chảy phát triển mới của đô thị biển Tây Nam Bộ.
            </h2>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="font-be-vietnam text-[13px] leading-[20px] text-justify text-white/80">
              Tọa lạc tại trái tim thành phố biển Rạch Giá, Phú Cường Phú Quý hội tụ đầy đủ lợi thế của một trung tâm kết nối vùng: giao điểm của 6 hành lang kinh tế trọng điểm, kết nối đa phương thức bằng đường bộ, đường biển và hàng không, đồng thời đón đầu hệ thống cao tốc ven biển tương lai. Đây không chỉ là nơi an cư, mà còn là cửa ngõ giao thương và cực tăng trưởng mới của toàn vùng Tây Nam Bộ.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Absolute positioned viewport-relative elements) */}
      {/* Left Text Block */}
      <div className="hidden lg:flex absolute left-[3.75%] bottom-[45px] z-10 animate-left opacity-0 pointer-events-auto w-[498px] flex-col gap-5">
        <h2 className="font-be-vietnam font-bold text-[30px] leading-[45px] text-transparent [-webkit-text-fill-color:transparent] bg-clip-text bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] uppercase">
          tâm điểm giao thương và dòng chảy phát triển mới của đô thị biển Tây Nam Bộ.
        </h2>
      </div>

      {/* Right Description Card */}
      <div
        className="hidden lg:flex absolute right-[3.75%] bottom-[45px] z-10 animate-right opacity-0 pointer-events-auto w-[358px] h-[252px] rounded-[10px] border border-[#95e8ff]/15 items-center justify-center shadow-xl backdrop-blur-sm pt-[31px] pr-[26px] pb-[31px] pl-[35px]"
        style={{
          background: "linear-gradient(180deg, rgba(0, 78, 104, 0.20) 0%, rgba(0, 154, 206, 0.20) 100%)",
        }}
      >
        <p className="font-be-vietnam text-[15px] font-normal not-italic leading-[20px] text-justify text-[#fffcd8]">
          Tọa lạc tại trái tim thành phố biển Rạch Giá, Phú Cường Phú Quý hội tụ đầy đủ lợi thế của một trung tâm kết nối vùng: giao điểm của 6 hành lang kinh tế trọng điểm, kết nối đa phương thức bằng đường bộ, đường biển và hàng không, đồng thời đón đầu hệ thống cao tốc ven biển tương lai. Đây không chỉ là nơi an cư, mà còn là cửa ngõ giao thương và cực tăng trưởng mới của toàn vùng Tây Nam Bộ.
        </p>
      </div>
    </section>
  );
}
