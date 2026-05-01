import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Ashoksir from "@/assets/about/Ashok Sir.jpg";
import Nishitamaam from "@/assets/about/Nishita Maam.jpg";
import SunTeam from "@/assets/about/sun team.png";
import { MapPin, Users, Globe, Award, Linkedin, Mail, Briefcase, GraduationCap, Heart, Quote, Star, Calendar, Plane } from "lucide-react";

const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal();
  const { ref: leadersRef, isVisible: leadersVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();

  const leaders = [
    {
      name: "Mrs. Nishitta Ghaatge",
      role: "Specialist for Dubai, Singapore, Japan & Europe Tours",
      img: Nishitamaam,
      bio: "A travel expert who has led thousands of travelers on memorable tours across Dubai, Singapore, Japan, and Europe. Her practical knowledge comes from years of exploring these destinations personally, making her guidance both insightful and real. From Dubai’s luxury malls to its lively street shopping, and the vibrant spirit of Global Village, she knows exactly where travelers find the best experiences. Having visited Japan in every season, she can tell you which park blooms with the most beautiful cherry blossoms or where autumn colors are most magical.",
      thoughts:"Real travel isn’t rushed - it’s felt. I plan every day so you can relax, explore confidently, and return with stories you’ll actually remember.",
      career: [
        { year: "1995", milestone: "Started career in hospitality industry", icon: Briefcase },
        { year: "2002", milestone: "Completed Tourism Management certification", icon: GraduationCap },
        { year: "2007", milestone: "Founded Sun Tourism with 'Ghar Se Ghar Tak' vision", icon: Star },
        { year: "2015", milestone: "Expanded to 25+ international destinations", icon: Globe },
        { year: "2020", milestone: "Pioneered group travel model for senior citizens", icon: Heart },
        { year: "2024", milestone: "Crossed 10,000+ happy travelers milestone", icon: Users }
      ],
      linkedin: "#",
      email: "sunil@suntourismpune.com"
    },
    {
      name: "Mr. Ashok Malik",
      role: "Expert in Australia, New Zealand, Europe, Canada & Rajasthan Tours",
      img: Ashoksir,
      thoughts:"Travel is best when it’s effortless. My job is to handle the details, so you can focus on the experience - with care, pace, and trust.",
      bio: "Meet Mr. Ashok Malik, a seasoned travel expert with nearly two decades of experience curating unforgettable journeys across Australia, New Zealand, Canada, Europe, and Rajasthan. Having traveled to Europe more than 100 times, he knows the continent’s culture, cuisine, and charm inside out.",
      career: [
        { year: "1998", milestone: "Degree in Hospitality Management", icon: GraduationCap },
        { year: "2005", milestone: "Led customer experience at leading travel agency", icon: Briefcase },
        { year: "2007", milestone: "Co-founded Sun Tourism operations", icon: Star },
        { year: "2012", milestone: "Developed signature guest care protocols", icon: Heart },
        { year: "2018", milestone: "Introduced women-only group tours", icon: Users },
        { year: "2023", milestone: "Recognized for excellence in travel hospitality", icon: Award }
      ],
      linkedin: "#",
      email: "snehal@suntourismpune.com"
    }
  ];

  const values = [
    { icon: Globe, title: "Global Reach", desc: "Curated experiences across 30+ destinations worldwide" },
    { icon: Users, title: "Community First", desc: "Building connections that last beyond the journey" },
    { icon: Award, title: "Excellence", desc: "Award-winning service recognized globally" },
    { icon: MapPin, title: "Local Expertise", desc: "Deep partnerships with local guides and experts" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 pb-14 pt-20 sm:pb-20 sm:pt-28 md:pt-32">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-5 inline-block rounded-full bg-highlight/10 px-4 py-2 text-sm font-medium text-highlight sm:mb-6">
              Our Story
            </span>
            <h1 className="mx-auto mb-6 max-w-[10ch] font-heading text-[clamp(2.45rem,13vw,4.75rem)] font-bold leading-[0.95] tracking-tight text-foreground sm:max-w-none sm:text-5xl sm:leading-[0.92] md:text-7xl">
              <span className="block">Crafting</span>
              <span className="block text-accent">Unforgettable</span>
              <span className="block">Journeys</span>
              <span className="block">Since 2007</span>
            </h1>
            <p className="mx-auto max-w-[30ch] text-sm leading-8 text-muted-foreground sm:max-w-3xl sm:text-lg md:text-xl">
              What began as a passion to make travel accessible has evolved into Pune's most trusted 
              travel community, connecting families with extraordinary experiences across the globe.
            </p>
          </motion.div>

          {/* Animated stats */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-6 sm:mt-16 sm:gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { number: "30+", label: "Destinations" },
              { number: "100K+", label: "Happy Travellers" },
              { number: "15K+", label: "Tours Completed" },
              { number: "18+", label: "Years of Experience" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-accent sm:text-4xl md:text-5xl">{stat.number}</div>
                <div className="mt-1 text-sm text-muted-foreground sm:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <div 
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative mb-6 md:mb-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-highlight/20 to-cta/20 rounded-3xl blur-2xl" />
              <img 
                src={SunTeam}
                alt="Sun Tourism Team"
                className="relative h-[320px] w-full rounded-3xl object-cover sm:h-[400px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 rounded-2xl bg-cta p-4 text-foreground shadow-xl sm:-bottom-6 sm:-right-6 sm:p-6">
                <div className="text-2xl font-bold sm:text-3xl">2007</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-accent">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe travel should be transformative, not transactional. Every journey 
                we craft is designed to create meaningful connections-with places, cultures, 
                and fellow travelers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our "Ghar Se Ghar Tak" promise means complete care from your doorstep to your destination 
                and back-flights, visas, hotels, meals, and memories, all taken care of.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Ghar Se Ghar Tak", "Family-Friendly", "Hassle-Free Travel"].map((tag) => (
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

      {/* Leaders Section - Enhanced with Career Timeline */}
      <section ref={leadersRef} className="px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            leadersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <span className="inline-block px-4 py-2 bg-cta/20 text-foreground rounded-full text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Meet The <span className="text-accent">Visionaries</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The passionate leaders behind Sun Tourism's commitment to making travel dreams come true
            </p>
          </div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div 
                key={leader.name}
                className={`transition-all duration-1000 ${
                  leadersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Leader Card */}
                <div className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Profile Side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-highlight/30 to-cta/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-xl">
                        {/* Quote mark */}
                        <Quote className="absolute top-6 right-8 h-16 w-16 text-highlight/10" />
                        
                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                          <div className="relative flex-shrink-0">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-highlight/20">
                              <img 
                                src={leader.img} 
                                alt={leader.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-cta rounded-full flex items-center justify-center">
                              <Award className="w-5 h-5 text-foreground" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl font-bold text-foreground">{leader.name}</h3>
                            <p className="text-highlight font-medium mb-2">{leader.role}</p>
                            <div className="flex gap-3">
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

                        {/* Thoughts/Philosophy */}
                        <div className="bg-highlight/5 border-l-4 border-cta rounded-r-xl p-5">
                          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Their Philosophy</p>
                          <blockquote className="italic text-foreground leading-relaxed">
                            "{leader.thoughts}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Career Timeline Side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="relative">
                      <h4 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-accent" />
                        Career Journey
                      </h4>
                      
                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-highlight via-cta to-highlight/20" />
                        
                        <div className="space-y-6">
                          {leader.career.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="relative pl-14 group"
                            >
                              {/* Timeline dot */}
                              <div className="absolute left-0 w-10 h-10 rounded-full bg-card border-2 border-highlight/50 flex items-center justify-center group-hover:border-cta group-hover:bg-cta/10 transition-all duration-300">
                                <item.icon className="h-4 w-4 text-highlight group-hover:text-cta transition-colors" />
                              </div>
                              
                              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/30 shadow-xl group-hover:border-highlight/30 transition-all duration-300">
                                <span className="text-xs font-bold text-accent">{item.year}</span>
                                <p className="text-foreground text-sm mt-1">{item.milestone}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="px-4 py-16 sm:py-20">
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
                className="group relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center shadow-xl hover:border-highlight/50 transition-all duration-300"
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
      <section className="px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-highlight to-highlight/80 p-8 text-center sm:p-10 md:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/4 translate-y-1/4" />
            </div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-base text-white/90 sm:text-lg">
                Join thousands of travelers who have discovered the world with us.
              </p>
              <a 
                href="/explore" 
                className="inline-block rounded-full bg-cta px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
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
