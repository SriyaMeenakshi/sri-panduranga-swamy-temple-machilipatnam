type Props = {
  text: string;
  href: string;
};

export default function TempleButton({ text, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative inline-flex items-center justify-center 
        bg-[#2E1B0E] px-10 py-4 
        border border-[#D4AF37]/30
        transition-all duration-700 
        hover:border-[#D4AF37]/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]
        hover:-translate-y-1
      "
    >
      {/* Subtle interior glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      
      {/* Architectural Corner Accents (Like carved temple borders) */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#D4AF37]/50 transition-all duration-700 group-hover:h-4 group-hover:w-4 group-hover:border-[#D4AF37]" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#D4AF37]/50 transition-all duration-700 group-hover:h-4 group-hover:w-4 group-hover:border-[#D4AF37]" />
      <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[#D4AF37]/50 transition-all duration-700 group-hover:h-4 group-hover:w-4 group-hover:border-[#D4AF37]" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[#D4AF37]/50 transition-all duration-700 group-hover:h-4 group-hover:w-4 group-hover:border-[#D4AF37]" />

      {/* Majestic Typography */}
      <span className="relative z-10 font-heading text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37] transition-colors duration-700 group-hover:text-[#F7F2EB]">
        {text}
      </span>
    </a>
  );
}