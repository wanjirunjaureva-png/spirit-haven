import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Video, Calendar, MessageSquare, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const upcomingEvents = [
  {
    title: "Easter Celebration Service",
    date: "April 20, 2025",
    time: "10:00 AM",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&h=400&fit=crop"
  },
  {
    title: "Youth Leadership Conference",
    date: "May 15, 2025",
    time: "9:00 AM",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop"
  },
  {
    title: "Summer Bible Camp",
    date: "June 10-15, 2025",
    time: "All Day",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=400&fit=crop"
  },
  {
    title: "Worship Night",
    date: "July 8, 2025",
    time: "7:00 PM",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=400&fit=crop"
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Your spiritual journey at a glance</p>
      </div>

      {/* Event Carousel */}
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4000 })]}
          className="w-full"
        >
          <CarouselContent>
            {upcomingEvents.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                      <p className="text-sm text-white/80">{event.date} • {event.time}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Button size="sm" className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Today's Verse */}
        <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Today's Verse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm italic mb-2">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
            </p>
            <p className="text-xs text-muted-foreground">Jeremiah 29:11</p>
          </CardContent>
        </Card>

        {/* Next Study */}
        <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Next Study
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-1">The Book of Psalms</p>
            <p className="text-sm text-muted-foreground mb-3">Starts in 2h 30m</p>
            <Button size="sm" className="w-full shadow-soft">Join Live</Button>
          </CardContent>
        </Card>

        {/* Latest Podcast */}
        <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-navy" />
              Latest Podcast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-1">Finding Peace in Chaos</p>
            <p className="text-sm text-muted-foreground mb-3">Pastor Sarah Johnson • 45 min</p>
            <Button variant="outline" size="sm" className="w-full">Continue Watching</Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Community Gathering</p>
                <p className="text-xs text-muted-foreground">Tomorrow, 7:00 PM</p>
              </div>
              <Badge>Reserved</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Youth Ministry</p>
                <p className="text-xs text-muted-foreground">Friday, 6:00 PM</p>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Chat Suggestion */}
        <Card className="bg-gradient-spiritual text-primary-foreground shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">Get personalized prayer suggestions and biblical guidance</p>
            <Button variant="secondary" size="sm" className="w-full">Start Conversation</Button>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Bible Reading</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-gold w-[45%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Study Sessions</span>
                <span className="text-muted-foreground">8/10</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[80%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
