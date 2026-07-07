type Props = {
  text: string;
};

export default function TempleButton({ text }: Props) {
  return (
    <button
      className="
      group
      relative
      overflow-hidden
      rounded-full
      border border-[#D4AF37]/60
      bg-gradient-to-br from-[#5a1414] to-[#7B1E1E]
      px-10
      py-3.5
      font-serif
      text-lg
      tracking-wider
      text-white
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-1
      hover:border-[#D4AF37]
      hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]
      "
    >
      {/* Optional subtle shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      
      <span className="relative z-10">{text}</span>
    </button>
  );
}