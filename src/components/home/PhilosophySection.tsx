import { ArrowRight, Award, Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Ashoksir from "@/assets/Ashok Sir.jpg";
import Nishitamaam from "@/assets/Nishita Maam.jpg";

const visionaries = [
  {
    name: "Mrs. Nishitta Ghaatge",
    role: "Dubai, Singapore, Japan & Europe Specialist",
    image: Nishitamaam,
    summary:
      "Known for thoughtful planning and warm guest care, she helps families travel with confidence, comfort, and curiosity.",
    philosophy:
      "I plan every day so travellers can relax, explore confidently, and return with stories they actually remember.",
    highlights: ["18+ years in travel", "Luxury and culture-led tours", "Family-friendly planning"],
  },
  {
    name: "Mr. Ashok Malik",
    role: "Australia, New Zealand, Europe & Canada Expert",
    image: Ashoksir,
    summary:
      "With deep destination knowledge and a calm operational style, he turns long-haul group journeys into seamless experiences.",
    philosophy:
      "My role is to handle the details with care, so travellers can focus fully on the experience.",
    highlights: ["100+ Europe visits", "Long-haul group tour expert", "Trusted operations leadership"],
  },
];

export const PhilosophySection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-highlight/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                <Compass className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Leadership</span>
              </div>

              <h2 className="mb-6 text-4xl font-heading font-bold text-foreground md:text-5xl">
                Meet The <span className="text-highlight">Visionaries</span>
              </h2>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The people behind Sun Tourism bring experience, care, and destination insight
                to every journey we design for our travellers.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {visionaries.map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[32px] border border-border/30 bg-card/70 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur-md">
                      <Award className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-white">Sun Tourism Leadership</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary md:text-base">
                      {leader.role}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                      {leader.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {leader.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground md:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <blockquote className="mt-6 rounded-2xl border border-border/30 bg-background/70 p-4 text-sm italic leading-6 text-foreground md:text-base">
                      "{leader.philosophy}"
                    </blockquote>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 rounded-[28px] border border-border/30 bg-card/45 px-6 py-6 backdrop-blur-sm sm:px-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-highlight/10 px-3 py-1.5">
                <Sparkles className="h-4 w-4 text-highlight" />
                <span className="text-sm font-medium text-highlight">Our Story Continues</span>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Discover the full Sun Tourism story, the values behind our journeys, and the
                leadership philosophy that shapes every tour we create.
              </p>
              <Button asChild variant="outline" className="rounded-full px-6 group">
                <Link to="/about">
                  Explore Our Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
