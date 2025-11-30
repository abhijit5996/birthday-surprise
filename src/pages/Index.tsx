import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FloatingHearts } from "@/components/FloatingHearts";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ProgressNavigation } from "@/components/ProgressNavigation";
import { MobileMenu } from "@/components/MobileMenu";
import { CustomCursor } from "@/components/CustomCursor";
import { WelcomePage } from "@/components/WelcomePage";
import { LoveLetter } from "@/components/LoveLetter";
import { PhotoSlideshow } from "@/components/PhotoSlideshow";
import { ReasonsILoveYou } from "@/components/ReasonsILoveYou";
import { MemoryGallery } from "@/components/MemoryGallery";
import { LoveTimeline } from "@/components/LoveTimeline";
import { BirthdayCake } from "@/components/BirthdayCake";
import { VirtualGift } from "@/components/VirtualGift";
import { FutureTogether } from "@/components/FutureTogether";
import { ForeverPage } from "@/components/ForeverPage";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    <WelcomePage key="welcome" onContinue={() => setCurrentSection(1)} />,
    <LoveLetter key="letter" onContinue={() => setCurrentSection(2)} />,
    <PhotoSlideshow key="slideshow" onNext={() => setCurrentSection(3)} onPrevious={() => setCurrentSection(1)} />,
    <ReasonsILoveYou key="reasons" onNext={() => setCurrentSection(4)} onPrevious={() => setCurrentSection(2)} />,
    <MemoryGallery key="gallery" onNext={() => setCurrentSection(5)} onPrevious={() => setCurrentSection(3)} />,
    <LoveTimeline key="timeline" onNext={() => setCurrentSection(6)} onPrevious={() => setCurrentSection(4)} />,
    <BirthdayCake key="cake" onNext={() => setCurrentSection(7)} onPrevious={() => setCurrentSection(5)} />,
    <VirtualGift key="gift" onNext={() => setCurrentSection(8)} onPrevious={() => setCurrentSection(6)} />,
    <FutureTogether key="future" onNext={() => setCurrentSection(9)} onPrevious={() => setCurrentSection(7)} />,
    <ForeverPage key="forever" onReplay={() => setCurrentSection(0)} />,
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventScrollOnSwipe: true,
    trackMouse: false,
  });

  return (
    <div {...swipeHandlers} className="relative min-h-screen overflow-hidden touch-pan-y">
      <FloatingHearts />
      <MusicPlayer />
      <CustomCursor />
      <MobileMenu currentSection={currentSection} onNavigate={setCurrentSection} />
      <ProgressNavigation
        totalSections={sections.length}
        currentSection={currentSection}
        onNavigate={setCurrentSection}
      />
      
      <div className="relative z-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-in-out ${
              index === currentSection
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none absolute inset-0"
            }`}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
