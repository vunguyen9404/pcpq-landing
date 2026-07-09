"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const imgPhone = "/assets/9fe127963e104efca8c123834786be441438f4d1.png";
const imgZalo = "/assets/eef6d6f0fb2f530a7fb1adeb916d938dd28355fe.png";
const imgFacebook = "/assets/c94ddb7a5c0a0287784654bddb8571e41ac3a5f2.png";
const imgMess = "/assets/80b6c1bf84a7cfd217090234d346c96769599e18.png";
const imgYoutube = "/assets/fefe3dfdd9621d4b7225d305aa6a031acbfa1ab5.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isRendered, setIsRendered] = useState(isOpen);

  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const animateOpen = () => {
    if (!panelRef.current || !backdropRef.current) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    const links = panel.querySelectorAll(".menu-item-container");
    const closeBtn = panel.querySelector(".close-btn");

    const tl = gsap.timeline();
    timelineRef.current = tl;

    // 1. Dark Backdrop overlay fades in
    tl.fromTo(
      backdrop,
      { opacity: 0 },
      { opacity: 1, duration: 0.45, ease: "power2.out" }
    );

    // 2. Animate the panel slide-in (normal rectangle, no curves)
    tl.fromTo(
      panel,
      { x: "100%", opacity: 1 },
      { x: "0%", duration: 0.55, ease: "power3.out" },
      "-=0.3"
    );

    // 3. Stagger menu links
    tl.fromTo(
      links,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.04, duration: 0.45, ease: "power2.out" },
      "-=0.25"
    );

    // Fade in close button
    if (closeBtn) {
      tl.fromTo(
        closeBtn,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      );
    }
  };

  const animateClose = (callback: () => void) => {
    if (!panelRef.current || !backdropRef.current) {
      callback();
      return;
    }

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    const links = panel.querySelectorAll(".menu-item-container");
    const closeBtn = panel.querySelector(".close-btn");

    const tl = gsap.timeline({
      onComplete: callback,
    });
    timelineRef.current = tl;

    if (closeBtn) {
      tl.to(closeBtn, { opacity: 0, scale: 0.8, duration: 0.15 });
    }

    tl.to(links, { opacity: 0, y: -10, stagger: 0.02, duration: 0.2, ease: "power2.in" }, "-=0.1");
    tl.to(panel, { x: "100%", duration: 0.35, ease: "power3.in" }, "-=0.15");
    tl.to(backdrop, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.3");
  };

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => {
        animateOpen();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      if (isRendered) {
        animateClose(() => {
          setIsRendered(false);
        });
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    animateClose(() => {
      onClose();
    });
  };

  if (!isRendered) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark overlay backdrop spanning the entire viewport */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0 opacity-0"
      />

      {/* Right: beige menu panel */}
      <div
        ref={panelRef}
        className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] lg:w-[33.3%] h-full shadow-2xl
                   flex flex-col justify-between p-10 lg:p-12 z-10 opacity-0
                   bg-cover bg-center border-l border-white/10 shrink-0"
        style={{ backgroundImage: "url('/assets/d313ca5b98ac98e499c3e6aefcd53f450a687de5.png')" }}
      >
        {/* Top bar: Close button */}
        <div className="flex justify-end items-center w-full mt-2 shrink-0">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="close-btn w-10 h-10 flex items-center justify-center
                       rounded-full bg-[#004e68]/5 border border-[#004e68]/15
                       hover:bg-[#004e68]/10 text-[#004e68] cursor-pointer text-lg font-bold pointer-events-auto transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Logo removed */}

        {/* Nav links */}
        <div className="flex flex-col gap-2.5 items-center text-center my-auto w-full pointer-events-auto">
          {[
            { name: "TỔNG QUAN",        href: "#overview"  },
            { name: "CHỦ ĐẦU TƯ",       href: "#developer" },
            { name: "VỊ TRÍ DỰ ÁN",     href: "#location"  },
            { name: "TIỆN ÍCH DỰ ÁN",   href: "#utilities" },
            { name: "SẢN PHẨM",          href: "#products"  },
            { name: "VR TOUR360",         href: "https://vr360.pchg.vn" },
            { name: "TRUYỀN THÔNG",       href: "#media"     },
            { name: "THÔNG TIN PHÁP LÝ",  href: "#developer" },
            { name: "LIÊN HỆ",            href: "#contact"   },
          ].map((link, idx) => (
            <div key={idx} className="menu-item-container w-full flex flex-col items-center gap-2">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={handleClose}
                className="font-be-vietnam font-bold text-xl lg:text-[1.25vw]
                           tracking-widest uppercase py-1 px-5 rounded-lg w-full text-center block
                           text-[#004e68] hover:text-[#009ace] transition-all duration-200"
              >
                {link.name}
              </a>

              {/* Render social icons directly below LIÊN HỆ */}
              {link.name === "LIÊN HỆ" && (
                <div className="flex justify-center items-center gap-3.5 mt-[78px]">
                  {[
                    { src: imgPhone,    href: "tel:02973969798",       alt: "Phone"    },
                    { src: imgZalo,     href: "https://zalo.me",       alt: "Zalo"     },
                    { src: imgFacebook, href: "https://facebook.com",  alt: "Facebook" },
                    { src: imgMess,     href: "https://messenger.com", alt: "Messenger"},
                    { src: imgYoutube,  href: "https://youtube.com",   alt: "Youtube"  },
                  ].map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="relative w-[34px] h-[34px] hover:scale-110 transition-transform duration-200"
                    >
                      <Image src={s.src} alt={s.alt} fill className="object-contain" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
