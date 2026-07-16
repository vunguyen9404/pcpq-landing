"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgRectangle6 = "/assets/2da6ff5d0a6d8e434f9f82e06e7290236d7edf0e.jpg";
const imgAsset14X1 = "/assets/b81776fe152d18a7194ece4649cd2106fa7d7c6f.png";
const imgAsset212X1 = "/images/pchg.png";
const imgLogoPcpq1 = "/assets/4cedd30840202ba4e2e21da8625f27eff263a639.png";

const imgPhone = "/assets/9fe127963e104efca8c123834786be441438f4d1.png";
const imgZalo = "/assets/eef6d6f0fb2f530a7fb1adeb916d938dd28355fe.png";
const imgFacebook = "/assets/c94ddb7a5c0a0287784654bddb8571e41ac3a5f2.png";
const imgMess = "/assets/80b6c1bf84a7cfd217090234d346c96769599e18.png";
const imgTiktok = "/assets/ff4a49a47250c804f2340585ffca5ac1ab3eced9.png";
const imgYoutube = "/assets/fefe3dfdd9621d4b7225d305aa6a031acbfa1ab5.png";

const OUTER = "relative w-full h-auto lg:h-screen lg:overflow-hidden bg-gradient-to-b from-[#004e68] to-[#009ace]";

