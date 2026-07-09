"use client";

import Image from "next/image";

const imgVR360   = "/assets/c6c32c6d5cc4551eab362105d673c1cc0ddb50cc.svg";
const imgPhone   = "/assets/9fe127963e104efca8c123834786be441438f4d1.png";
const imgZalo    = "/assets/eef6d6f0fb2f530a7fb1adeb916d938dd28355fe.png";

export default function StickySocials() {
  return (
    <div className="fixed right-[3.75%] top-[50%] -translate-y-1/2 z-40 flex flex-col gap-3 pointer-events-auto">
      {/* VR360 Icon */}
      <a
        href="https://vr360.pchg.vn"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200"
        title="Tham quan VR360"
      >
        <Image src={imgVR360} alt="VR360" fill className="object-contain" />
      </a>

      {/* Hotline Icon */}
      <a
        href="tel:02973969798"
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200"
        title="Hotline"
      >
        <Image src={imgPhone} alt="Hotline" fill className="object-contain" />
      </a>

      {/* Zalo Icon */}
      <a
        href="https://zalo.me"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200"
        title="Zalo Chat"
      >
        <Image src={imgZalo} alt="Zalo" fill className="object-contain" />
      </a>
    </div>
  );
}
