"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch5 = "/assets/9fc0c5fcbb6bcdd4e7dc0b83088fff297f031f42.png";
const img76 = "/assets/4b3598962b1f44acaa07611f651d661e5d42b912.png";
const imgChuDauTu = "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.png";
const imgAsset212X1 = "/assets/04195bc0bad3f52644767a492c62b5d2473f1f12.png";
const imgPchgLogo = "/images/pchg.png";

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-auto lg:h-full max-w-[1920px] lg:max-w-none mx-auto";

export default function DeveloperSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const title = el.querySelector(".animate-title");
    const cards = el.querySelectorAll(".animate-card");
    const bio = el.querySelector(".animate-bio");
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: isMobile ? (title || el) : el,
            start: isMobile ? "top 90%" : "top center",
            once: isMobile,
            toggleActions: isMobile ? "play none none none" : "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cards,
        { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: isMobile ? (cards[0] || el) : el,
            start: isMobile ? "top 85%" : "top center",
            once: isMobile,
            toggleActions: isMobile ? "play none none none" : "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        bio,
        { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: isMobile ? (bio || el) : el,
            start: isMobile ? "top 80%" : "top center",
            once: isMobile,
            toggleActions: isMobile ? "play none none none" : "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="developer"
      ref={containerRef}
      className={OUTER}
      style={{
        background: `linear-gradient(180deg, rgba(0, 78, 104, 0.50) 5.95%, rgba(255, 255, 255, 0.00) 29.77%), url(${imgMapTienIch5}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className={`${INNER} flex flex-col lg:block p-6 md:p-12 lg:p-0 mt-16 pb-12`}>

        <div className="flex flex-col lg:block gap-6">
          {/* Left Column: 2 Project Cards */}
          <div className="lg:absolute lg:left-[3.65vw] lg:top-[10.47vw] lg:w-[450px] lg:h-[766px] flex flex-col gap-4 lg:gap-[43px] w-full">
            {[
              { img: img76, ha: "68,68HA", name: "PHÚ CƯỜNG HOÀNG GIA" },
              { img: imgChuDauTu, ha: "99,99HA", name: "PHÚ CƯỜNG PHÚ QUÝ" },
            ].map((card, idx) => (
              <div key={idx}
                className="animate-card relative w-full lg:w-[450px] h-48 md:h-64 lg:h-[362px] rounded-[10px] bg-[#d3d3d3] overflow-hidden shadow-2xl group opacity-0">
                <Image src={card.img} alt={card.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end items-center pb-6 lg:pb-[25px] px-4">
                  <span className="font-anton text-4xl lg:text-[96px] font-normal lg:leading-[82px] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] text-transparent bg-clip-text bg-gradient-to-b from-[#fffcd8] to-white uppercase block text-center w-full whitespace-nowrap">
                    {card.ha}
                  </span>
                  <span className="font-be-vietnam font-bold italic text-[#fffcd8] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] uppercase text-xs lg:text-[16px] lg:leading-normal mt-2 lg:mt-[10px] block tracking-wider text-center w-full whitespace-nowrap">
                    {card.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Bio Box */}
          <div className="animate-bio lg:absolute lg:right-[4.17vw] lg:top-[10.47vw] lg:w-[612px] lg:h-[766px]
                          bg-gradient-to-b from-[#004e68]/90 to-[#009ace]/90 shadow-2xl rounded-[10px]
                          p-6 lg:p-0 flex flex-col justify-start items-center opacity-0">
            <div className="relative w-44 h-16 lg:w-[355px] lg:h-[130px] lg:mt-[44px] shrink-0">
              <Image src={imgPchgLogo} alt="Logo" fill className="object-contain" />
            </div>
            <div className="font-be-vietnam text-white/90 text-sm lg:text-[18px] lg:leading-[29px] text-justify space-y-0 lg:w-[508px] lg:mt-[32px]">
              <p className="m-0 leading-[20px] lg:leading-[29px]">Kế thừa tầm nhìn phát triển đô thị biển của Tập đoàn Phú Cường, Phú Cường Hoàng Gia không ngừng khai mở những không gian sống hiện đại, nơi giá trị an cư, kinh doanh và cộng đồng cùng phát triển bền vững. Công ty Cổ phần Phú Cường Hoàng Gia được phát triển từ Công ty TNHH MTV Hoàng Gia, thành lập ngày 24/04/2020 với định hướng hoạt động trong lĩnh vực đầu tư và phát triển bất động sản.</p>
              <p className="m-0 leading-[20px] lg:leading-[29px]">Đến ngày 14/07/2022, doanh nghiệp chính thức chuyển đổi mô hình hoạt động thành Công ty Cổ phần Phú Cường Hoàng Gia, đánh dấu bước phát triển mới trong hành trình tiếp nối di sản xây dựng các khu đô thị hiện đại và không gian sống xanh đồng bộ tại khu vực Tây Nam Bộ.</p>
              <p className="m-0 leading-[20px] lg:leading-[29px]">Hiện nay, doanh nghiệp đang triển khai các dự án gồm: Khu đô thị Phú Cường Phú Quý &amp; Khu đô thị Phú Cường Hoàng Gia. Với định hướng phát triển đa dạng loại hình như nhà phố thương mại, biệt thự, nhà ở xã hội và hệ tiện ích cộng đồng.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
