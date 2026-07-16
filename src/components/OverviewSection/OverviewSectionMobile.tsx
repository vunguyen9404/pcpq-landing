"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OverviewSectionMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    // Animate title and text paragraphs
    gsap.fromTo(
      el.querySelectorAll(".animate-mobile"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate image container
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative w-full bg-transparent select-none flex flex-col"
    >
      {/* Text Content with horizontal padding */}
      <div className="w-full px-[22px] pt-[32px] pb-[24px]">
        <div className="max-w-md mx-auto flex flex-col gap-5">
          {/* Title */}
          <h2
            className="animate-mobile opacity-0 tracking-widest"
            style={{
              color: "#FFF",
              textAlign: "center",
              textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
              fontFamily: '"Be Vietnam Pro", var(--font-be-vietnam-pro), sans-serif',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              textTransform: "uppercase",
            }}
          >
            Tổng quan
          </h2>

          {/* Content paragraphs */}
          <div
            className="animate-mobile opacity-0 flex flex-col gap-4"
            style={{
              color: "#FFFCD8",
              textAlign: "justify",
              fontFamily: '"Be Vietnam Pro", var(--font-be-vietnam-pro), sans-serif',
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "17px",
            }}
          >
            <p>
              Khu đô thị biển Phú Cường Phú Quý là dự án phát triển đô thị quy mô lớn do Công ty Cổ phần Phú Cường Hoàng Gia làm chủ đầu tư, tọa lạc tại khu vực Rạch Giá – vùng đất ven biển giàu tiềm năng của Tây Nam Bộ, hướng ra Vịnh Thái Lan.
            </p>
            <p>
              Không chỉ là một dự án bất động sản, Phú Cường Phú Quý được định hướng trở thành một quần thể đô thị hiện đại, nơi hội tụ không gian sống chất lượng, tiện ích đồng bộ và giá trị cộng đồng bền vững.
            </p>
            <p>
              Với tầm nhìn kiến tạo một biểu tượng đô thị mới, dự án kỳ vọng góp phần thay đổi diện mạo thành phố biển Rạch Giá, mở ra chuẩn sống mới và trở thành điểm đến tiêu biểu của khu vực Tây Nam Bộ.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width image section below */}
      <div
        ref={imageRef}
        className="relative w-full h-[262px] overflow-hidden opacity-0"
      >
        <img
          src="/assets/5b5d926ce9d804d557d81a3a92cbf15722985803.jpg"
          alt="Quy mô dự án"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,78,104,0.4)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
