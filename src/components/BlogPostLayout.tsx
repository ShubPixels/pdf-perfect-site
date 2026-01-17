import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostLayoutProps {
  title: string;
  subtitle?: string;
  category: string;
  readTime: string;
  publishedDate?: string;
  author?: string;
  children: React.ReactNode;
  relatedArticles?: Array<{
    title: string;
    category: string;
    readTime: string;
    slug: string;
  }>;
}

export const BlogPostLayout = ({
  title,
  subtitle,
  category,
  readTime,
  publishedDate,
  author = "Sun Tourism Team",
  children,
  relatedArticles = []
}: BlogPostLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/learn" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4 md:mb-6 group text-sm md:text-base">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Learn
              </Link>

              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Badge variant="secondary" className="text-xs">
                  {category}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  {subtitle}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-primary">
                      {author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{author}</p>
                    {publishedDate && (
                      <p className="text-sm text-muted-foreground">{publishedDate}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
                {children}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-8 md:py-12 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {relatedArticles.map((article) => (
                    <Card key={article.slug} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2 hover:text-primary cursor-pointer text-sm md:text-base">
                        {article.title}
                      </h4>
                      <Link to={article.slug}>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80 text-sm">
                          Read More →
                        </Button>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};