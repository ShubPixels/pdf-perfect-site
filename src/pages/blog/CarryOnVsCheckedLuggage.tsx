import { BlogPostLayout } from "@/components/BlogPostLayout";

const CarryOnVsCheckedLuggage = () => {
  return (
    <BlogPostLayout
      title="Carry-on vs Checked Luggage"
      subtitle="A simple way to decide what stays with you and what travels in the hold."
      category="Packing Tips"
      readTime="5 min read"
      publishedDate="March 25, 2026"
      relatedArticles={[
        {
          title: "Packing light for 10-day tours",
          category: "Packing Tips",
          readTime: "7 min read",
          slug: "/learn/packing-light-10-day-tours",
        },
        {
          title: "Ultimate Packing List for Different Climates",
          category: "Packing Tips",
          readTime: "6 min read",
          slug: "/learn/ultimate-packing-list-for-different-climates",
        },
      ]}
    >
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-muted-foreground">
          Deciding what goes in your carry-on and what goes into checked luggage
          is less about airline rules alone and more about protecting what you
          cannot afford to lose access to mid-journey.
        </p>

        <h2>Always keep essentials in your carry-on</h2>
        <p>
          Your passport, wallet, medicines, phone charger, valuables, and one
          change of clothes should stay with you. If a checked bag is delayed,
          your day should still be manageable.
        </p>

        <div className="rounded-2xl bg-primary/5 p-6">
          <h3 className="mb-2 font-bold text-primary">Carry-on basics</h3>
          <ul className="list-disc space-y-2 pl-6 text-sm text-foreground/80">
            <li>Documents and money</li>
            <li>Prescription medication</li>
            <li>Electronics and chargers</li>
            <li>One fresh outfit and essential toiletries</li>
            <li>Anything fragile or expensive</li>
          </ul>
        </div>

        <h2>Use checked luggage for volume, not urgency</h2>
        <p>
          Bulkier clothing, extra footwear, larger toiletries, and non-urgent
          items belong in checked baggage. Think of this bag as the storage
          space for the trip, not your lifeline for the first 24 hours.
        </p>

        <h2>Think about movement, not just packing</h2>
        <p>
          On multi-city itineraries, lighter checked luggage is often easier to
          manage than one oversized suitcase stuffed for every possibility. If
          you can comfortably lift and move your bag, you are packing at a
          healthier level.
        </p>

        <h2>When a carry-on-only trip makes sense</h2>
        <p>
          Short city breaks, lighter climates, and travelers who pack in a very
          disciplined way can often skip checked luggage. It saves waiting time
          and reduces the chance of bag delays.
        </p>

        <h2>When checked luggage is the better choice</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Longer itineraries or colder destinations</li>
          <li>Family travel with more essentials</li>
          <li>Special clothing or shopping-heavy trips</li>
          <li>When airline cabin baggage limits are restrictive</li>
        </ul>

        <div className="rounded-2xl border border-green-500/30 bg-green-50 p-6">
          <h3 className="mb-2 font-bold text-green-800">Easy rule to remember</h3>
          <p className="text-green-700">
            Carry what you need to function. Check what you only need to
            continue the trip comfortably.
          </p>
        </div>
      </div>
    </BlogPostLayout>
  );
};

export default CarryOnVsCheckedLuggage;
