import GalleryGrid from "@/components/gallery/GalleryGrid";
import Contribute from "@/components/gallery/Contribute";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function GalleryPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#120b08]">
      <Navbar />  
      <br/><br/><br/>
      {/* Forced Center Wrapper */}
      <section className="flex w-full flex-col items-center justify-center px-4 pt-32 pb-12 md:pt-40 md:pb-16">
        
        {/* Max Width Container to keep text wrapping tight */}
        <div className="flex w-full max-w-4xl flex-col items-center justify-center text-center">
          
          {/* Eyebrow: Added pl-[0.4em] to visually balance the tracking-[0.4em] tail space */}
          <p className="pl-[0.4em] font-heading text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37] drop-shadow-md md:text-xs">
            Temple Photography Archive
          </p>
<br/>
          {/* Scaled down heading */}
          <h1 className="mt-4 font-heading text-3xl font-normal uppercase tracking-widest text-[#F7F2EB] drop-shadow-lg md:text-4xl lg:text-5xl">
            Temple Through My Lens
          </h1>

          {/* Tighter Diamond Divider */}
          <div className="my-6 flex w-full items-center justify-center gap-3 opacity-90">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37] md:w-24" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37] md:w-24" />
          </div>

          {/* Smaller, tighter body text */}
          <p className="mt-2 max-w-1xl font-body text-sm leading-relaxed text-[#F7F2EB]/80 md:text-base">
            Every photograph tells a story of faith, heritage, and timeless
            beauty. Explore the majestic architecture and divine presence of Sri Panduranga Swamy Temple through moments captured by devotees.
          </p>
          
        </div>
        
      </section>
<br/>
      <GalleryGrid />
      <br/>
      <Contribute />
      <br/>
      <Footer/>
          
        </main>
  );
}