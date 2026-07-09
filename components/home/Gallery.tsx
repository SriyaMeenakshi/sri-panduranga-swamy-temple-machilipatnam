"use client";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "/gallery/enterance.jpg",
    title: "Gateway to Grace",
    description: "The magnificent entrance welcoming every devotee.",
  },
  {
    image: "/gallery/main-enterance.jpg",
    title: "Divine Entrance",
    description: "Where every step leads to spiritual awakening.",
  },
  {
    image: "/gallery/sunset.jpg",
    title: "Sacred Silhouette",
    description: "Every stone echoes devotion.",
  },
  {
    image: "/gallery/temple1.jpg",
    title: "Temple Shrine",
    description: "A sanctuary of faith and timeless devotion.",
  },
  {
    image: "/gallery/idols.jpg",
    title: "Eternal Vittala & Rukmini",
    description: "Where every heart finds peace in the divine presence of the deities.",
  },
  {
    image: "/gallery/temple2.jpg",
    title: "Sacred Sanctum",
    description: "A place where devotion meets divine serenity.",
  },
  {
    image: "/gallery/night-deco.jpg",
    title: "Festive Lights",
    description: "The temple illuminated in celebration and devotion.",
  },
  {
    image: "/gallery/night-view.jpg",
    title: "Nighttime Serenity",
    description: "A tranquil view of the temple under the night sky.",
  },
  {
    image: "/gallery/pond.jpg",
    title: "Divine Temple Pond",
    description: "A serene pond reflecting the temple's spiritual aura.",
  },
  {
    image:"/gallery/cow.jpg",
    title:"Gowmatha",
    description:"Gowmatha, from the sacred Gowshala, revered in our temple grounds.",
  },
  {
    image: "/gallery/tree.jpg",
    title: "The Tree of Vedic Hymns",
    description: "A sacred tree echoing ancient hymns. Discover its legacy in our History section.",
  }
];

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section className="bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] py-24 md:py-32 w-full">
      {/* Container forcing absolute center alignment */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 md:px-8">
        
        {/* Section Title Wrapper */}
        <div className="flex w-full justify-center">
          <SectionTitle
            title="Photo Gallery"
            subtitle="A visual journey through devotion, architecture and timeless heritage."
          />
        </div>

        {/* Carousel Wrapper */}
        <div className="mt-16 w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          
          {/* Container holding all slides */}
          <div className="flex touch-pan-y ml-[-1rem] md:ml-[-2rem]">
            
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-[85%] pl-[1rem] md:min-w-[45%] md:pl-[2rem] lg:min-w-[33.333%]" 
              >
                {/* The Portrait Card */}
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#1a0f0a] shadow-2xl transition-all duration-700 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  
                  {/* Portrait Image Container */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Shadow overlay so the text pops */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-[#1a0f0a]/20 to-transparent opacity-90" />
                  </div>

                  {/* Card Text Content (Pulled up slightly over the image) */}
                  <div className="relative z-10 -mt-16 flex flex-col items-center p-6 text-center md:p-8">
                    <h3 className="font-heading text-2xl font-medium tracking-wider text-[#D4AF37]">
                      {slide.title}
                    </h3>
                    <div className="mt-3 h-[1px] w-12 bg-[#D4AF37]/50" />
                    <p className="mt-4 font-body text-base leading-relaxed text-[#F7F2EB]/80">
                      {slide.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}