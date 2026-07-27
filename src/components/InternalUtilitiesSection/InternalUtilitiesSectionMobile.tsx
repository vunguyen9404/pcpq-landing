"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// ─── Data ─────────────────────────────────────────────────────────────────────

const imgMap = "/assets/412c60f73589b8be55d0595b8626902a22d59955.jpg";

// Container: aspect-ratio 100/78 (~312px height on 400px screen)
// Map scaled ~1.35x & centered on project bounding box to crop out excess green fields
const MAP_OFFSET_X  = "-50.1vw";
const MAP_OFFSET_Y  = "-13.3vw";
const MAP_WRAPPER_W = "204.33vw";
const MAP_WRAPPER_H = "113.52vw";
const MAP_BG_SIZE_X = "204.33%";
const MAP_BG_SIZE_Y = "151.35%";

const internalChips = [
  {
    name: "3. Trường học",
    x: "57.98%", y: "67.37%",
    image: "/images/utilities/thumbnails/03-truong-hoc-khu-an-thinh.jpg",
    largeImage: "/images/utilities/03-truong-hoc-khu-an-thinh.jpg",
  },
  {
    name: "4. Chợ hải sản",
    x: "68.83%", y: "55.40%",
    image: "/images/utilities/thumbnails/5-cho-hai-san-2.jpg",
    largeImage: "/images/utilities/5-cho-hai-san-2.jpg",
  },
  {
    name: "5. Bến tàu",
    x: "64.49%", y: "49.41%",
    image: "/images/utilities/thumbnails/4-ben-cang-vfx.jpg",
    largeImage: "/images/utilities/4-ben-cang-vfx.jpg",
  },
  {
    name: "6. Trung tâm thể thao",
    x: "60.12%", y: "40.32%",
    image: "/images/utilities/thumbnails/trung_tam_the_thao.jpg",
    largeImage: "/images/utilities/trung_tam_the_thao.jpg",
  },
  {
    name: "8. Chuỗi F&B Nổi",
    x: "57.50%", y: "49.62%",
    image: "/images/utilities/thumbnails/9-chuoi-fb-noi.jpg",
    largeImage: "/images/utilities/9-chuoi-fb-noi.jpg",
  },
  {
    name: "9. Trung tâm thương mại",
    x: "51.31%", y: "53.33%",
    image: "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.jpg",
    largeImage: "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.jpg",
  },
  {
    name: "10. Trung tâm thương mại",
    x: "51.03%", y: "44.32%",
    image: "/images/utilities/thumbnails/10-dat-thuong-mai-khu-an-hoi.jpg",
    largeImage: "/images/utilities/10-dat-thuong-mai-khu-an-hoi.jpg",
  },
  {
    name: "11. Trung tâm Giáo dục",
    x: "51.00%", y: "32.00%",
    image: "/images/utilities/thumbnails/11-du-an-khu-phuc-hop-giao-duc.jpg",
    largeImage: "/images/utilities/11-du-an-khu-phuc-hop-giao-duc.jpg",
  },
  {
    name: "12. Quảng trường",
    x: "51.00%", y: "25.66%",
    image: "/images/utilities/thumbnails/12-quang-truong-bien-an-hoi.jpg",
    largeImage: "/images/utilities/12-quang-truong-bien-an-hoi.jpg",
  },
  {
    name: "13. Trường học",
    x: "42.88%", y: "69.30%",
    image: "/images/utilities/thumbnails/03-truong-hoc-khu-an-quy.jpg",
    largeImage: "/images/utilities/03-truong-hoc-khu-an-quy.jpg",
  },
  {
    name: "14. Trung tâm Sức khỏe",
    x: "36.68%", y: "40.19%",
    image: "/images/utilities/thumbnails/13-trung-tam-suc-khoe.jpg",
    largeImage: "/images/utilities/13-trung-tam-suc-khoe.jpg",
  },
  {
    name: "16. Công viên chuyên đề",
    x: "29.90%", y: "63.52%",
    image: "/images/utilities/thumbnails/15-cong-vien-chuyen-de.jpg",
    largeImage: "/images/utilities/15-cong-vien-chuyen-de.jpg",
  },
  {
    name: "Bến phà An Biên",
    x: "58.40%", y: "25.80%",
    image: "/images/utilities/thumbnails/8-ben-pha-an-bien.jpg",
    largeImage: "/images/utilities/8-ben-pha-an-bien.jpg",
  },
  {
    name: "Bến phà An Hội",
    x: "40.75%", y: "25.66%",
    image: "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.jpg",
    largeImage: "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.jpg",
    link: "https://duan.vrtour360.vn/PhuCuongPhuQuy/index.html?s=pano34504&/khu-phu-cuong-an-hoi.html",
  },
  {
    name: "Hồ cảnh quan Phú Quý",
    x: "44.05%", y: "47.96%",
    image: "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.jpg",
    largeImage: "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.jpg",
    isGradient: true,
    link: "https://duan.vrtour360.vn/PhuCuongPhuQuy/?s=pano34505&/ho-canh-quan-phu-quy.html",
  },
];

