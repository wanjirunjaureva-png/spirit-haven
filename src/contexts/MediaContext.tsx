import { createContext, useContext, useState, ReactNode } from "react";

export interface MediaItem {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  type: "Audio" | "Video";
  thumbnail?: string;
  videoUrl?: string;
  audioUrl?: string;
}

interface MediaContextType {
  currentMedia: MediaItem | null;
  isPlaying: boolean;
  playMedia: (media: MediaItem) => void;
  togglePlay: () => void;
  stopMedia: () => void;
  showVideoPlayer: boolean;
  setShowVideoPlayer: (show: boolean) => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [currentMedia, setCurrentMedia] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const playMedia = (media: MediaItem) => {
    setCurrentMedia(media);
    setIsPlaying(true);
    if (media.type === "Video") {
      setShowVideoPlayer(true);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const stopMedia = () => {
    setIsPlaying(false);
    setCurrentMedia(null);
    setShowVideoPlayer(false);
  };

  return (
    <MediaContext.Provider
      value={{
        currentMedia,
        isPlaying,
        playMedia,
        togglePlay,
        stopMedia,
        showVideoPlayer,
        setShowVideoPlayer,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error("useMedia must be used within MediaProvider");
  }
  return context;
};
