import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, Heart, Video, Music } from "lucide-react";
import { useMedia, MediaItem } from "@/contexts/MediaContext";

const Media = () => {
  const { playMedia } = useMedia();

  const featured: MediaItem = {
    id: "featured",
    title: "Finding Peace in Chaos",
    speaker: "Pastor Sarah Johnson",
    duration: "45:23",
    type: "Video",
    videoUrl: "mock-video-url",
  };

  const media: MediaItem[] = [
    { id: "1", title: "The Power of Prayer", speaker: "Rev. Michael Brown", duration: "38:45", type: "Audio", audioUrl: "mock-audio-1" },
    { id: "2", title: "Living with Purpose", speaker: "Pastor Sarah Johnson", duration: "52:15", type: "Video", videoUrl: "mock-video-1" },
    { id: "3", title: "Faith in Action", speaker: "Dr. Emily White", duration: "41:30", type: "Audio", audioUrl: "mock-audio-2" },
    { id: "4", title: "Overcoming Fear", speaker: "Pastor John Smith", duration: "35:20", type: "Video", videoUrl: "mock-video-2" },
    { id: "5", title: "Morning Devotional", speaker: "Pastor Sarah Johnson", duration: "28:10", type: "Audio", audioUrl: "mock-audio-3" },
    { id: "6", title: "Worship Night Live", speaker: "Worship Team", duration: "1:15:45", type: "Video", videoUrl: "mock-video-3" },
    { id: "7", title: "Bible Study: Romans", speaker: "Dr. Emily White", duration: "55:30", type: "Audio", audioUrl: "mock-audio-4" },
    { id: "8", title: "Youth Service Highlights", speaker: "Youth Ministry", duration: "42:00", type: "Video", videoUrl: "mock-video-4" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Media</h1>
          <p className="text-muted-foreground">Sermons, podcasts, and spiritual content</p>
        </div>
        <Button className="shadow-soft">
          <Plus className="h-4 w-4 mr-2" />
          Follow
        </Button>
      </div>

      {/* Featured */}
      <Card className="bg-gradient-spiritual text-primary-foreground shadow-glow overflow-hidden group hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Badge className="bg-accent text-accent-foreground shadow-[0_0_10px_rgba(234,179,8,0.3)]">Featured</Badge>
            <Badge variant="outline" className="border-white/30 text-white">
              <Video className="h-3 w-3 mr-1" />
              {featured.type}
            </Badge>
          </div>
          <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
          <p className="mb-4 text-white/90">{featured.speaker} • {featured.duration}</p>
          <div className="flex gap-3">
            <Button 
              variant="secondary" 
              className="shadow-soft hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              onClick={() => playMedia(featured)}
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Now
            </Button>
            <Button variant="secondary" size="icon" className="hover:scale-110 transition-transform">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Media */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.slice(0, 3).map((item) => (
            <Card 
              key={item.id} 
              className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all group cursor-pointer"
              onClick={() => playMedia(item)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-spiritual rounded-t-lg flex items-center justify-center group-hover:opacity-90 transition-opacity overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <Play className="h-12 w-12 text-white relative z-10 group-hover:scale-110 transition-transform" />
                  <Badge className="absolute top-2 right-2 z-10" variant="secondary">
                    {item.type === "Video" ? <Video className="h-3 w-3 mr-1" /> : <Music className="h-3 w-3 mr-1" />}
                    {item.type}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.speaker}</p>
                  <p className="text-xs text-muted-foreground">{item.duration}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Content */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {media.map((item) => (
            <Card 
              key={item.id} 
              className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all cursor-pointer group"
              onClick={() => playMedia(item)}
            >
              <CardContent className="p-4">
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <Play className="h-8 w-8 text-muted-foreground group-hover:text-primary group-hover:scale-125 transition-all" />
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {item.type === "Video" ? <Video className="h-3 w-3" /> : <Music className="h-3 w-3" />}
                  </Badge>
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">{item.speaker}</p>
                <p className="text-xs text-muted-foreground">{item.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
