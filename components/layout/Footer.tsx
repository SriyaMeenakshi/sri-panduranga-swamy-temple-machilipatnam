import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] py-14 text-center text-white">

      <Container>

        <h3 className="text-3xl text-[var(--gold)]">
          Sri Panduranga Swamy Temple
        </h3>

        <p className="mt-3 text-gray-300">
          Chilakalapudi • Machilipatnam • Andhra Pradesh
        </p>

        <div className="my-8 h-px bg-[var(--gold)] opacity-40" />

        <p className="italic text-lg text-gray-200">
          Dedicated with devotion to our beloved Lord Panduranga.
        </p>

        <p className="mt-3 text-gray-300">
          Developed with Vittala's Grace.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Sriya Meenakshi Chalamalasetty
        </p>

      </Container>

    </footer>
  );
}