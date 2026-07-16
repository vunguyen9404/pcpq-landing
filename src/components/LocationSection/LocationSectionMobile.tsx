"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgFrame1Mobile = "/assets/1e7becd2dfb98576d9a5f30170fe52fad44665a0.jpg";
const imgIcon1 = "/assets/5cca987a359e74c9bf17924c0711c6181c204afd.svg";

export default function LocationSectionMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTimeFilter, setActiveTimeFilter] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    // Staggered push-up animations
    const elements = el.querySelectorAll(".animate-location-section-mobile");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="utilities"
      ref={containerRef}
      className="relative w-full bg-[#004e68] pt-[12px] pb-[40px] flex flex-col gap-6 overflow-hidden"
    >
      {/* Title */}
      <div className="animate-location-section-mobile opacity-0 flex justify-center w-full px-[21px]">
        <h3
          className="font-be-vietnam uppercase text-white select-none text-center"
          style={{
            fontSize: "20px",
            fontWeight: 600,
            textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
            lineHeight: "normal",
          }}
        >
          TIỆN ÍCH NGOẠI KHU
        </h3>
      </div>

      {/* Connection Map Video & Fallback Image */}
      <div className="animate-location-section-mobile opacity-0 relative w-full overflow-hidden">
        <video
          src="/video/tien-ich-bg-video.mp4"
          poster={imgFrame1Mobile}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-auto object-cover block select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004e68]/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2-Column Content Block (Description & Timeline) */}
      <div className="animate-location-section-mobile opacity-0 px-[21px] w-full grid grid-cols-2 gap-[24px] items-center mt-2">
        {/* Left Column: Biography Description */}
        <div className="pl-[40px] pr-[10px]">
          <p
            className="font-be-vietnam select-none text-justify"
            style={{
              color: "#FFFCD8",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "17px",
            }}
          >
            Khu đô thị biển Phú Cường Phú Quý sở hữu vị trí chiến lược, dễ dàng tiếp cận các trung tâm hành chính, y tế, giáo dục, thương mại, dịch vụ và các đầu mối giao thông trọng điểm - không chỉ rút ngắn mọi hành trình di chuyển mà còn mở ra nhịp sống năng động và kết nối bền vững cho người dân.
          </p>
        </div>

        {/* Right Column: Timeline Cards */}
        <div className="relative flex flex-col gap-3 py-1 select-none">
          {/* Background connecting line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[1px] bg-white/25" />

          {/* 05 mins */}
          <div
            onClick={() => setActiveTimeFilter(activeTimeFilter === "05" ? null : "05")}
            className={`relative pl-8 cursor-pointer transition-all duration-300 ${activeTimeFilter && activeTimeFilter !== "05" ? "opacity-40" : "opacity-100"}`}
          >
            <div className="absolute left-0 top-0.5 w-6 h-6">
              <img src={imgIcon1} alt="pin" className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-be-vietnam font-bold text-[14px] text-[#fdffd9] leading-none mb-1">05 phút</h4>
              <div className="font-be-vietnam text-[10px] leading-[15px] text-[#fffcd8]/85 uppercase font-normal tracking-wide space-y-0.5">
                <p className="m-0">TRƯỜNG VÕ VĂN KIỆT</p>
                <p className="m-0">SOPHIA CENTER</p>
                <p className="m-0">CÔNG AN TỈNH</p>
                <p className="m-0">BỆNH VIỆN ĐA KHOA</p>
                <p className="m-0">CV PHÚ CƯỜNG LAND</p>
                <p className="m-0">QUẢNG TRƯỜNG PHÚ GIA</p>
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
              <h4 className="font-be-vietnam font-bold text-[14px] text-[#fdffd9] leading-none mb-1">10 phút</h4>
              <div className="font-be-vietnam text-[10px] leading-[15px] text-[#fffcd8]/85 uppercase font-normal tracking-wide space-y-0.5">
                <p className="m-0">TỈNH ỦY AN GIANG</p>
                <p className="m-0">QUẢNG TRƯỜNG TRẦN QUANG KHẢI</p>
                <p className="m-0">CHỢ TẮC RÁNG</p>
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
              <h4 className="font-be-vietnam font-bold text-[14px] text-[#fdffd9] leading-none mb-1">15-20 phút</h4>
              <div className="font-be-vietnam text-[10px] leading-[15px] text-[#fffcd8]/85 uppercase font-normal tracking-wide space-y-0.5">
                <p className="m-0">SÂN BAY RẠCH GIÁ</p>
                <p className="m-0">BỆNH VIỆN BÌNH AN</p>
                <p className="m-0">BẾN TÀU CAO TỐC</p>
                <p className="m-0">CHỢ RẠCH GIÁ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
