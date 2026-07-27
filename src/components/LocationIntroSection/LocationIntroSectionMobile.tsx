"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgMapTienIch2Mobile = "/assets/77d2035420f5598d925c6e5237f0aada8b4200de.jpg";

export default function LocationIntroSectionMobile() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    // Staggered stack push-up animation for mobile layout
    const elements = el.querySelectorAll(".animate-location-mobile");
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

    // Refresh ScrollTrigger after DOM load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="location"
      ref={containerRef}
      className="relative w-full bg-[#004e68] pt-[24px] pb-[40px] flex flex-col gap-6 overflow-hidden"
    >
      {/* Title */}
      <div className="animate-location-mobile opacity-0 flex justify-center w-full px-[21px]">
        <h3
          className="font-be-vietnam uppercase text-white select-none text-center"
          style={{
            fontSize: "20px",
            fontWeight: 600,
            textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
            lineHeight: "normal",
          }}
        >
          VỊ TRÍ DỰ ÁN
        </h3>
      </div>

      {/* Map Image with Gradient Text Overlay */}
      <div className="animate-location-mobile opacity-0 relative w-full overflow-hidden">
        <img
          src={imgMapTienIch2Mobile}
          alt="Map Location"
          className="w-full h-auto object-cover block select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Gradient Text Overlay */}
        <div
          className="absolute bottom-6 left-[21px] z-10 flex flex-col justify-end"
          style={{
            width: "140px",
            height: "116px",
          }}
        >
          <h4
            className="font-be-vietnam font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] select-none"
            style={{
              fontSize: "13.735px",
              lineHeight: "20.602px",
            }}
          >
            tâm điểm giao thương và dòng chảy phát triển mới của đô thị biển Tây Nam Bộ.
          </h4>
        </div>
      </div>

      {/* Description Paragraph */}
      <div className="animate-location-mobile opacity-0 px-[21px] w-full mt-2">
        <p
          className="font-be-vietnam select-none text-justify"
          style={{
            color: "#FFFCD8",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >
          Tọa lạc tại trái tim thành phố biển Rạch Giá, Phú Cường Phú Quý hội tụ đầy đủ lợi thế của một trung tâm kết nối vùng: giao điểm của 6 hành lang kinh tế trọng điểm, kết nối đa phương thức bằng đường bộ, đường biển và hàng không, đồng thời đón đầu hệ thống cao tốc ven biển tương lai. Đây không chỉ là nơi an cư, mà còn là cửa ngõ giao thương và khu vực tăng trưởng mới của toàn vùng Tây Nam Bộ trong tương lai.
        </p>
      </div>
    </section>
  );
}
