import { Compass, Heart, Users, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const philosophies = [
  {
    icon: Heart,
    title: "Ghar Se Ghar Tak",
    subtitle: "Home to Home Service",
    description: "From the moment you step out of your door to the moment you return, we're with you. Complete travel care, every step of the way.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Users,
    title: "Travel as Family",
    subtitle: "Not Just Tourists",
    description: "We don't just take groups on tours. We create traveling families where strangers become friends and memories are shared.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Safety First",
    subtitle: "Peace of Mind",
    description: "Your safety is our priority. From verified accommodations to 24/7 support, we ensure you travel worry-free.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Sparkles,
    title: "Experience Over Itinerary",
    subtitle: "Moments Matter",
    description: "We craft experiences, not just schedules. Every tour is designed to create moments that stay with you forever.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export const PhilosophySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Compass className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Our Philosophy</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                For the <span className="text-highlight">Visionaries</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                At Sun Tourism, we believe travel is more than visiting places. 
                It's about transformation, connection, and creating stories worth telling.
              </p>
            </motion.div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {philosophies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary/80 font-medium mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl md:text-2xl font-heading italic text-muted-foreground max-w-3xl mx-auto">
              "We don't just plan tours, we craft journeys that transform strangers into family 
              and destinations into cherished memories."
            </blockquote>
            <p className="mt-4 text-sm text-primary font-medium">— Sun Tourism Vision</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
