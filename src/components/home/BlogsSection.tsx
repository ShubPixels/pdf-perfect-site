import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    slug: "/lifestyle/veg-friendly-dishes-europe",
  },
  {
    title: "Packing Light for 10-Day Tours",
    description: "Master the art of packing efficiently for extended trips",
    category: "Tips",
    readTime: "7 min read",
    slug: "/lifestyle/packing-light-10-day-tours",
  },
];

export const BlogsSection = () => {
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Travel Knowledge</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              From Our <span className="text-highlight">Blog</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tips, guides, and stories to help you prepare for your next adventure
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Featured Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to={featuredBlog.slug} className="block group">
                <div className="relative h-full bg-gradient-to-br from-primary/10 via-card to-highlight/10 rounded-3xl p-8 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cta/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        {featuredBlog.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {featuredBlog.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredBlog.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {featuredBlog.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Other Blogs Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {otherBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={blog.slug} className="block group h-full">
                    <div className="h-full bg-card/60 backdrop-blur-sm rounded-2xl p-5 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                          {blog.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {blog.readTime}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
                        {blog.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full font-medium transition-all duration-300 hover:gap-3"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
