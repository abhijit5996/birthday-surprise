import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface CursorHeart {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export const CustomCursor = () => {
  const [hearts, setHearts] = useState<CursorHeart[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device is desktop
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !('ontouchstart' in window));
    };
    
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let heartId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newHeart: CursorHeart = {
        id: heartId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: 0.5 + Math.random() * 0.5,
      };

      setHearts((prev) => [...prev, newHeart].slice(-12));
    };

    // Throttle mouse move events
    let lastTime = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) {
        handleMouseMove(e);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setHearts((prev) =>
        prev
          .map((heart) => ({
            ...heart,
            opacity: heart.opacity - 0.05,
          }))
          .filter((heart) => heart.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute transition-opacity duration-100"
          style={{
            left: heart.x,
            top: heart.y,
            opacity: heart.opacity,
            transform: `translate(-50%, -50%) scale(${heart.scale})`,
          }}
        >
          <Heart
            className="text-primary fill-primary"
            size={20}
            style={{
              filter: "blur(0.5px)",
            }}
          />
        </div>
      ))}
    </div>
  );
};