type Chip = typeof internalChips[number];
type PopoverPos = { left: number; top: number };

// ─── Main Component ───────────────────────────────────────────────────────────

export default function InternalUtilitiesSectionMobile() {
  const [activeChip, setActiveChip] = useState<Chip | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [popoverPos, setPopoverPos] = useState<PopoverPos | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const pinRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const chipsWithImg = internalChips.filter((c) => c.image);

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

  // ── Compute popover position from pin's DOM rect ───────────────────────────
  const computePopover = (chip: Chip): PopoverPos | null => {
    const pinEl = pinRefs.current.get(chip.name);
    const containerEl = containerRef.current;
    if (!pinEl || !containerEl) return null;

    const pinRect = pinEl.getBoundingClientRect();
    const cRect   = containerEl.getBoundingClientRect();
    const cW      = containerEl.offsetWidth;
    const cH      = containerEl.offsetHeight;

    const POPOVER_W = 164;
    const POPOVER_H = 112; // 94px image + 18px label

    // Center pin horizontally, clamp to container bounds
    const cx  = pinRect.left + pinRect.width / 2 - cRect.left;
    const left = Math.max(4, Math.min(cW - POPOVER_W - 4, cx - POPOVER_W / 2));

    // Show below pin tail if enough room, else above bubble top
    const pinBottom = pinRect.bottom - cRect.top; // tail tip y in container
    const pinTop    = pinRect.top    - cRect.top; // bubble top y in container
    const top = pinBottom + POPOVER_H + 6 <= cH
      ? pinBottom + 6                   // below pin
      : pinTop - POPOVER_H - 6;         // above pin

    return { left, top };
  };

  const handleSelect = (chip: Chip) => {
    if (chip.link) {
      window.open(chip.link, "_blank");
      return;
    }
    if (!chip.image) return;

    if (activeChip?.name === chip.name) {
      setActiveChip(null);
      setPopoverPos(null);
      return;
    }

    setActiveChip(chip);
    requestAnimationFrame(() => {
      setPopoverPos(computePopover(chip));
    });
  };

  const dismiss = () => {
    setActiveChip(null);
    setPopoverPos(null);
  };

  return (
    <div className="w-full flex flex-col gap-4 pt-[24px] pb-0 bg-[#004e68] relative z-10 animate-fade-in">

      {/* ── Title ──────────────────────────────────────────────────────────── */}
      <div className="flex justify-center w-full px-[21px]">
        <h3
          className="font-be-vietnam uppercase text-white select-none text-center"
          style={{
            fontSize: "20px",
            fontWeight: 600,
            textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
            lineHeight: "normal",
          }}
        >
          TIỆN ÍCH NỘI KHU
        </h3>
      </div>

      {/* ── Map ────────────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="w-full relative overflow-hidden"
        style={{ aspectRatio: "100 / 78" }}
        onClick={dismiss}
      >
        {/* Background map */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `url(${imgMap}) lightgray ${MAP_OFFSET_X} ${MAP_OFFSET_Y} / ${MAP_BG_SIZE_X} ${MAP_BG_SIZE_Y} no-repeat`,
          }}
        />

        {/* Chips wrapper — same coordinate system as Desktop */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            left: MAP_OFFSET_X,
            top: MAP_OFFSET_Y,
            width: MAP_WRAPPER_W,
            height: MAP_WRAPPER_H,
            zIndex: 10,
          }}
        >
          {internalChips.map((chip, idx) => {
            const isActive  = activeChip?.name === chip.name;
            const isDimmed  = !!activeChip && !isActive;
            const numMatch  = chip.name.match(/^(\d+)\./);
            const pinLabel  = numMatch ? numMatch[1] : "★";

            return (
              <div
                key={idx}
                className="absolute pointer-events-auto"
                style={{
                  left: chip.x,
                  top:  chip.y,
                  transform: "translate(-50%, -100%)",
                  zIndex: isActive ? 30 : 10,
                  opacity: isDimmed ? 0.45 : 1,
                  transition: "opacity 300ms ease",
                }}
              >
                <button
                  ref={(el) => {
                    if (el) pinRefs.current.set(chip.name, el);
                    else pinRefs.current.delete(chip.name);
                  }}
                  onClick={(e) => { e.stopPropagation(); handleSelect(chip); }}
                  className="flex flex-col items-center"
                  aria-label={chip.name}
                >
                  {/* Pin bubble — subtle scale + glow when active */}
                  <div
                    className={`relative flex items-center justify-center rounded-full border-2
                                font-be-vietnam font-bold text-[11px] leading-none
                                ${isActive
                        ? "w-[28px] h-[28px] border-white bg-[#95e8ff] text-[#004e68]"
                        : chip.isGradient
                          ? "w-[24px] h-[24px] border-[#95e8ff] bg-gradient-to-b from-[#95e8ff] to-[rgba(253,255,217,0.9)] text-[#004e68]"
                          : "w-[24px] h-[24px] border-[#95e8ff] bg-[#004e68]/90 text-[#95e8ff]"
                      }`}
                    style={{
                      transition: "all 300ms cubic-bezier(0.34,1.56,0.64,1)",
                      transform: isActive ? "scale(1.2)" : "scale(1)",
                      boxShadow: isActive
                        ? "0 0 0 3px rgba(149,232,255,0.35), 0 0 12px rgba(149,232,255,0.6)"
                        : "0 1px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {pinLabel}

                    {/* Pulse ring — only on active */}
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full border-2 border-[#95e8ff]"
                        style={{ animation: "pinPulse 1.6s ease-out infinite" }}
                      />
                    )}
                  </div>

                  {/* Pin tail */}
                  <div
                    className={`w-0 h-0 -mt-[1px]
                                border-l-[4px] border-l-transparent
                                border-r-[4px] border-r-transparent
                                border-t-[6px] transition-colors duration-300
                                ${isActive ? "border-t-white" : "border-t-[#95e8ff]"}`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* ── Inline popover ─────────────────────────────────────────────── */}
        {activeChip && popoverPos && activeChip.image && (
          <div
            className="absolute z-40 pointer-events-auto cursor-pointer"
            style={{ left: popoverPos.left, top: popoverPos.top }}
            onClick={(e) => {
              e.stopPropagation();
              const idx = internalChips.findIndex((c) => c.name === activeChip.name);
              if (idx !== -1) setActiveSlideIndex(idx);
            }}
          >
            <div
              className="rounded-xl overflow-hidden border-2 border-white/90
                         shadow-[0_4px_24px_rgba(0,0,0,0.55)] group hover:scale-[1.02] transition-transform"
              style={{
                width: "164px",
                animation: "popoverIn 220ms cubic-bezier(0.34,1.56,0.64,1) both",
              }}
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={activeChip.image}
                  alt={activeChip.name}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ height: "94px" }}
                />
                {/* Zoom hint icon overlay */}
                <div className="absolute top-1.5 right-1.5 bg-black/50 backdrop-blur-sm rounded-full p-1 text-white/80">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="px-2.5 py-[6px] bg-[#003a4f]/95 backdrop-blur-sm">
                <p className="font-be-vietnam text-white text-[9px] font-semibold uppercase tracking-wide leading-tight">
                  {activeChip.name.replace(/^\d+\.\s*/, "")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── VR360 button (placed immediately under Map) ───────────────────────── */}
      <div className="flex justify-center px-4">
        <button
          onClick={() => window.open("https://duan.vrtour360.vn/PhuCuongPhuQuy/", "_blank")}
          className="flex items-center justify-center w-full h-[46px] rounded-full border border-[#95e8ff]
                     bg-gradient-to-b from-[#95e8ff] to-[#FDFFD9] text-[#004e68]
                     font-be-vietnam font-semibold uppercase text-[13px] tracking-wide
                     shadow-[0px_4px_16px_rgba(255,252,216,0.3)] active:scale-95 transition-transform"
        >
          Tham quan VR360
        </button>
      </div>

      {/* ── Utility list ───────────────────────────────────────────────────── */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-[6px]">
          {chipsWithImg.map((chip) => {
            const isActive = activeChip?.name === chip.name;
            const numMatch = chip.name.match(/^(\d+)\./);
            const num = numMatch ? numMatch[1] : "★";

            return (
              <button
                key={chip.name}
                onClick={() => handleSelect(chip)}
                className={`flex items-center gap-2 px-3 py-[9px] rounded-xl border text-left
                            active:scale-[0.97] transition-all duration-200
                            ${isActive
                    ? "border-[#95e8ff] bg-[#95e8ff]/12 shadow-[0_0_10px_rgba(149,232,255,0.18)]"
                    : "border-white/12 bg-white/[0.03]"}`}
              >
                <span
                  className={`flex-shrink-0 w-[18px] h-[18px] rounded-full border flex items-center justify-center
                               font-be-vietnam text-[8px] font-bold transition-all duration-200
                               ${isActive
                      ? "border-[#95e8ff] bg-[#95e8ff] text-[#004e68]"
                      : "border-[#95e8ff]/40 text-[#95e8ff]"}`}
                >
                  {num}
                </span>
                <span
                  className={`font-be-vietnam text-[11px] font-medium leading-tight transition-colors duration-200
                               ${isActive ? "text-[#95e8ff]" : "text-white/70"}`}
                >
                  {chip.name.replace(/^\d+\.\s*/, "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Fullscreen Lightbox Slider Modal (Rendered at Body root via Portal) ──── */}
      {activeSlideIndex !== null && mounted && createPortal(
        <div
          className="fixed inset-0 bg-black/95 z-[999999] flex flex-col items-center justify-center select-none pointer-events-auto touch-none"
          onClick={() => setActiveSlideIndex(null)}
          onTouchStart={(e) => {
            (window as any)._lightboxTouchStartX = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const startX = (window as any)._lightboxTouchStartX;
            if (startX !== undefined && startX !== null) {
              const diffX = e.changedTouches[0].clientX - startX;
              if (diffX < -40) {
                setActiveSlideIndex((prev) => (prev !== null ? getNextIndex(prev) : null));
              } else if (diffX > 40) {
                setActiveSlideIndex((prev) => (prev !== null ? getPrevIndex(prev) : null));
              }
            }
            (window as any)._lightboxTouchStartX = null;
          }}
        >
          {/* Close button - High z-index to never be covered by page header */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveSlideIndex(null);
            }}
            className="absolute top-5 right-5 z-[1000000] text-white/90 hover:text-white transition-all duration-200 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full border border-white/20 active:scale-90 shadow-lg cursor-pointer flex items-center justify-center"
            aria-label="Đóng"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Content: Image with subtle overlay Nav buttons */}
          <div
            className="relative flex flex-col items-center max-w-[92vw] z-[999999]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl border border-white/15">
              <img
                key={activeSlideIndex}
                src={internalChips[activeSlideIndex].largeImage || internalChips[activeSlideIndex].image}
                alt={internalChips[activeSlideIndex].name}
                className="max-h-[68vh] w-auto object-contain animate-fade-in"
              />

              {/* Subtle Previous Button on Image */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSlideIndex((prev) => (prev !== null ? getPrevIndex(prev) : null));
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-200 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center active:scale-90 shadow-md cursor-pointer"
                aria-label="Ảnh trước"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Subtle Next Button on Image */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSlideIndex((prev) => (prev !== null ? getNextIndex(prev) : null));
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-200 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center active:scale-90 shadow-md cursor-pointer"
                aria-label="Ảnh tiếp"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Title & Index */}
            <h3 className="font-be-vietnam text-white text-base font-bold uppercase mt-4 tracking-wide text-center">
              {internalChips[activeSlideIndex].name.replace(/^\d+\.\s*/, '')}
            </h3>
            <p className="font-be-vietnam text-[#95e8ff] text-xs font-semibold mt-1">
              {chipsWithImg.findIndex((c) => c.name === internalChips[activeSlideIndex].name) + 1} / {chipsWithImg.length}
            </p>
          </div>
        </div>,
        document.body
      )}

      {/* ── Animations ─────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes pinPulse {
          0%   { transform: scale(1);    opacity: 0.8; }
          70%  { transform: scale(2.4);  opacity: 0; }
          100% { transform: scale(2.4);  opacity: 0; }
        }
        @keyframes popoverIn {
          from { opacity: 0; transform: scale(0.88) translateY(4px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
}
