"use client";

import { useState, useEffect } from "react";

const imgFrame2 = "/assets/412c60f73589b8be55d0595b8626902a22d59955.jpg";
const imgPcpq = "/assets/75b906d0e6702d36d198948691355b25b0a0c2f7.png";

const internalChips = [
  { 
    name: "3. Trường học", 
    x: "57.98%", y: "67.37%", 
    image: "/images/utilities/thumbnails/03-truong-hoc-khu-an-thinh.jpg",
    largeImage: "/images/utilities/03-truong-hoc-khu-an-thinh.jpg"
  },
  {
    name: "4. Chợ hải sản",
    x: "68.83%", y: "55.40%",
    image: "/images/utilities/thumbnails/5-cho-hai-san-2.jpg",
    largeImage: "/images/utilities/5-cho-hai-san-2.jpg",
    popoverOffset: { left: "-2px", top: "-188px" }
  },
  { 
    name: "5. Bến tàu", 
    x: "64.49%", y: "49.41%", 
    image: "/images/utilities/thumbnails/4-ben-cang-vfx.jpg",
    largeImage: "/images/utilities/4-ben-cang-vfx.jpg"
  },
  { 
    name: "6. Trung tâm thể thao", 
    x: "60.12%", y: "40.32%"
  },
  { 
    name: "8. Chuỗi F&B Nổi", 
    x: "57.50%", y: "49.62%", 
    image: "/images/utilities/thumbnails/9-chuoi-fb-noi.jpg",
    largeImage: "/images/utilities/9-chuoi-fb-noi.jpg"
  },
  { 
    name: "9. Trung tâm thương mại", 
    x: "51.31%", y: "53.33%", 
    image: "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.jpg",
    largeImage: "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.jpg"
  },
  { 
    name: "10. Trung tâm thương mại", 
    x: "51.03%", y: "44.32%", 
    image: "/images/utilities/thumbnails/10-dat-thuong-mai-khu-an-hoi.jpg",
    largeImage: "/images/utilities/10-dat-thuong-mai-khu-an-hoi.jpg"
  },
  { 
    name: "11. Trung tâm Giáo dục", 
    x: "51.00%", y: "32.00%", 
    image: "/images/utilities/thumbnails/11-du-an-khu-phuc-hop-giao-duc.jpg",
    largeImage: "/images/utilities/11-du-an-khu-phuc-hop-giao-duc.jpg"
  },
  { 
    name: "12. Quảng trường", 
    x: "51.00%", y: "25.66%", 
    image: "/images/utilities/thumbnails/12-quang-truong-bien-an-hoi.jpg",
    largeImage: "/images/utilities/12-quang-truong-bien-an-hoi.jpg"
  },
  {
    name: "13. Trường học",
    x: "42.88%", y: "69.30%",
    image: "/images/utilities/thumbnails/03-truong-hoc-khu-an-quy.jpg",
    largeImage: "/images/utilities/03-truong-hoc-khu-an-quy.jpg",
    popoverOffset: { left: "-186px", top: "40px" }
  },
  { 
    name: "14. Trung tâm Sức khỏe", 
    x: "36.68%", y: "40.19%", 
    image: "/images/utilities/thumbnails/13-trung-tam-suc-khoe.jpg",
    largeImage: "/images/utilities/13-trung-tam-suc-khoe.jpg"
  },
  { 
    name: "16. Công viên chuyên đề", 
    x: "29.90%", y: "63.52%", 
    image: "/images/utilities/thumbnails/15-cong-vien-chuyen-de.jpg",
    largeImage: "/images/utilities/15-cong-vien-chuyen-de.jpg"
  },
  { 
    name: "Bến phà An Biên", 
    x: "58.40%", y: "25.80%", 
    image: "/images/utilities/thumbnails/8-ben-pha-an-bien.jpg",
    largeImage: "/images/utilities/8-ben-pha-an-bien.jpg"
  },
  { 
    name: "Bến phà An Hội", 
    x: "40.75%", y: "25.66%", 
    image: "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.jpg",
    largeImage: "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.jpg"
  },
  { 
    name: "Hồ cảnh quan Phú Quý", 
    x: "44.05%", y: "47.96%", 
    image: "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.jpg", 
    largeImage: "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.jpg",
    isGradient: true 
  },
];

