import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, Compass, FileText, Utensils, Gamepad2, Backpack } from "lucide-react";

export const LearnLifestyle = () => {
  const learnArticles = [
    {
      id: 1,
      title: "First-time Europe traveller? Start here",
      description: "Everything you need to know before your first European adventure.",
      icon: Compass,
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Visa documents checklist",
      description: "Complete checklist for visa applications and required documents.",
      icon: FileText,
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Travel insurance explained",
      description: "Understanding travel insurance and why it matters.",
      icon: BookOpen,
      readTime: "6 min read",
    },
  ];

  const lifestyleArticles = [
    {
      id: 1,
      title: "5 veg-friendly dishes to try in Europe",
      description: "Delicious vegetarian options across European countries.",
      icon: Utensils,
      readTime: "4 min read",
    },
    {
      id: 2,
      title: "Fun group games for buses",
      description: "Keep the group entertained during long bus journeys.",
      icon: Gamepad2,
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "Packing light for 10-day tours",
      description: "Master the art of packing efficiently for extended trips.",
      icon: Backpack,
      readTime: "7 min read",
    },
  ];

  return (
    <section className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Learn • Plan • Enjoy the Travel Lifestyle
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, guides, and lifestyle content to enhance your travel experience.
          </p>
        </div>

        <Tabs defaultValue="learn" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="learn" className="text-base">
              Learn
            </TabsTrigger>
            <TabsTrigger value="lifestyle" className="text-base">
              Lifestyle
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learnArticles.map((article) => {
                const Icon = article.icon;
                return (
                  <Card
                    key={article.id}
                    className="group p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Learning Resources
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="lifestyle" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lifestyleArticles.map((article) => {
                const Icon = article.icon;
                return (
                  <Card
                    key={article.id}
                    className="group p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                      <span className="text-sm text-accent font-medium group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Lifestyle Content
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
