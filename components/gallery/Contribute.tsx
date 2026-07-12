import SectionTitle from "../common/SectionTitle";
import TempleButton from "@/components/common/TempleButton";

export default function Contribute() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] py-20 md:py-28">
      
      {/* Top Border Gradient */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center">
        
        {/* If your SectionTitle component is still rendering too large, you might need to adjust the text sizes inside SectionTitle.tsx as well! */}
        <SectionTitle 
          title="Contribute to the Heritage" 
          subtitle="Have you captured beautiful moments at Sri Panduranga Swamy Temple?" 
        />

        {/* Reduced text size from text-lg to text-sm/base */}
        <p className="mt-6 font-body text-sm leading-relaxed text-[#F7F2EB]/80 md:text-base md:leading-[1.8]">
          We warmly invite photographers, devotees, and visitors to submit their best photographs to this Digital Heritage Project. Selected images will be featured in our official gallery with full credits.
        </p>

        {/* Google Form Button */}
       <br/>
          <TempleButton href="https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE" text="Submit Your Photos" />
        

      </div>

    </section>
  );
}