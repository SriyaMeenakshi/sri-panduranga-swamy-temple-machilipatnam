import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] py-24 text-[#F7F2EB]">
      
      {/* Container forcing absolute center alignment */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4">

        {/* Temple Name */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-medium uppercase tracking-widest text-[#D4AF37] md:text-4xl">
            Sri Panduranga Swamy Temple
          </h2>
          <p className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-gray-400">
            Chilakalapudi • Machilipatnam • Krishna District • Andhra Pradesh
          </p>
          
        </div>
        <br/>
        {/* Cinematic Divider */}
        <div className="my-16 h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

        {/* Footer Links (2-Column Layout) */}
        <div className="flex w-full max-w-2xl flex-col justify-around gap-12 text-center sm:flex-row sm:text-left">
          {/* Navigation */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-6 font-heading text-xl uppercase tracking-widest text-[#D4AF37]">
              Explore
            </h3>
            <ul className="space-y-4 font-body text-[#F7F2EB]/80">
              <li><Link href="/" className="transition-colors hover:text-[#D4AF37]">Home</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-[#D4AF37]">Gallery</Link></li>
              <li><Link href="/history" className="transition-colors hover:text-[#D4AF37]">History</Link></li>
              <li><Link href="/visit" className="transition-colors hover:text-[#D4AF37]">Visit</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-6 font-heading text-xl uppercase tracking-widest text-[#D4AF37]">
              Resources
            </h3>
            <ul className="space-y-4 font-body text-[#F7F2EB]/80">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100082794707197" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#D4AF37]">
                  Temple Facebook Page
                </a>
              </li>
              <li>
                <a href="https://krishna.ap.gov.in/tourist-place/pandu-ranga-temple-machilipatnam/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#D4AF37]">
                  Andhra Pradesh Tourism
                </a>
              </li>
              <li>
                <a href="https://youtu.be/F1THNjVBWnc?si=qUut2M7VcFQwx74e" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#D4AF37]">
                  Temple Documentary (Telugu)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cinematic Divider */}
        <div className="my-16 h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <br/>
        {/* Bottom Dedication Section */}
        <div className="flex flex-col items-center text-center">

          {/* Sanskrit Chant */}
          <h3 className="font-heading text-3xl font-normal text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] md:text-4xl">
            जय जय राम कृष्ण हरि
          </h3>

          {/* Dedication Text */}
          <div className="mt-8 flex flex-col items-center space-y-3 font-body text-[#F7F2EB]/90">
            <p className="text-xl italic text-[#D4AF37]">
              Developed with Vittala's Grace
            </p>
            <p className="text-base tracking-wide md:text-lg">
              A Digital Heritage Project
            </p>
            <p className="text-sm text-[#F7F2EB]/70 md:text-base">
              by Sriya Meenakshi Chalamalasetty, dedicated with love to my beloved Panduranga.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 max-w-5xl px-4 text-xs leading-loose text-gray-500 md:text-sm">
            This website is an independent digital heritage initiative and is not affiliated with or operated by the official temple administration.
          </p>

          {/* Copyright */}
          <p className="mt-8 font-heading text-xs uppercase tracking-[0.2em] text-gray-600">
            © 2026 Panduranga Swamy Temple Chilakalapudi
          </p>

        </div>
      </div>
    </footer>
  );
}