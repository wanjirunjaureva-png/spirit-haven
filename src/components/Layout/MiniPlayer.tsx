import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const MiniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-card/95 backdrop-blur-glass border-t border-border z-10 shadow-glow">
      <div className="h-full px-6 flex items-center justify-between gap-4">
        {/* Track info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-12 h-12 bg-gradient-spiritual rounded-lg flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">Sunday Morning Worship</p>
            <p className="text-xs text-muted-foreground truncate">Pastor John Smith</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-secondary/50">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="bg-primary hover:bg-primary/90 shadow-glow"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary/50">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 w-32">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};
