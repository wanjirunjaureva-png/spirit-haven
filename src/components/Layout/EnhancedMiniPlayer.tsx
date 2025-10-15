import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useMedia } from "@/contexts/MediaContext";

export const EnhancedMiniPlayer = () => {
  const { currentMedia, isPlaying, togglePlay, stopMedia, setShowVideoPlayer } = useMedia();
  const [volume, setVolume] = useState([70]);
  const [progress, setProgress] = useState([0]);
  const [waveformBars] = useState(Array.from({ length: 40 }, () => Math.random()));

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newValue = prev[0] + 0.5;
        return newValue >= 100 ? [0] : [newValue];
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!currentMedia) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-glass border-t border-primary/20 z-10 shadow-[0_-4px_20px_rgba(139,92,246,0.2)]">
      {/* Progress bar */}
      <div className="h-1 bg-muted/30 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse"
          style={{
            width: `${progress[0]}%`,
            boxShadow: "0 0 10px hsl(var(--primary))",
          }}
        />
      </div>

      <div className="h-20 px-6 flex items-center justify-between gap-4">
        {/* Track info with waveform */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="relative w-12 h-12 bg-gradient-spiritual rounded-lg flex-shrink-0 shadow-glow overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center">
              {currentMedia.type === "Video" ? "🎥" : "🎵"}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium truncate">{currentMedia.title}</p>
            <p className="text-xs text-muted-foreground truncate">{currentMedia.speaker}</p>
          </div>
          
          {/* Waveform visualization */}
          <div className="hidden md:flex items-center gap-0.5 h-8">
            {waveformBars.map((height, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-300 ${
                  isPlaying ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                style={{
                  height: `${20 + height * 20}px`,
                  animation: isPlaying ? `pulse ${0.5 + Math.random()}s ease-in-out infinite` : "none",
                  animationDelay: `${i * 0.05}s`,
                  boxShadow: isPlaying ? "0 0 8px hsl(var(--primary))" : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
            <SkipForward className="h-4 w-4" />
          </Button>
          
          {currentMedia.type === "Video" && (
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/10 hover:text-accent transition-all ml-2"
              onClick={() => setShowVideoPlayer(true)}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-2 w-32">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>

        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-destructive/10 hover:text-destructive transition-all"
          onClick={stopMedia}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
