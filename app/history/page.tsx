import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// The Chapter Data Structure
const chapters = [
  {
  id: 1,
  chapter: "Chapter 1",
  title: "Every Sacred Place Begins With One Devotee",
  text: [
    "Every sacred place has a beginning. Some begin with a king, some with a great saint, and some with a miracle. But the story of Sri Panduranga Swamy Temple began with the unwavering faith of one humble devotee.",
    
    "His name was Sri Bhakta Narasimham. Born in the peaceful village of Uttaravelli near Bobbili during the late nineteenth century, he lived a simple life. Yet deep within his heart burned a love for God that would one day change the history of Chilakalapudi forever.",
    
    "While other children spent their days playing in the village streets, young Narasimham found joy in listening to the Puranas. He would quietly sit for hours, chanting the names of the Lord and reflecting on the life of Prahlada, whose devotion became his greatest inspiration.",
    
    "In his early years, Narasimham worshipped Lord Shiva with complete sincerity. But the Lord had already written a greater journey for him—a journey that would lead him to Lord Panduranga and inspire the creation of a sacred temple that continues to bless thousands of devotees even today."
  ],
  image: "/history/chapter-1.png",
},
 {
  id: 2,
  chapter: "Chapter 2",
  title: "A Journey That Changed Everything",
  text: [
    "As the years passed, Narasimham grew into a man known for his simplicity, kindness, and deep devotion. His days were filled with prayer, reading sacred scriptures, and serving others. Yet, somewhere within his heart, he felt that the Lord was gently calling him towards a greater purpose.",
    
    "During one of his pilgrimages to the holy shrine of Tirumala, Narasimham travelled through the coastal town of Machilipatnam. On his way, he arrived at a quiet village called Chilakalapudi. The peaceful surroundings, the devotional atmosphere, and the sincere people of the village touched his heart in a way he could not explain.",
    
    "What was meant to be a short stop soon became something far more meaningful. Narasimham decided to remain in Chilakalapudi for some time. He earned his livelihood through honest work, lived a simple life, and slowly became a beloved member of the local community.",
    
    "Little did he know that this peaceful village would one day become the home of Lord Panduranga Himself, and that he had been chosen to make it happen."
  ],
  image: "/history/chapter-2.png",
},
 {
  id: 3,
  chapter: "Chapter 3",
  title: "A Dream Offered to the Lord",
  text: [
    "Days turned into months, and months into years. Chilakalapudi was no longer just a place Narasimham had visited—it had become his home. The villagers admired his humble nature, his kindness, and the peace he carried wherever he went.",
    
    "Every Ekadasi, he gathered devotees for bhajans, Nama Sankeerthanam, and Annadanam. Rich or poor, young or old, everyone sat together as one family. Narasimham believed that serving people with love was the greatest form of worship.",
    
    "As his devotion grew stronger, a single thought began to fill his heart. 'What if Lord Panduranga Himself came to this sacred village? What if every devotee could experience His divine presence without travelling hundreds of miles to Pandharpur?'",
    
    "With that sacred dream, Narasimham prepared a traditional invitation for Lord Panduranga, Goddess Rukmini, and Goddess Satyabhama, inviting them to accept Annadanam during the holy month of Kartika. To many, it seemed impossible. But to a heart filled with devotion, nothing was impossible.",
    
    "That simple invitation, written with faith instead of ink alone, would soon change the history of Chilakalapudi forever."
  ],
  image: "/history/chapter3.png",
},
 {
  id: 4,
  chapter: "Chapter 4",
  title: "The Divine Promise",
  text: [
    "In the year 1928, Sri Bhakta Narasimham once again set out on a sacred pilgrimage to Pandharpur, the holy abode of Lord Vitthala. As was his custom, he took a holy dip in the sacred Chandrabhaga River before offering his prayers at the Lord's lotus feet.",
    
    "Before leaving, Narasimham carefully collected a few small pebbles from the banks of the Chandrabhaga. To others, they looked like ordinary stones. But to a heart filled with devotion, every stone from the Lord's sacred river carried His blessings.",
    
    "When Narasimham met his revered Guru, Mahipati Maharaj, something extraordinary happened. Among the pebbles, one suddenly shone with a brilliant divine light. It was unlike anything anyone had ever witnessed. Mahipati Maharaj recognised it as the sacred 'Sparsavedi' and lovingly placed it in Narasimham's hands.",
    
    "That very night, Lord Panduranga appeared in Mahipati Maharaj's dream. Accompanied by the great saints Sant Jnaneshwar and Sant Tukaram, the Lord declared, 'I shall manifest Myself in Chilakalapudi. That sacred land shall become another Pandharpur, where countless devotees will receive My blessings.'",
    
    "When Mahipati Maharaj shared the divine message, Narasimham's heart overflowed with gratitude. His dream was no longer his alone—it had become the Lord's own promise."
  ],
  image: "/history/chapter4.png",
},
  {
  id: 5,
  chapter: "Chapter 5",
  title: "The Sacred Foundation",
  text: [
    "Carrying the sacred blessings of Pandharpur in his heart, Sri Bhakta Narasimham returned to Chilakalapudi with renewed faith. The divine promise given through Mahipati Maharaj had filled every devotee with hope. What had once been a dream was now becoming a sacred mission.",
    
    "On an auspicious day chosen according to the scriptures, devotees from nearby villages gathered to witness the Bhoomi Puja and foundation ceremony. Priests chanted Vedic hymns, sacred lamps were lit, and the entire atmosphere echoed with the holy names of Lord Panduranga.",
    
    "The precious pebbles collected from the sacred Chandrabhaga River were reverently placed into the foundation. Along with them, one hundred and eight divine idols were ceremonially installed, symbolising that this temple would forever remain a place where every devotee could seek the grace of the Lord.",
    
    "Holy water brought from the Chandrabhaga River was sprinkled upon the sacred foundation while flowers, turmeric, sandalwood, and kumkum were offered with deep devotion. Men, women, children, and elders joined together in prayer, believing that Lord Panduranga Himself was silently blessing the ceremony.",
    
    "As the first foundation stones were laid, tears of gratitude filled Narasimham's eyes. Years of prayer had finally begun to take shape in the form of a temple. Yet, no one knew that the greatest test of their faith was still waiting just ahead."
  ],
  image: "/history/chapter5.png",
},
  {
  id: 6,
  chapter: "Chapter 6",
  title: "Faith Was Put to the Test",
  text: [
    "As the temple neared completion, news of the divine promise spread rapidly across the surrounding villages. Devotees arrived in growing numbers, believing that Lord Panduranga would soon bless Chilakalapudi with His sacred presence. The atmosphere was filled with eager anticipation, but not everyone shared their faith.",

    "Some government officials and British authorities dismissed the growing devotion as mere superstition. Concerned by the large gatherings, they ordered the temple to be sealed. Heavy locks were placed on its doors, official seals were fixed in place, and policemen were stationed around the temple so that no one could enter the sanctum.",

    "Many devotees were heartbroken. Some wondered whether the Lord would truly come. Others feared that the sacred promise would never be fulfilled. Yet Sri Bhakta Narasimham remained unmoved. Folding his hands before the closed temple, he quietly prayed, trusting completely in Lord Panduranga's promise.",

    "That night, as silence covered the temple, a divine assurance was given. Lord Hanuman, the eternal servant of the Lord and protector of devotees, appeared and spoke words of courage. He reminded Narasimham that unwavering devotion is never abandoned by God, and that no earthly power could stand in the way of the Lord's divine will.",

    "Strengthened by these sacred words, Narasimham's doubts disappeared. As dawn approached, the devotees gathered once again before the sealed temple, their hearts filled not with fear, but with unshakable faith. The moment that would change the history of Chilakalapudi was now drawing near."
  ],
  image: "/history/chapter6.png",
},
  {
  id: 7,
  chapter: "Chapter 7",
  title: "The Lord Kept His Promise",
  text: [
    "The long-awaited day had finally arrived. Before the sealed temple, devotees from Chilakalapudi and the surrounding villages gathered with folded hands. Though the entrance remained locked by human authority, their faith in Lord Panduranga remained unshaken. Led by Sri Bhakta Narasimham, the devotees continuously chanted, 'Vitthala... Vitthala... Hari Vitthala...,' filling the temple courtyard with devotion.",

    "As the sacred chanting grew louder, an extraordinary peace descended upon the gathering. Suddenly, a gentle golden radiance began to shine from within the sanctum. Before the eyes of everyone present, the locked doors slowly opened on their own. The divine promise given at Pandharpur had come to fulfilment.",

    "Within the sanctum stood Lord Panduranga in His timeless form, upon the sacred brick, His hands resting upon His waist, radiating boundless compassion. Every devotee stood speechless. Tears flowed freely as they witnessed the Lord's divine grace with their own eyes.",

    "The priests offered Mangala Harati with trembling hands. The British officials and policemen who had come to guard the temple watched the miracle unfold in silence. Even those who had doubted bowed their heads in reverence before the Lord's presence.",

    "Sri Bhakta Narasimham stood with folded hands, overwhelmed with gratitude. The promise made by Lord Panduranga had been fulfilled exactly as foretold. From that sacred moment onward, Chilakalapudi became a holy abode of Lord Panduranga, drawing devotees who continue to seek His blessings with faith and devotion."
  ],
  image: "/history/chapter-7.png"
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
          src="/history/hero3.png" 
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
                <div className="flex flex-col space-y-5">
  {scene.text.map((paragraph, i) => (
    <p key={i} className="font-body text-lg leading-[1.9] text-[#4A3B32]">
      {paragraph}
    </p>
  ))}
</div>
              </div>

            </div>
          ))}

        </div>
      </section>

     {/* FINAL SECTION (EPILOGUE) */}
      <section className="relative flex flex-col items-center justify-center bg-[#f4ebd8] py-32 px-6 text-center border-t border-[#D4AF37]/30">
        <div className="max-w-4xl">
          
          <p className="font-body text-2xl md:text-2xl leading-[1.8] text-[#7B1E1E] italic">
            "A temple is not built only with stone. It is built with faith. <br className="hidden md:block" />
            Sri Bhakta Narasimham offered his life in devotion, and today that devotion continues to guide countless devotees who visit this sacred kshetram.<br className="hidden md:block" />
            May Lord Panduranga bless every heart that walks this sacred path."
          </p>
          
          {/* Divider */}
          <div className="my-12 mx-auto flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-[#D4AF37]" />
            <div className="h-2 w-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#D4AF37]" />
          </div>

         {/* Author's Note / Disclaimer */}
          <div className="mx-auto flex w-full flex-col items-center justify-center px-4">
            <p className="text-center font-body text-sm leading-[2] text-[#7B1E1E]/80">
              <strong className="font-semibold tracking-wide text-[#7B1E1E]">A Note of Devotion:</strong> This sacred chronicle has been thoughtfully adapted from the stories I have heard from my childhood and historical accounts 
              shared on the official Sri Panduranga Swamy Temple Facebook page. It has been recreated here to the 
              best of my ability as a humble offering and digital dedication to Lord Panduranga.
            </p>
          </div>

        </div>
      </section>
<Footer/>
    </main>
  );
}