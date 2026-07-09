"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  "/assets/12a5e3f1a9056d369a2d8fe5011d0b016e6cf234.png",
  "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.png",
  "/assets/29f14bf135bc3220d8b07cd31de9f0ead5f3e7ad.png",
];

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] lg:max-w-none mx-auto";

export default function GallerySection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () =>
    setActiveSlide(p => (p === 0 ? galleryImages.length - 1 : p - 1));
  const handleNextSlide = () =>
    setActiveSlide(p => (p === galleryImages.length - 1 ? 0 : p + 1));

  return (
    <section
      id="gallery"
      className={`${OUTER} bg-gradient-to-b from-[#004e68] to-[#009ace]`}
    >
      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0`}>
        <p className="lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 text-right mt-16 lg:mt-0">
          thư viện
        </p>

        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[18.5%] mt-20 lg:mt-0 text-center">
          <h2 className="font-anton uppercase text-2xl md:text-4xl lg:text-[2.2vw]
                         tracking-wide bg-clip-text text-transparent
                         bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]">
            THƯ VIỆN ẢNH
          </h2>
        </div>

        <div className="flex items-center gap-4 my-10 lg:my-0
                        lg:absolute lg:left-[5.2%] lg:right-[5.2%] lg:top-[30%]">
          <button onClick={handlePrevSlide} aria-label="Previous"
            className="p-3 rounded-full border border-[#95e8ff] hover:bg-[#95e8ff]/10
                       text-white shrink-0 cursor-pointer transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative flex-1 aspect-[16/9] lg:h-[42vh] rounded-2xl overflow-hidden
                          shadow-2xl border border-white/10 group">
            <Image
              src={galleryImages[activeSlide]}
              alt={`Gallery ${activeSlide + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <p className="font-be-vietnam font-semibold text-sm text-white/95">
                Không gian kiến trúc Khu Đô Thị Phú Cường Phú Quý
              </p>
            </div>
          </div>

          <button onClick={handleNextSlide} aria-label="Next"
            className="p-3 rounded-full border border-[#95e8ff] hover:bg-[#95e8ff]/10
                       text-white shrink-0 cursor-pointer transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex gap-3 justify-center mb-12 lg:mb-0
                        lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[82%]">
          {galleryImages.map((_, idx) => (
            <button key={idx} onClick={() => setActiveSlide(idx)} aria-label={`Slide ${idx + 1}`}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer
                ${activeSlide === idx ? "bg-[#95e8ff] w-6" : "bg-white/30 w-3 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
