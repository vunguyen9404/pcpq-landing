import type { Metadata } from "next";
import { Be_Vietnam_Pro, Anton, Inter } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Phú Cường Phú Quý - Khu Đô Thị Biển Rạch Giá",
  description: "Dự án phát triển đô thị quy mô lớn Phú Cường Phú Quý tại Rạch Giá - Kiên Giang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#004e68] text-white font-be-vietnam">{children}</body>
    </html>
  );
}
