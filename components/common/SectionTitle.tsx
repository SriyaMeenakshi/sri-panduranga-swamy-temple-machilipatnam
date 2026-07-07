type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14 text-center">

      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        text-[var(--primary)]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
          mt-5
          text-lg
          text-[var(--brown)]
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
}