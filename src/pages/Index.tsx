import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { Destinations } from "@/components/home/Destinations";
import { Community } from "@/components/home/Community";
import { LearnLifestyle } from "@/components/home/LearnLifestyle";
import { BlogsSection } from "@/components/home/BlogsSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { Quote, Heart, Plane, Feather, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/homepage/1.png";
import img2 from "../assets/homepage/2.png";
import img3 from "../assets/homepage/3.png";
import img4 from "../assets/homepage/4.png";

const Index = () => {
  const featuredStory = useScrollReveal();
  const communitySection = useScrollReveal();
  const pullQuote = useScrollReveal();
  const departuresSection = useScrollReveal();
  const reviewsSection = useScrollReveal();
  const learnSection = useScrollReveal();
  const blogsSection = useScrollReveal();
  const philosophySection = useScrollReveal();
  const shareStory = useScrollReveal();
  const destinationsSection = useScrollReveal();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle page-level texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <Navigation />

      <main className="relative z-10">
        {/* 1. Hero — Journal Cover */}
        <Hero />

        {/* 2. Featured Story — Editorial Image Essay */}
        <div
          id="featured-story"
          ref={featuredStory.ref}
          className={`transition-all duration-1000 ${
            featuredStory.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <section className="py-24 sm:py-32 md:py-40">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                {/* Editorial label */}
                <div className="mb-10 sm:mb-14">
                  <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">Featured</span>
                  <div className="w-12 h-px bg-accent mt-3" />
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  {/* Image grid */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                          <img src={img1} alt="Travel moment" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                          <img src={img2} alt="Travel moment" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </div>
                      <div className="space-y-3 sm:space-y-4 pt-8">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                          <img src={img3} alt="Travel moment" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                          <img src={img4} alt="Travel moment" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground leading-tight mb-6">
                      Where Will Your Story{" "}
                      <span className="text-accent">Begin?</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                      Every destination has its own story to tell. From the bustling streets of Tokyo to the 
                      romantic canals of Venice, from the modern marvels of Dubai to the tranquil beaches of Bali — 
                      each journey is a chapter in a story that only you can write.
                    </p>
                    <Link
                      to="/community"
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300"
                    >
                      <span>Browse travel stories</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 3. Community Memories — Travel Stories */}
        <div
          ref={communitySection.ref}
          className={`transition-all duration-1000 ${
            communitySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Community />
        </div>

        {/* 4. Pull Quote — Typographic Moment */}
        <div
          ref={pullQuote.ref}
          className={`transition-all duration-1000 ${
            pullQuote.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <section className="py-20 sm:py-28 md:py-36">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent/40 mx-auto mb-8" />
                  <blockquote className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground leading-snug mb-8">
                    "We planned a personalised Bali tour and Sun Tourism helped us plan and execute exactly as we wanted. 
                    Once the tour is planned, you just sit back, relax, and enjoy."
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-accent">MP</span>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">Mandar Patil</p>
                      <p className="text-xs text-muted-foreground">Bali, 2024</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* 5. Upcoming Departures — "What's Coming" */}
        <div
          ref={departuresSection.ref}
          className={`transition-all duration-1000 ${
            departuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <UpcomingDepartures />
        </div>

        {/* 6. Reviews — Voices from the Road */}
        <div
          ref={reviewsSection.ref}
          className={`transition-all duration-1000 ${
            reviewsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                {/* Editorial header */}
                <div className="mb-14 sm:mb-20">
                  <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">Voices</span>
                  <div className="w-12 h-px bg-accent mt-3 mb-6" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground">
                    From the <span className="text-accent">Road</span>
                  </h2>
                </div>

                {/* Testimonials — editorial grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {[
                    {
                      quote: "Best tour experience ever! The Ghar Se Ghar Tak service is absolutely amazing. No stress from start to end. Highly recommended for families!",
                      name: "Suresh Joshi",
                      trip: "Dubai · December 2024",
                      initials: "SJ",
                    },
                    {
                      quote: "Tour managers didn't just show us places, they taught us how to travel smart. Now I feel confident exploring on my own too!",
                      name: "Rajesh Kulkarni",
                      trip: "Europe · August 2024",
                      initials: "RK",
                    },
                    {
                      quote: "As senior citizens, we were worried about long tours. But Sun Tourism made our Kerala trip so comfortable. Everything was taken care of!",
                      name: "Prakash & Deepa",
                      trip: "Kerala · January 2025",
                      initials: "PD",
                    },
                    {
                      quote: "Singapore Malaysia trip with free Sri Lanka was unbelievable value! Three countries, zero hassle. Will definitely book again!",
                      name: "Amit Mehta",
                      trip: "Singapore Malaysia · 2024",
                      initials: "AM",
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="border-l-2 border-accent/20 pl-6 sm:pl-8">
                        <p className="text-foreground leading-relaxed mb-6 text-base sm:text-lg">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                            <span className="text-xs font-bold text-foreground">{testimonial.initials}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.trip}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Subtle stats — demoted */}
                <div className="mt-16 pt-12 border-t border-border/50">
                  <div className="flex flex-wrap justify-center gap-10 sm:gap-16 text-center">
                    {[
                      { value: "75k+", label: "Travelers" },
                      { value: "18+", label: "Years" },
                      { value: "25+", label: "Destinations" },
                      { value: "4.7", label: "Google Rating" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl sm:text-3xl font-heading text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 7. Learn & Lifestyle — clearly visible */}
        <div
          ref={learnSection.ref}
          className={`transition-all duration-1000 ${
            learnSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <LearnLifestyle />
        </div>

        {/* 8. From the Blog */}
        <div
          ref={blogsSection.ref}
          className={`transition-all duration-1000 ${
            blogsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <BlogsSection />
        </div>

        {/* 9. Destinations — visually demoted, simplified */}
        <div
          ref={destinationsSection.ref}
          className={`transition-all duration-1000 ${
            destinationsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Destinations />
        </div>

        {/* 10. Philosophy */}
        <div
          ref={philosophySection.ref}
          className={`transition-all duration-1000 ${
            philosophySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <PhilosophySection />
        </div>

        {/* 11. Share Your Story — Soft editorial CTA */}
        <div
          ref={shareStory.ref}
          className={`transition-all duration-1000 ${
            shareStory.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <section className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Feather className="w-8 h-8 text-accent/50 mx-auto mb-8" />
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6 leading-tight">
                    Every Journey Deserves{" "}
                    <span className="text-accent">To Be Told</span>
                  </h2>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
                    Travelled with Sun Tourism? Your story, your photos, your reflections — 
                    they inspire the next traveler. Share what moved you.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.link/97984j"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                    >
                      Share your story
                    </a>
                    <a
                      href="https://suntourismpune.co.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full text-foreground font-medium hover:bg-secondary transition-all duration-300"
                    >
                      <span>Plan your next journey</span>
                      <Plane className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs text-muted-foreground mt-6">
                    Visit suntourismpune.co.in for tour bookings & itineraries
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
