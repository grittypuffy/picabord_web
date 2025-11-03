'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, Users, Globe, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
  const valuesAnimation = useScrollAnimation({ threshold: 0.2 });
  const leadershipAnimation = useScrollAnimation({ threshold: 0.1 });

  const leadership = [
    {
      name: "Anish K",
      role: "Founding Director",
      background: "Visionary leader driving innovation across all technology divisions"
    },
    {
      name: "Zahid Hussain J",
      role: "Managing Director",
      background: "Strategic leadership and operational excellence in technology management"
    },
    {
      name: "Deva Dharshini M",
      role: "Human Resources",
      background: "People-focused leader building exceptional teams for technological advancement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background/50 to-muted/10">
      {/* Header */}
      <section className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 hover-elevate"
            data-testid="button-back-about"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <Badge variant="outline" className="border-primary/30 text-primary font-picabord">
              About PICABORD
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Pioneering{" "}
              <span className="text-primary">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From our humble beginnings to becoming a global leader in advanced technology, 
              our journey is defined by relentless innovation and unwavering commitment to excellence.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gradient-to-r from-muted/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={valuesAnimation.ref as React.RefObject<HTMLDivElement>}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Target, title: "Mission", description: "To revolutionize technology through innovative solutions that empower businesses and transform industries worldwide.", gradient: "from-chart-1 to-primary" },
              { icon: Globe, title: "Vision", description: "To be the global leader in advanced technology solutions, creating a connected world where innovation drives human progress.", gradient: "from-primary to-chart-2" },
              { icon: Award, title: "Values", description: "Excellence, innovation, integrity, and collaboration guide every decision we make and every solution we deliver.", gradient: "from-chart-2 to-chart-1" }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`p-8 text-center hover-elevate transition-all duration-700 ${
                  valuesAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Leadership */}
      <section className="py-16 bg-gradient-to-r from-background to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of expertise from 
              leading technology companies and research institutions.
            </p>
          </div>

          <div 
            ref={leadershipAnimation.ref as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          >
            {leadership.map((leader, index) => (
              <Card 
                key={index} 
                className={`p-6 text-center hover-elevate transition-all duration-700 ${
                  leadershipAnimation.isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-chart-1 to-chart-2 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{leader.role}</p>
                  <p className="text-xs text-muted-foreground">{leader.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}