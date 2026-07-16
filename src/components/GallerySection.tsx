"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";

const galleryImages = [
  "/images/utilities/03-truong-hoc-khu-an-thinh.jpg",
  "/images/utilities/5-cho-hai-san-2.jpg",
  "/images/utilities/4-ben-cang-vfx.jpg",
  "/images/utilities/9-chuoi-fb-noi.jpg",
  "/images/utilities/10-dat-thuong-mai-khu-an-hoi.jpg",
  "/images/utilities/11-du-an-khu-phuc-hop-giao-duc.jpg",
  "/images/utilities/12-quang-truong-bien-an-hoi.jpg",
  "/images/utilities/03-truong-hoc-khu-an-quy.jpg",
  "/images/utilities/13-trung-tam-suc-khoe.jpg",
  "/images/utilities/15-cong-vien-chuyen-de.jpg",
  "/images/utilities/8-ben-pha-an-bien.jpg",
];

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-[#004e68] lg:bg-gradient-to-b lg:from-[#004e68] lg:to-[#009ace]";

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const title = el.querySelector(".gallery-title");
    const swiperEl = el.querySelector(".gallery-swiper");

    const ctx = gsap.context(() => {
      if (title) {
        gsap.fromTo(
          title,
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
      }

      if (swiperEl) {
        gsap.fromTo(
          swiperEl,
          { opacity: 0, y: 30 },
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
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={containerRef} className={OUTER}>
      {/* Centered Content Column */}
      <div className="relative lg:absolute lg:inset-0 flex flex-col items-center justify-center pt-[24px] pb-[24px] lg:pt-[5vh] lg:pb-0 z-0">

        {/* Centered Title */}
        <div className="gallery-title pointer-events-auto lg:opacity-0 mb-[48px] lg:mb-0 shrink-0">
          <h2
            className="text-center uppercase tracking-wide hidden"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "3.8vh",
              fontWeight: 700,
              lineHeight: "4.9vh",
              background: "linear-gradient(180deg, #95E8FF 0%, #FDFFD9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            thư viện ảnh
          </h2>
          <h3
            className="font-be-vietnam uppercase text-white select-none text-center lg:hidden"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
              lineHeight: "normal",
            }}
          >
            thư viện ảnh
          </h3>
        </div>

        {/* Swiper Carousel Container */}
        <div className="gallery-swiper w-full pointer-events-auto lg:opacity-0 relative select-none">
          {/* Custom Prev Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-[3vw] lg:left-[5vw] top-1/2 -translate-y-1/2 z-20 border-2 border-white rounded-[36px] size-[40px] hidden lg:flex items-center justify-center cursor-pointer text-white hover:scale-105 hover:bg-white/15 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Custom Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-[3vw] lg:right-[5vw] top-1/2 -translate-y-1/2 z-20 border-2 border-white rounded-[36px] size-[40px] hidden lg:flex items-center justify-center cursor-pointer text-white hover:scale-105 hover:bg-white/15 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Swiper */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            spaceBetween={0}
            breakpoints={{
              320: {
                spaceBetween: 16,
              },
              1024: {
                spaceBetween: 30,
              }
            }}
            className="w-full !overflow-visible"
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="w-[85vw] max-w-[400px] lg:w-[54.6vw] lg:max-w-[1050px] aspect-[1050/573.75]"
              >
                {({ isActive }) => (
                  <div
                    className={`relative w-full h-full rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out
                               ${isActive ? "scale-100 opacity-100" : "scale-93 opacity-50 lg:translate-y-[2.5vh]"}`}
                  >
                    <img src={img} alt={`Gallery ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Page Dots */}
          <div className="flex gap-[6px] lg:gap-[10px] justify-center items-center mt-[4vh] pointer-events-auto">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`rounded-[6px] transition-all duration-300 cursor-pointer
                  w-[8px] h-[8px] lg:w-[12px] lg:h-[12px]
                  ${activeIndex === idx
                    ? "bg-white border-[2px] lg:border-[3px] border-white"
                    : "border-[2px] lg:border-[3px] border-white bg-transparent opacity-40"
                  }`}
              />
            ))}
          </div>



        </div>
        {/* Short Copyright footer */}
        <div
          className="hidden lg:flex w-[90%] pt-20 max-w-[668px] flex-col items-center justify-center gap-[0.5vh] shrink-0 pointer-events-none select-none"
        >
          <p
            className="text-center uppercase text-[11px] xl:text-[14px] leading-normal font-sans text-white/90"
          >
            Hình ảnh phối cảnh & bố trí công trình mang tính chất minh họa, có thể điều chỉnh. Thông tin chính thức được căn cứ trên hợp đồng mua bán.
          </p>
          <p
            className="text-center uppercase text-[11px] xl:text-[14px] leading-normal font-sans text-white/90 mt-[0.2vh]"
          >
            © 2026 pchg. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
