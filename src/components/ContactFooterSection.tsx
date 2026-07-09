"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgRectangle6 = "/assets/2da6ff5d0a6d8e434f9f82e06e7290236d7edf0e.png";
const imgAsset14X1 = "/assets/b81776fe152d18a7194ece4649cd2106fa7d7c6f.png";
const imgAsset212X1 = "/assets/04195bc0bad3f52644767a492c62b5d2473f1f12.png";

const imgPhone = "/assets/9fe127963e104efca8c123834786be441438f4d1.png";
const imgZalo = "/assets/eef6d6f0fb2f530a7fb1adeb916d938dd28355fe.png";
const imgFacebook = "/assets/c94ddb7a5c0a0287784654bddb8571e41ac3a5f2.png";
const imgMess = "/assets/80b6c1bf84a7cfd217090234d346c96769599e18.png";
const imgYoutube = "/assets/fefe3dfdd9621d4b7225d305aa6a031acbfa1ab5.png";

const OUTER = "relative w-full h-screen overflow-hidden bg-cover bg-center";
const INNER = "relative w-full h-full max-w-[1920px] lg:max-w-none mx-auto";

export default function ContactFooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", product: "Nhà phố thương mại",
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const titleRight = el.querySelector(".animate-title-right");
    const titleCenter = el.querySelector(".animate-title-center");
    const info = el.querySelector(".animate-info");
    const formBox = el.querySelector(".animate-form");
    const brand = el.querySelector(".animate-brand");
    const partners = el.querySelectorAll(".animate-partner-icon");

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
        [info, formBox, brand],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
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
        partners,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.6,
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
    }, el);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", product: "Nhà phố thương mại" });
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className={`${OUTER} bg-gradient-to-b from-[#004e68] to-[#009ace]`}
    >
      <div className={`${INNER} flex flex-col justify-between p-6 md:p-12 lg:p-0`}>
        <p className="animate-title-right lg:absolute lg:right-[10.4%] lg:top-[7.9%]
                      font-be-vietnam uppercase tracking-widest text-white/80
                      font-medium text-sm border-b border-[#95e8ff]/50
                      pb-2 text-right mt-16 lg:mt-0 opacity-0">
          liên hệ
        </p>

        <div className="animate-title-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[11%] mt-20 lg:mt-0 text-center w-full lg:w-auto opacity-0">
          <h2 className="font-anton uppercase text-xl md:text-3xl lg:text-[2.2vw]
                         tracking-wide bg-clip-text text-transparent
                         bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]">
            CÙNG BẠN KHAI MỞ TƯƠNG LAI BỀN VỮNG
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6
                        lg:absolute lg:left-[3.6%] lg:right-[3.6%] lg:top-[22%]
                        my-8 lg:my-0">
          {/* Company info */}
          <div className="animate-info bg-[#004e68]/80 backdrop-blur-md border border-white/10 rounded-2xl p-7 shadow-2xl flex flex-col gap-4 lg:h-[44vh] opacity-0">
            <div className="relative w-40 h-14 self-center">
              <Image src={imgAsset212X1} alt="Logo" fill className="object-contain" />
            </div>
            <h3 className="font-bold text-[#95e8ff] uppercase tracking-wider text-sm text-center">CTY CP PHÚ CƯỜNG HOÀNG GIA</h3>
            <div className="font-be-vietnam text-white/90 text-xs leading-relaxed space-y-2">
              <p><strong>Trụ sở:</strong> 01 Hà Huy Tập, KĐT Phú Cường, Rạch Giá, Kiên Giang</p>
              <p><strong>Hotline:</strong> 0297 3969 798</p>
              <p><strong>Email:</strong> <a href="mailto:info@pchg.vn" className="underline hover:text-[#95e8ff]">info@pchg.vn</a></p>
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-form bg-[#004e68]/80 backdrop-blur-md border border-white/10 rounded-2xl p-7 shadow-2xl flex flex-col lg:h-[44vh] opacity-0">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-14 h-14 bg-[#006844] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-be-vietnam font-bold text-lg text-[#95e8ff] mb-2">Đăng Ký Thành Công!</h3>
                <p className="text-white/80 text-sm">Chuyên viên tư vấn sẽ liên hệ sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 h-full justify-between">
                <h3 className="font-be-vietnam font-bold text-xs tracking-widest text-[#fffcd8] uppercase border-b border-white/10 pb-2">
                  Đăng ký tư vấn
                </h3>
                <div className="flex flex-col gap-2.5 flex-1">
                  {[
                    { type: "text", name: "name", placeholder: "Tên của bạn", required: true },
                    { type: "email", name: "email", placeholder: "Email của bạn", required: false },
                    { type: "tel", name: "phone", placeholder: "Số điện thoại", required: true },
                  ].map(field => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm
                                 focus:outline-none focus:border-[#95e8ff] text-white placeholder-white/40"
                    />
                  ))}
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full bg-[#004e68] border border-white/10 rounded-xl px-4 py-2.5 text-sm
                               focus:outline-none focus:border-[#95e8ff] text-white/80 cursor-pointer"
                  >
                    <option>Nhà phố thương mại</option>
                    <option>Biệt thự đơn lập</option>
                    <option>Đất nền thương mại</option>
                    <option>Nhà ở xã hội</option>
                  </select>
                </div>
                <button type="submit"
                  className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm
                             text-[#0065ad] bg-gradient-to-b from-[#95e8ff] to-[#fdffd9]
                             hover:brightness-110 transition-all cursor-pointer mt-1">
                  Đăng ký tư vấn ngay
                </button>
              </form>
            )}
          </div>

          {/* Brand image */}
          <div className="animate-brand relative rounded-2xl overflow-hidden shadow-2xl lg:h-[44vh] border border-white/10 opacity-0">
            <Image src={imgRectangle6} alt="Phú Cường" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute top-6 left-0 right-0">
              <div className="relative h-10 w-[75%] mx-auto">
                <Image src={imgAsset14X1} alt="Brand" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Partner / social row */}
        <div className="flex flex-wrap justify-center items-center gap-6 py-6
                        border-t border-white/10
                        lg:absolute lg:left-[3.6%] lg:right-[3.6%] lg:top-[74%]">
          {[imgPhone, imgZalo, imgFacebook, imgMess, imgYoutube].map((src, idx) => (
            <div key={idx} className="animate-partner-icon relative w-16 h-8 opacity-0 hover:opacity-100 transition-opacity">
              <Image src={src} alt="Partner" fill className="object-contain" />
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-white/40 pb-4 pt-2 border-t border-white/5 w-full">
          © 2026 Công Ty Cổ Phần Phú Cường Hoàng Gia. Bản quyền thiết kế thuộc về dự án PCPQ.
        </p>
      </div>
    </section>
  );
}
