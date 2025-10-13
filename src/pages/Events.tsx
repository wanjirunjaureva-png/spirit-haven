import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Filter } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Community Gathering",
      date: "Tomorrow, 7:00 PM",
      location: "Main Chapel, 123 Faith Street",
      attendees: 45,
      reserved: true,
    },
    {
      title: "Youth Ministry",
      date: "Friday, 6:00 PM",
      location: "Youth Center, 456 Hope Avenue",
      attendees: 28,
      reserved: false,
    },
    {
      title: "Bible Study Workshop",
      date: "Saturday, 10:00 AM",
      location: "Conference Room A",
      attendees: 35,
      reserved: false,
    },
    {
      title: "Sunday Service",
      date: "Sunday, 9:00 AM",
      location: "Main Sanctuary",
      attendees: 150,
      reserved: false,
      isLive: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Events</h1>
          <p className="text-muted-foreground">Join our community gatherings and activities</p>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Map Placeholder */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft overflow-hidden">
        <div className="h-64 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
          </div>
        </div>
      </Card>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, idx) => (
          <Card key={idx} className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{event.title}</CardTitle>
                {event.isLive && (
                  <Badge className="bg-accent text-accent-foreground animate-glow">Live</Badge>
                )}
                {event.reserved && (
                  <Badge variant="outline">Reserved</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{event.attendees} attending</span>
              </div>
              
              <div className="flex gap-2 pt-2">
                {event.isLive ? (
                  <Button className="flex-1 shadow-soft">Watch Live</Button>
                ) : event.reserved ? (
                  <Button variant="outline" className="flex-1">View Details</Button>
                ) : (
                  <Button className="flex-1 shadow-soft">Reserve Spot</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming Events Calendar */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardHeader>
          <CardTitle>This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
              <div key={idx} className="text-xs font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center text-sm rounded-lg ${
                  i === 10 || i === 15 || i === 20
                    ? "bg-primary text-primary-foreground font-medium"
                    : i < 5
                    ? "text-muted-foreground"
                    : "hover:bg-secondary/50 cursor-pointer"
                }`}
              >
                {i < 5 ? "" : i - 4}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;
