import { Heart, Sparkles, Star, Smile } from "lucide-react";
import { useState } from "react";
import { SectionNavigation } from "@/components/SectionNavigation";

const reasons = [
  { text: "Your beautiful smile that lights up my world", icon: Smile },
  { text: "The way you laugh at my silly jokes", icon: Sparkles },
  { text: "Your kindness and caring heart", icon: Heart },
  { text: "How you make every day an adventure", icon: Star },
  { text: "Your intelligence and how you challenge me", icon: Sparkles },
  { text: "The way you understand me without words", icon: Heart },
  { text: "Your passion for your dreams and goals", icon: Star },
  { text: "How comfortable I feel when I'm with you", icon: Smile },
  { text: "Your support during tough times", icon: Heart },
  { text: "The little things you do that show you care", icon: Sparkles },
  { text: "How you make me want to be better", icon: Star },
  { text: "Your unique perspective on everything", icon: Smile },
];

interface ReasonsILoveYouProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export const ReasonsILoveYou = ({ onNext, onPrevious }: ReasonsILoveYouProps) => {
  const [revealedReasons, setRevealedReasons] = useState<number[]>([]);

  const revealReason = (index: number) => {
    if (!revealedReasons.includes(index)) {
      setRevealedReasons([...revealedReasons, index]);
    }
  };

  const revealAll = () => {
    setRevealedReasons(reasons.map((_, i) => i));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-24 md:pb-32">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Dancing_Script'] text-primary mb-3 sm:mb-4">
            Reasons I Love You
          </h2>
          <p className="text-base sm:text-xl font-['Poppins'] text-muted-foreground mb-4 sm:mb-6 px-4">
            Click each heart to reveal why you're so special
          </p>
          <button
            onClick={revealAll}
            className="text-sm sm:text-base text-primary hover:text-primary/80 font-['Poppins'] underline transition-colors"
          >
            Or reveal all at once ✨
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isRevealed = revealedReasons.includes(index);

            return (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => revealReason(index)}
                  className="w-full h-full text-left"
                >
                  <div
                    className={`bg-card rounded-2xl p-6 shadow-romantic hover:shadow-glow transition-all duration-500 border-2 border-primary/10 min-h-[140px] relative overflow-hidden ${
                      isRevealed ? "bg-gradient-to-br from-primary/10 to-accent/10" : ""
                    }`}
                  >
                    {!isRevealed ? (
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <Heart className="w-12 h-12 text-primary fill-primary animate-heart-beat" />
                        <p className="text-muted-foreground font-['Poppins'] text-sm">
                          Click to reveal
                        </p>
                      </div>
                    ) : (
                      <div className="animate-fade-in">
                        <Icon className="w-8 h-8 text-primary mb-3" />
                        <p className="font-['Poppins'] text-foreground leading-relaxed">
                          {reason.text}
                        </p>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-xl sm:text-2xl font-['Dancing_Script'] text-primary">
            And a million more reasons every single day 💖
          </p>
        </div>
      </div>
      
      <SectionNavigation onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};
