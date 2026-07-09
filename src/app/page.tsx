"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StickySocials from "@/components/StickySocials";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import DetailedPhasesSection from "@/components/DetailedPhasesSection";
import DeveloperSection from "@/components/DeveloperSection";
import LocationIntroSection from "@/components/LocationIntroSection";
import LocationSection from "@/components/LocationSection";
import InternalUtilitiesSection from "@/components/InternalUtilitiesSection";
import ProductsSection from "@/components/ProductsSection";
import MediaSection from "@/components/MediaSection";
import GallerySection from "@/components/GallerySection";
import ContactFooterSection from "@/components/ContactFooterSection";
import SplashScreen from "@/components/SplashScreen";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";

const SECTION_LABELS = [
  "",                  // 0: Hero
  "Tổng quan",         // 1: Overview
  "Mặt bằng tổng thể",    // 2: MasterPlan
  "Phân khu chi tiết",    // 3: DetailedPhases
  "Chủ đầu tư",        // 4: Developer
  "Vị trí",            // 5: LocationIntro
  "Tiện ích ngoại khu", // 6: Location (Utilities)
  "Tiện ích nội khu",  // 7: InternalUtilities
  "Sản phẩm",          // 8: Products
  "Media",              // 9: Media
  "Thư viện ảnh",      // 10: Gallery
  "Liên hệ",           // 11: ContactFooter
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const obsRef = useRef<ReturnType<typeof Observer.create> | null>(null);
  const clickHandlerRef = useRef<((e: MouseEvent) => void) | null>(null);

  // On mount: disable browser scroll restoration so it never jumps on load
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    return () => {
      history.scrollRestoration = "auto";
    };
  }, []);

  // After splash finishes: init Observer-based fullpage scroll
  useEffect(() => {
    if (showSplash) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

    // Ensure we start at top after splash
    window.scrollTo(0, 0);

    let resizeHandler: (() => void) | null = null;

    const initTimer = setTimeout(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".section-panel");
      const panelsCount = panels.length;
      let currentIndex = 0;
      let isAnimating = false;

      const gotoSection = (index: number) => {
        if (index < 0 || index >= panelsCount || isAnimating) return;
        isAnimating = true;
        currentIndex = index;
        setCurrentIndex(index);

        gsap.to(window, {
          scrollTo: { y: index * window.innerHeight },
          duration: 1.6,
          ease: "expo.out",
          onComplete: () => {
            isAnimating = false;
          },
        });
      };

      // Create/Destroy Observer dynamically based on viewport width (>= 1024px is desktop)
      const updateObserverState = () => {
        const isDesktop = window.innerWidth >= 1024;
        if (isDesktop && !obsRef.current) {
          obsRef.current = Observer.create({
            type: "wheel,touch",
            preventDefault: true,
            onUp: () => gotoSection(currentIndex - 1),
            onDown: () => gotoSection(currentIndex + 1),
          });
        } else if (!isDesktop && obsRef.current) {
          obsRef.current.kill();
          obsRef.current = null;
        }
      };

      updateObserverState();
      resizeHandler = updateObserverState;
      window.addEventListener("resize", resizeHandler);

      // Sidebar anchor-link navigation (#overview, #contact, etc.)
      const handleHashClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
        if (!anchor) return;

        const hash = anchor.getAttribute("href");
        if (!hash || hash === "#") return;

        const section = document.querySelector(hash);
        if (!section) return;

        e.preventDefault();
        const panelIndex = panels.findIndex((panel) =>
          panel.contains(section as Node)
        );

        if (window.innerWidth >= 1024) {
          if (panelIndex >= 0) gotoSection(panelIndex);
        } else {
          // Native smooth scrolling on mobile viewports
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

      clickHandlerRef.current = handleHashClick;
      document.addEventListener("click", handleHashClick);

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      obsRef.current?.kill();
      obsRef.current = null;
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      if (clickHandlerRef.current) {
        document.removeEventListener("click", clickHandlerRef.current);
        clickHandlerRef.current = null;
      }
    };
  }, [showSplash]);

  return (
    <div className="relative w-full bg-[#004e68] text-white overflow-x-hidden">
      {/* ── SPLASH SCREEN ── */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* ── GLOBAL STICKY OVERLAY ── */}
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} sectionLabel={SECTION_LABELS[currentIndex]} />
      <StickySocials isVisible={currentIndex !== 4 && currentIndex !== 6 && currentIndex !== 7} />

      {/* ── SECTIONS ── */}
      <div className="section-panel"><HeroSection /></div>
      <div className="section-panel"><OverviewSection /></div>
      <div className="section-panel"><MasterPlanSection /></div>
      <div className="section-panel"><DetailedPhasesSection /></div>
      <div className="section-panel"><DeveloperSection /></div>
      <div className="section-panel"><LocationIntroSection /></div>
      <div className="section-panel"><LocationSection /></div>
      <div className="section-panel"><InternalUtilitiesSection /></div>
      <div className="section-panel"><ProductsSection /></div>
      <div className="section-panel"><MediaSection /></div>
      <div className="section-panel"><GallerySection /></div>
      <div className="section-panel"><ContactFooterSection /></div>

      {/* ── SIDEBAR MENU OVERLAY ── */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}
