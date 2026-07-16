"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const img76 = "/assets/4b3598962b1f44acaa07611f651d661e5d42b912.jpg";
const imgChuDauTu = "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.jpg";
const imgAsset212X1 = "/assets/04195bc0bad3f52644767a492c62b5d2473f1f12.jpg";
const imgPchgLogo = "/images/pchg.png";
const imgMapTienIch5 = "/assets/9fc0c5fcbb6bcdd4e7dc0b83088fff297f031f42.jpg";

export default function DeveloperSectionMobile() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    // Staggered stack push-up animation for all sections on mobile
    const elements = el.querySelectorAll(".animate-dev-mobile");
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

    // Force ScrollTrigger refresh after component mounts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="developer"
      ref={containerRef}
      className="relative w-full bg-[#004e68] pt-[40px] pb-0 flex flex-col gap-6 overflow-hidden"
    >
      {/* Title */}
      <div className="animate-dev-mobile opacity-0 flex flex-col items-center w-full relative z-10">
        <h3
          className="font-be-vietnam uppercase text-white select-none text-center w-full block"
          style={{
            fontSize: "20px",
            fontWeight: 600,
            textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
            lineHeight: "normal",
          }}
        >
          VỀ CHỦ ĐẦU TƯ
        </h3>
      </div>

      {/* Logo */}
      <img
        src={imgPchgLogo}
        alt="Phu Cuong Hoang Gia"
        className="animate-dev-mobile opacity-0 mx-auto block max-w-full object-contain select-none relative z-10"
        style={{
          width: "350px",
          height: "128px",
          aspectRatio: "175/64",
        }}
      />

      {/* Biography */}
      <div className="px-[21px] animate-dev-mobile opacity-0 font-be-vietnam text-white text-[12px] leading-[20px] text-justify space-y-4 w-full relative z-10">
        <p className="m-0 leading-[20px] select-none">
          Kế thừa tầm nhìn phát triển đô thị biển của Tập đoàn Phú Cường, Phú Cường Hoàng Gia không ngừng khai mở những không gian sống hiện đại, nơi giá trị an cư, kinh doanh và cộng đồng cùng phát triển bền vững. Công ty Cổ phần Phú Cường Hoàng Gia được phát triển từ Công ty TNHH MTV Hoàng Gia, thành lập ngày 24/04/2020 với định hướng hoạt động trong lĩnh vực đầu tư và phát triển bất động sản.
        </p>
        <p className="m-0 leading-[20px] select-none">
          Đến ngày 14/07/2022, doanh nghiệp chính thức chuyển đổi mô hình hoạt động thành Công ty Cổ phần Phú Cường Hoàng Gia, đánh dấu bước phát triển mới trong hành trình tiếp nối di sản xây dựng các khu đô thị hiện đại và không gian sống xanh đồng bộ tại khu vực Tây Nam Bộ.
        </p>
        <p className="m-0 leading-[20px] select-none">
          Hiện nay, doanh nghiệp đang triển khai các dự án gồm: Khu đô thị Phú Cường Phú Quý &amp; Khu đô thị Phú Cường Hoàng Gia. Với định hướng phát triển đa dạng loại hình như nhà phố thương mại, biệt thự, nhà ở xã hội và hệ tiện ích cộng đồng.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="px-[21px] animate-dev-mobile opacity-0 grid grid-cols-2 gap-[14px] w-full relative z-10">
        {[
          { img: img76, ha: "68,68HA", name: "PHÚ CƯỜNG HOÀNG GIA" },
          { img: imgChuDauTu, ha: "99,99HA", name: "PHÚ CƯỜNG PHÚ QUÝ" },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[4/3] rounded-[8px] bg-[#d3d3d3] overflow-hidden shadow-lg group"
          >
            <img
              src={card.img}
              alt={card.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/10 z-[1]" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-3 px-2">
              <span
                className="font-anton text-white uppercase block text-center w-full select-none tracking-tight"
                style={{ fontSize: "clamp(24px, 8vw, 36px)", lineHeight: "1" }}
              >
                {card.ha}
              </span>
              <span className="font-be-vietnam font-bold italic text-[#fffcd8] uppercase text-[8px] mt-1 block text-center w-full select-none leading-[1.2]">
                {card.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Background Map Image in normal flow with negative margin top */}
      <div className="animate-dev-mobile opacity-0 w-full relative z-0 mt-[-80px] overflow-hidden">
        <img
          alt="Map Background"
          className="w-full h-auto object-contain select-none pointer-events-none"
          src={imgMapTienIch5}
        />
      </div>
    </section>
  );
}
