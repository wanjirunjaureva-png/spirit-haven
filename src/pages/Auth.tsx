import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/");
      }, 2000);
    }, 1500);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-auth-bg flex items-center justify-center p-4">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/40 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/40 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Hero Text */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-violet-gold bg-clip-text text-transparent mb-3 drop-shadow-lg animate-pulse-glow">
            FaithApp
          </h1>
          <p className="text-lg text-foreground/80 tracking-wide font-light">
            Grow in Faith. Connect in Spirit.
          </p>
        </div>

        {/* Simplified Glass Card */}
        <Card className="backdrop-blur-glass border border-primary/30 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] transition-all duration-500 bg-card/40">
          
          <CardContent className="p-8 relative z-10">
            {/* Elegant Tab Toggle */}
            <div className="relative mb-8">
              <div className="flex gap-1 bg-muted/20 p-1 rounded-lg backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-300 ${
                    activeTab === "login"
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-300 ${
                    activeTab === "signup"
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {activeTab === "login" ? (
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input with Floating Label */}
                <div className="relative">
                  <Input
                    id="login-email"
                    type="email"
                    placeholder=" "
                    required
                    onFocus={() => setFocusedInput("login-email")}
                    onBlur={() => setFocusedInput(null)}
                    className={`peer h-11 bg-background/40 backdrop-blur-sm border transition-all duration-300 ${
                      focusedInput === "login-email"
                        ? "border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "border-input/50"
                    }`}
                  />
                  <Label
                    htmlFor="login-email"
                    className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                      focusedInput === "login-email"
                        ? "-top-2.5 text-xs bg-card px-2 text-accent font-medium"
                        : "top-3 text-sm text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                    }`}
                  >
                    Email Address
                  </Label>
                </div>

                {/* Password Input with Floating Label */}
                <div className="relative">
                  <Input
                    id="login-password"
                    type="password"
                    placeholder=" "
                    required
                    onFocus={() => setFocusedInput("login-password")}
                    onBlur={() => setFocusedInput(null)}
                    className={`peer h-11 bg-background/40 backdrop-blur-sm border transition-all duration-300 ${
                      focusedInput === "login-password"
                        ? "border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "border-input/50"
                    }`}
                  />
                  <Label
                    htmlFor="login-password"
                    className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                      focusedInput === "login-password"
                        ? "-top-2.5 text-xs bg-card px-2 text-primary font-medium"
                        : "top-3 text-sm text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                    }`}
                  >
                    Password
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 font-medium"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                {/* Social Login Divider */}
                <div className="relative my-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-3 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 border-primary/30 bg-transparent hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 border-primary/30 bg-transparent hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    Apple
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-6">
                {/* Name Input with Floating Label */}
                <div className="relative">
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder=" "
                    required
                    onFocus={() => setFocusedInput("signup-name")}
                    onBlur={() => setFocusedInput(null)}
                    className={`peer h-11 bg-background/40 backdrop-blur-sm border transition-all duration-300 ${
                      focusedInput === "signup-name"
                        ? "border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "border-input/50"
                    }`}
                  />
                  <Label
                    htmlFor="signup-name"
                    className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                      focusedInput === "signup-name"
                        ? "-top-2.5 text-xs bg-card px-2 text-accent font-medium"
                        : "top-3 text-sm text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                    }`}
                  >
                    Full Name
                  </Label>
                </div>

                {/* Email Input with Floating Label */}
                <div className="relative">
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder=" "
                    required
                    onFocus={() => setFocusedInput("signup-email")}
                    onBlur={() => setFocusedInput(null)}
                    className={`peer h-11 bg-background/40 backdrop-blur-sm border transition-all duration-300 ${
                      focusedInput === "signup-email"
                        ? "border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "border-input/50"
                    }`}
                  />
                  <Label
                    htmlFor="signup-email"
                    className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                      focusedInput === "signup-email"
                        ? "-top-2.5 text-xs bg-card px-2 text-accent font-medium"
                        : "top-3 text-sm text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                    }`}
                  >
                    Email Address
                  </Label>
                </div>

                {/* Password Input with Floating Label */}
                <div className="relative">
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder=" "
                    required
                    onFocus={() => setFocusedInput("signup-password")}
                    onBlur={() => setFocusedInput(null)}
                    className={`peer h-11 bg-background/40 backdrop-blur-sm border transition-all duration-300 ${
                      focusedInput === "signup-password"
                        ? "border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "border-input/50"
                    }`}
                  />
                  <Label
                    htmlFor="signup-password"
                    className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                      focusedInput === "signup-password"
                        ? "-top-2.5 text-xs bg-card px-2 text-primary font-medium"
                        : "top-3 text-sm text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                    }`}
                  >
                    Password
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-violet-gold hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)] transition-all duration-300 font-semibold text-base relative overflow-hidden group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Create Account</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </>
                  )}
                </Button>

                {/* Social Login Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted-foreground/20" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-4 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 border-primary/30 bg-transparent hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 border-primary/30 bg-transparent hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    Apple
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-glass border-2 border-primary/30">
          <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-fade-in">
            <div className="relative">
              <CheckCircle2 className="w-20 h-20 text-accent animate-pulse-glow" />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
            </div>
            <h3 className="text-2xl font-display font-bold bg-gradient-violet-gold bg-clip-text text-transparent">
              Welcome {activeTab === "login" ? "back" : ""} to FaithApp!
            </h3>
            <p className="text-muted-foreground text-center">
              {activeTab === "login" 
                ? "You've been signed in successfully."
                : "Your account has been created successfully."}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Auth;
