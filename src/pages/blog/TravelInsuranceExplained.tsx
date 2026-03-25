import { BlogPostLayout } from "@/components/BlogPostLayout";

const TravelInsuranceExplained = () => {
  return (
    <BlogPostLayout
      title="Travel insurance explained"
      subtitle="Understanding travel insurance and why it matters"
      category="Learn"
      readTime="6 min read"
      publishedDate="January 13, 2026"
      relatedArticles={[
        {
          title: "First-time Europe traveller? Start here",
          category: "Guide",
          readTime: "8 min read",
          slug: "/learn/first-time-europe-traveler"
        },
        {
          title: "Visa documents checklist",
          category: "Checklist",
          readTime: "5 min read",
          slug: "/learn/visa-documents-checklist"
        }
      ]}
    >
      <div className="space-y-8">
        <p className="text-xl text-muted-foreground leading-relaxed">
          Travel insurance is often overlooked but can be a lifesaver during your trip. Whether you're dealing with a missed flight, medical emergency, or lost luggage, the right insurance can protect your investment and provide peace of mind.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Do You Need Travel Insurance?</h2>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-bold text-red-800 mb-3">Unexpected Events</h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Trip cancellations due to illness</li>
              <li>• Medical emergencies abroad</li>
              <li>• Lost or delayed baggage</li>
              <li>• Flight delays or cancellations</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">Financial Protection</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Covers non-refundable deposits</li>
              <li>• Medical expenses up to lakhs</li>
              <li>• Emergency evacuation costs</li>
              <li>• Legal assistance abroad</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Types of Travel Insurance Coverage</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-bold text-lg mb-2">Medical Coverage</h3>
            <p className="text-sm mb-2">Essential for international travel. Covers doctor visits, hospital stays, and emergency medical evacuation.</p>
            <p className="text-xs text-muted-foreground">Recommended: At least ₹50 lakhs for European trips</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-bold text-lg mb-2">Trip Cancellation</h3>
            <p className="text-sm mb-2">Protects your investment if you need to cancel due to illness, family emergency, or other covered reasons.</p>
            <p className="text-xs text-muted-foreground">Usually covers 100% of trip cost</p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="font-bold text-lg mb-2">Baggage Protection</h3>
            <p className="text-sm mb-2">Covers lost, stolen, or damaged luggage and personal belongings.</p>
            <p className="text-xs text-muted-foreground">Typically up to ₹30,000-50,000 coverage</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="font-bold text-lg mb-2">Personal Accident</h3>
            <p className="text-sm mb-2">Provides financial support in case of accidental death or disability during travel.</p>
            <p className="text-xs text-muted-foreground">Usually ₹10-25 lakhs coverage</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How Much Does Travel Insurance Cost?</h2>

        <div className="bg-primary/5 p-6 rounded-lg">
          <p className="mb-4">Insurance costs vary based on:</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Trip Duration:</strong>
              <br />₹500-₹1,500 for 7-10 days
            </div>
            <div>
              <strong>Coverage Amount:</strong>
              <br />₹2,000-₹5,000 for ₹50 lakhs coverage
            </div>
            <div>
              <strong>Destination:</strong>
              <br />Higher for Europe/USA vs Asia
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            *Prices are approximate and vary by provider and coverage options
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What to Look for in Travel Insurance</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl">✓</span>
            <div>
              <strong>COVID-19 Coverage:</strong> Especially important for international travel
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl">✓</span>
            <div>
              <strong>24/7 Emergency Assistance:</strong> Access to help desk anytime, anywhere
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl">✓</span>
            <div>
              <strong>No Deductibles:</strong> Some policies cover claims without deductibles
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl">✓</span>
            <div>
              <strong>Adventure Sports Coverage:</strong> If you plan to do any adventure activities
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">When to Buy Travel Insurance</h2>

        <p>
          The best time to purchase travel insurance is immediately after booking your trip but before making any non-refundable payments. This ensures you have coverage from the moment your trip is confirmed.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
          <h3 className="font-bold text-yellow-800 mb-2">Important Note</h3>
          <p className="text-yellow-700 text-sm">
            Some credit cards offer basic travel insurance as a perk. Check your card benefits, but dedicated travel insurance usually provides more comprehensive coverage.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to File a Claim</h2>

        <ol className="space-y-3 list-decimal pl-6">
          <li><strong>Contact your insurance provider immediately</strong> when an incident occurs</li>
          <li><strong>Keep all receipts and documents</strong> related to your claim</li>
          <li><strong>Fill out the claim form</strong> provided by your insurer</li>
          <li><strong>Submit supporting documents</strong> like medical reports, police reports, or receipts</li>
          <li><strong>Follow up regularly</strong> until your claim is processed</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Common Exclusions</h2>

        <div className="bg-red-50 p-6 rounded-lg">
          <p className="font-medium text-red-800 mb-3">Most policies DON'T cover:</p>
          <ul className="space-y-2 text-sm text-red-700">
            <li>• Pre-existing medical conditions (unless specifically added)</li>
            <li>• Adventure sports not declared at purchase time</li>
            <li>• Claims due to alcohol or drug-related incidents</li>
            <li>• War, terrorism, or political unrest</li>
            <li>• Claims made after returning home (most have time limits)</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="font-bold text-green-800 mb-2">Final Thoughts</h3>
          <p className="text-green-700">
            Travel insurance is not an optional extra-it's an essential part of responsible travel planning. The peace of mind it provides is invaluable, and the cost is minimal compared to the protection it offers. Don't leave home without it!
          </p>
        </div>

        <p className="text-center italic text-muted-foreground">
          "Better safe than sorry" - especially when traveling abroad
        </p>
      </div>
    </BlogPostLayout>
  );
};

export default TravelInsuranceExplained;