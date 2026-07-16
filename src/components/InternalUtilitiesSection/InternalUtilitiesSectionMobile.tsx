"use client";

const imgMapTienIch2Mobile = "/assets/d7a186bf2cbe9ac5c7005c1be1e9b2d256985c87.jpg";

export default function InternalUtilitiesSectionMobile() {
  return (
    <div className="w-full flex flex-col gap-6 pt-[24px] pb-0 bg-[#004e68] relative z-10 animate-fade-in">
      {/* Title */}
      <div className="flex justify-center w-full px-[21px]">
        <h3
          className="font-be-vietnam uppercase text-white select-none text-center"
          style={{
            fontSize: "20px",
            fontWeight: 600,
            textShadow: "0 4px 4px rgba(0, 78, 104, 0.50)",
            lineHeight: "normal",
          }}
        >
          TIỆN ÍCH NỘI KHU
        </h3>
      </div>

      {/* Full-width Map Image */}
      <div className="w-full h-[346px] relative z-0 overflow-hidden">
        <img
          src={imgMapTienIch2Mobile}
          alt="Internal Utilities Map"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
