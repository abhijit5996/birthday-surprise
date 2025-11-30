import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileMenuProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

const sections = [
  { name: "Welcome", icon: "💖" },
  { name: "Love Letter", icon: "💌" },
  { name: "Photo Slideshow", icon: "📸" },
  { name: "Reasons I Love You", icon: "💕" },
  { name: "Memory Gallery", icon: "🎨" },
  { name: "Our Timeline", icon: "⏰" },
  { name: "Birthday Cake", icon: "🎂" },
  { name: "Virtual Gift", icon: "🎁" },
  { name: "Our Future", icon: "🌟" },
  { name: "Forever", icon: "♾️" },
];

export const MobileMenu = ({ currentSection, onNavigate }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (index: number) => {
    onNavigate(index);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed top-4 left-4 z-50 rounded-full shadow-romantic hover:shadow-glow transition-all md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] bg-background/95 backdrop-blur-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-primary font-['Dancing_Script'] text-2xl">
            <Heart className="h-5 w-5 fill-primary" />
            Navigation
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(index)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                currentSection === index
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-muted/50 hover:bg-muted text-foreground hover:scale-102"
              }`}
            >
              <span className="text-2xl">{section.icon}</span>
              <span className="font-['Poppins'] font-medium">{section.name}</span>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
