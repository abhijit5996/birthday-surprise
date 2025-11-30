import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ForeverPageProps {
  onReplay: () => void;
}

export const ForeverPage = ({ onReplay }: ForeverPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24 md:pb-32">
      <div className="text-center max-w-3xl mx-auto animate-fade-in">
        <div className="mb-8 relative">
          <div className="absolute inset-0 animate-glow-pulse">
            <Heart className="w-48 h-48 mx-auto text-primary fill-primary opacity-20 blur-xl" />
          </div>
          <Heart className="w-48 h-48 mx-auto text-primary fill-primary animate-heart-beat relative z-10" />
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-['Dancing_Script'] text-primary mb-4 sm:mb-6 text-glow">
          I Love You
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-['Poppins'] text-muted-foreground mb-6 sm:mb-8 px-4">
          Today, tomorrow, and forever
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <p className="text-base sm:text-xl font-['Poppins'] text-foreground max-w-2xl leading-relaxed px-4">
            Thank you for being my everything. For every smile, every laugh, every moment we've shared.
            You make life so much more beautiful. Happy Birthday, my love! 🎂✨
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        
        <Button
          onClick={onReplay}
          size="lg"
          className="text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 rounded-full shadow-romantic hover:shadow-glow transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground font-['Poppins']"
        >
          Click to Replay ❤️
        </Button>
        
        <div className="mt-8 sm:mt-12 flex justify-center gap-3 sm:gap-4">
          {["💝", "💕", "💖", "💗", "💓"].map((emoji, index) => (
            <span
              key={index}
              className="text-3xl sm:text-4xl animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
