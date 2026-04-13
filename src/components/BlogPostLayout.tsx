import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Share2, Calendar, User, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const handleShare = async () => {
    if (typeof window === "undefined") {
      return;
    }

    const pageUrl = window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(pageUrl);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = pageUrl;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      toast.success("Page link copied to clipboard");
    } catch (error) {
      toast.error("Couldn't copy the link. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-12 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link 
                  to="/learn" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 group text-sm font-medium bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 hover:border-primary/30 transition-all"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Learn
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <Badge className="bg-primary/10 text-primary border-0 px-4 py-1.5 text-sm font-medium">
                  {category}
                </Badge>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
                {publishedDate && (
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {publishedDate}
                  </span>
                )}
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight font-heading"
              >
                {title}
              </motion.h1>

              {subtitle && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                >
                  {subtitle}
                </motion.p>
              )}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-highlight p-0.5">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{author}</p>
                    <p className="text-sm text-muted-foreground">Travel Expert</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full gap-2"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Content Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 md:py-12"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl">
                <div className="prose prose-lg max-w-none 
                  prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border/30
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-foreground/80 prose-p:leading-relaxed
                  prose-li:text-foreground/80
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                ">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-highlight" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground font-heading">
                    Continue Reading
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((article, index) => (
                    <motion.div
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link to={article.slug} className="block group">
                        <Card className="p-6 h-full bg-card/60 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {article.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h4 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-lg leading-snug">
                            {article.title}
                          </h4>
                          <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                            Read Article <ArrowRight className="w-4 h-4" />
                          </span>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 via-highlight/10 to-cta/10 rounded-3xl p-8 md:p-12 text-center border border-border/30">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Explore our curated tour packages and let us handle all the planning for your next adventure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/explore">
                    <Button className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90">
                      Explore Destinations
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
