type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
      
      {/* Eyebrow */}
      <p className="w-full text-center font-heading text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37] drop-shadow-md">
        Sri Panduranga Swamy Temple
      </p>

      {/* Main Title */}
      <h2 className="mt-4 w-full text-center font-heading text-4xl font-normal uppercase tracking-widest text-[#F7F2EB] drop-shadow-lg md:text-5xl">
        {title}
      </h2>

      {/* Diamond Divider */}
      <div className="my-6 flex w-full items-center justify-center gap-3 opacity-90">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37] md:w-24" />
        <div className="h-2 w-2 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37] md:w-24" />
      </div>

      {/* Subtitle */}
      <p className="mx-auto w-full max-w-1xl text-center font-body text-lg leading-[1.8] text-[#F7F2EB]/80 md:text-xl">
        {subtitle}
      </p>
      
    </div>
  );
}