import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TempleButton from "../common/TempleButton";

export default function HistoryPreview() {
  return (
    <section className="section bg-[var(--background)]">
      <Container>

        <SectionTitle
          title="Every Temple Has a Story"
          subtitle="Behind these sacred walls lies a remarkable story of unwavering devotion, divine grace, and a miracle that continues to inspire countless devotees."
        />

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-lg leading-9 text-[var(--brown)]">
            Discover how faith overcame every obstacle, how Lord Panduranga
            revealed His divine grace to His devotees, and why this sacred
            temple continues to be a beacon of devotion in the coastal town
            of Chilakalapudi.
          </p>

          <div className="mt-10">
            <TempleButton text="Know the History →" />
          </div>

        </div>

      </Container>
    </section>
  );
}