export default function InternalUtilitiesSectionDesktop() {
  const [openPopovers, setOpenPopovers] = useState<string[]>([
    "4. Chợ hải sản",
    "13. Trường học"
  ]);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  const getNextIndex = (current: number) => {
    let next = (current + 1) % internalChips.length;
    while (!internalChips[next].image && next !== current) {
      next = (next + 1) % internalChips.length;
    }
    return next;
  };

  const getPrevIndex = (current: number) => {
    let prev = (current - 1 + internalChips.length) % internalChips.length;
    while (!internalChips[prev].image && prev !== current) {
      prev = (prev - 1 + internalChips.length) % internalChips.length;
    }
    return prev;
  };

  useEffect(() => {
    if (activeSlideIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSlideIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveSlideIndex((prev) => (prev !== null ? getPrevIndex(prev) : null));
      } else if (e.key === "ArrowRight") {
        setActiveSlideIndex((prev) => (prev !== null ? getNextIndex(prev) : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSlideIndex]);

  const togglePopover = (name: string) => {
    setOpenPopovers((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-transparent to-[rgba(0,78,104,0.2)] pointer-events-none z-10" />

      {/* Desktop Map Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `url(${imgFrame2}) lightgray -493px -212.917px / 151.354% 134.537% no-repeat`,
        }}
      />

      {/* ── Viewport-covering Map Chips Wrapper (locks coordinates exactly to background map) ── */}
      <div className="absolute left-[-493px] top-[-212.917px] w-[151.354vw] h-[134.537vh] pointer-events-none select-none z-0">
        {internalChips.map((chip, idx) => {
          const isSelected = openPopovers.includes(chip.name);
          return (
            <div key={idx} className={`absolute pointer-events-auto transition-all duration-300 ${isSelected ? "z-50" : "z-30"}`}
              style={{ left: chip.x, top: chip.y }}>
              <div
                onClick={() => {
                  if (chip.image) {
                    togglePopover(chip.name);
                  }
                }}
                className={`flex items-center px-3 py-1 rounded-full border border-[#95e8ff]
                            transition-all duration-300 text-[0.6vw] leading-none h-[24px]
                            font-be-vietnam font-medium tracking-wide whitespace-nowrap
                            shadow-[0px_4px_16.6px_0px_rgba(255,252,216,0.3)]
                            ${chip.image
                    ? "cursor-pointer hover:scale-105 hover:brightness-110 hover:shadow-[0px_4px_25px_0px_rgba(255,252,216,0.6)]"
                    : "cursor-default opacity-85"
                  }
                            ${chip.isGradient
                    ? "bg-gradient-to-b from-[#95e8ff] to-[rgba(253,255,217,0.5)] text-[#004e68]"
                    : "bg-gradient-to-b from-[#fffcd8] to-white text-[#004e68]"}`}
              >
                {chip.name}
              </div>

              {/* Popover (Only image card) */}
              {isSelected && (
                <div
                  className="absolute z-50 w-[318px] h-[179px] border-2 border-white rounded-[10px] overflow-hidden shadow-2xl pointer-events-auto transition-all duration-300"
                  style={chip.popoverOffset ? {
                    left: chip.popoverOffset.left,
                    top: chip.popoverOffset.top
                  } : {
                    left: "calc(50% - 159px)",
                    top: parseFloat(chip.y) < 30 ? "40px" : "-195px"
                  }}
                >
                  <img
                    src={chip.image}
                    alt={chip.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlideIndex(idx);
                    }}
                    className="absolute inset-0 w-full h-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Viewport-relative Content Overlay ── */}
      <div className="relative w-full h-full z-10 pointer-events-none">
        {/* Title badge & Left Title text (Desktop Only) */}
        <div className="absolute left-[3.75%] top-[21.3%] w-[309px] flex pointer-events-auto">
          {/* Description Text */}
          <div className="font-be-vietnam font-bold uppercase text-[30px] leading-[45px] bg-gradient-to-b from-[#95E8FF] to-[#FDFFD9] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] w-full">
            <p className="mb-0">hệ tiện ích</p>
            <p className="mb-0">lấy con người</p>
            <p className="mb-0">làm trung tâm</p>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Slider Modal */}
      {activeSlideIndex !== null && (() => {
        const chipsWithImages = internalChips.filter((c) => c.image);
        const currentSlideNumber = chipsWithImages.findIndex((c) => c.name === internalChips[activeSlideIndex].name) + 1;
        const totalSlidesCount = chipsWithImages.length;
        
        return (
          <div className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center select-none pointer-events-auto">
            {/* Close button */}
            <button
              onClick={() => setActiveSlideIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300 pointer-events-auto cursor-pointer p-2 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={() => {
                setActiveSlideIndex((prev) => (prev !== null ? getPrevIndex(prev) : null));
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 pointer-events-auto cursor-pointer p-4 bg-black/30 rounded-full hover:bg-black/50 focus:outline-none"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={() => {
                setActiveSlideIndex((prev) => (prev !== null ? getNextIndex(prev) : null));
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 pointer-events-auto cursor-pointer p-4 bg-black/30 rounded-full hover:bg-black/50 focus:outline-none"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image and Caption Container */}
            <div className="flex flex-col items-center max-w-[90vw] md:max-w-[80vw]">
              <img
                src={internalChips[activeSlideIndex].largeImage || internalChips[activeSlideIndex].image}
                alt={internalChips[activeSlideIndex].name}
                className="max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <h3 className="font-be-vietnam text-white text-lg md:text-xl font-bold uppercase mt-6 tracking-wide text-center">
                {internalChips[activeSlideIndex].name}
              </h3>
              <p className="font-be-vietnam text-white/60 text-xs md:text-sm mt-1">
                {currentSlideNumber} / {totalSlidesCount}
              </p>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
