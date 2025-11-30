import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, ArrowRight } from "lucide-react";

const loveMessage = `My Dearest Sonai,

Many Many happy returns of the day to the most amazing person in my life! 🎂

Pratita muhurto tor sathe jeno swapner kate amr, Tor moto ekjon supportive partner ami peyechi setar jonno satti ami khub lucky, sarajibon eivabei amr pase thakis.

Vagoban er kache etay prarthona kori jate jiboner sab swapno tui puron korte paris, Satti tui kache thakle ekta jeno aladai anubhuti hoi sab dukho kashto sab kichu jeno vule jay, satti i tor modhe jeno ekta alada jadoo ache. Toke peye ami satti i khub lucky. Sesh e ektay katha bolbo Kokhono chere jas na toke chara amr life satti i asompurno. 

Onek valo thak, onek sukhi thak, onek boro ho, jiboner sab swapno puron kor, baba mayer pratita swapno puron kor.
baba mayer mukh ujjal korte paris jate etay thakur er kache prarthana kori.

tor valo kharap sab kichutey amk tor pase pabi, ekta jinis sab samoy mathay rakhbi ar keu tor pase thakuk ar na thakuk ami achi tor pase chilam, achi ar thakbo forever.

Ar kichu mone porche na.

onek onek valobasa roilo, I love you so so so so much 💖.

Thank you for being a part of my life.

Happy Birthday to you bubu 💖.

Forever yours,
Your Babai 💖`;

interface LoveLetterProps {
  onContinue?: () => void;
}

export const LoveLetter = ({ onContinue }: LoveLetterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex >= loveMessage.length) {
      setIsTyping(false);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        setDisplayedText(loveMessage.slice(0, nextIndex));

        if (nextIndex >= loveMessage.length) {
          setIsTyping(false);
        }

        return nextIndex;
      });
    }, 30);

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping]);

  const resetTyping = () => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsTyping(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-24 md:pb-32">
      <div className="max-w-3xl w-full">
        <div className="bg-card rounded-2xl shadow-romantic p-8 md:p-12 border-2 border-primary/10 relative">
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
            💌
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Dancing_Script'] text-primary mb-2">
              A Letter for You
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          
          <div className="prose prose-base sm:prose-lg max-w-none">
            <p className="font-['Poppins'] text-foreground whitespace-pre-wrap leading-relaxed text-base sm:text-lg">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </p>
          </div>
          
          {!isTyping && (
            <div className="flex gap-4 mt-8 flex-wrap">
              <Button
                onClick={resetTyping}
                variant="outline"
                className="rounded-full shadow-romantic hover:shadow-glow transition-all"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Read Again 💕
              </Button>
              {onContinue && (
                <Button
                  onClick={onContinue}
                  className="rounded-full shadow-romantic hover:shadow-glow transition-all"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
