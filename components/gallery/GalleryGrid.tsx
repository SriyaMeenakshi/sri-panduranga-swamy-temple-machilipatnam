"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

// SEO Optimized Image Data
const images = [
  {
    src: "/gallery/enterance.jpg",
    title: "Gateway to Grace",
    photographer: " ",
    alt: "The magnificent entrance of Sri Panduranga Swamy Temple in Chilakalapudi, welcoming devotees to Machilipatnam.",
  },
  {
    src: "/gallery/main-enterance.jpg",
    title: "Divine Entrance",
    photographer: " ",
    alt: "Devotees walking through the main entrance leading to the sacred sanctum of Sri Panduranga Swamy Temple in Machilipatnam.",
  },
  {
    src: "/gallery/sunset.jpg",
    title: "Sacred Silhouette",
    photographer: " ",
    alt: "A beautiful sunset silhouette of Sri Panduranga Swamy Temple in Chilakalapudi, Machilipatnam, echoing timeless devotion.",
  },
  {
    src: "/gallery/idols.jpg",
    title: "Lord Panduranga",
    photographer: " ",
    alt: "A divine darshan of Lord Panduranga Swamy inside the sacred sanctum of the historic temple in Machilipatnam, Andhra Pradesh.",
  },
  {
    src: "/gallery/temple2.jpg",
    title: "Sacred Sanctum",
    photographer: " ",
    alt: "The peaceful and sacred architecture of Sri Panduranga Swamy Temple located in the serene village of Chilakalapudi, Machilipatnam.",
  },
  {
    src: "/gallery/night-deco.jpg",
    title: "Festive Lights",
    photographer: " ",
    alt: "Sri Panduranga Swamy Temple in Machilipatnam beautifully illuminated with festive lights and decorations at night.",
  },
  {
    src: "/gallery/night-view.jpg",
    title: "Nighttime Serenity",
    photographer: " ",
    alt: "A tranquil nighttime view of the Sri Panduranga Swamy Temple architecture under the night sky in Chilakalapudi, Machilipatnam.",
  },
  {
    src: "/gallery/pond.jpg",
    title: "Divine Temple Pond",
    photographer: " ",
    alt: "The serene temple pond reflecting the spiritual aura and heritage of Sri Panduranga Swamy Temple in Machilipatnam, Andhra Pradesh.",
  },
  {
    src: "/gallery/tree.jpg",
    title: "The Tree of Vedic Hymns",
    photographer: " ",
    alt: "The sacred tree echoing ancient Vedic hymns in the historic courtyard of Sri Panduranga Swamy Temple, Chilakalapudi.",
  },
  {
    src: "/gallery/cow.jpg",
    title: "Sacred Temple Grounds",
    photographer: " ",
    alt: "A sacred cow resting peacefully on the divine grounds of Sri Panduranga Swamy Temple in Machilipatnam.",
  }
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="pb-28 w-full">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#1a0f0a] shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] focus:outline-none"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-[#1a0f0a]/10 to-transparent opacity-90" />
              </div>

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left z-10">
                <h3 className="font-heading text-xl font-medium tracking-wide text-[#D4AF37]">
                  {image.title}
                </h3>
                <p className="mt-2 font-body text-sm text-[#F7F2EB]/70">
                  <span className="text-[#D4AF37] opacity-80 mr-2"></span>
                  {image.photographer}
                </p>
              </div>
            </button>
          ))}
          
        </div>
      </section>

      <Lightbox
        images={images}
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}