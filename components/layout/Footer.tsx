import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#D4AF37]/20 bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] pb-8 pt-12 text-[#F7F2EB]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
        
        {/* Top Section: Branding, Dedication & Navigation */}
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          
          {/* Left Column: Branding & Dedication */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="font-heading text-xl font-medium uppercase tracking-widest text-[#D4AF37] md:text-2xl">
              Sri Panduranga Swamy Temple
            </h2>
            <p className="mt-2 font-body text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Chilakalapudi • Machilipatnam • AP
            </p>
            <br/>
            {/* Compact Dedication */}
            <div className="mt-8 flex flex-col space-y-4">
              <p className="font-heading text-lg font-normal text-[#D4AF37] drop-shadow-sm">
                जय जय राम कृष्ण हरि
              </p>
              <br/>
              <p className="font-body text-sm text-[#F7F2EB]/80">
                Dedicated to the Lotus feet of Sri Panduranga Swamy.
              </p>
              <br/>
              <p className="font-body text-xs italic text-[#F7F2EB]/60">
                A Digital Heritage Project by Sriya Meenakshi Chalamalasetty.
              </p>
            </div>
          </div>
          
          {/* Right Column: Quick Links & Image */}
          <div className="flex flex-col items-center md:items-end">
            <nav className="flex gap-5 font-heading text-xs uppercase tracking-widest text-[#F7F2EB]/80">
              <Link href="/" className="transition-colors hover:text-[#D4AF37]">Home</Link>
              <Link href="/gallery" className="transition-colors hover:text-[#D4AF37]">Gallery</Link>
              <Link href="/history" className="transition-colors hover:text-[#D4AF37]">History</Link>
              <Link href="/visit" className="transition-colors hover:text-[#D4AF37]">Visit</Link>
            </nav>
            
            {/* Lotus Feet Image directly below the nav */}
            <div className="relative mt-10 h-10 w-full opacity-100 transition-opacity duration-1000 hover:opacity-100 md:h-24 md:w-24">
              <Image 
                src="/feet.png" 
                alt="Lotus Feet of Lord Panduranga"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
                quality={100}
                className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              />
            </div>
          </div>

        </div>
        
        {/* Cinematic Divider */}
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent md:via-[#D4AF37]/30" />

        {/* Bottom Bar: Copyright, Disclaimer & Icons */}
        <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row">
          
          {/* Legal / Copyright */}
          <div className="text-center md:text-left">
            <p className="font-heading text-[10px] uppercase tracking-wider text-gray-500">
              © 2026 Panduranga Swamy Temple • Not affiliated with official administration.
            </p>
          </div>

          {/* External Links (Icons) */}
          <div className="flex items-center gap-5">
            {/* Facebook Icon */}
            <a 
              href="https://www.facebook.com/profile.php?id=100082794707197" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 transition-colors hover:text-[#D4AF37] hover:scale-110" 
              aria-label="Temple Facebook Page" 
              title="Temple Facebook Page"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
            </a>
            
            {/* AP Tourism (Globe Icon) */}
            <a 
              href="https://krishna.ap.gov.in/tourist-place/pandu-ranga-temple-machilipatnam/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 transition-colors hover:text-[#D4AF37] hover:scale-110" 
              aria-label="AP Tourism" 
              title="AP Tourism"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </a>
            
            {/* Documentary (YouTube Icon) */}
            <a 
              href="https://youtu.be/F1THNjVBWnc?si=qUut2M7VcFQwx74e" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 transition-colors hover:text-[#D4AF37] hover:scale-110" 
              aria-label="Temple Documentary" 
              title="Temple Documentary (Telugu)"
            >
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}