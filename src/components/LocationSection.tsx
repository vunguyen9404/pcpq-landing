"use client";

import { useState } from "react";
import Image from "next/image";

const imgFrame1      = "/assets/1e7becd2dfb98576d9a5f30170fe52fad44665a0.png";
const imgLogoPcpq1   = "/assets/4cedd30840202ba4e2e21da8625f27eff263a639.png";
const imgIcon1       = "/assets/5cca987a359e74c9bf17924c0711c6181c204afd.svg";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

const locationChips = [
  { name: "KĐT Phú Cường Hoàng Gia",   type: "05",    x: "38.2%", y: "63.7%" },
  { name: "Chợ 30/4 Rạch Giá",         type: "05",    x: "4.8%",  y: "71.8%" },
  { name: "BV Bình An",                 type: "05",    x: "17.7%", y: "61.9%" },
  { name: "KĐT Đảo Phú Gia",            type: "10",    x: "51.1%", y: "53.1%" },
  { name: "KĐT Phú Cường",              type: "10",    x: "60.8%", y: "36.0%" },
  { name: "THCS & THPT Võ Văn Kiệt",   type: "10",    x: "55.0%", y: "41.6%" },
  { name: "Sophia Center",              type: "10",    x: "49.5%", y: "39.1%" },
  { name: "Uỷ ban Nhân dân",            type: "10",    x: "41.6%", y: "31.3%" },
  { name: "Trung tâm hành chính",       type: "10",    x: "35.1%", y: "42.0%" },
  { name: "Công An Tỉnh",              type: "10",    x: "47.3%", y: "34.7%" },
  { name: "Trường CĐ Sư phạm",         type: "15-20", x: "64.4%", y: "10.6%" },
  { name: "Sân bay Rạch Giá",          type: "15-20", x: "63.2%", y: "4.1%"  },
  { name: "Cao tốc 02",                type: "15-20", x: "55.9%", y: "8.9%"  },
  { name: "Hướng đi Cà Mau",           type: "15-20", x: "89.8%", y: "19.8%" },
  { name: "Quốc lộ 80",                type: "15-20", x: "14.7%", y: "25.9%" },
  { name: "BVĐK Kiên Giang",           type: "15-20", x: "38.0%", y: "47.0%" },
];

export default function LocationSection() {
  const [activeTimeFilter, setActiveTimeFilter] = useState<string | null>(null);

  return (
    <section
      id="location"
      className={OUTER}
      style={{ backgroundImage: `url(${imgFrame1})` }}
    >
      {/* Full-width top gradient overlay (on outer section) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004e68]/60 via-transparent to-transparent pointer-events-none" />

      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0`}>
        <p className="lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 text-right mt-16 lg:mt-0 z-10">
          vị trí & tiện ích
        </p>

        <div className="lg:absolute lg:left-[43.4%] lg:top-[72.1%] text-center mx-auto z-10">
          <h2 className="font-be-vietnam uppercase text-sm lg:text-[1vw] font-bold tracking-widest
                         bg-clip-text text-transparent bg-gradient-to-r from-[#95e8ff] to-[#fdffd9]">
            VỊ TRÍ & TIỆN ÍCH NGOẠI KHU
          </h2>
        </div>

        <div className="lg:absolute lg:left-[65.2%] lg:top-[51.6%] w-52 h-28 hidden lg:block z-10">
          <Image src={imgLogoPcpq1} alt="PCPQ Logo" fill className="object-contain" />
        </div>

        {/* Map chips */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {locationChips.map((chip, idx) => {
            const isVisible = activeTimeFilter === null || activeTimeFilter === chip.type;
            return (
              <div key={idx} className="absolute pointer-events-auto transition-all duration-300"
                style={{ left: chip.x, top: chip.y }}>
                <div className={`flex items-center px-3 py-1 rounded-full border border-[#95e8ff]/60
                                 shadow-lg transition-all duration-300 text-[0.65vw]
                                 font-be-vietnam font-semibold text-[#fffcd8] tracking-wider whitespace-nowrap
                                 ${chip.type === "05"    ? "bg-[#006844]" :
                                   chip.type === "10"    ? "bg-[#009ace]" : "bg-[#004e68]"}
                                 ${isVisible ? "opacity-100 scale-100" : "opacity-20 scale-90"}`}>
                  {chip.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile chip grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2 my-6 z-10">
          {locationChips.map((chip, idx) => (
            <div key={idx}
              className={`text-center p-2 rounded-xl border border-[#95e8ff]/20
                           text-xs font-semibold text-[#fffcd8]
                           ${chip.type === "05" ? "bg-[#006844]/80" :
                             chip.type === "10" ? "bg-[#009ace]/80" : "bg-[#004e68]/80"}`}>
              {chip.name}
            </div>
          ))}
        </div>

        {/* Time filter card */}
        <div className="lg:absolute lg:left-[80.7%] lg:top-[49.8%]
                        w-full lg:w-[16%]
                        bg-[#004e68]/80 backdrop-blur-md border border-white/10
                        rounded-2xl p-5 shadow-2xl flex flex-col gap-3 z-20 self-center">
          <h3 className="font-be-vietnam font-bold text-xs tracking-widest text-[#fffcd8] uppercase border-b border-white/10 pb-2">
            Liên kết vùng
          </h3>
          {[
            { key: "05",    label: "05 phút",      sub: "Y tế, giáo dục, thương mại lân cận",       bg: "bg-[#006844]" },
            { key: "10",    label: "10 phút",      sub: "Trung tâm hành chính Rạch Giá",            bg: "bg-[#009ace]" },
            { key: "15-20", label: "15 - 20 phút", sub: "Sân bay Rạch Giá, cao tốc, kết nối tỉnh", bg: "bg-[#004e68]" },
          ].map(f => (
            <button key={f.key}
              onClick={() => setActiveTimeFilter(activeTimeFilter === f.key ? null : f.key)}
              className={`flex items-center gap-2 p-2.5 rounded-xl border text-left w-full cursor-pointer
                          transition-all duration-300
                          ${activeTimeFilter === f.key
                            ? `${f.bg} border-[#95e8ff] shadow-lg`
                            : "bg-white/5 border-transparent hover:bg-white/10"}`}>
              <div className="w-4 h-4 relative shrink-0">
                <Image src={imgIcon1} alt="pin" fill className="object-contain" />
              </div>
              <div>
                <p className="font-be-vietnam font-bold text-sm text-[#fffcd8]">{f.label}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{f.sub}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="lg:absolute lg:left-[23.4%] lg:top-[79.2%] lg:w-[52.8%]
                      font-be-vietnam font-bold text-center text-xs lg:text-[0.9vw] leading-relaxed
                      text-transparent bg-clip-text bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                      py-4 z-10 self-center">
          KĐT Phú Cường Phú Quý sở hữu lợi thế lớn khi nằm ngay cửa ngõ phía Đông Nam của trung tâm
          TP. Rạch Giá, kế thừa toàn bộ hệ thống tiện ích đã phát triển của Khu đô thị Phú Cường và
          khu trung tâm thành phố.
        </p>
      </div>
    </section>
  );
}
