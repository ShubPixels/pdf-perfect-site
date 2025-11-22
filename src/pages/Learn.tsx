import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  MapPin, 
  FileText, 
  Shield, 
  Plane, 
  Globe,
  Clock,
  User
} from "lucide-react";

const Learn = () => {
  const categories = [
    {
      id: "planning",
      name: "Trip Planning",
      icon: MapPin,
      color: "text-blue-500",
      articles: [
        {
          title: "How to Choose Your First Group Tour",
          description: "Essential tips for first-time group travelers on selecting the perfect tour",
          readTime: "5 min read",
          tags: ["Beginner", "Planning"],
        },
        {
          title: "Best Time to Visit Popular Destinations",
          description: "Seasonal guides and weather considerations for your dream destinations",
          readTime: "8 min read",
          tags: ["Planning", "Seasonal"],
        },
        {
          title: "Budget Planning for International Tours",
          description: "Complete breakdown of costs and money-saving tips for your tour",
          readTime: "6 min read",
          tags: ["Budget", "Planning"],
        },
      ],
    },
    {
      id: "documents",
      name: "Travel Documents",
      icon: FileText,
      color: "text-green-500",
      articles: [
        {
          title: "Passport & Visa Guide for Indian Travelers",
          description: "Step-by-step process for passport applications and visa requirements",
          readTime: "10 min read",
          tags: ["Documents", "Visa"],
        },
        {
          title: "Travel Insurance: What You Need to Know",
          description: "Understanding coverage, claims, and choosing the right policy",
          readTime: "7 min read",
          tags: ["Insurance", "Safety"],
        },
        {
          title: "Important Documents Checklist",
          description: "Complete list of documents to carry for international travel",
          readTime: "4 min read",
          tags: ["Documents", "Checklist"],
        },
      ],
    },
    {
      id: "packing",
      name: "Packing Tips",
      icon: Plane,
      color: "text-purple-500",
      articles: [
        {
          title: "Ultimate Packing List for Different Climates",
          description: "What to pack for tropical, cold, and temperate destinations",
          readTime: "6 min read",
          tags: ["Packing", "Essentials"],
        },
        {
          title: "Carry-on vs Checked Luggage: What to Pack Where",
          description: "Smart packing strategies for hassle-free air travel",
          readTime: "5 min read",
          tags: ["Packing", "Airlines"],
        },
        {
          title: "Medicines and Health Essentials for Travel",
          description: "Must-have medical supplies and health tips for travelers",
          readTime: "7 min read",
          tags: ["Health", "Packing"],
        },
      ],
    },
    {
      id: "safety",
      name: "Travel Safety",
      icon: Shield,
      color: "text-orange-500",
      articles: [
        {
          title: "Staying Safe While Traveling in Groups",
          description: "Safety protocols and tips for group tour participants",
          readTime: "5 min read",
          tags: ["Safety", "Group Travel"],
        },
        {
          title: "Health Precautions for International Travel",
          description: "Vaccinations, food safety, and health tips for different countries",
          readTime: "8 min read",
          tags: ["Health", "Safety"],
        },
        {
          title: "Emergency Contacts and Helplines Abroad",
          description: "Important numbers and resources for travelers in distress",
          readTime: "4 min read",
          tags: ["Emergency", "Safety"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">Knowledge Hub</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Learn to Travel Better
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your comprehensive guide to planning, preparing, and enjoying group tours. 
                From visa applications to packing tips, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        {categories.map((category, idx) => (
          <section 
            key={category.id} 
            className={idx % 2 === 0 ? "py-16" : "py-16 bg-secondary/30"}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <div className={`${category.color}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl">
                {category.articles.map((article, articleIdx) => (
                  <Card
                    key={articleIdx}
                    className="p-6 border-border hover:border-primary transition-all hover:shadow-lg cursor-pointer group"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Resources Section */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 text-center border-border hover:border-primary transition-colors">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold text-foreground mb-2">Travel Guides</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed destination guides with cultural insights and practical tips
                </p>
                <Button variant="outline" size="sm">Browse Guides</Button>
              </Card>
              <Card className="p-6 text-center border-border hover:border-primary transition-colors">
                <User className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Advice</h3>
                <p className="text-muted-foreground mb-4">
                  Ask our experienced tour managers your travel questions
                </p>
                <Button variant="outline" size="sm">Contact Expert</Button>
              </Card>
              <Card className="p-6 text-center border-border hover:border-primary transition-colors">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold text-foreground mb-2">FAQ</h3>
                <p className="text-muted-foreground mb-4">
                  Common questions and answers about group tours and travel
                </p>
                <Button variant="outline" size="sm">View FAQs</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
