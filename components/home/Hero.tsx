import Image from "next/image";
import Navbar from "../layout/Navbar";
import Container from "../common/Container";
import TempleButton from "../common/TempleButton";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden min-h-[100dvh] md:min-h-[800px]">
      
      {/* Background Image */}
      <Image
        src="/hero/hero.png" 
        alt="Sri Panduranga Swamy Temple"
        fill
        priority
        className="object-cover object-center scale-105" 
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/20 to-[#120b08]/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Navbar wrapper */}
      <div className="relative z-50 w-full">
        <Navbar />
      </div>

      {/* Container holding the text */}
      <Container className="relative z-20 flex h-full flex-1 flex-col items-center justify-center pb-12 pt-24">
        <div className="flex max-w-5xl flex-col items-center text-center">

          {/* Massive Title */}
          <h1 className="font-serif text-4xl font-bold uppercase leading-tight tracking-wider text-white drop-shadow-2xl md:text-5xl lg:text-[5.5rem]">
            <br/><span className="opacity-95 text-white/90">Sri Panduranga</span>
            <br />
            Swamy Temple
          </h1>

          {/* Decorative Divider */}
          <div className="my-6 flex items-center justify-center gap-3 opacity-90 md:my-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37] md:w-32" />
            <div className="h-2 w-2 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37] md:w-32" />
          </div>
          
          {/* Location Details */}
          <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] drop-shadow-md md:text-sm md:tracking-[0.4em]">
            Chilakalapudi <span className="mx-1 text-white/50 md:mx-2">•</span> Machilipatnam <span className="mx-1 text-white/50 md:mx-2">•</span> Andhra Pradesh
          </p>

          {/* Elegant Description */}
          <p className="mx-auto mt-6 max-w-3xl px-4 font-serif text-sm leading-[1.8] text-[#F7F2EB] drop-shadow-lg md:mt-8 md:text-2xl lg:text-[1.25rem]">
            Along the serene coast of Machilipatnam, in the sacred village of
            Chilakalapudi, stands Sri Panduranga Swamy Temple—a timeless
            sanctuary where devotion, heritage and divine grace have flourished
            for generations.
          </p>

          {/* Call to Action */}
          <div className="mt-8 md:mt-12">
            <TempleButton href="/visit" text=" Explore the Heritage " />
          </div>

        </div>
      </Container>
    </section>
  );
}