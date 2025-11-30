import { Heart, Plane, Laugh, Sparkles } from "lucide-react";
import { SectionNavigation } from "@/components/SectionNavigation";

const timelineEvents = [
  {
    icon: Heart,
    title: "First Day We Met",
    description: "The day my life changed forever",
    emoji: "❤️",
  },
  {
    icon: Plane,
    title: "Our First Trip",
    description: "Adventures that brought us closer",
    emoji: "✈️",
  },
  {
    icon: Laugh,
    title: "Funniest Moment",
    description: "When we couldn't stop laughing",
    emoji: "😂",
  },
  {
    icon: Sparkles,
    title: "The Day I Knew",
    description: "You were the one for me",
    emoji: "💍",
  },
];

interface LoveTimelineProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export const LoveTimeline = ({ onNext, onPrevious }: LoveTimelineProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-24 md:pb-32">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Dancing_Script'] text-primary mb-3 sm:mb-4">
            Our Love Story
          </h2>
          <p className="text-base sm:text-xl font-['Poppins'] text-muted-foreground px-4">
            Every chapter is my favorite with you
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop: Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary" />
          
          {/* Mobile: Left line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
          
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className="relative mb-12 md:mb-16 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start gap-4 pl-2">
                  {/* Icon on left */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow animate-glow-pulse">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>
                  
                  {/* Content on right */}
                  <div className="flex-1">
                    <div className="bg-card rounded-xl p-4 shadow-romantic border-2 border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-['Poppins'] font-semibold text-primary">
                          {event.title}
                        </h3>
                        <span className="text-xl animate-float">{event.emoji}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-['Poppins']">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:block ${isEven ? "md:text-right" : ""}`}>
                  <div className={`flex items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="bg-card rounded-2xl p-6 shadow-romantic hover:shadow-glow transition-all duration-300 border-2 border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          {isEven && (
                            <span className="text-3xl animate-float">{event.emoji}</span>
                          )}
                          <h3 className="text-2xl font-['Poppins'] font-semibold text-primary">
                            {event.title}
                          </h3>
                          {!isEven && (
                            <span className="text-3xl animate-float">{event.emoji}</span>
                          )}
                        </div>
                        <p className="text-base text-muted-foreground font-['Poppins']">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow animate-glow-pulse">
                      <Icon className="text-primary-foreground" size={32} />
                    </div>
                    
                    <div className="flex-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <SectionNavigation onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};
