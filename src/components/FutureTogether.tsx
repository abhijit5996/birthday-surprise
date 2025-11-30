import { MapPin, GraduationCap, Heart, Star } from "lucide-react";
import { SectionNavigation } from "@/components/SectionNavigation";

const dreams = [
  {
    icon: MapPin,
    title: "Our Next Adventure",
    description: "Exploring new places during semester breaks",
    emoji: "🗺️",
  },
  {
    icon: GraduationCap,
    title: "Graduation Together",
    description: "Achieving our dreams side by side",
    emoji: "🎓",
  },
  {
    icon: Star,
    title: "Supporting Each Other",
    description: "Through exams, projects, and every challenge",
    emoji: "🌟",
  },
  {
    icon: Heart,
    title: "Making Memories",
    description: "Every moment with you is precious",
    emoji: "💕",
  },
];

interface FutureTogetherProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export const FutureTogether = ({ onNext, onPrevious }: FutureTogetherProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-24 md:pb-32">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Dancing_Script'] text-primary mb-3 sm:mb-4">
            Our Future Together
          </h2>
          <p className="text-base sm:text-xl font-['Poppins'] text-muted-foreground px-4">
            All the beautiful things we'll build together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {dreams.map((dream, index) => {
            const Icon = dream.icon;
            
            return (
              <div
                key={index}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-romantic hover:shadow-glow transition-all duration-300 border-2 border-primary/10 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                        <Icon className="text-white" size={28} />
                      </div>
                      <span className="text-5xl animate-float-slow">{dream.emoji}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-['Poppins'] font-semibold text-primary mb-3">
                      {dream.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground font-['Poppins'] leading-relaxed">
                      {dream.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 animate-fade-in px-4" style={{ animationDelay: "0.6s" }}>
          <p className="text-xl sm:text-2xl font-['Dancing_Script'] text-primary">
            Every dream is better because you're in it 💫
          </p>
        </div>
      </div>
      
      <SectionNavigation onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};
