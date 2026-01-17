import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Compass, FileText, Utensils, Gamepad2, Backpack, ArrowRight, Sparkles } from "lucide-react";

export const LearnLifestyle = () => {
  const learnArticles = [
    {
      id: 1,
      title: "First-time Europe traveller? Start here",
      description: "Everything you need to know before your first European adventure.",
      icon: Compass,
      readTime: "8 min read",
      category: "Guide",
    },
    {
      id: 2,
      title: "Visa documents checklist",
      description: "Complete checklist for visa applications and required documents.",
      icon: FileText,
      readTime: "5 min read",
      category: "Checklist",
    },
    {
      id: 3,
      title: "Travel insurance explained",
      description: "Understanding travel insurance and why it matters.",
      icon: BookOpen,
      readTime: "6 min read",
      category: "Learn",
    },
  ];

  const lifestyleArticles = [
    {
      id: 1,
      title: "5 veg-friendly dishes in Europe",
      description: "Delicious vegetarian options across European countries.",
      icon: Utensils,
      readTime: "4 min read",
      category: "Food",
    },
    {
      id: 2,
      title: "Fun group games for buses",
      description: "Keep the group entertained during long bus journeys.",
      icon: Gamepad2,
      readTime: "3 min read",
      category: "Fun",
    },
    {
      id: 3,
      title: "Packing light for 10-day tours",
      description: "Master the art of packing efficiently for extended trips.",
      icon: Backpack,
      readTime: "7 min read",
      category: "Tips",
    },
  ];

  return (
    <section className="py-24 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Travel Smarter</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Learn • Plan • <span className="text-primary">Enjoy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're a first-time traveler or a seasoned explorer, there's always something new to learn.
              Our guides and tips will help you prepare for the adventure of a lifetime.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Learn Column */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Learn</h3>
                <Link to="/learn">
                  <Button variant="ghost" size="sm" className="group">
                    View All
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {learnArticles.map((article) => {
                  const Icon = article.icon;
                  const getSlug = (title: string) => {
                    switch (title) {
                      case "First-time Europe traveller? Start here":
                        return "/learn/first-time-europe-traveler";
                      case "Visa documents checklist":
                        return "/learn/visa-documents-checklist";
                      case "Travel insurance explained":
                        return "/learn/travel-insurance-explained";
                      default:
                        return "/learn";
                    }
                  };

                  return (
                    <Link key={article.id} to={getSlug(article.title)}>
                      <Card
                        className="group p-6 hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer rounded-2xl"
                      >
                        <div className="flex gap-4">
                          <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                {article.category}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {article.readTime}
                              </span>
                            </div>
                            <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                              {article.title}
                            </h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {article.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 self-center" />
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Lifestyle Column */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Lifestyle</h3>
                <Link to="/lifestyle">
                  <Button variant="ghost" size="sm" className="group">
                    View All
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {lifestyleArticles.map((article) => {
                  const Icon = article.icon;
                  const getSlug = (title: string) => {
                    switch (title) {
                      case "5 veg-friendly dishes in Europe":
                        return "/lifestyle/veg-friendly-dishes-europe";
                      case "Fun group games for buses":
                        return "/lifestyle/fun-group-games-buses";
                      case "Packing light for 10-day tours":
                        return "/lifestyle/packing-light-10-day-tours";
                      default:
                        return "/lifestyle";
                    }
                  };

                  return (
                    <Link key={article.id} to={getSlug(article.title)}>
                      <Card
                        className="group p-6 hover:border-accent transition-all duration-300 hover:shadow-lg cursor-pointer rounded-2xl"
                      >
                        <div className="flex gap-4">
                          <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/20 text-foreground">
                                {article.category}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {article.readTime}
                              </span>
                            </div>
                            <h4 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors line-clamp-1">
                              {article.title}
                            </h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {article.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 self-center" />
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
