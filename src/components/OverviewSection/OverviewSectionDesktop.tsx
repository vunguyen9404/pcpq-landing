"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch = "/assets/5b5d926ce9d804d557d81a3a92cbf15722985803.jpg";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";

export default function OverviewSectionDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".animate-card");

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
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
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="overview"
      ref={containerRef}
      className={OUTER}
      style={{
        background: `url(${imgMapTienIch}) lightgray 50% / cover no-repeat`,
      }}
    >
      {/* Card — viewport-relative position matching StickySocials */}
      <div
        className="animate-card opacity-0
                   absolute right-[3.75%] bottom-[5vh] lg:bottom-[8vh]
                   w-[358px] max-h-[85vh] overflow-y-auto
                   rounded-[10px]"
        style={{
          background: "linear-gradient(180deg, rgba(0, 78, 104, 0.2) 0%, rgba(0, 154, 206, 0.2) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className="font-be-vietnam text-[14px] xl:text-[15px] leading-[1.4] xl:leading-[20px] text-justify text-[#fffcd8] [word-break:break-word] p-[24px] xl:p-[28px_26px_36px_35px]"
        >
          <p className="mb-[14px]">
            Khu đô thị biển Phú Cường Phú Quý là dự án phát triển đô thị quy mô lớn do Công ty Cổ phần Phú Cường Hoàng Gia làm chủ đầu tư, tọa lạc tại khu vực Rạch Giá – vùng đất ven biển giàu tiềm năng của Tây Nam Bộ, hướng ra Vịnh Thái Lan.
          </p>
          <p className="mb-[14px]">
            Không chỉ là một dự án bất động sản, Phú Cường Phú Quý được định hướng trở thành một quần thể đô thị hiện đại, nơi hội tụ không gian sống chất lượng, tiện ích đồng bộ và giá trị cộng đồng bền vững.
          </p>
          <p className="mb-0">
            Với tầm nhìn kiến tạo một biểu tượng đô thị mới, dự án kỳ vọng góp phần thay đổi diện mạo thành phố biển Rạch Giá, mở ra chuẩn sống mới và trở thành điểm đến tiêu biểu của khu vực Tây Nam Bộ.
          </p>
        </div>
      </div>
    </section>
  );
}
