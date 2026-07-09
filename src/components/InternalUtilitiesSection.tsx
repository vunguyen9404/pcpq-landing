"use client";

import { useState } from "react";
import Image from "next/image";

const imgFrame2 = "/assets/412c60f73589b8be55d0595b8626902a22d59955.png";
const imgPcpq = "/assets/75b906d0e6702d36d198948691355b25b0a0c2f7.png";

const OUTER = "relative w-full h-screen overflow-hidden";
const INNER = "relative w-full h-full max-w-[1920px] lg:max-w-none mx-auto";

const internalChips = [
  { name: "1. Cổng chào",                x: "68.31%", y: "68.75%", image: "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.png" },
  { name: "2. Sale Gallery",             x: "63.87%", y: "71.36%", image: "/assets/12a5e3f1a9056d369a2d8fe5011d0b016e6cf234.png" },
  { name: "3. Trường học",               x: "57.98%", y: "67.37%", image: "/assets/63803aa6f621a871b4ccd02d4007862c53d7a3d4.png" },
  { 
    name: "4. Chợ hải sản",              
    x: "68.83%", y: "55.40%", 
    image: "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.png",
    popoverOffset: { left: "-2px", top: "-188px" }
  },
  { name: "5. Bến tàu",                  x: "64.49%", y: "49.41%", image: "/assets/9fc0c5fcbb6bcdd4e7dc0b83088fff297f031f42.png" },
  { name: "6. Trung tâm thể thao",       x: "60.12%", y: "40.32%", image: "/assets/6d7cded6d709195f9bd4b61ab0054ceddaf9827d.png" },
  { name: "8. Chuỗi F&B Nổi",            x: "57.50%", y: "49.62%", image: "/assets/29f14bf135bc3220d8b07cd31de9f0ead5f3e7ad.png" },
  { name: "9. Trung tâm thương mại",      x: "51.31%", y: "53.33%", image: "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.png" },
  { name: "10. Trung tâm thương mại",     x: "51.03%", y: "44.32%", image: "/assets/04195bc0bad3f52644767a492c62b5d2473f1f12.png" },
  { name: "11. Trung tâm Giáo dục",      x: "51.00%", y: "32.00%", image: "/assets/262042861f5dcd8037aeef0af0f2b5af43aa0a1c.png" },
  { name: "12. Quảng trường",            x: "51.00%", y: "25.66%", image: "/assets/2da6ff5d0a6d8e434f9f82e06e7290236d7edf0e.png" },
  { 
    name: "13. Trường học",               
    x: "42.88%", y: "69.30%", 
    image: "/assets/4b3598962b1f44acaa07611f651d661e5d42b912.png",
    popoverOffset: { left: "-186px", top: "40px" }
  },
  { name: "14. Trung tâm Sức khỏe",      x: "36.68%", y: "40.19%", image: "/assets/eeb19d7b3474aadf9ee7eb8a13c4e278ee690349.png" },
  { name: "16. Công viên chuyên đề",      x: "29.90%", y: "63.52%", image: "/assets/0aaa1e6e5fe25e77a8640d92e7f3b17766201a15.png" },
  { name: "Bến phà An Biên",              x: "58.40%", y: "25.80%", image: "/assets/55fd4fdb5f8d7974813ad1ea329ff4ca25384553.png" },
  { name: "Bến phà An Hội",              x: "40.75%", y: "25.66%", image: "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.png" },
  { name: "Hồ cảnh quan Phú Quý",        x: "44.05%", y: "47.96%", image: "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.png", isGradient: true },
];

