export default function Chant() {
  // By adding 'flex flex-col items-center justify-center' to the section, it locks everything to the middle.
  // We moved this comment outside the return() so it doesn't break React!
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#120b08] via-[#2a0a0a] to-[#120b08] py-28 md:py-36">
      
      {/* Top Border */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* The content wrapper */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center px-4">

        <br/>

        <div className="my-8 flex w-full items-center justify-center gap-3 opacity-90">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37] md:w-24" />
          <div className="h-2 w-2 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37] md:w-24" />
        </div>

        <h2 className="w-full text-center font-heading text-4xl font-normal leading-relaxed text-[#D4AF37] drop-shadow-lg md:text-5xl lg:text-6xl">
          हरे विठ्ठल हरे विठ्ठल
          <br />
          विठ्ठल विठ्ठल हरे हरे
        </h2>

        <p className="mt-10 w-full max-w-2xl text-center font-body text-xl italic leading-[1.8] text-[#F7F2EB]/90 drop-shadow-md md:text-2xl">
          "May every chant bring peace to every heart,
          <br className="hidden md:block" /> 
          and may every heart find its way to Lord Panduranga."
        </p>

        <div className="mt-14 w-full text-center text-3xl text-[#D4AF37]/80 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          ❋
        </div>

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

    </section>
  );
}