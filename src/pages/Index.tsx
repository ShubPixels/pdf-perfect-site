import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { CurrentTours } from "@/components/home/CurrentTours";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { Destinations } from "@/components/home/Destinations";
import { Community } from "@/components/home/Community";
import { LearnLifestyle } from "@/components/home/LearnLifestyle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CurrentTours />
        <UpcomingDepartures />
        <Destinations />
        <Community />
        <LearnLifestyle />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
