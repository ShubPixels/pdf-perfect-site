import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Users, Globe, Award, Linkedin, Mail } from "lucide-react";

const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal();
  const { ref: leadersRef, isVisible: leadersVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();

  const leaders = [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "With over 15 years of experience in curating luxury travel experiences, Arjun founded Traveo with a vision to transform how people explore the world. His passion for authentic cultural immersion has led thousands of travelers to discover hidden gems across continents.",
      quote: "Travel is not about the destination, it's about the transformation.",
      linkedin: "#",
      email: "arjun@traveo.com"
    },
    {
      name: "Priya Sharma",
      role: "Chief Experience Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      bio: "Priya brings her expertise in hospitality and her love for adventure to craft unforgettable journeys. Having traveled to over 80 countries, she ensures every Traveo experience exceeds expectations and creates lasting memories.",
      quote: "Every journey should leave you richer in stories and experiences.",
      linkedin: "#",
      email: "priya@traveo.com"
    }
  ];

  const values = [
    { icon: Globe, title: "Global Reach", desc: "Curated experiences across 50+ destinations worldwide" },
    { icon: Users, title: "Community First", desc: "Building connections that last beyond the journey" },
    { icon: Award, title: "Excellence", desc: "Award-winning service recognized globally" },
    { icon: MapPin, title: "Local Expertise", desc: "Deep partnerships with local guides and experts" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Page-level gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-highlight/5 to-cta/10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cta/15 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-highlight/5 rounded-full blur-2xl" />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-highlight/10 text-highlight rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Crafting <span className="text-highlight">Unforgettable</span>
              <br />Journeys Since 2015
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What began as a passion project has evolved into one of the most trusted 
              travel communities, connecting adventurers with extraordinary experiences 
              across the globe.
            </p>
          </motion.div>

          {/* Animated stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { number: "50+", label: "Destinations" },
              { number: "10K+", label: "Happy Travelers" },
              { number: "500+", label: "Tours Completed" },
              { number: "9", label: "Years of Excellence" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-highlight">{stat.number}</div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div 
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-highlight/20 to-cta/20 rounded-3xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=500&fit=crop"
                alt="Travel adventure"
                className="relative rounded-3xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-cta text-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">2015</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-highlight">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe travel should be transformative, not transactional. Every journey 
                we craft is designed to create meaningful connections—with places, cultures, 
                and fellow travelers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our curated experiences go beyond sightseeing. We immerse you in local traditions, 
                introduce you to hidden gems, and build a community of like-minded explorers 
                who share your wanderlust.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Authentic Experiences", "Local Connections", "Sustainable Travel"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-highlight/10 text-highlight rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section ref={leadersRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            leadersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <span className="inline-block px-4 py-2 bg-cta/20 text-foreground rounded-full text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Meet The <span className="text-highlight">Visionaries</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <div 
                key={leader.name}
                className={`group relative transition-all duration-1000 delay-${index * 200} ${
                  leadersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-highlight/30 to-cta/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full">
                  {/* Quote mark */}
                  <div className="absolute top-6 right-8 text-8xl text-highlight/10 font-serif leading-none">
                    "
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <div className="relative">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-highlight/20">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cta rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">{leader.name}</h3>
                      <p className="text-highlight font-medium">{leader.role}</p>
                      <div className="flex gap-3 mt-3">
                        <a href={leader.linkedin} className="text-muted-foreground hover:text-highlight transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${leader.email}`} className="text-muted-foreground hover:text-highlight transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  <blockquote className="italic text-foreground border-l-4 border-cta pl-4">
                    "{leader.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              What Drives <span className="text-highlight">Us</span>
            </h2>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${
            valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center hover:border-highlight/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-highlight/10 rounded-2xl flex items-center justify-center group-hover:bg-highlight/20 transition-colors">
                  <value.icon className="w-8 h-8 text-highlight" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-r from-highlight to-highlight/80 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/4 translate-y-1/4" />
            </div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of travelers who have discovered the world with us.
              </p>
              <a 
                href="/explore" 
                className="inline-block bg-cta text-foreground font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Our Tours
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;