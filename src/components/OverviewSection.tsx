"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch3 = "/assets/5b5d926ce9d804d557d81a3a92cbf15722985803.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] mx-auto";

export default function OverviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const title = el.querySelector(".animate-title");
    const card = el.querySelector(".animate-card");

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
        card,
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
      id="overview"
      ref={containerRef}
      className={OUTER}
      style={{ backgroundImage: `url(${imgMapTienIch3})` }}
    >
      <div className={`${INNER} flex flex-col justify-end lg:block p-6 md:p-12 lg:p-0`}>
        <p className="animate-title lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 mb-6 lg:mb-0 text-right opacity-0">
          Tổng quan dự án
        </p>

        <div className="animate-card lg:absolute lg:right-[1%] lg:top-[32%] lg:w-[22%]
                        w-full bg-gradient-to-b from-[#004e68]/75 to-[#009ace]/45
                        backdrop-blur-md border border-white/10 rounded-[10px]
                        p-6 lg:p-8 shadow-2xl opacity-0">
          <div className="font-be-vietnam text-sm leading-relaxed text-justify text-[#fffcd8]/95 space-y-4">
            <p>
              Khu đô thị biển <strong>Phú Cường Phú Quý</strong> là dự án phát triển đô thị quy
              mô lớn do Công ty Cổ phần Phú Cường Hoàng Gia làm chủ đầu tư, tọa lạc tại khu vực
              Rạch Giá — vùng đất ven biển giàu tiềm năng của Tây Nam Bộ, hướng ra Vịnh Thái Lan.
            </p>
            <p>
              Không chỉ là một dự án bất động sản,{" "}
              <span className="font-bold text-white uppercase">Phú Cường Phú Quý</span> được
              định hướng trở thành một{" "}
              <span className="font-bold text-white uppercase">quần thể đô thị hiện đại</span>{" "}
              nơi hội tụ không gian sống chất lượng, tiện ích đồng bộ và giá trị cộng đồng bền
              vững.
            </p>
            <p>
              Với tầm nhìn kiến tạo một biểu tượng đô thị mới, dự án kỳ vọng góp phần thay đổi
              diện mạo thành phố biển Rạch Giá, mở ra chuẩn sống mới và trở thành điểm đến tiêu
              biểu của khu vực Tây Nam Bộ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
