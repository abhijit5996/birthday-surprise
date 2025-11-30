import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Lightbox } from "@/components/Lightbox";
import FirstMet from "@/assets/First_Met.jpg";
import FirstTrip from "@/assets/First_trip.jpg";
import HerChildhood from "@/assets/Her_childhood.jpg";
import Her from "@/assets/Her.jpg";
import Together from "@/assets/Together.jpg";
import VisitToMandir from "@/assets/Visit_tomandir.jpg";

const slides = [
  {
    image: FirstMet,
    caption: "First Met",
    description: "The beginning of our beautiful story",
    color: "from-rose-400/30 to-pink-500/30",
  },
  {
    image: FirstTrip,
    caption: "First Trip",
    description: "Creating memories we'll never forget",
    color: "from-purple-400/30 to-pink-400/30",
  },
  {
    image: HerChildhood,
    caption: "Her Childhood",
    description: "A precious memory from the past",
    color: "from-blue-400/30 to-purple-400/30",
  },
  {
    image: Her,
    caption: "Her",
    description: "Beautiful and radiant as always",
    color: "from-pink-400/30 to-rose-400/30",
  },
  {
    image: Together,
    caption: "Together",
    description: "Every moment with you is special",
    color: "from-violet-400/30 to-pink-400/30",
  },
  {
    image: VisitToMandir,
    caption: "Visit to Mandir",
    description: "Seeking blessings together",
    color: "from-amber-400/30 to-rose-400/30",
  },
];

interface PhotoSlideshowProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export const PhotoSlideshow = ({ onNext, onPrevious }: PhotoSlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Preload all slideshow images so slide changes feel instant
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 pb-28 sm:pb-32 md:pb-36">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-6 sm:mb-10 md:mb-14 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Dancing_Script'] text-primary mb-3 sm:mb-4 md:mb-6">
            Our Story in Pictures
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-['Poppins'] text-muted-foreground max-w-2xl mx-auto px-4">
            Every moment captured is a treasure
          </p>
        </div>

        <div className="relative">
          {/* Main slideshow */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-glow border-2 sm:border-4 border-primary/20 bg-card cursor-pointer group"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].caption}
              className="absolute inset-0 w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-105"
              key={`img-${currentSlide}`}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ease-out pointer-events-none"
              style={{ background: `linear-gradient(to bottom right, ${slides[currentSlide].color.replace('from-', '').replace('to-', ', ')})` }}
              key={`gradient-${currentSlide}`}
            />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 md:p-8 transition-all duration-300 ease-out" key={`caption-${currentSlide}`}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-['Dancing_Script'] text-white mb-1 sm:mb-2 drop-shadow-lg">
                {slides[currentSlide].caption}
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-['Poppins'] text-white/95 drop-shadow-md">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous slide"
              className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-background/95 hover:bg-background p-2.5 sm:p-3 md:p-4 rounded-full shadow-romantic transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/50 z-10"
            >
              <ChevronLeft className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next slide"
              className="absolute right-3 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-background/95 hover:bg-background p-2.5 sm:p-3 md:p-4 rounded-full shadow-romantic transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/50 z-10"
            >
              <ChevronRight className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
            {/* Slide indicators */}
            <div className="flex gap-2 sm:gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 sm:w-10 md:w-12 h-2.5 sm:h-3 bg-primary shadow-glow"
                      : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary/30 hover:bg-primary/60 hover:scale-110"
                  }`}
                />
              ))}
            </div>

            {/* Play/Pause button */}
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              size="icon"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="rounded-full shadow-romantic bg-background/80 hover:bg-background border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 w-10 h-10 sm:w-11 sm:h-11"
              variant="ghost"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              ) : (
                <Play className="h-4 w-4 sm:h-5 sm:w-5 text-primary ml-0.5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        image={slides[currentSlide].image}
        caption={slides[currentSlide].caption}
        onPrevious={prevSlide}
        onNext={nextSlide}
        showNavigation={true}
      />

      <SectionNavigation
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
};
