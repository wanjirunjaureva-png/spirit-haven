import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share2, Send } from "lucide-react";
import { useState } from "react";

const Community = () => {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      author: "Sarah M.",
      time: "2 hours ago",
      content: "Feeling blessed today! 🙏 Jeremiah 29:11 has been on my heart.",
      likes: 24,
      comments: 5,
    },
    {
      author: "John D.",
      time: "5 hours ago",
      content: "Please pray for my family as we go through a difficult time. Your support means everything.",
      likes: 47,
      comments: 12,
      isPrayer: true,
    },
    {
      author: "Emily R.",
      time: "1 day ago",
      content: "\"The Lord is my shepherd; I shall not want.\" - Psalm 23:1. What a beautiful reminder!",
      likes: 31,
      comments: 8,
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Community</h1>
        <p className="text-muted-foreground">Share your faith journey with others</p>
      </div>

      {/* Create Post */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
        <CardContent className="p-4">
          <Textarea
            placeholder="Share a verse, quote, or prayer request..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="mb-3 min-h-[100px]"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">📷 Photo</Button>
              <Button variant="outline" size="sm">🙏 Prayer</Button>
            </div>
            <Button className="shadow-soft">
              <Send className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Prayer Wall */}
      <Card className="bg-gradient-spiritual text-primary-foreground shadow-glow">
        <CardHeader>
          <h2 className="text-xl font-bold">Prayer Wall</h2>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Join others in lifting up prayers for our community</p>
          <Button variant="secondary">View All Prayers</Button>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <Card key={idx} className="bg-card/80 backdrop-blur-glass border-border shadow-soft hover:shadow-glow transition-all">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-spiritual flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
                {post.isPrayer && (
                  <span className="ml-auto text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                    🙏 Prayer Request
                  </span>
                )}
              </div>
              
              <p className="mb-4 text-sm">{post.content}</p>
              
              <div className="flex items-center gap-4 pt-3 border-t border-border">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community;
