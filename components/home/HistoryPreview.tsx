import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import TempleButton from "../common/TempleButton";

export default function HistoryPreview() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] py-24 md:py-32">
      
      {/* Centered Section Title */}
      <div className="flex w-full justify-center">
        <SectionTitle
          title="The Divine Chronicle"
          subtitle="Discover the miraculous origins of the temple through an immersive, illustrated photo-story."
        />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative mt-16 flex w-full max-w-4xl flex-col items-center justify-center px-4">

        {/* Framed "Story Teaser" Image */}
        <div className="group relative mx-auto flex w-full max-w-sm flex-col items-center justify-center p-3">
          
          {/* Decorative Gold Outer Frame */}
          <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/30 bg-[#1a0f0a] shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-700 group-hover:border-[#D4AF37]/70 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]" />
          
          {/* Inner Image Container */}
          <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#D4AF37]/20">
            <Image
              src="/history/chapter6.png"
              alt="Illustrated History of Sri Panduranga Swamy Temple"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Cinematic Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent opacity-80" />
          </div>

        </div>

        {/* Centered Teaser Text */}
        <p className="mt-12 max-w-2xl text-center font-body text-lg leading-loose text-[#F7F2EB]/80 md:text-xl">
          Behind these sacred walls lies a tale of unwavering devotion and divine grace. 
          Step back in time and explore our heritage through a beautifully crafted 
          <strong className="font-semibold text-[#D4AF37] font-heading tracking-wider"> visual narrative</strong>—bringing the legends of Lord Panduranga to life like never before.
        </p>
        <br/>
        {/* Call to Action Button */}
        <div className="mt-12">
            <TempleButton href="/history" text="Experience the Illustrated History →" />
          
        </div>

      </div>
    </section>
  );
}