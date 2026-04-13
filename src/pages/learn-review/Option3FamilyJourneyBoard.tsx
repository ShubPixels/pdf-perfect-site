import { LearnFamilyJourneyBoardContent } from "@/components/learn/LearnFamilyJourneyBoardContent";
import { LearnReviewShell } from "@/components/learn-review/LearnReviewShell";

const Option3FamilyJourneyBoard = () => {
  return (
    <LearnReviewShell
      optionLabel="Option 3"
      optionTitle="Family-Friendly Journey Board"
      optionSummary="A broad-audience version with warmer reassurance cues, simpler article labels, and color-zoned sections that feel easier to navigate at a glance."
      className="bg-[linear-gradient(180deg,hsl(var(--secondary)/0.45),hsl(var(--background))_20%,hsl(var(--secondary)/0.18)_75%,hsl(var(--background)))]"
    >
      <LearnFamilyJourneyBoardContent />
    </LearnReviewShell>
  );
};

export default Option3FamilyJourneyBoard;
