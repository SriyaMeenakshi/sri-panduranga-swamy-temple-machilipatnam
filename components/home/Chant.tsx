import Container from "../common/Container";

export default function Chant() {
  return (
    <section className="bg-[var(--primary)] py-24 text-center text-white">
      <Container>

        <p className="text-sm uppercase tracking-[0.4em] text-[var(--gold)]">
          Sacred Chant
        </p>

        <h2 className="mt-8 text-4xl md:text-5xl leading-relaxed text-[var(--gold)]">
          हरे विठ्ठल हरे विठ्ठल
          <br />
          विठ्ठल विठ्ठल हरे हरे
        </h2>

        <p className="mt-8 text-lg italic text-gray-200">
          "May every chant bring peace to every heart
          and every heart find its way to Lord Panduranga."
        </p>

      </Container>
    </section>
  );
}