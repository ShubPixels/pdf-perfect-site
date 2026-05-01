import { Suspense, lazy } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { HomeVisitorCapsule } from "@/components/home/HomeVisitorCapsule";
import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import { DeferredSection } from "@/components/DeferredSection";

const Community = lazy(() =>
  import("@/components/home/Community").then((module) => ({
    default: module.Community,
  })),
);
const UpcomingDepartures = lazy(() =>
  import("@/components/home/UpcomingDepartures").then((module) => ({
    default: module.UpcomingDepartures,
  })),
);
const LearnLifestyle = lazy(() =>
  import("@/components/home/LearnLifestyle").then((module) => ({
    default: module.LearnLifestyle,
  })),
);
const PhilosophySection = lazy(() =>
  import("@/components/home/PhilosophySection").then((module) => ({
    default: module.PhilosophySection,
  })),
);

const HomeSectionFallback = ({ minHeight }: { minHeight: number }) => (
  <div
    className="container mx-auto px-4"
    style={{ minHeight: `${minHeight}px` }}
  >
    <div className="h-full min-h-full rounded-[2rem] border border-border/40 bg-secondary/30" />
  </div>
);

const Index = () => {
  const community = useScrollReveal();
  const reviews = useScrollReveal();
  const philosophy = useScrollReveal();
  const learnLifestyle = useScrollReveal();
  const bridge = useScrollReveal();
  const departures = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <HomeVisitorCapsule />
        <Hero />

        <div
          ref={community.ref}
          className={`transition-all duration-1000 ${
            community.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <DeferredSection
            minHeight={720}
            fallback={<HomeSectionFallback minHeight={720} />}
          >
            <Suspense fallback={<HomeSectionFallback minHeight={720} />}>
              <Community />
            </Suspense>
          </DeferredSection>
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
                  <div className="relative rounded-full border border-border/30 bg-card/55 px-6 py-3 backdrop-blur-sm">
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
                  with Sun Tourism.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-8 relative overflow-hidden shadow-xl"
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
                      "I had an excellent experience with Sun Tourism
                      International Pvt. Ltd. during my Dubai trip. The entire
                      tour was very well planned, smooth, and stress-free from
                      start to finish. All arrangements - hotels, sightseeing,
                      transportation, and scheduling - were well organized and
                      delivered exactly as promised."
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-highlight to-cta p-0.5">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <span className="text-xl font-bold text-highlight">
                            MG
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground">
                          Madhavi Gaikwad
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Dubai Trip - Google Review, 3 months ago
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between shadow-xl"
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
                      "Had made a trip plan to Bali at the last moment to
                      surprise my wife and did not get disappointed at all. The
                      team was really helpful, explained everything in detail,
                      and updated every day's plan."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">OS</span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Omkar Satav
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Bali Trip - Google Review, 6 months ago
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between shadow-xl"
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
                      "We have now engaged Sun Tourism twice in the last 12
                      months for our Rotary Club group tours to Baku and Oman.
                      Both destinations were offbeat, yet the team planned and
                      executed both trips to perfection."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                      <span className="font-bold text-highlight text-sm">
                        JY
                      </span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Jayant Yewale
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Baku & Oman Group Tours - Google Review, 6 months ago
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between shadow-xl"
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
                      "The Sri Lanka, Malaysia, Singapore trip was well managed
                      and well organised. Each place and guide was knowledgeable,
                      local guides were provided, and senior citizens were
                      attended personally."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
                      <span className="font-bold text-cta text-sm">VK</span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Vishakha Kulkarni
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sri Lanka Malaysia Singapore - Google Review, 3 months ago
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-6 flex flex-col justify-between shadow-xl"
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
                      "Had a wonderful trip to Singapore and Malaysia with Sun
                      Tourism. Everything was perfectly planned and
                      well-coordinated - from travel to stay and sightseeing.
                      Truly a memorable and hassle-free holiday."
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">SN</span>
                    </div>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Sajitha Nair
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Singapore Malaysia - Google Review, 5 months ago
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center shadow-xl">
                  <p className="text-3xl md:text-4xl font-bold text-highlight mb-1">
                    100K+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Happy Travellers
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center shadow-xl">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                    18+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center shadow-xl">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    30+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Countries / Destinations
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center shadow-xl">
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
          <DeferredSection
            minHeight={460}
            fallback={<HomeSectionFallback minHeight={460} />}
          >
            <Suspense fallback={<HomeSectionFallback minHeight={460} />}>
              <PhilosophySection />
            </Suspense>
          </DeferredSection>
        </div>

        <div
          ref={learnLifestyle.ref}
          className={`transition-all duration-1000 ${
            learnLifestyle.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <DeferredSection
            minHeight={680}
            fallback={<HomeSectionFallback minHeight={680} />}
          >
            <Suspense fallback={<HomeSectionFallback minHeight={680} />}>
              <LearnLifestyle />
            </Suspense>
          </DeferredSection>
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
          <DeferredSection
            minHeight={820}
            fallback={<HomeSectionFallback minHeight={820} />}
          >
            <Suspense fallback={<HomeSectionFallback minHeight={820} />}>
              <UpcomingDepartures />
            </Suspense>
          </DeferredSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
