interface NavigationDotsProps {
  totalSections: number;
  currentSection: number;
  onNavigate: (index: number) => void;
}

export const NavigationDots = ({
  totalSections,
  currentSection,
  onNavigate,
}: NavigationDotsProps) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
            currentSection === index
              ? "bg-primary w-4 h-4 shadow-glow"
              : "bg-primary/30 hover:bg-primary/60"
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};
