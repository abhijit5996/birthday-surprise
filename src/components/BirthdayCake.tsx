import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { SectionNavigation } from "@/components/SectionNavigation";

interface BirthdayCakeProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export const BirthdayCake = ({ onNext, onPrevious }: BirthdayCakeProps) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [wishMade, setWishMade] = useState(false);

  const blowCandles = () => {
    setCandlesLit(false);
    setWishMade(true);

    // Confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#ff6b9d", "#c084fc", "#ffc6d9", "#ffd700"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const relightCandles = () => {
    setCandlesLit(true);
    setWishMade(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24 md:pb-32">
      <div className="text-center max-w-2xl mx-auto">
        <div className="animate-fade-in mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Dancing_Script'] text-primary mb-3 sm:mb-4">
            Make a Wish!
          </h2>
          <p className="text-base sm:text-xl font-['Poppins'] text-muted-foreground px-4">
            {candlesLit
              ? "Click the button to blow out the candles"
              : "Your wish has been sent to the universe ✨"}
          </p>
        </div>

        <div className="relative mb-12">
          {/* Cake */}
          <div className="relative inline-block">
            {/* Candles */}
            <div className="flex justify-center gap-6 sm:gap-8 mb-4">
              {[1, 2, 3].map((candle) => (
                <div key={candle} className="relative">
                  {/* Flame */}
                  {candlesLit && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <div className="w-5 h-8 bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 rounded-full animate-float blur-[2px]" />
                      <div className="absolute inset-0 w-5 h-8 bg-gradient-to-t from-amber-400 via-orange-300 to-yellow-100 rounded-full animate-glow-pulse opacity-80" />
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-yellow-300/30 rounded-full blur-md animate-pulse" />
                    </div>
                  )}
                  {/* Candle stick */}
                  <div className="relative w-3 sm:w-4 h-12 sm:h-16 bg-gradient-to-b from-rose-200 via-pink-300 to-pink-400 rounded-full shadow-lg">
                    {/* Candle stripes */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                  </div>
                  {/* Wax drip effect */}
                  {candlesLit && (
                    <div className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 w-1 h-3 bg-pink-300 rounded-full opacity-60 animate-float" />
                  )}
                </div>
              ))}
            </div>

            {/* Cake layers */}
            <div className="relative">
              {/* Top layer - Strawberry cream */}
              <div className="relative w-56 sm:w-64 h-16 sm:h-20 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 rounded-t-[100px] shadow-xl mb-1 border-t-4 border-x-4 border-pink-400 mx-auto">
                {/* Frosting details */}
                <div className="absolute inset-0 rounded-t-[100px] bg-gradient-to-b from-white/40 to-transparent" />
                {/* Decorative cream swirls */}
                <div className="absolute inset-x-0 -top-1 flex justify-around px-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-gradient-to-b from-white to-pink-200 rounded-full shadow-sm animate-float border border-pink-300"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                {/* Sprinkles */}
                <div className="absolute inset-x-0 top-4 flex justify-center gap-3">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full animate-float shadow-sm"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        backgroundColor: ['#ff6b9d', '#ffd700', '#c084fc', '#ff8585', '#ffb6c1'][i % 5]
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Middle layer - Vanilla cream */}
              <div className="relative w-64 sm:w-72 h-16 sm:h-20 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-400 shadow-2xl mb-1 border-x-4 border-rose-500 mx-auto">
                {/* Frosting texture */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                {/* Cream border detail */}
                <div className="absolute inset-x-0 -top-1 flex justify-around px-2">
                  {[...Array(11)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gradient-to-b from-white to-rose-200 rounded-full shadow-md animate-float-slow border border-rose-300"
                      style={{ animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
                {/* Chocolate chips */}
                <div className="absolute inset-x-0 top-6 flex justify-center gap-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-amber-800 rounded-full shadow-sm animate-float"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Bottom layer - Rich chocolate */}
              <div className="relative w-72 sm:w-80 h-20 sm:h-24 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-b-[40px] shadow-glow border-x-4 border-b-4 border-pink-600 mx-auto">
                {/* Glossy finish */}
                <div className="absolute inset-0 rounded-b-[40px] bg-gradient-to-b from-white/20 to-transparent" />
                {/* Decorative border */}
                <div className="absolute inset-x-0 -top-1 flex justify-around px-1">
                  {[...Array(13)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gradient-to-b from-white to-pink-300 rounded-full shadow-lg animate-float border border-pink-400"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                {/* Bottom decorative elements */}
                <div className="absolute bottom-2 inset-x-0 flex justify-center gap-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full shadow-md animate-heart-beat"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Cake plate */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-2xl border-2 border-gray-400">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {candlesLit ? (
          <Button
            onClick={blowCandles}
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-romantic hover:shadow-glow transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground font-['Poppins'] animate-glow-pulse"
          >
            Blow the Candles 🎂
          </Button>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {wishMade && (
              <div className="bg-card rounded-2xl p-8 shadow-romantic border-2 border-primary/20">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary animate-glow-pulse" />
                <p className="text-2xl font-['Dancing_Script'] text-primary mb-2">
                  May all your wishes come true!
                </p>
                <p className="font-['Poppins'] text-muted-foreground">
                  This year is going to be amazing, and I'll be right there with you every
                  step of the way 💕
                </p>
              </div>
            )}
            <Button
              onClick={relightCandles}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-romantic hover:shadow-glow transition-all duration-300 font-['Poppins']"
            >
              Light the Candles Again 🕯️
            </Button>
          </div>
        )}
      </div>
      
      <SectionNavigation onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};
