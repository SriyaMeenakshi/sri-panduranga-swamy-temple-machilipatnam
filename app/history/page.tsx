import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// The Chapter Data Structure
const chapters = [
  {
    id: 1,
    chapter: "Chapter 1",
    title: "The Birth of a Devotee",
    text: "Your beautiful story text for Chapter 1 will go here...",
    image: "/history/chapter-1.webp",
  },
  {
    id: 2,
    chapter: "Chapter 2",
    title: "A Call from Lord Panduranga",
    text: "Your beautiful story text for Chapter 2 will go here...",
    image: "/history/chapter-2.webp",
  },
  {
    id: 3,
    chapter: "Chapter 3",
    title: "Building a Temple of Faith",
    text: "Your beautiful story text for Chapter 3 will go here...",
    image: "/history/chapter-3.webp",
  },
  {
    id: 4,
    chapter: "Chapter 4",
    title: "The Divine Promise",
    text: "Your beautiful story text for Chapter 4 will go here...",
    image: "/history/chapter-4.webp",
  },
  {
    id: 5,
    chapter: "Chapter 5",
    title: "The Miracle of Kartika Ekadasi",
    text: "Your beautiful story text for Chapter 5 will go here...",
    image: "/history/chapter-5.webp",
  },
  {
    id: 6,
    chapter: "Chapter 6",
    title: "The Temple Rises",
    text: "Your beautiful story text for Chapter 6 will go here...",
    image: "/history/chapter-6.webp",
  },
  {
    id: 7,
    chapter: "Chapter 7",
    title: "A Legacy That Lives Forever",
    text: "Your beautiful story text for Chapter 7 will go here...",
    image: "/history/chapter-7.webp",
  },
];

export default function HistoryPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">
      <Navbar/>
      {/* HERO BANNER */}
      <section className="relative flex h-[60vh] min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-[#7B1E1E]">
 <div className="absolute inset-0 bg-black/40 z-10" /> 
        <Image 
          src="/history/hero-final.png" 
          alt="History of the Temple" 
          fill 
          className="object-cover" 
        />
        <div className="relative z-20 text-center px-4">
            <br/><br/>
          <h1 className="font-heading text-5xl md:text-7xl text-[#FDFBF7] drop-shadow-xl uppercase tracking-widest">
            The Sacred Chronicle
          </h1>
          <div className="mt-6 h-[2px] w-32 mx-auto bg-[#D4AF37]" />
        </div>
      </section>

      {/* SCENE BY SCENE CHAPTERS */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          
          {chapters.map((scene, index) => (
            <div 
              key={scene.id} 
              // Alternates row direction: Even chapters have the image on the right, odd on the left
              className={`mb-32 flex flex-col items-center gap-12 md:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              
              {/* Scene Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-4 border-[#FDFBF7] shadow-[0_15px_40px_rgba(123,30,30,0.12)]">
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
                </div>
              </div>

              {/* Scene Text */}
              <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  {scene.chapter}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-normal text-[#7B1E1E] md:text-4xl lg:text-5xl">
                  {scene.title}
                </h2>
                <div className="my-6 h-[1px] w-16 bg-[#7B1E1E]/30" />
                <p className="font-body text-lg leading-[1.9] text-[#4A3B32]">
                  {scene.text}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FINAL SECTION (EPILOGUE) */}
      <section className="relative flex flex-col items-center justify-center bg-[#f4ebd8] py-32 px-6 text-center border-t border-[#D4AF37]/30">
        <div className="max-w-4xl">
          
          <p className="font-body text-2xl md:text-3xl leading-[1.8] text-[#7B1E1E] italic">
            "A temple is not built only with stone. It is built with faith. <br className="hidden md:block" />
            Sri Bhakta Narasimham offered his life in devotion, and today that devotion continues to guide countless devotees who visit this sacred kshetram. <br className="hidden md:block" />
            May Lord Panduranga bless every heart that walks this sacred path."
          </p>
          
          <div className="mt-12 mx-auto flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-[#D4AF37]" />
            <div className="h-2 w-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#D4AF37]" />
          </div>
        </div>
      </section>
<Footer/>
    </main>
  );
}