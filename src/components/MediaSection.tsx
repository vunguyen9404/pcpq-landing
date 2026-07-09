"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgNews1 = "/assets/88dd40a9357782accef24c98ed4ebc90ae84ee4b.jpg";
const imgNews2 = "/assets/77d36706a2d27d8451c85b934b536f571cd55fff.jpg";
const imgNews3 = "/assets/eeb19d7b3474aadf9ee7eb8a13c4e278ee690349.jpg";

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-gradient-to-b from-[#004e68] to-[#009ace]";

const newsList = [
  { title: "Thông tin về tiến độ Phu Cuong Home Phú Quý T6/2026", image: imgNews1 },
  { title: "Tiến độ xây dựng cơ sở hạ tầng phân khu trung tâm Phú Quý",   image: imgNews2 },
  { title: "Khởi công cụm tiện ích ven biển Phú Quý",              image: imgNews3 },
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
        <div className="media-title pointer-events-auto opacity-0 mb-[6.3vh] shrink-0">
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
              <div
                className="bg-[#004e68] drop-shadow-[0px_14px_14px_rgba(0,0,0,0.25),0px_10px_5px_rgba(0,0,0,0.1)]
                            rounded-[10px] w-full h-full flex flex-col justify-between overflow-hidden
                            transition-all duration-300 hover:scale-103 hover:brightness-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-[74.5%] overflow-hidden rounded-[10px]">
                  <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                
                {/* Text Title */}
                <div className="w-full h-[25.5%] flex items-center justify-center p-4">
                  <h4 className="font-be-vietnam font-medium capitalize text-[1.8vh] leading-[2.5vh] text-center text-white tracking-wide">
                    {card.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="media-button pointer-events-auto opacity-0 shrink-0">
          <a
            href="#contact"
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

      {/* ── Mobile/Tablet Layout (Scrollable list fallback) ── */}
      <div className="lg:hidden flex flex-col justify-start p-6 pb-12 z-10 relative">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 mt-16 mb-8 text-center px-2 animate-title opacity-0 lg:opacity-100">
          <div className="bg-gradient-to-r from-[#004e68] to-[#009ace] border border-[#95e8ff] rounded-[8px] px-6 py-2 shadow-lg flex items-center justify-center">
            <h3 className="font-be-vietnam text-center text-xs font-semibold uppercase text-[#FFFCD8]">
              tin tức dự án
            </h3>
          </div>
          <h2 className="font-be-vietnam font-bold uppercase text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] leading-tight">
            truyền thông dự án
          </h2>
        </div>

        {/* Scrollable Card Stack */}
        <div className="flex flex-col gap-5 max-w-[500px] mx-auto w-full mb-8">
          {newsList.map((card, idx) => (
            <div 
              key={idx}
              className="bg-[#004e68] rounded-[10px] overflow-hidden shadow-xl flex flex-col gap-3 transition-transform hover:scale-[1.01] animate-card opacity-0 lg:opacity-100"
            >
              <div className="relative w-full h-[220px]">
                <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h4 className="font-be-vietnam font-semibold capitalize text-base text-center text-white tracking-wide pb-4 px-4">
                {card.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Action Button for Mobile */}
        <div className="flex justify-center mb-8 animate-button opacity-0 lg:opacity-100">
          <a
            href="#contact"
            className="flex items-center justify-center rounded-[20px] px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]"
          >
            chuyên trang truyền thông
          </a>
        </div>
      </div>
    </section>
  );
}
