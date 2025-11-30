import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  caption: string;
  onPrevious?: () => void;
  onNext?: () => void;
  showNavigation?: boolean;
}

export const Lightbox = ({
  isOpen,
  onClose,
  image,
  caption,
  onPrevious,
  onNext,
  showNavigation = true,
}: LightboxProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onPrevious) {
        onPrevious();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (onNext) onNext();
    },
    onSwipedRight: () => {
      if (onPrevious) onPrevious();
    },
    trackMouse: false,
    preventScrollOnSwipe: true,
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-background/10 hover:bg-background/20 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-border/30"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>

      {/* Image container */}
      <div
        {...swipeHandlers}
        className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center">
          <img
            src={image}
            alt={caption}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-in"
          />
          
          {/* Caption */}
          <div className="mt-4 sm:mt-6 text-center animate-fade-in">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-['Dancing_Script'] drop-shadow-2xl">
              {caption}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      {showNavigation && onPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 bg-background/10 hover:bg-background/20 backdrop-blur-sm p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-border/30"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </button>
      )}

      {showNavigation && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 bg-background/10 hover:bg-background/20 backdrop-blur-sm p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-border/30"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </button>
      )}
    </div>
  );
};
