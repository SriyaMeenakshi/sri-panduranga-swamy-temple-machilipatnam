"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
  images: any[];
  selected: number | null;
  onClose: () => void;
};

export default function Lightbox({ images, selected, onClose }: Props) {
  // Prevent scrolling on the main page when lightbox is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selected]);

  if (selected === null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 backdrop-blur-md transition-opacity duration-500"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute right-6 top-6 z-50 rounded-full bg-[#1a0f0a]/50 p-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#1a0f0a]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Lightbox Content - Stop propagation so clicking the image doesn't close it */}
      <div 
        className="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[65vh] w-full md:h-[75vh]">
          <Image
            src={images[selected].src}
            alt={images[selected].alt}
            fill
            className="object-contain"
          />
        </div>

        <div className="mt-6 text-center">
          <h2 className="font-heading text-2xl tracking-widest text-[#D4AF37] md:text-3xl">
            {images[selected].title}
          </h2>
          <p className="mt-2 font-body text-sm text-[#F7F2EB]/70 md:text-base">
            Captured by <span className="text-[#F7F2EB]">{images[selected].photographer}</span>
          </p>
        </div>
      </div>
    </div>
  );
}