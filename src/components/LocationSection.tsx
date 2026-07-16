"use client";

import { useState } from "react";

const imgFrame1 = "/assets/1e7becd2dfb98576d9a5f30170fe52fad44665a0.jpg";
const imgIcon1 = "/assets/5cca987a359e74c9bf17924c0711c6181c204afd.svg";

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-[#004e68]";
const INNER = "relative w-full h-auto lg:h-full max-w-[1920px] lg:max-w-none mx-auto";

export default function LocationSection() {
  const [activeTimeFilter, setActiveTimeFilter] = useState<string | null>(null);

  return (
    <section id="utilities" className={OUTER}>
      {/* ── Viewport-covering 16:9 Map & Align Container ── */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] pointer-events-none select-none overflow-hidden z-0">
        <video
          src="/video/tien-ich-bg-video.mp4"
          poster={imgFrame1}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover size-full"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-transparent to-[rgba(0,78,104,0.2)] pointer-events-none" />

        {/* Mobile Background Dark Overlay */}
        <div className="lg:hidden absolute inset-0 bg-[#004e68]/85 pointer-events-none z-0" />
      </div>

      {/* ── Viewport-relative Content Overlay ── */}
      <div className={`${INNER} flex flex-col lg:block p-6 md:p-12 lg:p-0 z-10 pointer-events-none`}>
        {/* Desktop Only: Left Description Card (floats relative to viewport edge) */}
        <div className="hidden lg:block absolute left-[3.75%] bottom-[8.33%] w-[358px] h-[196px] bg-gradient-to-b from-[rgba(0,78,104,0.2)] to-[rgba(0,154,206,0.2)] border border-white/10 backdrop-blur-md rounded-[10px] shadow-2xl pt-[22px] px-[30px] pb-[20px] z-20 select-none pointer-events-auto">
          <p className="font-be-vietnam font-normal text-[15px] leading-[20px] text-[#FFFCD8] text-justify">
            Khu đô thị biển Phú Cường Phú Quý sở hữu vị trí chiến lược, dễ dàng tiếp cận các trung tâm hành chính, y tế, giáo dục, thương mại, dịch vụ và các đầu mối giao thông trọng điểm - không chỉ rút ngắn mọi hành trình di chuyển mà còn mở ra nhịp sống năng động và kết nối bền vững cho người dân.
          </p>
        </div>

        {/* Desktop Only: Standalone Timeline Card (floats relative to viewport edge) */}
        <div className="hidden lg:block absolute right-[3.75%] bottom-[8.33%] w-[287px] h-[450px] bg-[rgba(0,78,104,0.5)] border border-white/10 backdrop-blur-md rounded-[13px] shadow-2xl z-20 select-none pointer-events-auto">
          {/* 05 mins Group */}
          <div
            onClick={() => setActiveTimeFilter(activeTimeFilter === "05" ? null : "05")}
            className={`cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "05" ? "opacity-40" : "opacity-100"}`}
          >
            {/* Heading */}
            <div className="absolute left-[24px] top-[34px] flex items-center gap-3">
              <div className="w-6 h-6">
                <img src={imgIcon1} alt="pin" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-be-vietnam font-bold text-[24px] text-[#FDFFD9] leading-normal">05 phút</h4>
            </div>
            
            {/* Content */}
            <div className="absolute left-[60px] top-[126px] -translate-y-1/2 flex flex-col font-be-vietnam font-normal text-[12px] leading-[18px] text-[#FFFCD8] uppercase">
              <p className="mb-0">TRƯỜNG VÕ VĂN KIỆT</p>
              <p className="mb-0">SOPHIA CENTER</p>
              <p className="mb-0">CÔNG AN TỈNH</p>
              <p className="mb-0">BỆNH VIỆN ĐA KHOA</p>
              <p className="mb-0">CV PHÚ CƯỜNG LAND</p>
              <p className="mb-0">QUẢNG TRƯỜNG PHÚ GIA</p>
            </div>

            {/* Line */}
            <div className="absolute left-[36px] top-[64px] h-[116px] w-[1px] bg-white/20" />
          </div>

          {/* 10 mins Group */}
          <div
            onClick={() => setActiveTimeFilter(activeTimeFilter === "10" ? null : "10")}
            className={`cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "10" ? "opacity-40" : "opacity-100"}`}
          >
            {/* Heading */}
            <div className="absolute left-[24px] top-[193px] flex items-center gap-3">
              <div className="w-6 h-6">
                <img src={imgIcon1} alt="pin" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-be-vietnam font-bold text-[24px] text-[#FDFFD9] leading-normal">10 phút</h4>
            </div>

            {/* Content */}
            <div className="absolute left-[60px] top-[258px] -translate-y-1/2 flex flex-col font-be-vietnam font-normal text-[12px] leading-[18px] text-[#FFFCD8] uppercase">
              <p className="mb-0">TỈNH ỦY AN GIANG</p>
              <p className="mb-0">QUẢNG TRƯỜNG TRẦN QUANG KHẢI</p>
              <p className="mb-0">CHỢ TẮC RÁNG</p>
            </div>

            {/* Line */}
            <div className="absolute left-[36px] top-[231px] h-[54px] w-[1px] bg-white/20" />
          </div>

          {/* 15-20 mins Group */}
          <div
            onClick={() => setActiveTimeFilter(activeTimeFilter === "15-20" ? null : "15-20")}
            className={`cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "15-20" ? "opacity-40" : "opacity-100"}`}
          >
            {/* Heading */}
            <div className="absolute left-[24px] top-[299px] flex items-center gap-3">
              <div className="w-6 h-6">
                <img src={imgIcon1} alt="pin" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-be-vietnam font-bold text-[24px] text-[#FDFFD9] leading-normal">15-20 phút</h4>
            </div>

            {/* Content */}
            <div className="absolute left-[60px] top-[373px] -translate-y-1/2 flex flex-col font-be-vietnam font-normal text-[12px] leading-[18px] text-[#FFFCD8] uppercase">
              <p className="mb-0">SÂN BAY RẠCH GIÁ</p>
              <p className="mb-0">BỆNH VIỆN BÌNH AN</p>
              <p className="mb-0">BẾN TÀU CAO TỐC</p>
              <p className="mb-0">CHỢ RẠCH GIÁ</p>
            </div>

            {/* Line */}
            <div className="absolute left-[36px] top-[329px] h-[80px] w-[1px] bg-white/20" />
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
                <img src={imgIcon1} alt="pin" className="absolute inset-0 w-full h-full object-contain" />
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
                <img src={imgIcon1} alt="pin" className="absolute inset-0 w-full h-full object-contain" />
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
                <img src={imgIcon1} alt="pin" className="absolute inset-0 w-full h-full object-contain" />
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
