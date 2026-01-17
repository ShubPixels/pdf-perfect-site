import { BlogPostLayout } from "@/components/BlogPostLayout";

const VisaDocumentsChecklist = () => {
  return (
    <BlogPostLayout
      title="Visa documents checklist"
      subtitle="Complete checklist for visa applications and required documents"
      category="Checklist"
      readTime="5 min read"
      publishedDate="January 14, 2026"
      relatedArticles={[
        {
          title: "First-time Europe traveller? Start here",
          category: "Guide",
          readTime: "8 min read",
          slug: "/learn/first-time-europe-traveler"
        },
        {
          title: "Travel insurance explained",
          category: "Learn",
          readTime: "6 min read",
          slug: "/learn/travel-insurance-explained"
        }
      ]}
    >
      <div className="space-y-8">
        <p className="text-xl text-muted-foreground leading-relaxed">
          Applying for a visa can be daunting, but having all your documents organized makes the process much smoother. This comprehensive checklist covers everything you need for most European visa applications.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">📋 Essential Documents</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-bold text-lg mb-2">1. Valid Passport</h3>
            <ul className="space-y-1 text-sm">
              <li>• Must be valid for at least 6 months beyond your planned return date</li>
              <li>• Should have at least 2 blank pages for visa stamps</li>
              <li>• Recent passport-sized photos (taken within last 6 months)</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-bold text-lg mb-2">2. Application Form</h3>
            <ul className="space-y-1 text-sm">
              <li>• Completely filled online application form</li>
              <li>• Printout of confirmation page with barcode</li>
              <li>• All sections must be accurately filled</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="font-bold text-lg mb-2">3. Financial Documents</h3>
            <ul className="space-y-1 text-sm">
              <li>• Bank statements for last 6 months</li>
              <li>• Salary slips or income proof</li>
              <li>• Fixed deposit certificates if applicable</li>
              <li>• Sponsorship letter if someone else is funding your trip</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="font-bold text-lg mb-2">4. Employment Proof</h3>
            <ul className="space-y-1 text-sm">
              <li>• Employment letter from current employer</li>
              <li>• Business card or company ID</li>
              <li>• If self-employed: Business registration certificate</li>
              <li>• If student: Bonafide certificate from educational institution</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="font-bold text-lg mb-2">5. Travel Itinerary</h3>
            <ul className="space-y-1 text-sm">
              <li>• Confirmed flight tickets (or booking confirmation)</li>
              <li>• Hotel bookings for entire stay</li>
              <li>• Day-wise itinerary with planned activities</li>
              <li>• Travel insurance certificate</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🎯 Country-Specific Requirements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Schengen Countries</h3>
            <ul className="space-y-2 text-sm">
              <li>• Schengen visa application form</li>
              <li>• Proof of sufficient funds (€70-100 per day)</li>
              <li>• Health insurance coverage</li>
              <li>• Accommodation proof for entire stay</li>
            </ul>
          </div>

          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">United Kingdom</h3>
            <ul className="space-y-2 text-sm">
              <li>• UK visa application form</li>
              <li>• Tuberculosis test results (for stays over 6 months)</li>
              <li>• Proof of relationship if visiting family</li>
              <li>• English language proficiency proof</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">💡 Pro Tips for Visa Applications</h2>

        <div className="bg-primary/5 p-6 rounded-lg">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Apply early:</strong> Visa processing can take 2-8 weeks. Apply at least 3 months before travel.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Keep copies:</strong> Make photocopies of all documents before submitting originals.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Check requirements:</strong> Each country has specific requirements. Double-check embassy websites.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Professional photos:</strong> Use a professional photographer for visa photos to avoid rejection.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🚨 Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
            <span className="text-red-500 text-xl">⚠️</span>
            <div>
              <p className="font-medium text-red-800">Incomplete Applications</p>
              <p className="text-sm text-red-700">Missing signatures, incomplete forms, or unclear photocopies lead to rejection.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
            <span className="text-red-500 text-xl">⚠️</span>
            <div>
              <p className="font-medium text-red-800">Insufficient Funds Proof</p>
              <p className="text-sm text-red-700">Make sure your bank statements show consistent balance and regular transactions.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
            <span className="text-red-500 text-xl">⚠️</span>
            <div>
              <p className="font-medium text-red-800">Weak Travel Purpose</p>
              <p className="text-sm text-red-700">Clearly explain why you're visiting and provide supporting documents.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="font-bold text-green-800 mb-2">Final Checklist</h3>
          <p className="text-green-700 mb-3">Before submitting your application, ask yourself:</p>
          <ul className="space-y-1 text-sm text-green-700">
            <li>• Are all documents original and photocopies clear?</li>
            <li>• Is my application form completely filled and signed?</li>
            <li>• Do I have sufficient funds for my trip duration?</li>
            <li>• Are my travel dates and itinerary realistic?</li>
            <li>• Have I double-checked country-specific requirements?</li>
          </ul>
        </div>

        <p className="text-center text-muted-foreground italic">
          Remember: A well-prepared application increases your chances of visa approval significantly!
        </p>
      </div>
    </BlogPostLayout>
  );
};

export default VisaDocumentsChecklist;