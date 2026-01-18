import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera,
  Utensils,
  ShoppingBag,
  Heart,
  Coffee,
  Sparkles,
  TrendingUp,
  Clock,
  Gamepad2,
  Backpack
} from "lucide-react";
import { Link } from "react-router-dom";

const Lifestyle = () => {
  const featuredStories = [
    {
      id: 1,
      title: "How Travel Changed My Life",
      subtitle: "A personal journey of self-discovery through group tours",
      category: "Personal Growth",
      readTime: "8 min read",
      image: "/placeholder.svg",
      author: "Priya Sharma",
      tags: ["Inspiration", "Personal Story"],
    },
    {
      id: 2,
      title: "Making Friends Over 50: Group Travel Magic",
      subtitle: "Finding lifelong friendships in unexpected places",
      category: "Community",
      readTime: "6 min read",
      image: "/placeholder.svg",
      author: "Ramesh Patel",
      tags: ["Seniors", "Friendship"],
    },
    {
      id: 3,
      title: "Balancing Work and Wanderlust",
      subtitle: "How I take 4 international trips every year",
      category: "Travel Tips",
      readTime: "5 min read",
      image: "/placeholder.svg",
      author: "Anjali Desai",
      tags: ["Career", "Planning"],
    },
  ];

  const lifestyleCategories = [
    {
      icon: Utensils,
      title: "Food & Culture",
      description: "Culinary adventures and local food experiences from around the world",
      articleCount: 12,
      color: "text-orange-500",
    },
    {
      icon: ShoppingBag,
      title: "Shopping Stories",
      description: "Best shopping destinations, local markets, and unique souvenirs",
      articleCount: 8,
      color: "text-purple-500",
    },
    {
      icon: Camera,
      title: "Photography Tips",
      description: "Capture your travel memories like a pro with these simple tips",
      articleCount: 15,
      color: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Wellness Travel",
      description: "Staying healthy and refreshed while exploring new destinations",
      articleCount: 10,
      color: "text-pink-500",
    },
    {
      icon: Coffee,
      title: "Travel Rituals",
      description: "Daily routines and habits that make traveling more enjoyable",
      articleCount: 7,
      color: "text-amber-500",
    },
    {
      icon: Sparkles,
      title: "Special Moments",
      description: "Celebrating birthdays, anniversaries, and special occasions on tour",
      articleCount: 9,
      color: "text-cyan-500",
    },
  ];

  const recentArticles = [
    {
      title: "5 veg-friendly dishes in Europe",
      description: "Delicious vegetarian options across European countries that will delight your taste buds",
      category: "Food",
      readTime: "4 min read",
      trending: true,
    },
    {
      title: "Fun group games for buses",
      description: "Keep the group entertained during long bus journeys with these engaging activities",
      category: "Fun",
      readTime: "3 min read",
      trending: false,
    },
    {
      title: "Packing light for 10-day tours",
      description: "Master the art of packing efficiently for extended trips without the extra baggage",
      category: "Tips",
      readTime: "7 min read",
      trending: true,
    },
    {
      title: "The Art of Slow Travel: Savoring Every Moment",
      description: "Why taking your time leads to richer travel experiences",
      category: "Philosophy",
      readTime: "7 min read",
      trending: true,
    },
    {
      title: "Local Food Markets: A Sensory Journey",
      description: "Discovering authentic flavors at bustling markets around the world",
      category: "Food",
      readTime: "5 min read",
      trending: false,
    },
    {
      title: "Sunrise Photography: Chasing Golden Hours",
      description: "Tips for capturing breathtaking dawn moments during your travels",
      category: "Photography",
      readTime: "6 min read",
      trending: true,
    },
    {
      title: "Travel Journaling: Preserve Your Memories",
      description: "Creative ways to document your journey beyond photos",
      category: "Personal Growth",
      readTime: "4 min read",
      trending: false,
    },
    {
      title: "Meeting Locals: The Heart of Travel",
      description: "How genuine connections transform ordinary trips into extraordinary experiences",
      category: "Community",
      readTime: "6 min read",
      trending: true,
    },
    {
      title: "Mindful Travel: Being Present on Your Journey",
      description: "Practicing mindfulness while exploring new places",
      category: "Wellness",
      readTime: "5 min read",
      trending: false,
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
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Lifestyle & Stories</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Travel & Lifestyle
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover inspiring stories, practical tips, and cultural insights that make travel more meaningful. 
                From food adventures to wellness practices, explore the lifestyle of passionate travelers.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
              {featuredStories.map((story) => (
                <Card
                  key={story.id}
                  className="overflow-hidden border-border hover:border-primary transition-all hover:shadow-lg cursor-pointer group"
                >
                  <div className="relative h-48 bg-secondary/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-primary text-primary-foreground">
                        {story.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{story.subtitle}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">by {story.author}</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{story.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle Categories */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Explore Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {lifestyleCategories.map((category) => (
                <Card
                  key={category.title}
                  className="p-6 border-border hover:border-primary transition-all hover:shadow-lg cursor-pointer group"
                >
                  <div className={`${category.color} mb-4`}>
                    <category.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.articleCount} articles
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Explore →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recent Articles</h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
              {recentArticles.map((article, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-border hover:border-primary transition-all hover:shadow-lg cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary">{article.category}</Badge>
                    {article.trending && (
                      <div className="flex items-center gap-1 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-medium">Trending</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{article.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Inspired Weekly
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Subscribe to receive travel stories, lifestyle tips, and exclusive insights delivered to your inbox.
            </p>
            <Button size="lg">Subscribe to Newsletter</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lifestyle;
