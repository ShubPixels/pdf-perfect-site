import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { LearnLifestyle } from "@/components/home/LearnLifestyle";
import { BlogsSection } from "@/components/home/BlogsSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { Community } from "@/components/home/Community";
import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";

const Index = () => {
  const community = useScrollReveal();
  const reviews = useScrollReveal();
  const philosophy = useScrollReveal();
  const learnLifestyle = useScrollReveal();
  const bridge = useScrollReveal();
  const departures = useScrollReveal();
  const blogs = useScrollReveal();

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 via-background to-primary/10 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <Navigation />

      <main className="relative z-10">
        <Hero />

        <div
          ref={community.ref}
          className={`transition-all duration-1000 ${
            community.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Community />
        </div>

        <div
          ref={reviews.ref}
          className={`relative py-24 transition-all duration-1000 ${
            reviews.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight/20 to-cta/20 rounded-full blur-xl" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-full px-6 py-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      100K+ Happy Travellers
                    </span>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  But Don&apos;t Just Take Our{" "}
                  <span className="text-highlight">Word For It</span>
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Real stories from real travelers. These memories were made
                  with Sun Touriism.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cta/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-highlight/10 rounded-full blur-xl" />
                  <div className="relative">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-5 h-5 text-accent fill-current"
                        />
                      ))}
                    </div>

                    <Quote className="h-10 w-10 text-highlight/30 mb-4" />

                    <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                      "We planned a personalized Bali tour and Sun Touriism
                      helped us plan and execute exactly as we wanted. Once the
                      tour was planned, Sun Tour gave us the experience of
                      sitting back, relaxing, and enjoying. Very clear
                      communication and very good execution."
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-highlight to-cta p-0.5">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <span className="text-xl font-bold text-highlight">
                            MP
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground">
                          Mandar Patil
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Bali Customized Tour - 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 text-accent fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">
                      "Best tour experience ever. The Ghar Se Ghar Tak service
                      is absolutely amazing. No stress from start to end. Highly
                      recommended for families."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">SJ</span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Suresh Joshi
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Dubai Tour - Dec 2024
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 text-accent fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">
                      "Tour managers did not just show us places, they taught us
                      how to travel smart. Now I feel confident exploring on my
                      own too."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                      <span className="font-bold text-highlight text-sm">
                        RK
                      </span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Rajesh Kulkarni
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Europe Tour - Aug 2024
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 text-accent fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">
                      "As senior citizens, we were worried about long tours, but
                      Sun Touriism made our Kerala trip so comfortable.
                      Everything was taken care of."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
                      <span className="font-bold text-cta text-sm">PD</span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Prakash & Deepa
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Kerala Tour - Jan 2025
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 text-accent fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">
                      "Singapore Malaysia with a free Sri Lanka add-on felt like
                      unbelievable value. Three countries, zero hassle. We will
                      definitely book again."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">AM</span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Amit Mehta
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Singapore Malaysia - 2024
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-highlight mb-1">
                    100K+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Happy Travellers
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                    18+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    30+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Countries / Destinations
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-highlight mb-1">
                    4.7
                  </p>
                  <p className="text-sm text-muted-foreground">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={philosophy.ref}
          className={`transition-all duration-1000 ${
            philosophy.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <PhilosophySection />
        </div>

        <div
          ref={learnLifestyle.ref}
          className={`transition-all duration-1000 ${
            learnLifestyle.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <LearnLifestyle />
        </div>

        <div
          ref={bridge.ref}
          className={`relative py-16 transition-all duration-1000 ${
            bridge.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-3xl p-10 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-highlight rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-highlight rounded-br-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    And Soon, It Could Be{" "}
                    <span className="text-highlight">You</span>
                  </h3>

                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Your next adventure is closer than you think. Take a look at
                    what&apos;s coming up.
                  </p>

                  <div className="flex justify-center gap-2 mt-6">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 rounded-full bg-accent animate-pulse"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={departures.ref}
          className={`transition-all duration-1000 ${
            departures.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <UpcomingDepartures />
        </div>

        <div
          ref={blogs.ref}
          className={`transition-all duration-1000 ${
            blogs.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <BlogsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
