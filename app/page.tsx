import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import Chant from "@/components/home/Chant";
import HistoryPreview from "@/components/home/HistoryPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className=" w-full bg-[#120b08] ">

      <Hero />
      <br/>
      <Gallery />
      <br/>
      <HistoryPreview />
      <br/>
      <Chant />
      <br/>
      <Footer />

    </main>
  );
}