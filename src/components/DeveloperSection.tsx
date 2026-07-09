"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch5 = "/assets/9fc0c5fcbb6bcdd4e7dc0b83088fff297f031f42.png";
const img76          = "/assets/4b3598962b1f44acaa07611f651d661e5d42b912.png";
const imgChuDauTu    = "/assets/ea0a568104aa72014a903ede5c94a7246af726b7.png";
const imgAsset212X1  = "/assets/04195bc0bad3f52644767a492c62b5d2473f1f12.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

export default function DeveloperSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const title = el.querySelector(".animate-title");
    const stats = el.querySelectorAll(".animate-stat");
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
        stats,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
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
      <div className={`${INNER} flex flex-col justify-end lg:block p-6 md:p-12 lg:p-0`}>
        <p className="animate-title lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 text-right mb-6 lg:mb-0 opacity-0">
          về chủ đầu tư
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4
                        lg:absolute lg:left-[3.6%] lg:right-[3.6%] lg:top-[3%]
                        mb-6 lg:mb-0">
          {[
            { label: "Tổng mức đầu tư",        value: "~5.100 TỶ", highlight: true },
            { label: "Nhà ở xã hội PCH (Căn)", value: "1.203" },
            { label: "Biệt thự đơn lập (Căn)",  value: "75"    },
            { label: "Nhà phố (Căn)",           value: "1.566" },
          ].map((s, idx) => (
            <div key={idx}
              className={`animate-stat rounded-xl p-4 shadow-2xl flex flex-col justify-between min-h-[80px] lg:min-h-0 opacity-0
                ${s.highlight
                  ? "bg-[#fffcd8]/15 border border-[#fffcd8]/35 backdrop-blur-md"
                  : "bg-[#004e68]/70 border border-white/10 backdrop-blur-md"}`}>
              <h4 className="font-be-vietnam font-bold uppercase text-white/80 text-[10px] lg:text-xs tracking-wide">
                {s.label}
              </h4>
              <span className="font-anton text-2xl lg:text-[2.5vw] text-white uppercase mt-2 block leading-none">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6
                        lg:absolute lg:left-[3.6%] lg:right-[3.6%] lg:top-[21%]">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              { img: img76,       ha: "68,68 HA", name: "PHÚ CƯỜNG HOÀNG GIA" },
              { img: imgChuDauTu, ha: "99,99 HA", name: "PHÚ CƯỜNG PHÚ QUÝ"  },
            ].map((card, idx) => (
              <div key={idx}
                className="animate-card relative h-40 rounded-xl overflow-hidden shadow-2xl group border border-white/10 opacity-0">
                <Image src={card.img} alt={card.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="font-anton text-3xl lg:text-[2vw] text-transparent bg-clip-text bg-gradient-to-b from-[#fffcd8] to-white uppercase leading-none">
                    {card.ha}
                  </span>
                  <span className="font-be-vietnam font-bold italic text-[#fffcd8] uppercase text-xs mt-1">
                    {card.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-bio lg:col-span-7 bg-gradient-to-b from-[#004e68]/95 to-[#009ace]/90
                          border border-white/10 rounded-xl p-6 lg:p-8 shadow-2xl flex flex-col gap-5 opacity-0">
            <div className="relative w-44 h-14 self-center lg:self-start shrink-0">
              <Image src={imgAsset212X1} alt="Logo" fill className="object-contain" />
            </div>
            <div className="font-be-vietnam text-white/90 text-sm leading-relaxed text-justify space-y-3">
              <p>Kế thừa tầm nhìn phát triển đô thị biển của Tập đoàn Phú Cường, Phú Cường Hoàng Gia không ngừng khai mở những không gian sống hiện đại, nơi giá trị an cư, kinh doanh và cộng đồng cùng phát triển bền vững.</p>
              <p>Công ty Cổ phần Phú Cường Hoàng Gia được phát triển từ Công ty TNHH MTV Hoàng Gia, thành lập ngày 24/04/2020 với định hướng hoạt động trong lĩnh vực đầu tư và phát triển bất động sản.</p>
              <p>Đến ngày 14/07/2022, doanh nghiệp chính thức chuyển đổi mô hình hoạt động thành Công ty Cổ phần Phú Cường Hoàng Gia, đánh dấu bước phát triển mới trong hành trình tiếp nối di sản xây dựng các khu đô thị hiện đại tại khu vực Tây Nam Bộ.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
