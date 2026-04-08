import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const blogs = [
  {
    title: "First-time Europe traveller? Start here",
    description: "Everything you need to know before your first European adventure",
    category: "Guide",
    readTime: "8 min read",
    slug: "/learn/first-time-europe-traveler",
    featured: true,
  },
  {
    title: "Visa Documents Checklist",
    description: "Complete list of documents needed for international travel",
    category: "Checklist",
    readTime: "5 min read",
    slug: "/learn/visa-documents-checklist",
  },
  {
    title: "Travel Insurance Explained",
    description: "Understanding coverage and choosing the right policy",
    category: "Learn",
    readTime: "6 min read",
    slug: "/learn/travel-insurance-explained",
  },
  {
    title: "5 Veg-Friendly Dishes in Europe",
    description: "Delicious vegetarian options across European countries",
    category: "Food",
    readTime: "4 min read",
    slug: "/learn/veg-friendly-dishes-europe",
  },
  {
    title: "Packing Light for 10-Day Tours",
    description: "Master the art of packing efficiently for extended trips",
    category: "Tips",
    readTime: "7 min read",
    slug: "/learn/packing-light-10-day-tours",
  },
];

export const BlogsSection = () => {
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-highlight/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-highlight/10 px-4 py-2">
              <BookOpen className="h-4 w-4 text-highlight" />
              <span className="text-sm font-medium text-highlight">Editorial Picks</span>
            </div>

            <h2 className="mb-6 text-4xl font-heading font-bold text-foreground md:text-5xl">
              From Our <span className="text-accent">Blog</span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Useful reads, planning ideas, and practical travel notes that feel aligned with
              the journeys Sun Tourism guests actually take.
            </p>
          </div>

          <div className="rounded-[36px] border border-border/30 bg-card/45 p-6 backdrop-blur-sm md:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={featuredBlog.slug} className="block group h-full">
                  <div className="relative h-full overflow-hidden rounded-[32px] border border-border/30 bg-gradient-to-br from-card via-card/95 to-highlight/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl md:p-8">
                    <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                    <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-highlight/10 blur-2xl" />

                    <div className="relative flex h-full flex-col">
                      <div className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight">
                          Featured Read
                        </span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {featuredBlog.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {featuredBlog.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                        {featuredBlog.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                        {featuredBlog.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {otherBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Link to={blog.slug} className="block group h-full">
                      <Card className="h-full rounded-[28px] border-border/30 bg-background/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md md:p-6">
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                            {blog.category}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {blog.readTime}
                          </span>
                        </div>

                        <h4 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                          {blog.title}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {blog.description}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                          Open article
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-[28px] border border-border/30 bg-background/65 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Keep Reading</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  Explore more helpful reads, planning guides, and travel-life articles across
                  the site.
                </p>
              </div>

              <Button asChild variant="outline" className="rounded-full px-6 group self-start sm:self-center">
                <Link to="/learn">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
