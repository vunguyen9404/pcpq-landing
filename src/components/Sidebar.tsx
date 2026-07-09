"use client";

import Image from "next/image";

const imgPcpq = "/assets/75b906d0e6702d36d198948691355b25b0a0c2f7.png";
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden">
      {/* Left: map backdrop (click outside to close) */}
      <div
        onClick={onClose}
        className="hidden lg:block lg:flex-1 h-full relative cursor-pointer group"
      >
        <Image
          src="/assets/6d7cded6d709195f9bd4b61ab0054ceddaf9827d.png"
          alt="Backdrop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#004e68]/50 group-hover:bg-[#004e68]/45 transition-colors" />
      </div>

      {/* Right: beige menu panel */}
      <div
        className="relative w-full lg:w-[33.3%] h-full shadow-2xl
                   flex flex-col justify-between p-10 lg:p-12
                   bg-cover bg-center border-l border-white/10 animate-fadeInRight shrink-0"
        style={{ backgroundImage: "url('/assets/d313ca5b98ac98e499c3e6aefcd53f450a687de5.png')" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center
                     rounded-full bg-[#004e68]/5 border border-[#004e68]/15
                     hover:bg-[#004e68]/10 text-[#004e68] cursor-pointer text-lg font-bold"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-32 h-12">
            <Image src={imgPcpq} alt="PCPQ" fill className="object-contain" />
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-2 items-center text-center my-auto">
          {[
            { name: "TỔNG QUAN",        href: "#overview"  },
            { name: "CHỦ ĐẦU TƯ",       href: "#developer" },
            { name: "VỊ TRÍ DỰ ÁN",     href: "#location"  },
            { name: "TIỆN ÍCH DỰ ÁN",   href: "#utilities" },
            { name: "SẢN PHẨM",          href: "#masterplan"},
            { name: "VR TOUR360",         href: "https://vr360.pchg.vn" },
            { name: "TRUYỀN THÔNG",       href: "#media"     },
            { name: "THÔNG TIN PHÁP LÝ",  href: "#developer" },
            { name: "LIÊN HỆ",            href: "#contact"   },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={onClose}
              className="font-be-vietnam font-bold text-xl lg:text-[1.25vw]
                         tracking-widest uppercase py-1.5 px-5 rounded-lg w-full text-center block
                         text-[#004e68] hover:text-[#009ace] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-3 mb-2">
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
              className="relative w-10 h-10 hover:scale-110 transition-transform"
            >
              <Image src={s.src} alt={s.alt} fill className="object-contain" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
