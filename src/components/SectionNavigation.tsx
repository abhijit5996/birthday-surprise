import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
}

export const SectionNavigation = ({
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
}: SectionNavigationProps) => {
  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-2 md:gap-4 px-4">
      {showPrevious && onPrevious && (
        <Button
          onClick={onPrevious}
          variant="secondary"
          size="lg"
          className="rounded-full shadow-romantic hover:shadow-glow transition-all text-sm md:text-base px-4 md:px-8"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 md:mr-2" />
          <span className="hidden md:inline">Previous</span>
        </Button>
      )}
      {showNext && onNext && (
        <Button
          onClick={onNext}
          size="lg"
          className="rounded-full shadow-romantic hover:shadow-glow transition-all text-sm md:text-base px-4 md:px-8"
        >
          <span className="hidden md:inline">Next</span>
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 md:ml-2" />
        </Button>
      )}
    </div>
  );
};
