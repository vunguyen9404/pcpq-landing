"use client";

import { useState } from "react";
import Image from "next/image";

const imgFrame1      = "/assets/1e7becd2dfb98576d9a5f30170fe52fad44665a0.png";
const imgLogoPcpq1   = "/assets/4cedd30840202ba4e2e21da8625f27eff263a639.png";
const imgIcon1       = "/assets/5cca987a359e74c9bf17924c0711c6181c204afd.svg";

const OUTER = "relative w-full h-screen overflow-hidden bg-[#004e68]";
const INNER = "relative w-full h-full max-w-[1920px] lg:max-w-none mx-auto";

const locationChips = [
  { name: "KĐT Phú Cường Hoàng Gia",   type: "05",    filterType: "05",    x: "38.2%", y: "63.7%", image: "/assets/55fd4fdb5f8d7974813ad1ea329ff4ca25384553.png" },
  { name: "Chợ 30/4 Rạch Giá",         type: "10",    filterType: "15-20", x: "4.8%",  y: "71.8%", image: "/assets/262042861f5dcd8037aeef0af0f2b5af43aa0a1c.png" },
  { name: "BV Bình An",                 type: "15-20", filterType: "15-20", x: "17.7%", y: "61.9%", image: "/assets/2da6ff5d0a6d8e434f9f82e06e7290236d7edf0e.png" },
  { name: "KĐT Đảo Phú Gia",            type: "05",    filterType: "05",    x: "51.1%", y: "53.1%", image: "/assets/4b3598962b1f44acaa07611f651d661e5d42b912.png" },
  { name: "KĐT Phú Cường",              type: "05",    filterType: "05",    x: "60.8%", y: "36.0%", image: "/assets/58ab1eff1ecabadf4631b91d5f2a8b8a5daa00f7.png" },
  { name: "THCS & THPT Võ Văn Kiệt",   type: "15-20", filterType: "05",    x: "55.0%", y: "41.6%", image: "/assets/12a5e3f1a9056d369a2d8fe5011d0b016e6cf234.png" },
  { name: "Sophia Center",              type: "15-20", filterType: "05",    x: "49.5%", y: "39.1%", image: "/assets/63803aa6f621a871b4ccd02d4007862c53d7a3d4.png" },
  { name: "Uỷ ban Nhân dân",            type: "10",    filterType: "10",    x: "41.6%", y: "31.3%", image: "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.png" },
  { name: "Trung tâm hành chính",       type: "10",    filterType: "10",    x: "35.1%", y: "42.0%", image: "/assets/9fc0c5fcbb6bcdd4e7dc0b83088fff297f031f42.png" },
  { name: "Công An Tỉnh",              type: "10",    filterType: "05",    x: "47.3%", y: "34.7%", image: "/assets/6d7cded6d709195f9bd4b61ab0054ceddaf9827d.png" },
  { name: "Trường CĐ Sư phạm An Giang", type: "15-20", filterType: "15-20", x: "64.4%", y: "10.6%", image: "/assets/412c60f73589b8be55d0595b8626902a22d59955.png" },
  { name: "Sân bay Rạch Giá",          type: "15-20", filterType: "15-20", x: "63.2%", y: "4.1%",  image: "/assets/eeb19d7b3474aadf9ee7eb8a13c4e278ee690349.png" },
  { name: "Cao tốc 02",                type: "10",    filterType: "15-20", x: "55.9%", y: "8.9%",  image: "/assets/0aaa1e6e5fe25e77a8640d92e7f3b17766201a15.png" },
  { name: "Hướng đi Cà Mau",           type: "10",    filterType: "15-20", x: "89.8%", y: "19.8%", image: "/assets/29f14bf135bc3220d8b07cd31de9f0ead5f3e7ad.png" },
  { name: "Quốc lộ 80",                type: "10",    filterType: "15-20", x: "14.7%", y: "25.9%", image: "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.png" },
  { name: "BVĐK Kiên Giang",           type: "15-20", filterType: "05",    x: "38.0%", y: "47.0%", image: "/assets/04195bc0bad3f52644767a492c62b5d2473f1f12.png" },
];

