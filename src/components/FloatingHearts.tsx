import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface HeartType {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 6,
      size: 20 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-30"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            bottom: "-50px",
          }}
        >
          <Heart
            className="text-primary fill-primary"
            size={heart.size}
            style={{
              filter: "blur(1px)",
            }}
          />
        </div>
      ))}
    </div>
  );
};
