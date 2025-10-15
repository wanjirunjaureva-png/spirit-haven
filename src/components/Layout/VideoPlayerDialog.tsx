import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Play, Pause, Volume2, Maximize, Minimize } from "lucide-react";
import { useState } from "react";
import { useMedia } from "@/contexts/MediaContext";
import { Slider } from "@/components/ui/slider";

export const VideoPlayerDialog = () => {
  const { currentMedia, isPlaying, togglePlay, showVideoPlayer, setShowVideoPlayer } = useMedia();
  const [volume, setVolume] = useState([70]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!currentMedia || currentMedia.type !== "Video") return null;

  return (
    <Dialog open={showVideoPlayer} onOpenChange={setShowVideoPlayer}>
      <DialogContent className="max-w-4xl p-0 bg-black/95 backdrop-blur-glass border-primary/20">
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
          {/* Mock video player */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <div className="text-center space-y-4">
              <div className="text-6xl">🎥</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{currentMedia.title}</h3>
                <p className="text-sm text-white/70">{currentMedia.speaker}</p>
              </div>
            </div>
          </div>

          {/* Video controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
            <div className="space-y-3">
              {/* Progress bar */}
              <Slider defaultValue={[30]} max={100} step={1} className="w-full" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10 text-white"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-white" />
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      className="w-24"
                    />
                  </div>
                  
                  <span className="text-sm text-white/70 ml-2">
                    12:34 / {currentMedia.duration}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10 text-white"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10 text-white"
                    onClick={() => setShowVideoPlayer(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
