import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  { text: "Traveling with Sun Tourism feels like traveling with family.", author: "Priya Sharma", trip: "Japan 2025" },
  { text: "The best decision was joining these tours. Made lifelong friends.", author: "Anjali Desai", trip: "Europe 2024" },
  { text: "Once tour is planned, just sit back, relax and enjoy.", author: "Mandar Patil", trip: "Bali 2024" },
];

export const TravelerQuoteStrip = () => {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-card/60 backdrop-blur-sm border border-border/30 rounded-2xl p-6 md:p-8"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              <p className="text-foreground font-medium text-base md:text-lg leading-relaxed mb-4 italic">
                "{quote.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">
                    {quote.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{quote.author}</p>
                  <p className="text-xs text-muted-foreground">{quote.trip}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
