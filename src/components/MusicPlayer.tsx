import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = volume / 100;

    // Attempt autoplay
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay blocked by browser, user will need to click play
        console.log("Autoplay blocked, user interaction required");
      }
    };

    // Try autoplay after a small delay
    const timeoutId = setTimeout(playAudio, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
      if (newVolume === 0) {
        setIsMuted(true);
        audioRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2022/05/13/audio_1808fbf07a.mp3"
      />
      
      {/* Volume Slider - shows on hover or when volume button is clicked */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showVolumeSlider
            ? "opacity-100 w-24 md:w-32"
            : "opacity-0 w-0 overflow-hidden"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-romantic border border-primary/20">
          <Slider
            value={[volume]}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="cursor-pointer"
          />
        </div>
      </div>

      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full shadow-romantic bg-card hover:bg-card/90 border-2 border-primary/20 hover:scale-110 transition-transform"
        variant="ghost"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 text-primary" />
        ) : (
          <Play className="h-5 w-5 text-primary" />
        )}
      </Button>
      
      <Button
        onClick={() => {
          toggleMute();
          setShowVolumeSlider(!showVolumeSlider);
        }}
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
        size="icon"
        className="rounded-full shadow-romantic bg-card hover:bg-card/90 border-2 border-primary/20 hover:scale-110 transition-transform"
        variant="ghost"
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="h-5 w-5 text-primary" />
        ) : (
          <Volume2 className="h-5 w-5 text-primary" />
        )}
      </Button>
    </div>
  );
};
