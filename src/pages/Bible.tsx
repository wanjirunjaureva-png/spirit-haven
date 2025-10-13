import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Highlighter, Share2, Bookmark } from "lucide-react";
import { useState } from "react";

const Bible = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Bible Reader</h1>
        <p className="text-muted-foreground">Read, search, and reflect on God's Word</p>
      </div>

      {/* Controls */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search verses, keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="niv">
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Translation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="niv">NIV</SelectItem>
                <SelectItem value="kjv">KJV</SelectItem>
                <SelectItem value="esv">ESV</SelectItem>
                <SelectItem value="nlt">NLT</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="genesis">
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Book" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="genesis">Genesis</SelectItem>
                <SelectItem value="psalms">Psalms</SelectItem>
                <SelectItem value="john">John</SelectItem>
                <SelectItem value="romans">Romans</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Reading Area */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardContent className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Psalm 23</h2>
            <p className="text-sm text-muted-foreground">New International Version (NIV)</p>
          </div>

          <div className="space-y-4 text-foreground leading-relaxed">
            <p className="hover:bg-secondary/30 p-2 rounded transition-colors cursor-pointer">
              <span className="text-muted-foreground mr-2">1</span>
              The Lord is my shepherd, I lack nothing.
            </p>
            <p className="hover:bg-secondary/30 p-2 rounded transition-colors cursor-pointer">
              <span className="text-muted-foreground mr-2">2</span>
              He makes me lie down in green pastures, he leads me beside quiet waters,
            </p>
            <p className="hover:bg-secondary/30 p-2 rounded transition-colors cursor-pointer">
              <span className="text-muted-foreground mr-2">3</span>
              he refreshes my soul. He guides me along the right paths for his name's sake.
            </p>
            <p className="hover:bg-secondary/30 p-2 rounded transition-colors cursor-pointer">
              <span className="text-muted-foreground mr-2">4</span>
              Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.
            </p>
            <p className="hover:bg-secondary/30 p-2 rounded transition-colors cursor-pointer">
              <span className="text-muted-foreground mr-2">5</span>
              You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows.
            </p>
            <p className="hover:bg-secondary/30 p-2 rounded transition-colors cursor-pointer">
              <span className="text-muted-foreground mr-2">6</span>
              Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever.
            </p>
          </div>

          <div className="flex gap-2 mt-6 pt-6 border-t border-border">
            <Button variant="outline" size="sm">
              <Highlighter className="h-4 w-4 mr-2" />
              Highlight
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Saved Highlights */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Recent Highlights</h3>
          <div className="space-y-2">
            <div className="p-3 bg-accent/10 border-l-4 border-accent rounded">
              <p className="text-sm italic mb-1">"For I know the plans I have for you..."</p>
              <p className="text-xs text-muted-foreground">Jeremiah 29:11</p>
            </div>
            <div className="p-3 bg-primary/10 border-l-4 border-primary rounded">
              <p className="text-sm italic mb-1">"Trust in the Lord with all your heart..."</p>
              <p className="text-xs text-muted-foreground">Proverbs 3:5</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bible;
