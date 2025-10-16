import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Send } from "lucide-react";
import { useState } from "react";

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome! I'm here to walk alongside you in your faith journey. How can I support you today?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, { role: "user", content: message }]);
    
    // Mock AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I understand you're seeking guidance. Remember that God's love is always with you. Would you like me to suggest a prayer or share a relevant Bible verse?",
        },
      ]);
    }, 1000);
    
    setMessage("");
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-accent" />
          Your Faith Companion
        </h1>
        <p className="text-muted-foreground">Find prayer reflections and guidance for today</p>
      </div>

      {/* Daily Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Daily Verse</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm italic mb-2">
              "Trust in the Lord with all your heart and lean not on your own understanding."
            </p>
            <p className="text-xs text-muted-foreground">Proverbs 3:5</p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-glass border-border shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Prayer Suggestion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">Morning gratitude prayer</p>
            <Button variant="outline" size="sm" className="w-full">View Prayer</Button>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <Card className="bg-card/80 backdrop-blur-glass border-border shadow-glow">
        <CardContent className="p-0">
          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about prayers, verses, or spiritual guidance..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} className="shadow-soft">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Questions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {["Daily prayer", "Bible study help", "Verse for comfort", "Spiritual guidance"].map((q, idx) => (
          <Button
            key={idx}
            variant="outline"
            size="sm"
            onClick={() => setMessage(q)}
            className="text-xs"
          >
            {q}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AIChat;
