"use client";


const imgVR360 = "/assets/c6c32c6d5cc4551eab362105d673c1cc0ddb50cc.svg";
const imgPhone = "/assets/9fe127963e104efca8c123834786be441438f4d1.png";
const imgZalo = "/assets/eef6d6f0fb2f530a7fb1adeb916d938dd28355fe.png";
const imgFacebook = "/assets/c94ddb7a5c0a0287784654bddb8571e41ac3a5f2.png";

export default function StickySocials({ isVisible = true }: { isVisible?: boolean }) {
  return (
    <div className={`hidden md:flex fixed right-[3.75%] top-[50%] -translate-y-1/2 z-40 flex-col gap-3 pointer-events-auto transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>
      {/* VR360 Icon */}
      <a
        href="https://360.phucuongphuquy.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200"
        title="Tham quan VR360"
      >
        <img src={imgVR360} alt="VR360" className="absolute inset-0 w-full h-full object-contain" />
      </a>

      {/* Zalo Icon */}
      <a
        href="https://zalo.me/1749052491968393742"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200"
        title="Zalo Chat"
      >
        <img src={imgPhone} alt="Zalo" className="absolute inset-0 w-full h-full object-contain" />
      </a>

      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com/pchg.official?locale=vi_VN"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200"
        title="Facebook"
      >
        <img src={imgFacebook} alt="Facebook" className="absolute inset-0 w-full h-full object-contain" />
      </a>

      {/* Messenger Icon
      <button
        type="button"
        onClick={() => {
          const fb = (window as any).FB;
          if (fb?.CustomerChat) {
            fb.CustomerChat.show(true);
          } else {
            window.open("https://m.me/100632615096463", "_blank");
          }
        }}
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200 cursor-pointer"
        title="Chat Messenger"
      >
        <svg
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <circle cx="23" cy="23" r="23" fill="url(#messenger-grad)" />
          <path
            d="M23 9C15.268 9 9 14.924 9 22.25c0 4.08 1.87 7.724 4.82 10.22V37l4.537-2.494C19.795 34.82 21.37 35 23 35c7.732 0 14-5.924 14-13.25S30.732 9 23 9Zm1.393 17.83-3.56-3.795-6.947 3.795 7.637-8.107 3.648 3.795 6.86-3.795-7.638 8.107Z"
            fill="white"
          />
          <defs>
            <linearGradient id="messenger-grad" x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B2FF" />
              <stop offset="1" stopColor="#006AFF" />
            </linearGradient>
          </defs>
        </svg>
      </button> */}

      {/* Hotline Icon */}
      <a
        href="tel:02973969798"
        className="relative w-9 md:w-[46px] h-9 md:h-[46px] hover:scale-110 transition-transform duration-200"
        title="Hotline"
      >
        <div className="relative w-full h-full animate-phone-ring">
          <img src={imgZalo} alt="Hotline" className="absolute inset-0 w-full h-full object-contain" />
        </div>
      </a>
    </div>
  );
}
