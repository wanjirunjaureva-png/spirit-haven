import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Clock } from "lucide-react";

const BibleStudy = () => {
  const pastSessions = [
    { title: "The Gospel of John", date: "Dec 10, 2024", duration: "1h 15m" },
    { title: "Proverbs: Wisdom for Life", date: "Dec 3, 2024", duration: "55m" },
    { title: "The Book of Romans", date: "Nov 26, 2024", duration: "1h 30m" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Live Bible Study</h1>
        <p className="text-muted-foreground">Join our community in exploring God's Word</p>
      </div>

      {/* Live Session */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-glow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>The Book of Psalms - Chapter 23</CardTitle>
            <Badge className="bg-accent text-accent-foreground animate-glow">Live Now</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Video Embed */}
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jQJ6t3EJfqM"
              title="Bible Study Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 shadow-glow">
              <Play className="h-4 w-4 mr-2" />
              Join Live
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>234 watching</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Started 15 min ago</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Chat */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardHeader>
          <CardTitle>Live Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 h-64 overflow-y-auto mb-4">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-spiritual flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Sarah M.</p>
                <p className="text-sm text-muted-foreground">Such a powerful message today!</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">John D.</p>
                <p className="text-sm text-muted-foreground">Amen! This is exactly what I needed to hear.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Share your thoughts..."
              className="flex-1 px-3 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="sm">Send</Button>
          </div>
        </CardContent>
      </Card>

      {/* Past Sessions */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardHeader>
          <CardTitle>Past Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pastSessions.map((session, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <div>
                  <p className="font-medium">{session.title}</p>
                  <p className="text-sm text-muted-foreground">{session.date} • {session.duration}</p>
                </div>
                <Button variant="outline" size="sm">Watch</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BibleStudy;
