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
  // Add this line right here!
  metadataBase: new URL("https://sripandurangaswamytemple-machilipatnam.vercel.app"),
  
  title: "Sri Panduranga Swamy Temple | Keer Pandharpuram, Chilakalapudi",
  description: "Discover the digital heritage of Sri Panduranga Swamy Temple in Chilakalapudi, Machilipatnam. A sacred Kshetram built on pure devotion with no Hundi.",
  keywords: ["Panduranga Swamy Temple", "Chilakalapudi", "Machilipatnam", "Keer Pandharpuram", "Andhra Pradesh temples", "Bhakta Narasimham"],
  openGraph: {
    title: "Sri Panduranga Swamy Temple | Chilakalapudi",
    description: "Explore the sacred heritage of Keer Pandharpuram in Machilipatnam.",
    images: ["/hero/hero.png"], 
  },
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