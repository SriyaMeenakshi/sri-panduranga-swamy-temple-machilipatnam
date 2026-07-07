import Image from "next/image";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const images = [
  "/gallery/temple1.jpg",
  "/gallery/temple2.jpg",
  "/gallery/idols.jpg",
    "/gallery/enterance.jpg",
    "/gallery/cow.jpg",
    "/gallery/night-deco.jpg",
    "/gallery/night-view.jpg",
    "/gallery/pond.jpg",
    "/gallery/sunset.jpg",
    "/gallery/tree.jpg"
];

export default function Gallery() {
  return (
    <section className="section bg-[var(--surface)]">

      <Container>

        <SectionTitle
          title="Temple Through My Lens"
          subtitle="Moments of devotion captured through my camera."
        />

        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {images.map((image, index) => (

            <div
              key={index}
              className="
              overflow-hidden
              rounded-2xl
              shadow-lg
              "
            >

              <Image
                src={image}
                alt={`Temple ${index + 1}`}
                width={500}
                height={600}
                className="
                h-80
                w-full
                object-cover
                transition
                duration-500
                hover:scale-110
                "
              />

            </div>

          ))}
        </div>

      </Container>

    </section>
  );
}