export default function InternalUtilitiesSection() {
  const [openPopovers, setOpenPopovers] = useState<string[]>([
    "4. Chợ hải sản",
    "13. Trường học"
  ]);

  const togglePopover = (name: string) => {
    setOpenPopovers((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <section 
      id="internal-utilities" 
      className={OUTER}
      style={{
        background: `url(${imgFrame2}) lightgray -493px -212.917px / 151.354% 134.537% no-repeat`,
      }}
    >
      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-transparent to-[rgba(0,78,104,0.2)] pointer-events-none" />

      {/* ── Viewport-covering Map Chips Wrapper (locks coordinates exactly to background map) ── */}
      <div className="absolute left-[-493px] top-[-212.917px] w-[151.354vw] h-[134.537vh] pointer-events-none select-none hidden lg:block z-0">
        {internalChips.map((chip, idx) => {
          const isSelected = openPopovers.includes(chip.name);
          return (
            <div key={idx} className={`absolute pointer-events-auto transition-all duration-300 ${isSelected ? "z-50" : "z-30"}`}
              style={{ left: chip.x, top: chip.y }}>
              <div 
                onClick={() => togglePopover(chip.name)}
                className={`flex items-center px-3 py-1 rounded-full border border-[#95e8ff]
                            transition-all duration-300 text-[0.6vw] leading-none h-[24px]
                            font-be-vietnam font-medium tracking-wide whitespace-nowrap
                            shadow-[0px_4px_16.6px_0px_rgba(255,252,216,0.3)]
                            cursor-pointer hover:scale-105 hover:brightness-110 hover:shadow-[0px_4px_25px_0px_rgba(255,252,216,0.6)]
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
                  <Image src={chip.image} alt={chip.name} fill className="object-cover" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Viewport-relative Content Overlay ── */}
      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0 z-10 pointer-events-none`}>
        {/* Logo PCPQ (Desktop Only, floats top-left) */}
        <div className="hidden lg:block absolute left-[3.65%] top-[4.17%] w-[161px] h-[100px] pointer-events-auto shadow-md">
          <Image src={imgPcpq} alt="PCPQ Logo" fill className="object-contain" />
        </div>

        {/* Title badge & Left Title text (Desktop Only) */}
        <div className="absolute left-[4.58%] top-[27.59%] w-[497px] flex flex-col items-start gap-6 hidden lg:flex pointer-events-auto">
          {/* Title Badge */}
          <div className="bg-gradient-to-r from-[#004e68] to-[#009ace] border border-[#95e8ff] rounded-[8px] w-[300px] h-[41px] shadow-lg flex items-center justify-center">
            <h2 className="font-be-vietnam text-center text-[20px] not-italic font-medium leading-[20px] tracking-[0.1px] uppercase text-[#FFFCD8]">
              vị trí & tiện ích nội khu
            </h2>
          </div>

          {/* Description Text */}
          <div className="font-be-vietnam font-bold uppercase text-[30px] leading-[45px] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] bg-clip-text text-transparent w-full">
            <p className="mb-0">hệ tiện ích</p>
            <p className="mb-0">lấy con người</p>
            <p className="mb-0">làm trung tâm</p>
          </div>
        </div>

        {/* Mobile Title Badge & Description */}
        <div className="lg:hidden w-full flex flex-col items-center gap-6 mt-16 z-10 px-4 pointer-events-auto">
          <div className="bg-gradient-to-r from-[#004e68] to-[#009ace] border border-[#95e8ff] rounded-[8px] px-6 py-2 shadow-lg flex items-center justify-center">
            <h2 className="font-be-vietnam text-center text-sm font-semibold uppercase text-[#FFFCD8]">
              tiện ích nội khu
            </h2>
          </div>
          <div className="font-be-vietnam font-bold uppercase text-center text-xl bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] bg-clip-text text-transparent w-full">
            hệ tiện ích lấy con người làm trung tâm
          </div>
        </div>

        {/* Mobile-Only chip grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2 my-6 z-10 pointer-events-auto overflow-y-auto max-h-[40vh] p-2 bg-[#004e68]/40 border border-white/5 rounded-xl">
          {internalChips.map((chip, idx) => (
            <div key={idx}
              className={`text-center p-2.5 rounded-xl border border-[#95e8ff]/20
                           text-[11px] font-semibold text-[#004e68]
                           ${chip.isGradient
                  ? "bg-gradient-to-b from-[#95e8ff] to-[rgba(253,255,217,0.5)]"
                  : "bg-gradient-to-b from-[#fffcd8] to-white"}`}>
              {chip.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
