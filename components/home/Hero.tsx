import Image from "next/image";
import Navbar from "../layout/Navbar";
import Container from "../common/Container";
import TempleButton from "../common/TempleButton";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/hero/hero.png" // Ensure this is your high-res image
        alt="Sri Panduranga Swamy Temple"
        fill
        priority
        className="object-cover object-center scale-105" // Subtle cinematic scale
      />

      {/* Cinematic Overlay - Darker edges, clearer center */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#120b08]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <Navbar />

      <Container className="relative z-20 flex h-full items-center justify-center pt-24">
        <div className="flex max-w-5xl flex-col items-center text-center">

          {/* Massive Title */}
          <h1 className="font-serif text-10xl font-bold uppercase leading-tight tracking-wider text-white drop-shadow-2xl md:text-5xl lg:text-[5.5rem]">
            <br/><span className="opacity-95 text-white/90">Sri Panduranga</span>
            <br />
            Swamy Temple
          </h1>

          {/* Decorative Divider */}
          <div className="my-8 flex items-center justify-center gap-3 opacity-90">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37] md:w-32" />
            <div className="h-2 w-2 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37] md:w-32" />
          </div>
          <br/>

          {/* Location Details */}
          <p className="font-serif text-white text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37] drop-shadow-md">
            Chilakalapudi <span className="mx-2 text-white/50">•</span> Machilipatnam <span className="mx-2 text-white/50">•</span> Andhra Pradesh
          </p>

          {/* Elegant Description */}
          <p className="mx-auto mt-8 max-w-7xl font-serif text-xl leading-[1.8] text-[#F7F2EB] drop-shadow-lg md:text-2xl lg:text-[1.25rem]">
            Along the serene coast of Machilipatnam, in the sacred village of
            Chilakalapudi, stands Sri Panduranga Swamy Temple—a timeless
            sanctuary where devotion, heritage and divine grace have flourished
            for generations.
          </p>

          {/* Call to Action */}
          <div className="mt-12">
            <TempleButton href="/visit" text=" Explore the Heritage " />
          </div>

         

        </div>
      </Container>
    </section>
  );
}