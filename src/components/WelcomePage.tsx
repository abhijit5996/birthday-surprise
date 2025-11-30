import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomePageProps {
  onContinue: () => void;
}

export const WelcomePage = ({ onContinue }: WelcomePageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
      
      <div className="text-center z-10 animate-fade-in px-4">
        <div className="mb-8 animate-float">
          <Heart className="w-24 h-24 mx-auto text-primary fill-primary animate-glow-pulse" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-['Dancing_Script'] text-primary mb-4 text-glow">
          Happy Birthday
        </h1>
        
        <p className="text-3xl sm:text-4xl md:text-5xl font-['Great_Vibes'] text-accent mb-4">
          My Love
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8 px-4">
          <Sparkles className="text-primary w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
          <p className="text-base sm:text-xl md:text-2xl font-['Poppins'] text-muted-foreground italic text-center">
            You are my favorite part of every day
          </p>
          <Sparkles className="text-primary w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
        </div>
        
        <Button
          onClick={onContinue}
          size="lg"
          className="mt-8 text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 rounded-full shadow-romantic hover:shadow-glow transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground font-['Poppins']"
        >
          Open Your Surprise 💝
        </Button>
      </div>
    </div>
  );
};
