'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Prism from "@/components/Prism";
import { useParallax } from "@/hooks/use-parallax";

interface HeroProps {
  onLearnMore: () => void;
  onWatchDemo: () => void;
}

export default function Hero({ onLearnMore, onWatchDemo }: HeroProps) {
  const { ref: parallaxRef, transform } = useParallax({ speed: 0.3, direction: 'vertical' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Prism Background with Parallax */}
      <div
        ref={parallaxRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 opacity-60"
        style={{ transform }}
      >
        <Prism
          height={3.5}
          baseWidth={5.5}
          animationType="3drotate"
          glow={1}
          noise={0.05}
          transparent={true}
          scale={2}
          hueShift={0.5}
          colorFrequency={1.2}
          bloom={1.5}
          suspendWhenOffscreen={true}
          timeScale={0.3}
        />
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Animated heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up">
                <span className="text-foreground">Let's </span>
                <span className="text-primary font-extrabold">
                  Explore
                </span>
              </h1>

              {/* Animated subtitle with delay */}
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                Beyond boundaries
                <br />
                Beyond imagination
                <br />
                <span className="text-foreground">Beyond horizons.</span>
              </p>
            </div>

            {/* CTA Buttons with staggered animation */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-400 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={onLearnMore}
                data-testid="button-learn-more"
                className="bg-gradient-to-r from-chart-1 to-primary hover:from-chart-1/90 hover:to-primary/90 text-primary-foreground px-8 sm:px-12 py-4 text-base sm:text-lg rounded-xl transition-smooth hover-elevate focus-visible-ring min-h-[44px]"
              >
                Begin Journey
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onWatchDemo}
                data-testid="button-watch-demo"
                className="bg-background/80 backdrop-blur-sm border-primary/30 px-8 sm:px-12 py-4 text-base sm:text-lg rounded-xl transition-smooth hover-elevate focus-visible-ring min-h-[44px]"
              >
                Discover More
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-chart-1 to-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}