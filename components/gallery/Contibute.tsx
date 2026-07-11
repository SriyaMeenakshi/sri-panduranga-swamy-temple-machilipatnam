import SectionTitle from "../common/SectionTitle";

export default function Contribute() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] py-28">
      
      {/* Top Border Gradient */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        
        <SectionTitle 
          title="Contribute to the Heritage" 
          subtitle="Have you captured beautiful moments at Sri Panduranga Swamy Temple?" 
        />

        <p className="mt-8 max-w-2xl font-body text-lg leading-[1.8] text-[#F7F2EB]/80 md:text-xl">
          We warmly invite photographers, devotees, and visitors to submit their best photographs to this Digital Heritage Project. Selected images will be featured in our official gallery with full credits.
        </p>

        {/* Google Form Button */}
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-12 overflow-hidden rounded-full border border-[#D4AF37]/60 bg-gradient-to-br from-[#5a1414] to-[#7B1E1E] px-10 py-4 font-serif text-lg tracking-wider text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative z-10">Submit Your Photograph →</span>
        </a>

      </div>

    </section>
  );
}