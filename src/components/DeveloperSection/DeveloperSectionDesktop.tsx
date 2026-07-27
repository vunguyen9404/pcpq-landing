"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch5 = "/assets/9fc0c5fcbb6bcdd4e7dc0b83088fff297f031f42.jpg";
const img76 = "/images/7_6.png";
const imgChuDauTu = "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.jpg";
const imgPchgLogo = "/images/pchg.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full";

export default function DeveloperSectionDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".animate-card");
    const bio = el.querySelector(".animate-bio");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        bio,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            toggleActions: "play none none reverse",
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
      <div className={`${INNER} flex justify-between items-end px-[3.75%] gap-4 lg:gap-8 pb-[5vh] xl:pb-[8vh] pt-20`}>
        {/* Left Column: 2 Project Cards */}
        <div className="flex flex-col justify-between w-[48%] xl:w-[450px] h-[65vh] lg:h-[70vh] xl:h-[766px] max-h-[75vh]">
          {[
            { img: img76, ha: "68,68HA", name: "PHÚ CƯỜNG HOÀNG GIA" },
            { img: imgChuDauTu, ha: "99,99HA", name: "PHÚ CƯỜNG PHÚ QUÝ" },
          ].map((card, idx) => (
            <div key={idx}
              className="animate-card relative w-full h-[47%] rounded-[10px] bg-[#d3d3d3] overflow-hidden shadow-2xl group opacity-0">
              <img src={card.img} alt={card.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-[2vh] xl:pb-[25px] px-4">
                <span className="font-anton text-[7vw] xl:text-[6rem] font-normal leading-normal [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] text-white uppercase block text-center w-full whitespace-nowrap">
                  {card.ha}
                </span>
                <span className="font-be-vietnam font-bold italic text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] uppercase text-[1.5vw] xl:text-[16px] leading-none -mt-[1vw] xl:-mt-[15px] block text-center w-full whitespace-nowrap">
                  {card.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Bio Box */}
        <div className="animate-bio w-[48%] xl:w-[520px] h-[65vh] lg:h-[70vh] xl:h-[766px] max-h-[75vh]
                        bg-gradient-to-b from-[#004e68]/80 to-[#009ace]/80 shadow-2xl rounded-[10px]
                        flex flex-col justify-start items-center opacity-0 overflow-y-auto">
          <div className="relative w-[50%] xl:w-[355px] h-[10vh] lg:h-[12vh] xl:h-[130px] mt-[3vh] xl:mt-[44px] shrink-0">
            <img src={imgPchgLogo} alt="Logo" className="absolute inset-0 w-full h-full object-contain" />
          </div>
          <div className="font-be-vietnam text-white text-[1.4vw] xl:text-[15px] leading-[1.5] xl:leading-[29px] text-justify space-y-0 w-full px-[5%] xl:px-[40px] mt-[2vh] xl:mt-[32px] pb-[3vh]">
            <p className="m-0 mb-[1vh] xl:mb-4">Kế thừa tầm nhìn phát triển đô thị biển của Tập đoàn Phú Cường, Phú Cường Hoàng Gia không ngừng khai mở những không gian sống hiện đại, nơi giá trị an cư, kinh doanh và cộng đồng cùng phát triển bền vững. Công ty Cổ phần Phú Cường Hoàng Gia được phát triển từ Công ty TNHH MTV Hoàng Gia, thành lập ngày 24/04/2020 với định hướng hoạt động trong lĩnh vực đầu tư và phát triển bất động sản.</p>
            <p className="m-0 mb-[1vh] xl:mb-4">Đến ngày 14/07/2022, doanh nghiệp chính thức chuyển đổi mô hình hoạt động thành Công ty Cổ phần Phú Cường Hoàng Gia, đánh dấu bước phát triển mới trong hành trình tiếp nối di sản xây dựng các khu đô thị hiện đại và không gian sống xanh đồng bộ tại khu vực Tây Nam Bộ.</p>
            <p className="m-0">Hiện nay, doanh nghiệp đang triển khai các dự án gồm: Khu đô thị Phú Cường Phú Quý &amp; Khu đô thị Phú Cường Hoàng Gia. Với định hướng phát triển đa dạng loại hình như nhà phố thương mại, biệt thự, nhà ở xã hội và hệ tiện ích cộng đồng.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
