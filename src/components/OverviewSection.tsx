"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Figma node: 162:214 — background image
const imgMapTienIch = "/assets/5b5d926ce9d804d557d81a3a92cbf15722985803.jpg";

// Figma frame: 1920×1080
// StickySocials: fixed right-[3.75%] top-[50%] -translate-y-1/2, h=164px
//   → social visual bottom = 50vh + 82px
//
// Card (165:399): x=1508, w=358, right=54px → 54/1920 = 2.81% from right of frame
//   top=577px from frame top → starts below social
//   Gap social→card = 37px
//
// "Tổng quan" (162:237): center-x=1716.5, y=85 from frame top
//   right of text right-edge(1766) = 154px → 154/1920 = 8.02% from right
//
// KEY FIX: Both card & label must be absolute children of <section> (w-full = 100vw),
//   NOT inside the max-w-[1920px] INNER → so % is viewport-relative, matching StickySocials.

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-auto lg:h-full max-w-[1920px] mx-auto";

export default function OverviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".animate-card");
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: isMobile ? card : el,
              start: isMobile ? "top 85%" : "top center",
              once: isMobile,
              toggleActions: isMobile ? "play none none none" : "play none none reverse",
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="overview"
      ref={containerRef}
      className={OUTER}
      style={{
        background: `url(${imgMapTienIch}) lightgray 50% / cover no-repeat`,
      }}
    >
      {/* INNER: chỉ dùng cho mobile fallback và nav-level elements */}
      <div className={INNER}>
        {/* Mobile fallback */}
        <div className="lg:hidden flex flex-col p-5 z-10 relative mt-16 pb-12 animate-card opacity-0 lg:opacity-100">
          <div className="rounded-[15px] bg-[#004e68]/95 backdrop-blur-md border border-white/10 p-6 shadow-2xl">
            <p className="font-be-vietnam text-[15px] font-bold uppercase text-[#fffcd8] border-b border-white/20 pb-2 mb-4 tracking-wider">
              Tổng quan
            </p>
            <div className="font-be-vietnam text-[13px] leading-[20px] text-justify text-white/90 space-y-3">
              <p>
                Khu đô thị biển <strong>Phú Cường Phú Quý</strong> là dự án phát triển đô thị quy mô lớn do Công ty Cổ phần Phú Cường Hoàng Gia làm chủ đầu tư, tọa lạc tại khu vực Rạch Giá — vùng đất ven biển giàu tiềm năng của Tây Nam Bộ, hướng ra Vịnh Thái Lan.
              </p>
              <p>
                Không chỉ là một dự án bất động sản,{" "}
                <span className="font-bold uppercase text-[#fffcd8]">Phú Cường Phú Quý</span> được định hướng trở thành một{" "}
                <span className="font-bold uppercase text-[#fffcd8]">quần thể đô thị hiện đại</span>{" "}
                nơi hội tụ không gian sống chất lượng, tiện ích đồng bộ và giá trị cộng đồng bền vững.
              </p>
              <p>
                Với tầm nhìn kiến tạo một biểu tượng đô thị mới, dự án kỳ vọng góp phần thay đổi diện mạo thành phố biển Rạch Giá, mở ra chuẩn sống mới và trở thành điểm đến tiêu biểu của khu vực Tây Nam Bộ.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP ONLY: absolute to <section> (w-full = 100vw) ──────────────────────
          → % values are viewport-relative, consistent with StickySocials fixed positioning.
          StickySocials: right-[3.75%] of viewport, h=164px, top=50vh-82px → bottom=50vh+82px
          Card top = social bottom + 37px gap = calc(50vh + 119px)
          Card right = 54/1920 = 2.81% of frame ≈ 3.75% (social right) → keep ~2.81%
          Card width = 358/1920 = 18.64% of frame → use vw unit: ~18.64vw, min 280px
      ──────────────────────────────────────────────────────────────────────────────── */}

      {/* Card — direct child of section (viewport-width reference) */}
      {/* right: matches social area ~2.81% | top: below social buttons */}
      <div
        className="animate-card opacity-0
                   hidden lg:block
                   absolute right-[3.75%]
                   w-[358px]
                   rounded-[10px]"
        style={{
          top: "calc(50vh + 119px)",
          minHeight: "410px",
          background: "linear-gradient(180deg, rgba(0, 78, 104, 0.2) 0%, rgba(0, 154, 206, 0.2) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className="font-be-vietnam text-[15px] leading-[20px] text-justify text-[#fffcd8] [word-break:break-word]"
          style={{ padding: "28px 26px 56px 35px" }}
        >
          <p className="mb-[14px]">
            Khu đô thị biển Phú Cường Phú Quý là dự án phát triển đô thị quy mô lớn do Công ty Cổ phần Phú Cường Hoàng Gia làm chủ đầu tư, tọa lạc tại khu vực Rạch Giá – vùng đất ven biển giàu tiềm năng của Tây Nam Bộ, hướng ra Vịnh Thái Lan.
          </p>
          <p className="mb-[14px]">
            Không chỉ là một dự án bất động sản, Phú Cường Phú Quý được định hướng trở thành một quần thể đô thị hiện đại, nơi hội tụ không gian sống chất lượng, tiện ích đồng bộ và giá trị cộng đồng bền vững.
          </p>
          <p className="mb-0">
            Với tầm nhìn kiến tạo một biểu tượng đô thị mới, dự án kỳ vọng góp phần thay đổi diện mạo thành phố biển Rạch Giá, mở ra chuẩn sống mới và trở thành điểm đến tiêu biểu của khu vực Tây Nam Bộ.
          </p>
        </div>
      </div>
    </section>
  );
}
