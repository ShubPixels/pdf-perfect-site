import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { CurrentTours } from "@/components/home/CurrentTours";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { Destinations } from "@/components/home/Destinations";
import { Community } from "@/components/home/Community";
import { LearnLifestyle } from "@/components/home/LearnLifestyle";
import { Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <Hero />
        
        {/* Story Bridge 1 */}
        <div className="relative py-12 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed">
              Right now, at this very moment, someone from our community is waking up in a new country,
              camera in hand, ready to create memories that will last a lifetime...
            </p>
          </div>
        </div>

        <CurrentTours />

        {/* Story Bridge 2 - Traveler Quote */}
        <div className="relative py-16 bg-gradient-to-b from-secondary/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Quote className="h-12 w-12 text-primary/40 mb-6 mx-auto" />
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "I never thought I'd travel internationally at 65. But Sun Tourism made it so comfortable and easy.
                  The group became my travel family, and Japan became the trip of a lifetime."
                </p>
                <footer className="text-muted-foreground">
                  — Sunita Mehta, Pune • Japan Tour, October 2024
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Story Bridge 3 */}
        <div className="relative py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              And Soon, It Could Be You
            </h3>
            <p className="text-lg text-muted-foreground">
              Your next adventure is closer than you think. Take a look at what's coming up...
            </p>
          </div>
        </div>

        <UpcomingDepartures />

        {/* Story Bridge 4 - Inspiration */}
        <div className="relative py-16 bg-gradient-to-b from-background to-accent/10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Where Will Your Story Take You?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every destination has its own story to tell. From the bustling streets of Tokyo to the 
                romantic canals of Venice, from the modern marvels of Dubai to the tranquil beaches of Bali.
                Each journey is crafted with care, each moment designed to become a cherished memory.
              </p>
            </div>
          </div>
        </div>

        <Destinations />

        {/* Story Bridge 5 - Community Lead */}
        <div className="relative py-16 bg-gradient-to-b from-accent/10 via-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                But Don't Just Take Our Word For It
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The best stories come from those who've traveled with us. Real photos, real moments, 
                real friendships formed thousands of miles from home. This is what makes every tour special.
              </p>
            </div>
          </div>
        </div>

        <Community />

        {/* Story Bridge 6 - Learning Transition */}
        <div className="relative py-16 bg-gradient-to-b from-secondary/20 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Quote className="h-12 w-12 text-primary/40 mb-6 mx-auto" />
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "The tour managers didn't just show us places, they taught us how to travel smart. 
                  Now I feel confident exploring on my own too!"
                </p>
                <footer className="text-muted-foreground">
                  — Rajesh Kulkarni, Mumbai • Europe Tour, August 2024
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Story Bridge 7 - Final CTA */}
        <div className="relative py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Start Your Journey with Knowledge
            </h3>
            <p className="text-lg text-muted-foreground">
              Whether you're a first-time traveler or a seasoned explorer, there's always something new to learn.
              Our guides and tips will help you prepare for the adventure of a lifetime.
            </p>
          </div>
        </div>

        <LearnLifestyle />

        {/* Final Story Close */}
        <div className="relative py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Story Starts Here
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Every great journey begins with a single step. Hundreds of travelers have already taken theirs with us.
                Explore the packages, pick your destination, and get ready to create memories that will last forever.
              </p>
              <a
                href="https://suntourismpune.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                Explore Tour Packages
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Visit our main website for bookings and pricing
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
