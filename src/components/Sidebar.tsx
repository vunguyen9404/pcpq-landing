"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const imgPhone = "/assets/9fe127963e104efca8c123834786be441438f4d1.png";
const imgZalo = "/assets/eef6d6f0fb2f530a7fb1adeb916d938dd28355fe.png";
const imgFacebook = "/assets/c94ddb7a5c0a0287784654bddb8571e41ac3a5f2.png";
const imgMess = "/assets/80b6c1bf84a7cfd217090234d346c96769599e18.png";
const imgYoutube = "/assets/ff4a49a47250c804f2340585ffca5ac1ab3eced9.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu?: string;
}

export default function Sidebar({ isOpen, onClose, activeMenu }: SidebarProps) {
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
        className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] lg:w-[616px] h-full shadow-2xl
                   flex flex-col justify-between p-10 lg:p-12 z-10 opacity-0
                   bg-cover bg-center border-l border-white/10 shrink-0"
        style={{ backgroundImage: "url('/assets/d313ca5b98ac98e499c3e6aefcd53f450a687de5.jpg')" }}
      >
        {/* Top bar: Close button */}
        <div className="flex justify-end items-center w-full mt-2 shrink-0">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="close-btn w-[45px] h-[45px] flex items-center justify-center
                       border border-white/40 rounded-[8px] bg-white/10 hover:bg-white/20
                       cursor-pointer pointer-events-auto transition-all duration-300"
          >
            <img src="/icons/close.svg" alt="Close" className="w-[24px] h-[24px]" />
          </button>
        </div>

        {/* Logo removed */}

        {/* Nav links */}
        <div className="flex flex-col gap-0.5 items-center text-center my-auto w-full pointer-events-auto">
          {[
            { name: "TỔNG QUAN",        href: "#overview"  },
            { name: "CHỦ ĐẦU TƯ",       href: "#developer" },
            { name: "VỊ TRÍ DỰ ÁN",     href: "#location"  },
            { name: "TIỆN ÍCH DỰ ÁN",   href: "#utilities" },
            { name: "SẢN PHẨM",          href: "#products"  },
            { name: "VR TOUR360",         href: "https://duan.vrtour360.vn/PhuCuongPhuQuy" },
            { name: "TRUYỀN THÔNG",       href: "https://cms.phucuongphuquy.com/" },
            { name: "LIÊN HỆ",            href: "#contact"   },
          ].map((link, idx) => {
            const isActive = link.name === activeMenu;
            return (
              <div key={idx} className="menu-item-container w-full h-[69px] flex flex-col items-center justify-center relative">
                {/* Active glow background overlay */}
                {isActive && (
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[410px] max-w-full h-[69px] bg-gradient-to-r from-transparent via-[#b1efff]/45 to-transparent rounded-[10px] pointer-events-none z-0" />
                )}
                
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={handleClose}
                  className="font-be-vietnam font-normal text-[24px] md:text-[36px] leading-normal text-center uppercase block text-[#004e68] hover:opacity-80 transition-all duration-200 relative z-10"
                >
                  {link.name}
                </a>
              </div>
            );
          })}

          {/* Social icons row rendered outside the loop to prevent layout overlap */}
          <div className="menu-item-container flex justify-center items-center gap-4 mt-[64px] relative z-10">
            {[
              { src: imgZalo,     href: "tel:02973969798",       alt: "Phone",     width: "40px",  height: "40px" },
              { src: imgPhone,    href: "https://zalo.me",       alt: "Zalo",      width: "40px",  height: "40px" },
              { src: imgFacebook, href: "https://facebook.com",  alt: "Facebook",  width: "40px",  height: "40px" },
              { src: imgMess,     href: "https://messenger.com", alt: "Messenger", width: "40px",  height: "40px" },
              { src: imgYoutube,  href: "https://youtube.com",   alt: "Youtube",   width: "58px",  height: "40px" },
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="relative hover:scale-110 transition-transform duration-200 shrink-0"
                style={{ width: s.width, height: s.height }}
              >
                <img src={s.src} alt={s.alt} className="absolute inset-0 w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