export default function ContactFooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", product: "", demand: "", agree: true, nickname: "",
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: null });
    }, 4000);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      if (isMobile) {
        const mobileTitle = el.querySelector(".animate-title");
        const mobileCards = el.querySelectorAll(".animate-card");
        const mobilePartners = el.querySelector(".animate-partners");

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

        if (mobilePartners) {
          gsap.fromTo(
            mobilePartners,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mobilePartners,
                start: "top 90%",
                once: true,
              }
            }
          );
        }
      } else {
        const title = el.querySelector(".contact-title");
        const cards = el.querySelectorAll(".contact-card");
        const partners = el.querySelectorAll(".animate-partner-icon");

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

        if (partners.length) {
          gsap.fromTo(
            partners,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.08,
              duration: 0.6,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.agree) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "Không cung cấp",
            product: formData.product || "Không chọn",
            demand: formData.demand || "Không chọn",
            nickname: formData.nickname,
          }),
        });

        if (response.ok) {
          setFormSubmitted(true);
          showToast("Đăng ký tư vấn thành công!", "success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            product: "",
            demand: "",
            agree: true,
            nickname: "",
          });
          setTimeout(() => {
            setFormSubmitted(false);
          }, 4000);
        } else if (response.status === 429) {
          const errData = await response.json();
          showToast(errData.error || "Thao tác quá nhanh. Vui lòng thử lại sau!", "error");
        } else {
          showToast("Gửi đăng ký không thành công. Anh vui lòng thử lại!", "error");
        }
      } catch (error) {
        console.error("Error submitting lead form:", error);
        showToast("Đã xảy ra lỗi kết nối. Anh vui lòng thử lại sau!", "error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" ref={containerRef} className={OUTER}>
      {/* ── Viewport-relative Layout (Desktop Only) ── */}
      <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center pt-[6vh] pb-[2vh] z-0">

        {/* Centered Title */}
        <div className="contact-title pointer-events-auto opacity-0 mb-[3vh] xl:mb-[6vh] shrink-0">
          <h2
            className="text-center uppercase tracking-wide text-[22px] xl:text-[3.8vh]"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              lineHeight: "1.3",
              background: "linear-gradient(180deg, #95E8FF 0%, #FDFFD9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CÙNG BẠN KHAI MỞ TƯƠNG LAI BỀN VỮNG
          </h2>
        </div>

        {/* 3 Columns Row */}
        <div className="flex justify-center gap-[3vw] xl:gap-[4vw] w-full mb-[3vh] xl:mb-[5.8vh] pointer-events-none select-none">

          {/* Card 1: Contact Info */}
          <div className="contact-card w-[21vw] min-w-[280px] max-w-[404px] aspect-[404/515] bg-[#004e68] rounded-[10px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col justify-between p-[4vh] pointer-events-auto opacity-0">
            {/* Logo Phú Cường Hoàng Gia */}
            <div className="relative w-[75%] aspect-[256/94] mx-auto shrink-0">
              <img src={imgAsset212X1} alt="Phú Cường Hoàng Gia" className="absolute inset-0 w-full h-full object-contain" />
            </div>

            {/* Corporate Address Info */}
            <div className="flex flex-col gap-[1.5vh] text-left">
              <h3 className="font-be-vietnam font-bold uppercase text-[14px] xl:text-[1.7vh] leading-[2.4vh] text-[#95E8FF]">
                CTY CP PHÚ CƯỜNG HOÀNG GIA
              </h3>
              <div className="font-be-vietnam text-white/90 text-[12px] xl:text-[1.35vh] leading-[22px] xl:leading-[2.6vh] flex flex-col gap-[0.5vh]">
                <p>
                  <strong className="text-white">Trụ sở:</strong> 01 Hà Huy Tập, Khu đô thị Phú Cường, Rạch Giá, An Giang, Việt Nam
                </p>
                <p>
                  <strong className="text-white">Hotline:</strong> 0297 3969 798
                </p>
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:info@pchg.vn" className="underline hover:text-[#95e8ff] transition-colors">
                    info@pchg.vn
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Contact Form */}
          <div className="contact-card w-[21vw] min-w-[280px] max-w-[404px] aspect-[404/515] bg-[#004e68] rounded-[10px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col justify-between p-[3vh] pointer-events-auto opacity-0">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-14 h-14 bg-[#006837] rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-be-vietnam font-bold text-[16px] xl:text-[1.85vh] text-[#95e8ff] mb-2">Đăng Ký Thành Công!</h3>
                <p className="text-white/80 text-[12px] xl:text-[1.4vh]">Chuyên viên tư vấn sẽ liên hệ sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col h-full justify-between">
                {/* Logo White PCPQ */}
                <div className="relative w-[48%] aspect-[196/106.4] mx-auto shrink-0 mb-[1vh]">
                  <img src={imgLogoPcpq1} alt="Logo" className="absolute inset-0 w-full h-full object-contain" />
                </div>

                {/* Form Fields with Border-B */}
                <div className="flex flex-col gap-[0.5vh] xl:gap-[1vh] flex-1 justify-center">
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Họ và tên*"
                    required
                    className="w-full bg-transparent border-b border-white/30 px-2 py-[0.4vh] text-[11px] xl:text-[1.3vh] font-sans
                               focus:outline-none focus:border-[#95e8ff] text-white placeholder-white/40 transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Số điện thoại*"
                    required
                    className="w-full bg-transparent border-b border-white/30 px-2 py-[0.4vh] text-[11px] xl:text-[1.3vh] font-sans
                               focus:outline-none focus:border-[#95e8ff] text-white placeholder-white/40 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email (không bắt buộc)"
                    className="w-full bg-transparent border-b border-white/30 px-2 py-[0.4vh] text-[11px] xl:text-[1.3vh] font-sans
                               focus:outline-none focus:border-[#95e8ff] text-white placeholder-white/40 transition-colors"
                  />

                  {/* Sản phẩm quan tâm */}
                  <div className="relative w-full">
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      required
                      className={`w-full bg-transparent border-b border-white/30 px-2 pr-6 py-[0.4vh] text-[11px] xl:text-[1.3vh] font-sans
                                 focus:outline-none focus:border-[#95e8ff] cursor-pointer appearance-none transition-colors ${formData.product === "" ? "text-white/40" : "text-white/80"}`}
                    >
                      <option value="" disabled hidden className="bg-[#004e68] text-white/40">Sản phẩm quan tâm</option>
                      <option className="bg-[#004e68] text-white">Nhà ở xã hội Phú Cường Home</option>
                      <option className="bg-[#004e68] text-white">Nhà ở thương mại</option>
                      <option className="bg-[#004e68] text-white">Nhà phố</option>
                      <option className="bg-[#004e68] text-white">Shophouse</option>
                      <option className="bg-[#004e68] text-white">Biệt thự</option>
                      <option className="bg-[#004e68] text-white">Tất cả sản phẩm</option>
                    </select>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-[8px] xl:text-[1vh]">▼</span>
                  </div>

                  {/* Nhu cầu */}
                  <div className="relative w-full">
                    <select
                      name="demand"
                      value={formData.demand}
                      onChange={handleInputChange}
                      required
                      className={`w-full bg-transparent border-b border-white/30 px-2 pr-6 py-[0.4vh] text-[11px] xl:text-[1.3vh] font-sans
                                 focus:outline-none focus:border-[#95e8ff] cursor-pointer appearance-none transition-colors ${formData.demand === "" ? "text-white/40" : "text-white/80"}`}
                    >
                      <option value="" disabled hidden className="bg-[#004e68] text-white/40">Nhu cầu</option>
                      <option className="bg-[#004e68] text-white">Mua để ở</option>
                      <option className="bg-[#004e68] text-white">Đầu tư</option>
                      <option className="bg-[#004e68] text-white">Tìm hiểu thông tin</option>
                    </select>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-[8px] xl:text-[1vh]">▼</span>
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-2 cursor-pointer mt-[0.5vh] select-none text-left">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleInputChange}
                      required
                      className="mt-[0.3vh] accent-[#95e8ff] cursor-pointer"
                    />
                    <span className="text-[9px] xl:text-[1.1vh] leading-normal text-white/70 font-sans">
                      Tôi đồng ý để Phú Cường Hoàng Gia liên hệ tư vấn và gửi thông tin dự án.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[80%] max-w-[239px] h-[36px] xl:h-[42px] flex items-center justify-center rounded-[20px] transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg cursor-pointer self-center mt-[1vh] shrink-0 disabled:opacity-50 disabled:pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, #95E8FF 0%, #FDFFD9 100%)",
                  }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-[#0065AD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span
                        className="text-center uppercase text-[12px] xl:text-[14px] font-bold animate-pulse"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#0065AD",
                          letterSpacing: "0.466px",
                        }}
                      >
                        ĐANG GỬI...
                      </span>
                    </div>
                  ) : (
                    <span
                      className="text-center uppercase text-[12px] xl:text-[14px] font-bold"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#0065AD",
                        letterSpacing: "0.466px",
                      }}
                    >
                      ĐĂNG KÝ TƯ VẤN
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Card 3: Map Overlay Image */}
          <div className="contact-card w-[21vw] min-w-[280px] max-w-[404px] aspect-[404/515] relative rounded-[10px] overflow-hidden drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] border border-white/10 pointer-events-auto opacity-0">
            {/* Background Image */}
            <img src={imgRectangle6} alt="Bản đồ" className="absolute inset-0 w-full h-full object-cover" />

            {/* Logo Overlay */}
            <div className="absolute top-[6.7%] left-1/2 -translate-x-1/2 w-[87%] aspect-[354/36]">
              <img src={imgAsset14X1} alt="Khu đô thị Phú Cường Phú Quý" className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </div>

        </div>

        {/* 6 Partner / Social Circular Icons Row */}
        <div className="flex justify-center items-center gap-[2vw] mb-[2vh] pointer-events-auto">
          {[imgZalo, imgPhone, imgFacebook, imgMess, imgTiktok, imgYoutube].map((src, idx) => (
            <div
              key={idx}
              className="animate-partner-icon relative w-[4.5vh] max-w-[63px] aspect-square rounded-full overflow-hidden transition-all duration-300 hover:scale-110 cursor-pointer shadow-md opacity-0"
            >
              <img src={src} alt="Social link" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Short Copyright footer */}
        <div
          className="w-[90%] max-w-[668px] flex flex-col items-center justify-center gap-[0.5vh] shrink-0 pointer-events-none select-none"
        >
          <p
            className="text-center uppercase text-[11px] xl:text-[14px] leading-normal font-sans text-white/90"
          >
            Hình ảnh phối cảnh & bố trí công trình mang tính chất minh họa, có thể điều chỉnh. Thông tin chính thức được căn cứ trên hợp đồng mua bán.
          </p>
          <p
            className="text-center uppercase text-[11px] xl:text-[14px] leading-normal font-sans text-white/90 mt-[0.2vh]"
          >
            © 2026 pchg. All Rights Reserved.
          </p>
        </div>

      </div>

      {/* ── Mobile/Tablet Layout (Scrollable stacked fallback) ── */}
      <div className="lg:hidden flex flex-col justify-start p-6 pb-12 z-10 relative">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 mt-16 mb-8 text-center px-2 animate-title opacity-0 lg:opacity-100">
          <div className="bg-gradient-to-r from-[#004e68] to-[#009ace] border border-[#95e8ff] rounded-[8px] px-6 py-2 shadow-lg flex items-center justify-center">
            <h3 className="font-be-vietnam text-center text-xs font-semibold uppercase text-[#FFFCD8]">
              liên hệ dự án
            </h3>
          </div>
          <h2 className="font-be-vietnam font-bold uppercase text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] leading-tight">
            CÙNG BẠN KHAI MỞ TƯƠNG LAI BỀN VỮNG
          </h2>
        </div>

        {/* 3 Stacked Cards */}
        <div className="flex flex-col gap-6 max-w-[450px] mx-auto w-full mb-8">

          {/* Card 1 */}
          <div className="bg-[#004e68] rounded-[10px] p-6 shadow-xl flex flex-col gap-5 animate-card opacity-0 lg:opacity-100">
            <div className="relative w-40 h-14 mx-auto">
              <img src={imgAsset212X1} alt="Logo" className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <h3 className="font-be-vietnam font-bold uppercase text-[#95E8FF] text-sm text-center">
              CTY CP PHÚ CƯỜNG HOÀNG GIA
            </h3>
            <div className="font-be-vietnam text-white/90 text-xs leading-relaxed space-y-2">
              <p><strong>Trụ sở:</strong> 01 Hà Huy Tập, KĐT Phú Cường, Rạch Giá, An Giang</p>
              <p><strong>Hotline:</strong> 0297 3969 798</p>
              <p><strong>Email:</strong> <a href="mailto:info@pchg.vn" className="underline">info@pchg.vn</a></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#004e68] rounded-[10px] p-6 shadow-xl flex flex-col animate-card opacity-0 lg:opacity-100">
            {formSubmitted ? (
              <div className="text-center py-6">
                <h3 className="font-bold text-[#95e8ff] text-base mb-2">Đăng Ký Thành Công!</h3>
                <p className="text-white/80 text-xs">Chúng tôi sẽ liên hệ trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                <div className="relative w-28 h-8 mx-auto mb-1">
                  <img src={imgLogoPcpq1} alt="Logo" className="absolute inset-0 w-full h-full object-contain" />
                </div>
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Họ và tên*"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-[8px] px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Số điện thoại*"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-[8px] px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email (không bắt buộc)"
                  className="w-full bg-white/5 border border-white/15 rounded-[8px] px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                />

                {/* Sản phẩm quan tâm mobile */}
                <div className="relative w-full">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-[#004e68] border border-white/15 rounded-[8px] px-4 pr-8 py-2 text-xs cursor-pointer appearance-none focus:outline-none ${formData.product === "" ? "text-white/40" : "text-white/80"}`}
                  >
                    <option value="" disabled hidden className="bg-[#004e68] text-white/40">Sản phẩm quan tâm</option>
                    <option className="bg-[#004e68] text-white">Nhà ở xã hội Phú Cường Home</option>
                    <option className="bg-[#004e68] text-white">Nhà ở thương mại</option>
                    <option className="bg-[#004e68] text-white">Nhà phố</option>
                    <option className="bg-[#004e68] text-white">Shophouse</option>
                    <option className="bg-[#004e68] text-white">Biệt thự</option>
                    <option className="bg-[#004e68] text-white">Tất cả sản phẩm</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-[8px]">▼</span>
                </div>

                {/* Nhu cầu mobile */}
                <div className="relative w-full">
                  <select
                    name="demand"
                    value={formData.demand}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-[#004e68] border border-white/15 rounded-[8px] px-4 pr-8 py-2 text-xs cursor-pointer appearance-none focus:outline-none ${formData.demand === "" ? "text-white/40" : "text-white/80"}`}
                  >
                    <option value="" disabled hidden className="bg-[#004e68] text-white/40">Nhu cầu</option>
                    <option className="bg-[#004e68] text-white">Mua để ở</option>
                    <option className="bg-[#004e68] text-white">Đầu tư</option>
                    <option className="bg-[#004e68] text-white">Tìm hiểu thông tin</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-[8px]">▼</span>
                </div>

                {/* Checkbox mobile */}
                <label className="flex items-start gap-2 cursor-pointer mt-1 select-none text-left">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    required
                    className="mt-0.5 accent-[#95e8ff] cursor-pointer"
                  />
                  <span className="text-[10px] leading-normal text-white/70 font-sans">
                    Tôi đồng ý để Phú Cường Hoàng Gia liên hệ tư vấn và gửi thông tin dự án.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-[20px] font-bold uppercase tracking-wider text-xs text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9] mt-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-[#0065AD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="animate-pulse">ĐANG GỬI...</span>
                    </>
                  ) : (
                    <span>ĐĂNG KÝ TƯ VẤN</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Card 3 */}
          <div className="relative rounded-[10px] overflow-hidden shadow-xl aspect-[404/515] border border-white/10 animate-card opacity-0 lg:opacity-100">
            <img src={imgRectangle6} alt="Bản đồ" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-[6.7%] left-0 right-0">
              <div className="relative h-6 w-[80%] mx-auto">
                <img src={imgAsset14X1} alt="Logo" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </div>
          </div>

        </div>

        {/* 6 Icons Mobile */}
        <div className="flex flex-wrap justify-center items-center gap-4 py-4 border-t border-white/10 mb-4 animate-partners opacity-0 lg:opacity-100">
          {[imgZalo, imgPhone, imgFacebook, imgMess, imgTiktok, imgYoutube].map((src, idx) => (
            <div key={idx} className="relative w-8 h-8 rounded-full overflow-hidden animate-partner-icon opacity-0">
              <img src={src} alt="Social link" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Footer Text Mobile */}
        <div className="text-center px-4 w-full max-w-[668px] mx-auto select-none">
          <p className="text-[10px] text-white/70 uppercase leading-normal font-sans">
            Hình ảnh phối cảnh & bố trí công trình mang tính chất minh họa, có thể điều chỉnh. Thông tin chính thức được căn cứ trên hợp đồng mua bán.
          </p>
          <p className="text-[10px] text-white/70 uppercase leading-normal font-sans mt-1">
            © 2026 pchg. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toast.type && (
        <div 
          className="fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-[12px] shadow-2xl border border-white/10 backdrop-blur-md transition-all duration-300 animate-toast"
          style={{
            background: toast.type === "success" 
              ? "linear-gradient(135deg, rgba(0, 78, 104, 0.9) 0%, rgba(0, 154, 206, 0.9) 100%)" 
              : "linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(200, 0, 0, 0.9) 100%)"
          }}
        >
          <style>{`
            @keyframes toastFadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-toast {
              animation: toastFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>
          {toast.type === "success" ? (
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
          <span className="text-white text-xs xl:text-[13px] font-sans font-semibold tracking-wide">{toast.message}</span>
        </div>
      )}

    </section>
  );
}
