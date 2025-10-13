import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, Heart } from "lucide-react";

const Media = () => {
  const featured = {
    title: "Finding Peace in Chaos",
    speaker: "Pastor Sarah Johnson",
    duration: "45 min",
    type: "Sermon",
  };

  const media = [
    { title: "The Power of Prayer", speaker: "Rev. Michael Brown", duration: "38 min", type: "Podcast" },
    { title: "Living with Purpose", speaker: "Pastor Sarah Johnson", duration: "52 min", type: "Sermon" },
    { title: "Faith in Action", speaker: "Dr. Emily White", duration: "41 min", type: "Podcast" },
    { title: "Overcoming Fear", speaker: "Pastor John Smith", duration: "35 min", type: "Sermon" },
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
      <Card className="bg-gradient-spiritual text-primary-foreground shadow-glow overflow-hidden">
        <CardContent className="p-6">
          <Badge className="mb-4 bg-accent text-accent-foreground">Featured</Badge>
          <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
          <p className="mb-4">{featured.speaker} • {featured.duration}</p>
          <div className="flex gap-3">
            <Button variant="secondary" className="shadow-soft">
              <Play className="h-4 w-4 mr-2" />
              Continue Watching
            </Button>
            <Button variant="secondary" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Continue Watching */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.slice(0, 3).map((item, idx) => (
            <Card key={idx} className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all group">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-spiritual rounded-t-lg flex items-center justify-center group-hover:opacity-90 transition-opacity">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="p-4">
                  <Badge className="mb-2" variant="outline">{item.type}</Badge>
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
          {media.map((item, idx) => (
            <Card key={idx} className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <Play className="h-8 w-8 text-muted-foreground" />
                </div>
                <Badge className="mb-2" variant="secondary">{item.type}</Badge>
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