export default function LocationSection() {
  const [activeTimeFilter, setActiveTimeFilter] = useState<string | null>(null);
  const [selectedChip, setSelectedChip] = useState<typeof locationChips[0] | null>(null);

  return (
    <section id="utilities" className={OUTER}>
      {/* ── Viewport-covering 16:9 Map & Align Container ── */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] pointer-events-none select-none overflow-hidden z-0">
        <Image 
          src={imgFrame1} 
          alt="Map Background" 
          fill 
          priority
          className="object-cover size-full"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-transparent to-[rgba(0,78,104,0.2)] pointer-events-none" />

        {/* Map chips (Desktop Only) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {locationChips.map((chip, idx) => {
            const isVisible = activeTimeFilter === null || activeTimeFilter === chip.filterType;
            const isSelected = selectedChip?.name === chip.name;
            return (
              <div key={idx} className={`absolute pointer-events-auto transition-all duration-300 ${isSelected ? "z-50" : "z-30"}`}
                style={{ left: chip.x, top: chip.y }}>
                <div 
                  onClick={() => setSelectedChip(isSelected ? null : chip)}
                  className={`flex items-center px-3 py-1 rounded-full border border-[#95e8ff]/60
                              transition-all duration-300 text-[0.65vw]
                              font-be-vietnam font-semibold text-[#fffcd8] tracking-wider whitespace-nowrap
                              shadow-[0px_4px_16.6px_0px_rgba(255,252,216,0.5)]
                              cursor-pointer hover:scale-105 hover:brightness-110 hover:shadow-[0px_4px_25px_0px_rgba(255,252,216,0.8)]
                              ${chip.type === "05"    ? "bg-[#006844]" :
                                chip.type === "10"    ? "bg-[#009ace]" : "bg-[#004e68]"}
                              ${isVisible ? "opacity-100 scale-100" : "opacity-20 scale-90"}`}
                >
                  {chip.name}
                </div>

                {/* Popover (Only image card) */}
                {isSelected && (
                  <div 
                    className="absolute z-50 w-[318px] h-[179px] border-2 border-white rounded-[10px] overflow-hidden shadow-2xl pointer-events-auto transition-all duration-300"
                    style={{
                      left: "calc(50% - 159px)",
                      top: parseFloat(chip.y) < 25 ? "40px" : "-195px"
                    }}
                  >
                    <Image src={chip.image} alt={chip.name} fill className="object-cover" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Logo PCPQ (Desktop Only, inside 16:9 container so it anchors to map landmark) */}
        <div className="absolute left-[65.15%] top-[51.57%] w-[240px] h-[131px] hidden lg:block z-10 pointer-events-auto">
          <Image src={imgLogoPcpq1} alt="PCPQ Logo" fill className="object-contain" />
        </div>

        {/* Title badge & description text (Desktop Only) */}
        <div className="absolute left-[52.1%] -translate-x-1/2 top-[72.1%] w-[1013px] flex flex-col items-center gap-[35px] z-10 hidden lg:flex pointer-events-auto">
          {/* Title Badge */}
          <div className="bg-gradient-to-r from-[#004e68] to-[#009ace] border border-[#95e8ff] rounded-[8px] w-[334px] h-[41px] shadow-lg flex items-center justify-center">
            <h2 className="font-be-vietnam text-center text-[20px] not-italic font-medium leading-[20px] tracking-[0.1px] uppercase text-[#FFFCD8]">
              vị trí & tiện ích ngoại khu
            </h2>
          </div>

          {/* Description Text */}
          <p className="font-be-vietnam text-center text-[24px] not-italic font-bold leading-[45px] uppercase bg-gradient-to-b from-[#95E8FF] to-[#FDFFD9] bg-clip-text text-transparent w-full">
            KĐT Phú Cường Phú Quý sở hữu lợi thế lớn khi nằm ngay cửa ngõ phía Đông Nam của trung tâm
            TP. Rạch Giá, kế thừa toàn bộ hệ thống tiện ích đã phát triển của Khu đô thị Phú Cường và
            khu trung tâm thành phố.
          </p>
        </div>
      </div>

      {/* ── Viewport-relative Content Overlay ── */}
      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0 z-10 pointer-events-none`}>
        {/* Mobile-Only Description & Title Grid */}
        <div className="lg:hidden w-full flex flex-col items-center gap-6 mt-16 z-10 px-4 pointer-events-auto">
          <p className="font-be-vietnam text-center text-xs not-italic font-bold leading-normal uppercase bg-gradient-to-b from-[#95E8FF] to-[#FDFFD9] bg-clip-text text-transparent w-full">
            KĐT Phú Cường Phú Quý sở hữu lợi thế lớn khi nằm ngay cửa ngõ phía Đông Nam của trung tâm
            TP. Rạch Giá, kế thừa toàn bộ hệ thống tiện ích đã phát triển của Khu đô thị Phú Cường và
            khu trung tâm thành phố.
          </p>
        </div>

        {/* Mobile-Only chip grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2 my-6 z-10 pointer-events-auto">
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

        {/* Desktop Only: Standalone Timeline Card (floats relative to viewport edge) */}
        <div className="hidden lg:block absolute right-[4.38%] top-[49.8%] w-[287px] h-[450px] bg-[rgba(0,78,104,0.5)] border border-white/10 backdrop-blur-md rounded-[13px] p-6 shadow-2xl z-20 select-none pointer-events-auto">
          <div className="relative flex flex-col h-full justify-between py-1">
            {/* Background connecting line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-[2px] border-l border-dashed border-[#95e8ff]/40" />

            {/* 05 mins */}
            <div 
              onClick={() => setActiveTimeFilter(activeTimeFilter === "05" ? null : "05")}
              className={`relative pl-8 cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "05" ? "opacity-40" : "opacity-100"}`}
            >
              <div className="absolute left-0 top-0.5 w-6 h-6">
                <Image src={imgIcon1} alt="pin" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-be-vietnam font-bold text-[20px] leading-normal text-[#fdffd9]">05 phút</h4>
                <div className="font-be-vietnam text-[10px] leading-[15px] text-[#fffcd8]/85 mt-1 uppercase font-normal tracking-wide">
                  <p className="mb-0">TRƯỜNG VÕ VĂN KIỆT</p>
                  <p className="mb-0">SOPHIA CENTER</p>
                  <p className="mb-0">CÔNG AN TỈNH</p>
                  <p className="mb-0">BỆNH VIỆN ĐA KHOA</p>
                  <p className="mb-0">CV PHÚ CƯỜNG LAND</p>
                  <p className="mb-0">QUẢNG TRƯỜNG PHÚ GIA</p>
                </div>
              </div>
            </div>

            {/* 10 mins */}
            <div 
              onClick={() => setActiveTimeFilter(activeTimeFilter === "10" ? null : "10")}
              className={`relative pl-8 cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "10" ? "opacity-40" : "opacity-100"}`}
            >
              <div className="absolute left-0 top-0.5 w-6 h-6">
                <Image src={imgIcon1} alt="pin" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-be-vietnam font-bold text-[20px] leading-normal text-[#fdffd9]">10 phút</h4>
                <div className="font-be-vietnam text-[10px] leading-[15px] text-[#fffcd8]/85 mt-1 uppercase font-normal tracking-wide">
                  <p className="mb-0">TỈNH ỦY AN GIANG</p>
                  <p className="mb-0">QUẢNG TRƯỜNG TRẦN QUANG KHẢI</p>
                  <p className="mb-0">CHỢ TẮC RÁNG</p>
                </div>
              </div>
            </div>

            {/* 15-20 mins */}
            <div 
              onClick={() => setActiveTimeFilter(activeTimeFilter === "15-20" ? null : "15-20")}
              className={`relative pl-8 cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "15-20" ? "opacity-40" : "opacity-100"}`}
            >
              <div className="absolute left-0 top-0.5 w-6 h-6">
                <Image src={imgIcon1} alt="pin" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-be-vietnam font-bold text-[20px] leading-normal text-[#fdffd9]">15-20 phút</h4>
                <div className="font-be-vietnam text-[10px] leading-[15px] text-[#fffcd8]/85 mt-1 uppercase font-normal tracking-wide">
                  <p className="mb-0">SÂN BAY RẠCH GIÁ</p>
                  <p className="mb-0">BỆNH VIỆN BÌNH AN</p>
                  <p className="mb-0">BẾN TÀU CAO TỐC</p>
                  <p className="mb-0">CHỢ RẠCH GIÁ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Only: Timeline Card */}
        <div className="lg:hidden w-full bg-[rgba(0,78,104,0.8)] border border-white/10 backdrop-blur-md rounded-[13px] p-6 shadow-2xl flex flex-col gap-4 z-20 my-6 select-none pointer-events-auto">
          <div className="relative flex flex-col gap-6 py-1">
            {/* Background connecting line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-[2px] border-l border-dashed border-[#95e8ff]/40" />

            {/* 05 mins */}
            <div 
              onClick={() => setActiveTimeFilter(activeTimeFilter === "05" ? null : "05")}
              className={`relative pl-8 cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "05" ? "opacity-40" : "opacity-100"}`}
            >
              <div className="absolute left-0 top-0.5 w-6 h-6">
                <Image src={imgIcon1} alt="pin" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-be-vietnam font-bold text-lg text-[#fdffd9]">05 phút</h4>
                <div className="font-be-vietnam text-[11px] leading-[16px] text-[#fffcd8]/85 mt-1 uppercase font-normal tracking-wide">
                  <p className="mb-0">TRƯỜNG VÕ VĂN KIỆT</p>
                  <p className="mb-0">SOPHIA CENTER</p>
                  <p className="mb-0">CÔNG AN TỈNH</p>
                  <p className="mb-0">BỆNH VIỆN ĐA KHOA</p>
                  <p className="mb-0">CV PHÚ CƯỜNG LAND</p>
                  <p className="mb-0">QUẢNG TRƯỜNG PHÚ GIA</p>
                </div>
              </div>
            </div>

            {/* 10 mins */}
            <div 
              onClick={() => setActiveTimeFilter(activeTimeFilter === "10" ? null : "10")}
              className={`relative pl-8 cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "10" ? "opacity-40" : "opacity-100"}`}
            >
              <div className="absolute left-0 top-0.5 w-6 h-6">
                <Image src={imgIcon1} alt="pin" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-be-vietnam font-bold text-lg text-[#fdffd9]">10 phút</h4>
                <div className="font-be-vietnam text-[11px] leading-[16px] text-[#fffcd8]/85 mt-1 uppercase font-normal tracking-wide">
                  <p className="mb-0">TỈNH ỦY AN GIANG</p>
                  <p className="mb-0">QUẢNG TRƯỜNG TRẦN QUANG KHẢI</p>
                  <p className="mb-0">CHỢ TẮC RÁNG</p>
                </div>
              </div>
            </div>

            {/* 15-20 mins */}
            <div 
              onClick={() => setActiveTimeFilter(activeTimeFilter === "15-20" ? null : "15-20")}
              className={`relative pl-8 cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "15-20" ? "opacity-40" : "opacity-100"}`}
            >
              <div className="absolute left-0 top-0.5 w-6 h-6">
                <Image src={imgIcon1} alt="pin" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-be-vietnam font-bold text-lg text-[#fdffd9]">15-20 phút</h4>
                <div className="font-be-vietnam text-[11px] leading-[16px] text-[#fffcd8]/85 mt-1 uppercase font-normal tracking-wide">
                  <p className="mb-0">SÂN BAY RẠCH GIÁ</p>
                  <p className="mb-0">BỆNH VIỆN BÌNH AN</p>
                  <p className="mb-0">BẾN TÀU CAO TỐC</p>
                  <p className="mb-0">CHỢ RẠCH GIÁ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
