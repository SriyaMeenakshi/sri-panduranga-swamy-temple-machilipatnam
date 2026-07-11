import GalleryGrid from "@/components/gallery/GalleryGrid";
import Contribute from "@/components/gallery/Contibute";

export default function GalleryPage() {
  return (
    <main className="bg-[#120b08] min-h-screen">
      
      {/* Page Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
          
          <p className="w-full font-heading text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37] drop-shadow-md">
            Temple Photography Archive
          </p>

          <h1 className="mt-5 w-full font-heading text-4xl font-normal uppercase tracking-widest text-[#F7F2EB] drop-shadow-lg md:text-5xl lg:text-6xl">
            Temple Through My Lens
          </h1>

          {/* Diamond Divider */}
          <div className="my-8 flex w-full items-center justify-center gap-3 opacity-90">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37] md:w-32" />
            <div className="h-2 w-2 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37] md:w-32" />
          </div>

          <p className="mx-auto mt-4 w-full max-w-3xl font-body text-lg leading-[1.8] text-[#F7F2EB]/80 md:text-xl">
            Every photograph tells a story of faith, heritage, and timeless
            beauty. Explore the majestic architecture and divine presence of Sri Panduranga Swamy Temple through moments captured by devotees.
          </p>
          
        </div>
      </section>

      <GalleryGrid />
      <Contribute />
      
    </main>
  );
}