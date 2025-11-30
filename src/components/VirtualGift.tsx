import { useState } from "react";
import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { SectionNavigation } from "@/components/SectionNavigation";

const loveCoupons = [
  "🤗 One Free Hug (Redeemable Anytime)",
  "🍽️ Romantic Dinner Date",
  "🎬 Movie Night of Your Choice",
  "💆‍♀️ Full Day Spa Treatment",
  "🌅 Sunrise/Sunset Date",
  "🍰 Breakfast in Bed",
];

interface VirtualGiftProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export const VirtualGift = ({ onNext, onPrevious }: VirtualGiftProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b9d", "#c084fc", "#ffc6d9"],
    });
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff6b9d", "#c084fc", "#ffc6d9"],
      });
    }, 250);
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff6b9d", "#c084fc", "#ffc6d9"],
      });
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-24 md:pb-32">
      <div className="max-w-3xl w-full text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Dancing_Script'] text-primary mb-6 sm:mb-8">
            A Special Gift for You
          </h2>
          
          {!isOpen ? (
            <div className="flex flex-col items-center">
              <div className="relative mb-8 animate-float">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-romantic transform rotate-12 animate-glow-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gift className="w-24 h-24 text-white animate-heart-beat" />
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-8 bg-accent rounded-full shadow-romantic" />
                </div>
              </div>
              
              <Button
                onClick={handleOpenGift}
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-romantic hover:shadow-glow transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground font-['Poppins']"
              >
                Open Your Gift 🎁
              </Button>
            </div>
          ) : (
            <div className="animate-scale-in">
              <div className="bg-card rounded-2xl shadow-romantic p-8 border-2 border-primary/20">
                <Heart className="w-16 h-16 mx-auto mb-6 text-primary fill-primary animate-glow-pulse" />
                
                <h3 className="text-2xl sm:text-3xl font-['Dancing_Script'] text-primary mb-4">
                  Love Coupons Just for You! 💝
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground font-['Poppins'] mb-6 px-4">
                  Here are special vouchers you can redeem anytime:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {loveCoupons.map((coupon, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-romantic animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <p className="font-['Poppins'] text-foreground text-sm sm:text-base">{coupon}</p>
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 sm:mt-8 text-primary font-['Dancing_Script'] text-xl sm:text-2xl">
                  All made with love, just for you ✨
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <SectionNavigation onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};
