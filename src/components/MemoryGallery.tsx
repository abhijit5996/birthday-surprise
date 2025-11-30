import { useState } from "react";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Lightbox } from "@/components/Lightbox";
import FirstMet from "@/assets/First_Met.jpg";
import FirstTrip from "@/assets/First_trip.jpg";
import Her from "@/assets/Her.jpg";
import VisitToMandir from "@/assets/Visit_tomandir.jpg";

const memories = [
  {
    id: 1,
    image: FirstMet,
    caption: "First Met 💫",
    alt: "The beginning of our beautiful story",
  },
  {
    id: 2,
    image: Her,
    caption: "That smile I love 💖",
    alt: "Beautiful and radiant as always",
  },
  {
    id: 3,
    image: FirstTrip,
    caption: "First Trip ✈️",
    alt: "Creating memories we'll never forget",
  },
  {
    id: 4,
    image: VisitToMandir,
    caption: "Visit to Mandir 📸",
    alt: "Seeking blessings together",
  },
];

interface MemoryGalleryProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export const MemoryGallery = ({ onNext, onPrevious }: MemoryGalleryProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 pb-28 sm:pb-32 md:pb-36">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Dancing_Script'] text-primary mb-3 sm:mb-4 md:mb-6">
            Our Beautiful Moments
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-['Poppins'] text-muted-foreground max-w-2xl mx-auto px-4">
            Every picture tells our love story
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="relative group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(memory.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                setSelectedMemory(index);
                setLightboxOpen(true);
              }}
            >
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-romantic hover:shadow-glow transition-all duration-500 border-2 sm:border-4 border-primary/20 bg-card group-hover:scale-[1.02] group-hover:border-primary/40">
                <img
                  src={memory.image}
                  alt={memory.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent rounded-xl sm:rounded-2xl md:rounded-3xl flex items-end p-4 sm:p-6 md:p-8 transition-all duration-500 ${
                  hoveredId === memory.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className={`transform transition-all duration-500 ${
                  hoveredId === memory.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}>
                  <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Dancing_Script'] drop-shadow-2xl">
                    {memory.caption}
                  </p>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base font-['Poppins'] mt-1 sm:mt-2 drop-shadow-lg">
                    {memory.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <SectionNavigation onNext={onNext} onPrevious={onPrevious} />

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        image={memories[selectedMemory].image}
        caption={memories[selectedMemory].caption}
        onPrevious={() => setSelectedMemory((prev) => (prev - 1 + memories.length) % memories.length)}
        onNext={() => setSelectedMemory((prev) => (prev + 1) % memories.length)}
        showNavigation={true}
      />
    </div>
  );
};
