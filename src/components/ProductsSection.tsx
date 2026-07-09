"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgVinhomesHocMon8Jpg  = "/assets/63803aa6f621a871b4ccd02d4007862c53d7a3d4.png";
const imgVinhomesHocMon8Jpg1 = "/assets/262042861f5dcd8037aeef0af0f2b5af43aa0a1c.png";
const imgVinhomesHocMon8Jpg2 = "/assets/067da7bd90d8c1685256d0883c0168d9569d9e1c.png";
const imgVinhomesHocMon8Jpg3 = "/assets/5752c30fea6e5ec4416235b2fc87b34b7eb68501.png";
const imgVinhomesHocMon8Jpg4 = "/assets/55fd4fdb5f8d7974813ad1ea329ff4ca25384553.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#004e68] to-[#009ace]";

const productList = [
  { name: "đất thương mại",        image: imgVinhomesHocMon8Jpg4, bg: "bg-[#004e68]" },
  { name: "nhà ở thương mại",       image: imgVinhomesHocMon8Jpg3, bg: "bg-[#004e68]" },
  { name: "biệt thự ven biển",      image: imgVinhomesHocMon8Jpg2, bg: "bg-[#004e68]" },
  { name: "Nhà ở xã hội phú quý",   image: imgVinhomesHocMon8Jpg1, bg: "bg-[#006837]" },
  { name: "shophouse",              image: imgVinhomesHocMon8Jpg,  bg: "bg-[#004e68]" },
];

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".product-card");
    const title = el.querySelector(".products-title");

    const ctx = gsap.context(() => {
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
          { opacity: 0, y: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.15,
            ease: "back.out(1.2)",
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
    <section id="products" ref={containerRef} className={OUTER}>
      {/* ── Viewport-relative Staggered Bento Layout (Desktop Only) ── */}
      <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center pt-[5vh] z-0">
        
        {/* Centered Title */}
        <div className="products-title pointer-events-auto opacity-0 mb-[6.3vh] shrink-0">
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
            sản phẩm của khu đô thị phú cường phú quý
          </h2>
        </div>

        {/* Bento Staggered Grid (Auto-centered using Flexbox rows) */}
        <div className="flex flex-col gap-[3.8vh] w-full pointer-events-none select-none">
          {/* Row 1 (Items 1, 3, 5: index 0, 2, 4) */}
          <div className="flex justify-center gap-[3vw] w-full pointer-events-none">
            {productList.filter((_, idx) => idx % 2 === 0).map((prod, idx) => (
              <div
                key={idx}
                className="product-card w-[26vw] max-w-[541px] aspect-[541/355] pointer-events-auto opacity-0"
              >
                <div 
                  className={`${prod.bg} drop-shadow-[0px_14px_14px_rgba(0,0,0,0.25),0px_10px_5px_rgba(0,0,0,0.1)]
                              rounded-[10px] w-full h-full flex flex-col justify-between overflow-hidden
                              transition-all duration-300 hover:scale-103 hover:brightness-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] cursor-pointer`}
                >
                  {/* Image Wrapper */}
                  <div className="relative w-full h-[84.5%] overflow-hidden rounded-[10px]">
                    <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                  </div>
                  
                  {/* Text Title */}
                  <div className="w-full h-[15.5%] flex items-center justify-center pb-[4px]">
                    <h4 className="font-be-vietnam font-medium capitalize text-[1.8vh] leading-[2.5vh] text-center text-white tracking-wide">
                      {prod.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (Items 2, 4: index 1, 3) */}
          <div className="flex justify-center gap-[3vw] w-full pointer-events-none">
            {productList.filter((_, idx) => idx % 2 !== 0).map((prod, idx) => (
              <div
                key={idx}
                className="product-card w-[26vw] max-w-[541px] aspect-[541/355] pointer-events-auto opacity-0"
              >
                <div 
                  className={`${prod.bg} drop-shadow-[0px_14px_14px_rgba(0,0,0,0.25),0px_10px_5px_rgba(0,0,0,0.1)]
                              rounded-[10px] w-full h-full flex flex-col justify-between overflow-hidden
                              transition-all duration-300 hover:scale-103 hover:brightness-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] cursor-pointer`}
                >
                  {/* Image Wrapper */}
                  <div className="relative w-full h-[84.5%] overflow-hidden rounded-[10px]">
                    <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                  </div>
                  
                  {/* Text Title */}
                  <div className="w-full h-[15.5%] flex items-center justify-center pb-[4px]">
                    <h4 className="font-be-vietnam font-medium capitalize text-[1.8vh] leading-[2.5vh] text-center text-white tracking-wide">
                      {prod.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile/Tablet Layout (Scrollable list fallback) ── */}
      <div className="lg:hidden flex flex-col justify-start h-full p-6 pb-20 overflow-y-auto z-10 relative">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 mt-16 mb-8 text-center px-2">
          <div className="bg-gradient-to-r from-[#004e68] to-[#009ace] border border-[#95e8ff] rounded-[8px] px-6 py-2 shadow-lg flex items-center justify-center">
            <h3 className="font-be-vietnam text-center text-xs font-semibold uppercase text-[#FFFCD8]">
              sản phẩm dự án
            </h3>
          </div>
          <h2 className="font-be-vietnam font-bold uppercase text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] leading-tight">
            sản phẩm của khu đô thị phú cường phú quý
          </h2>
        </div>

        {/* Scrollable Card Stack */}
        <div className="flex flex-col gap-5 max-w-[500px] mx-auto w-full">
          {productList.map((prod, idx) => (
            <div 
              key={idx}
              className={`${prod.bg} rounded-[10px] overflow-hidden shadow-xl flex flex-col gap-3 transition-transform hover:scale-[1.01]`}
            >
              <div className="relative w-full h-[220px]">
                <Image src={prod.image} alt={prod.name} fill className="object-cover" />
              </div>
              <h4 className="font-be-vietnam font-semibold capitalize text-base text-center text-white tracking-wide pb-4">
                {prod.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
