import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { BookOpen, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

const Journal = () => {
  const [currentEntry, setCurrentEntry] = useState("");

  const entries = [
    {
      date: "December 15, 2024",
      title: "Gratitude and Hope",
      preview: "Today I'm feeling incredibly grateful for...",
    },
    {
      date: "December 12, 2024",
      title: "Reflections on Psalm 23",
      preview: "The Lord is my shepherd, and I've been meditating...",
    },
    {
      date: "December 8, 2024",
      title: "Prayer Request Answered",
      preview: "I can't believe how God has moved in my life...",
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Journal</h1>
          <p className="text-muted-foreground">Capture your spiritual journey</p>
        </div>
        <Button className="shadow-soft">
          <Plus className="h-4 w-4 mr-2" />
          New Entry
        </Button>
      </div>

      {/* Companion Reflection */}
      <Card className="bg-gradient-spiritual text-primary-foreground shadow-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Companion Reflection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Based on your recent entries, consider reflecting on themes of gratitude and trust. 
            Proverbs 3:5-6 might resonate with your journey.
          </p>
          <Button variant="secondary" size="sm">Get More Insights</Button>
        </CardContent>
      </Card>

      {/* Current Entry */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardHeader>
          <CardTitle>Today's Entry</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Entry title..." />
          <Textarea
            placeholder="Write your thoughts, prayers, reflections..."
            value={currentEntry}
            onChange={(e) => setCurrentEntry(e.target.value)}
            className="min-h-[200px]"
          />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Add Verse
              </Button>
              <Button variant="outline" size="sm">
                <Sparkles className="h-4 w-4 mr-2" />
                Companion Suggestions
              </Button>
            </div>
            <Button className="shadow-soft">Save Entry</Button>
          </div>
        </CardContent>
      </Card>

      {/* Past Entries */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Past Entries</h2>
        <div className="space-y-3">
          {entries.map((entry, idx) => (
            <Card key={idx} className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">{entry.date}</p>
                    <h3 className="font-semibold mb-1">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{entry.preview}</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
