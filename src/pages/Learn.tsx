import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { LearnFamilyJourneyBoardContent } from "@/components/learn/LearnFamilyJourneyBoardContent";

const Learn = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-8 md:pt-10">
        <LearnFamilyJourneyBoardContent />
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
