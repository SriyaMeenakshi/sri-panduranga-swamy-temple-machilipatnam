import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HistoryPreview from "../../components/home/HistoryPreview";

export default function VisitPage() {
  return (
    <main className="min-h-screen w-full bg-[#120b08]">
      <Navbar/>
      {/* HERO BANNER */}
      <section className="relative flex h-[50vh] min-h-[400px] w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#120b08]/80 via-[#120b08]/50 to-[#120b08]" />
        {/* Replace with a wide shot of the temple exterior */}
        <Image 
          src="/visit/hero.png" 
          alt="Visit Sri Panduranga Swamy Temple" 
          fill
          priority // Keep this! It tells Google to load this specific image first
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="object-cover" 
        />
        <div className="relative z-20 px-4 text-center">
          
          <h1 className="font-heading text-4xl font-normal uppercase tracking-widest text-[#F7F2EB] drop-shadow-lg md:text-5xl lg:text-6xl">
            Visit Keer Pandharpuram
          </h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37] md:w-24" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37] md:w-24" />
          </div>
        </div>
      </section>

      {/* TRAVEL & LOCATION INFO */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Map & Address */}
            <div className="flex flex-col items-center rounded-2xl border border-[#D4AF37]/20 bg-[#1a0f0a] p-10 text-center shadow-xl transition-colors hover:border-[#D4AF37]/50">
              <div className="mb-6 rounded-full bg-[#D4AF37]/10 p-4 text-[#D4AF37]">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl uppercase tracking-widest text-[#D4AF37]">Location</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-[#F7F2EB]/80">
                Chilakalapudi, Machilipatnam<br />
                Krishna District, Andhra Pradesh
              </p>
              <a 
                href="https://maps.app.goo.gl/v1iDGScTT32cH7tB8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-block border-b border-[#D4AF37] font-body text-sm uppercase tracking-wider text-[#D4AF37] transition-all hover:text-[#F7F2EB]"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Railway Station */}
            <div className="flex flex-col items-center rounded-2xl border border-[#D4AF37]/20 bg-[#1a0f0a] p-10 text-center shadow-xl transition-colors hover:border-[#D4AF37]/50">
              <div className="mb-6 rounded-full bg-[#D4AF37]/10 p-4 text-[#D4AF37]">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl uppercase tracking-widest text-[#D4AF37]">By Train</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-[#F7F2EB]/80">
                The nearest railway station is <strong>Machilipatnam (MTM)</strong>, located just a few kilometers from the temple.
              </p>
            </div>

            {/* Airport */}
            <div className="flex flex-col items-center rounded-2xl border border-[#D4AF37]/20 bg-[#1a0f0a] p-10 text-center shadow-xl transition-colors hover:border-[#D4AF37]/50">
              <div className="mb-6 rounded-full bg-[#D4AF37]/10 p-4 text-[#D4AF37]">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl uppercase tracking-widest text-[#D4AF37]">By Air</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-[#F7F2EB]/80">
                The closest airport is <strong>Vijayawada International Airport (VGA)</strong>, approximately a 1.5-hour drive away.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THE NO HUNDI FEATURE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] py-24">
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 text-4xl text-[#D4AF37]"> <br/></div>
          <h2 className="font-heading text-3xl font-normal uppercase tracking-widest text-[#F7F2EB] md:text-4xl">
            A Temple Run Purely on Faith
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-[#F7F2EB]/80 md:text-xl">
             <strong>This temple strictly maintains a "No Hundi" (no donation box) policy.</strong> It operates entirely on the unwavering faith of its devotees and the divine grace of Lord Panduranga, just as Sri Bhakta Narasimham envisioned.
          </p>
          <a 
            href="https://share.google/UAGNDjmj5zOmQwRkd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-[#D4AF37]/60 bg-[#0a0503] px-8 py-3 font-heading text-sm uppercase tracking-widest text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#0a0503]"
          >
            Read the News Article →
          </a>
        </div>
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </section>
<br/>
      {/* SACRED HIGHLIGHTS (GRID) */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-normal uppercase tracking-widest text-[#F7F2EB] md:text-4xl">
              Sacred Highlights to Explore
            </h2>
            <p className="mt-4 font-body text-[#F7F2EB]/70">Do not miss these spiritually significant spots during your visit.</p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            
            {/* Highlight 1: Original Image */}
            <div className="group flex flex-col overflow-hidden  border border-[#D4AF37]/20 bg-[#1a0f0a] transition-all hover:border-[#D4AF37]/60">
              <div className="relative h-72 w-full overflow-hidden">
                {/* Make sure to add this image to your public folder */}
                <Image src="/visit/panduranga.png" alt="Original Lord Panduranga" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl tracking-widest text-[#D4AF37]">The Main Sanctum</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#F7F2EB]/80">
                  Have a divine darshan of the original, mesmerizing Lord Panduranga Swamy (Swayambhu), standing majestically on a brick, radiating peace and boundless compassion to all who visit.
                </p>
              </div>
            </div>

            {/* Highlight 2: Bhakta Narasimha */}
            <div className="group flex flex-col overflow-hidden  border border-[#D4AF37]/20 bg-[#1a0f0a] transition-all hover:border-[#D4AF37]/60">
              <div className="relative h-72 w-full overflow-hidden">
                <Image src="/visit/narasimham.png" alt="Sri Bhakta Narasimha" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl tracking-widest text-[#D4AF37]">Sri Bhakta Narasimham</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#F7F2EB]/80">
                  Pay respects to the portrait of the revered founder. His singular, unwavering devotion transformed this coastal village into the sacred Keer Pandharpuram we know today.
                </p>
              </div>
            </div>

            {/* Highlight 3: Sacred Tree & Meditating Rishi */}
            <div className="group flex flex-col overflow-hidden  border border-[#D4AF37]/20 bg-[#1a0f0a] transition-all hover:border-[#D4AF37]/60">
              <div className="relative h-72 w-full overflow-hidden">
                <Image src="/gallery/tree.jpg" alt="Sacred Temple Tree" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl tracking-widest text-[#D4AF37]">The Sthala Vriksham</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#F7F2EB]/80">
                  Sit beneath the ancient sacred banyan tree within the temple courtyard. According to local belief, a great Rishi is still in deep meditation here, infusing this spot with profound spiritual energy.
                </p>
              </div>
            </div>

            {/* Highlight 4: 108 Shrines */}
            <div className="group flex flex-col overflow-hidden  border border-[#D4AF37]/20 bg-[#1a0f0a] transition-all hover:border-[#D4AF37]/60">
              <div className="relative h-72 w-full overflow-hidden">
                <Image src="/visit/shrines.png" alt="108 Shrines" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl tracking-widest text-[#D4AF37]">108 Sacred Shrines</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#F7F2EB]/80">
                  Wander through the remarkable complex of 108 small, beautifully maintained shrines surrounding the main temple, each dedicated to different revered deities and forming a profound spiritual circuit.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <br/>
      <HistoryPreview />
      <br/>
<Footer/>
    </main>
  );
}