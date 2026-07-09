"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgNews1 = "/assets/88dd40a9357782accef24c98ed4ebc90ae84ee4b.png";
const imgNews2 = "/assets/77d36706a2d27d8451c85b934b536f571cd55fff.png";
const imgNews3 = "/assets/eeb19d7b3474aadf9ee7eb8a13c4e278ee690349.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] lg:max-w-none mx-auto";

export default function MediaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const titleRight = el.querySelector(".animate-title-right");
    const titleCenter = el.querySelector(".animate-title-center");
    const cards = el.querySelectorAll(".animate-card");
    const button = el.querySelector(".animate-button");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRight,
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
        titleCenter,
        { opacity: 0, y: -30 },
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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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
        button,
        { opacity: 0, y: 30 },
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
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="media"
      ref={containerRef}
      className={`${OUTER} bg-gradient-to-b from-[#004e68] to-[#009ace]`}
    >
      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0`}>
        <p className="animate-title-right lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 text-right mt-16 lg:mt-0 opacity-0">
          truyền thông
        </p>

        <div className="animate-title-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[18.5%] mt-20 lg:mt-0 text-center opacity-0">
          <h2 className="font-anton uppercase text-2xl md:text-4xl lg:text-[2.2vw]
                         tracking-wide bg-clip-text text-transparent
                         bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]">
            TRUYỀN THÔNG DỰ ÁN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6
                        lg:absolute lg:left-[5.4%] lg:right-[5.4%] lg:top-[32%]
                        my-10 lg:my-0">
          {[
            { title: "Thông tin về tiến độ Phú Cường Home Phú Quý T6/2026", image: imgNews1 },
            { title: "Tiến độ xây dựng cơ sở hạ tầng phân khu trung tâm",   image: imgNews2 },
            { title: "Khởi công cụm tiện ích ven biển Phú Quý",              image: imgNews3 },
          ].map((card, idx) => (
            <div key={idx}
              className="animate-card bg-[#004e68] border border-white/5 rounded-xl overflow-hidden
                         shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0">
              <div className="relative h-52 w-full">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-[#95e8ff] uppercase tracking-wider">Tin tức tiến độ</span>
                <h3 className="font-be-vietnam font-semibold text-white text-sm mt-2 leading-relaxed">{card.title}</h3>
                <p className="text-white/60 text-xs mt-3">Đăng ngày: 15/06/2026</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-button flex justify-center mb-16 lg:mb-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[80%] opacity-0">
          <a href="#contact"
            className="px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs
                       text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                       hover:scale-105 hover:brightness-110 shadow-lg transition-all duration-200">
            Chuyên trang truyền thông
          </a>
        </div>
      </div>
    </section>
  );
}
