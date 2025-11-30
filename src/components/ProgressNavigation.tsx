import { Heart } from "lucide-react";

interface ProgressNavigationProps {
  totalSections: number;
  currentSection: number;
  onNavigate: (index: number) => void;
}

const sections = [
  { name: "Welcome", icon: "💖" },
  { name: "Love Letter", icon: "💌" },
  { name: "Photos", icon: "📸" },
  { name: "Reasons", icon: "💕" },
  { name: "Memories", icon: "🎨" },
  { name: "Timeline", icon: "⏰" },
  { name: "Cake", icon: "🎂" },
  { name: "Gift", icon: "🎁" },
  { name: "Future", icon: "🌟" },
  { name: "Forever", icon: "♾️" },
];

export const ProgressNavigation = ({
  totalSections,
  currentSection,
  onNavigate,
}: ProgressNavigationProps) => {
  const progress = ((currentSection + 1) / totalSections) * 100;

  return (
    <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-2">
      {/* Progress indicator */}
      <div className="relative">
        <div className="w-1 h-48 bg-muted/30 rounded-full overflow-hidden">
          <div
            className="w-full bg-gradient-to-b from-primary to-accent transition-all duration-500 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>
        <Heart
          className="absolute -left-2 w-5 h-5 fill-primary text-primary transition-all duration-500"
          style={{ top: `${progress}%`, transform: "translateY(-50%)" }}
        />
      </div>

      {/* Section indicators */}
      <div className="flex flex-col gap-3 mt-4">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`group relative flex items-center gap-2 transition-all duration-300 ${
              currentSection === index ? "scale-110" : "hover:scale-105"
            }`}
            aria-label={`Go to ${section.name}`}
          >
            {/* Tooltip */}
            <span
              className={`absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-lg font-['Poppins'] text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                currentSection === index
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {section.name}
            </span>

            {/* Icon button */}
            <div
              className={`text-xl transition-all duration-300 ${
                currentSection === index
                  ? "scale-125 drop-shadow-glow"
                  : "opacity-60 group-hover:opacity-100"
              }`}
            >
              {section.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
