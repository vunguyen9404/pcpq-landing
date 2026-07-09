"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch5 = "/assets/9fc0c5fcbb6bcdd4e7dc0b83088fff297f031f42.png";
const img76 = "/assets/4b3598962b1f44acaa07611f651d661e5d42b912.png";
const imgChuDauTu = "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.png";
const imgAsset212X1 = "/assets/04195bc0bad3f52644767a492c62b5d2473f1f12.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

export default function DeveloperSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const title = el.querySelector(".animate-title");
    const cards = el.querySelectorAll(".animate-card");
    const bio = el.querySelector(".animate-bio");

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
            trigger: el,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

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
      style={{ backgroundImage: `url(${imgMapTienIch5})` }}
    >
      <div className={`${INNER} flex flex-col justify-start lg:block p-6 md:p-12 lg:p-0 overflow-y-auto lg:overflow-visible h-full pb-20 lg:pb-0`}>

        <div className="flex flex-col lg:block gap-6">
          {/* Left Column: 2 Project Cards */}
          <div className="lg:absolute lg:left-[3.65vw] lg:top-[10.47vw] lg:w-[23.54vw] lg:h-[39.9vw] flex flex-col gap-4 lg:gap-[2.24vw]">
            {[
              { img: img76, ha: "68,68 HA", name: "PHÚ CƯỜNG HOÀNG GIA" },
              { img: imgChuDauTu, ha: "99,99 HA", name: "PHÚ CƯỜNG PHÚ QUÝ" },
            ].map((card, idx) => (
              <div key={idx}
                className="animate-card relative h-48 md:h-64 lg:h-[18.83vw] rounded-[10px] overflow-hidden shadow-2xl group opacity-0">
                <Image src={card.img} alt={card.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end pb-6 lg:pb-[1.5vw] px-4 items-center">
                  <span className="font-anton text-4xl lg:text-[5vw] lg:leading-[4.3vw] lg:tracking-[-0.08vw] text-transparent bg-clip-text bg-gradient-to-b from-[#fffcd8] to-white uppercase block text-center w-full">
                    {card.ha}
                  </span>
                  <span className="font-be-vietnam font-bold italic text-[#fffcd8] uppercase text-xs lg:text-[0.83vw] mt-2 block tracking-wider text-center w-full">
                    {card.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Bio Box */}
          <div className="animate-bio lg:absolute lg:right-[4.16vw] lg:top-[10.47vw] lg:w-[31.87vw] lg:min-h-[39.9vw] lg:h-auto
                          bg-gradient-to-b from-[#004e68]/90 to-[#009ace]/90 shadow-2xl rounded-[10px]
                          p-6 lg:pt-[2.2vw] lg:px-[2.5vw] lg:pb-[2.5vw] flex flex-col justify-start items-center gap-5 lg:gap-[1.5vw] opacity-0">
            <div className="relative w-44 h-16 lg:w-[18.5vw] lg:h-[6.8vw] shrink-0">
              <Image src={imgAsset212X1} alt="Logo" fill className="object-contain" />
            </div>
            <div className="font-be-vietnam text-white/90 text-sm lg:text-[0.937vw] lg:leading-[1.51vw] text-justify space-y-4 lg:space-y-[1.2vw]">
              <p>Kế thừa tầm nhìn phát triển đô thị biển của Tập đoàn Phú Cường, Phú Cường Hoàng Gia không ngừng khai mở những không gian sống hiện đại, nơi giá trị an cư, kinh doanh và cộng đồng cùng phát triển bền vững. Công ty Cổ phần Phú Cường Hoàng Gia được phát triển từ Công ty TNHH MTV Hoàng Gia, thành lập ngày 24/04/2020 với định hướng hoạt động trong lĩnh vực đầu tư và phát triển bất động sản.</p>
              <p>Đến ngày 14/07/2022, doanh nghiệp chính thức chuyển đổi mô hình hoạt động thành Công ty Cổ phần Phú Cường Hoàng Gia, đánh dấu bước phát triển mới trong hành trình tiếp nối di sản xây dựng các khu đô thị hiện đại và không gian sống xanh đồng bộ tại khu vực Tây Nam Bộ.</p>
              <p>Hiện nay, doanh nghiệp đang triển khai các dự án gồm: Khu đô thị Phú Cường Phú Quý &amp; Khu đô thị Phú Cường Hoàng Gia. Với định hướng phát triển đa dạng loại hình như nhà phố thương mại, biệt thự, nhà ở xã hội và hệ tiện ích cộng đồng.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
