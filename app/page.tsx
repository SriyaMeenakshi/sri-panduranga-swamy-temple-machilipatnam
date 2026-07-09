import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import Chant from "@/components/home/Chant";
import HistoryPreview from "@/components/home/HistoryPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className=" w-full ">

      <Hero />

      <Gallery />

      <Chant />

      <HistoryPreview />

      <Footer />

    </main>
  );
}