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
import LocationSection from "@/components/LocationSection";
import MediaSection from "@/components/MediaSection";
import GallerySection from "@/components/GallerySection";
import ContactFooterSection from "@/components/ContactFooterSection";
import SplashScreen from "@/components/SplashScreen";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (showSplash) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

    // Small delay to let layout settle after splash removal
    const initTimer = setTimeout(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".section-panel");
      const panelsCount = panels.length;
      let currentIndex = 0;
      let isAnimating = false;

      const gotoSection = (index: number) => {
        if (index < 0 || index >= panelsCount || isAnimating) return;
        isAnimating = true;
        currentIndex = index;

        gsap.to(window, {
          scrollTo: { y: index * window.innerHeight },
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating = false;
          },
        });
      };

      // Observer intercepts scroll/touch and snaps immediately — no free scroll
      const obs = Observer.create({
        type: "wheel,touch",
        preventDefault: true,
        onUp: () => gotoSection(currentIndex - 1),
        onDown: () => gotoSection(currentIndex + 1),
      });

      // Handle anchor-link navigation (sidebar uses #overview, #contact, etc.)
      const handleHashClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
        if (!anchor) return;

        const hash = anchor.getAttribute("href");
        if (!hash || hash === "#") return;

        const section = document.querySelector(hash);
        if (!section) return;

        e.preventDefault();

        // Find which panel index contains the target section
        const panelIndex = panels.findIndex(
          (panel) => panel.contains(section as Node)
        );
        if (panelIndex >= 0) {
          gotoSection(panelIndex);
        }
      };

      document.addEventListener("click", handleHashClick);

      // Refresh ScrollTrigger so child section animations pick up correct positions
      ScrollTrigger.refresh();

      // Store cleanup references
      cleanupRef.current = () => {
        obs.kill();
        document.removeEventListener("click", handleHashClick);
      };
    }, 100);

    return () => {
      clearTimeout(initTimer);
      cleanupRef.current?.();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [showSplash]);

  return (
    <div className="relative w-full bg-[#004e68] text-white overflow-x-hidden">
      {/* ── SPLASH SCREEN ── */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* ── GLOBAL STICKY OVERLAY ── */}
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <StickySocials />

      {/* ── SECTIONS ── */}
      <div className="section-panel"><HeroSection /></div>
      <div className="section-panel"><OverviewSection /></div>
      <div className="section-panel"><MasterPlanSection /></div>
      <div className="section-panel"><DetailedPhasesSection /></div>
      <div className="section-panel"><DeveloperSection /></div>
      <div className="section-panel"><LocationSection /></div>
      <div className="section-panel"><MediaSection /></div>
      <div className="section-panel"><GallerySection /></div>
      <div className="section-panel"><ContactFooterSection /></div>

      {/* ── SIDEBAR MENU OVERLAY ── */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}
