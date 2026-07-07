import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap", // Ensures text stays visible while font loads
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Panduranga Swamy Temple | Chilakalapudi",
  description:
    "Website of Sri Panduranga Swamy Temple, Chilakalapudi, Machilipatnam. A timeless sanctuary of devotion, heritage, and divine grace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`
          ${cinzel.variable} 
          ${lora.variable} 
          antialiased 
          bg-[#120b08] 
          text-[#F7F2EB] 
          font-body 
          selection:bg-[#D4AF37]/30 
          selection:text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}