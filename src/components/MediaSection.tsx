"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgNews1 = "/images/media/media-1.jpg";
const imgNews2 = "/images/media/media-2.jpg";
const imgNews3 = "/images/media/media-3.jpg";

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-[#004e68] lg:bg-gradient-to-b lg:from-[#004e68] lg:to-[#009ace]";

const newsList = [
  { 
    title: "CẬP NHẬT TIẾN ĐỘ THI CÔNG THÁNG 6 NĂM 2026", 
    image: imgNews1,
    link: "https://cms.phucuongphuquy.com/cap-nhat-tien-do-thi-cong-thang-6-nam-2026/"
  },
  { 
    title: "THÔNG BÁO TỔ CHỨC LỄ BỐC THĂM CHỌN CĂN NHÀ Ở XÃ HỘI ĐỢT 1",   
    image: imgNews2,
    link: "https://cms.phucuongphuquy.com/thong-bao-to-chuc-le-boc-tham-chon-can-nha-o-xa-hoi-dot-1-tai-khu-do-thi-phu-cuong-phu-quu/"
  },
  { 
    title: "PHÚ CƯỜNG HOÀNG GIA HỢP TÁC CHIẾN LƯỢC CÙNG CÁC ĐỐI TÁC TÀI CHÍNH – ĐỒNG HÀNH PHÁT TRIỂN NHÀ Ở XÃ HỘI BỀN VỮNG",              
    image: imgNews3,
    link: "https://cms.phucuongphuquy.com/phu-cuong-hoang-gia-hop-tac-chien-luoc-cung-cac-doi-tac-tai-chinh-dong-hanh-phat-trien-nha-o-xa-hoi-ben-vung/"
  },
];

export default function MediaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      if (isMobile) {
        const mobileTitle = el.querySelector(".animate-title");
        const mobileCards = el.querySelectorAll(".animate-card");
        const mobileBtn = el.querySelector(".animate-button");

        if (mobileTitle) {
          gsap.fromTo(
            mobileTitle,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mobileTitle,
                start: "top 90%",
                once: true,
              }
            }
          );
        }

        if (mobileCards.length) {
          gsap.fromTo(
            mobileCards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mobileCards[0],
                start: "top 85%",
                once: true,
              }
            }
          );
        }

        if (mobileBtn) {
          gsap.fromTo(
            mobileBtn,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mobileBtn,
                start: "top 90%",
                once: true,
              }
            }
          );
        }
      } else {
        const title = el.querySelector(".media-title");
        const cards = el.querySelectorAll(".media-card");
        const button = el.querySelector(".media-button");

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: -30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top center",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        if (button) {
          gsap.fromTo(
            button,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="media" ref={containerRef} className={OUTER}>
      {/* ── Viewport-relative Staggered Bento Layout (Desktop Only) ── */}
      <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center pt-[5vh] z-0">
        
        {/* Centered Title */}
        <div className="media-title pointer-events-auto opacity-0 mb-[6.3vh] shrink-0 hidden">
          <h2 
            className="text-center uppercase tracking-wide"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "3.8vh",
              fontWeight: 700,
              lineHeight: "4.9vh",
              background: "linear-gradient(180deg, #95E8FF 0%, #FDFFD9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            truyền thông dự án phú cường phú quý
          </h2>
        </div>

        {/* Bento Staggered Grid */}
        <div className="flex justify-center gap-[3vw] w-full pointer-events-none select-none mb-[8.15vh]">
          {newsList.map((card, idx) => (
            <div
              key={idx}
              className="media-card w-[26vw] max-w-[541px] aspect-[541/403] pointer-events-auto opacity-0"
            >
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#004e68] drop-shadow-[0px_14px_14px_rgba(0,0,0,0.25),0px_10px_5px_rgba(0,0,0,0.1)]
                            rounded-[10px] w-full h-full flex flex-col justify-between overflow-hidden
                            transition-all duration-300 hover:scale-103 hover:brightness-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-[74.5%] overflow-hidden rounded-[10px]">
                  <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                
                {/* Text Title */}
                <div className="w-full h-[25.5%] flex items-center justify-center py-4 px-[37px]">
                  <h4 className="font-be-vietnam font-medium uppercase text-[18px] leading-[25.27px] text-center text-white tracking-wide">
                    {card.title}
                  </h4>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="media-button pointer-events-auto opacity-0 shrink-0">
          <a
            href="https://cms.phucuongphuquy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg"
            style={{
              width: "337px",
              height: "47px",
              maxWidth: "652.5px",
              minHeight: "38.8px",
              padding: "0 18.624px",
              borderRadius: "20px",
              background: "linear-gradient(180deg, #95E8FF 0%, #FDFFD9 100%)",
            }}
          >
            <span
              className="w-full text-center uppercase whitespace-nowrap"
              style={{
                color: "#0065AD",
                fontFamily: "Inter, sans-serif",
                fontSize: "15.4px",
                fontWeight: 700,
                lineHeight: "37.25px",
                letterSpacing: "0.466px",
              }}
            >
              chuyên trang truyền thông
            </span>
          </a>
        </div>
      </div>

      <div className="lg:hidden flex flex-col justify-start pt-[24px] pb-[24px] px-6 z-10 relative">
        {/* Title */}
        <div className="animate-title opacity-0 lg:opacity-100 flex justify-center w-full px-[21px] mb-[48px]">
          <h3
            className="font-be-vietnam uppercase text-white select-none text-center"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
              lineHeight: "normal",
            }}
          >
            TRUYỀN THÔNG DỰ ÁN
          </h3>
        </div>

        {/* Scrollable Card Stack */}
        <div className="flex flex-col gap-5 max-w-[500px] mx-auto w-full mb-8">
          {newsList.map((card, idx) => (
            <a 
              key={idx}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004e68] rounded-[10px] overflow-hidden shadow-xl flex flex-col gap-3 transition-transform hover:scale-[1.01] animate-card opacity-0 lg:opacity-100 cursor-pointer"
            >
              <div className="relative w-full h-[220px]">
                <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h4 className="font-be-vietnam font-semibold uppercase text-[16px] md:text-[18px] leading-[24px] md:leading-[25.27px] text-center text-white tracking-wide pb-6 px-[20px] md:px-[37px]">
                {card.title}
              </h4>
            </a>
          ))}
        </div>

        {/* Action Button for Mobile */}
        <div className="flex justify-center mb-0 animate-button opacity-0 lg:opacity-100">
          <a
            href="https://cms.phucuongphuquy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-[20px] px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]"
          >
            chuyên trang truyền thông
          </a>
        </div>
      </div>
    </section>
  );
}
