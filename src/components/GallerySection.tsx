"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";

const imgVinhomesHocMon20Jpg = "/assets/12a5e3f1a9056d369a2d8fe5011d0b016e6cf234.jpg";
const imgVinhomesHocMon19Jpg = "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.jpg";
const imgVinhomesHocMon1Jpeg = "/assets/29f14bf135bc3220d8b07cd31de9f0ead5f3e7ad.jpg";

const galleryImages = [
  imgVinhomesHocMon20Jpg,
  imgVinhomesHocMon19Jpg,
  imgVinhomesHocMon1Jpeg,
  imgVinhomesHocMon20Jpg,
  imgVinhomesHocMon19Jpg,
];

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-gradient-to-b from-[#004e68] to-[#009ace]";

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
      <div className="relative lg:absolute lg:inset-0 flex flex-col items-center justify-center pt-16 pb-12 lg:pt-[5vh] lg:pb-0 z-0">
        
        {/* Centered Title */}
        <div className="gallery-title pointer-events-auto lg:opacity-0 mb-[5vh] shrink-0">
          <h2 
            className="text-center uppercase tracking-wide"
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
                    <img src={img} alt={`Gallery ${idx + 1} className="absolute inset-0 w-full h-full object-cover" `} />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Page Dots */}
          <div className="flex gap-[10px] justify-center items-center mt-[4vh] pointer-events-auto">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`rounded-[6px] transition-all duration-300 cursor-pointer
                  ${activeIndex === idx 
                    ? "bg-white border-[3px] border-white w-[12px] h-[12px]" 
                    : "border-[3px] border-white bg-transparent opacity-40 w-[12px] h-[12px]"
                  }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
