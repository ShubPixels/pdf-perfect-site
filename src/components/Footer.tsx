import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin, MessageCircle, Users } from "lucide-react";
import { useVisitorCounter } from "@/hooks/use-visitor-counter";

export const Footer = () => {
  const { count, loading } = useVisitorCounter();

  return (
    <footer className="mt-20">
      {/* Top Yellow Bar */}
      <div className="bg-cta py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-foreground">
              <span>Rajasthan</span>
              <span className="hidden sm:inline">|</span>
              <span>Dubai & Abu Dhabi</span>
              <span className="hidden sm:inline">|</span>
              <span>Singapore Malaysia</span>
              <span className="hidden sm:inline">|</span>
              <span>Europe</span>
              <span className="hidden sm:inline">|</span>
              <span>Japan</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/suntouriismpune/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/suntourisminternationall" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@suntourismpune6312" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-80 transition-opacity">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/sun-touriism-internationall" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.link/97984j" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-80 transition-opacity">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Sun Tourism" className="h-12 w-auto" />
                <div>
                  <h3 className="font-bold text-foreground">Sun Tourism</h3>
                  <p className="text-xs text-muted-foreground italic">Ghar Se Ghar Tak</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Stories, updates & memories from Sun Tourism travellers – no bookings, just experiences. We have been crafting unforgettable journeys since 2007.
              </p>
              {/* Visitor Counter */}
              <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Total Visitors</p>
                  <p className="font-bold text-lg text-primary">
                    {loading ? "..." : count?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact - PCMC Office */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cta" />
                P.C.M.C Head Office
              </h4>
              <a 
                href="https://goo.gl/maps/1rQVgrnHGrzCNiWB7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block mb-4"
              >
                Sun Touriism Internationall Pvt.Ltd, Prestige Plaza, Office No. 3, Ground Floor, Old Mumbai - Pune Hwy, Akurdi, Pune 411035
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Phone className="h-4 w-4 text-cta" />
                <a href="tel:+917722000888" className="hover:text-primary transition-colors">+91 7722000888</a>
              </div>
            </div>

            {/* Contact - Pune Office */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cta" />
                Pune Regional Office
              </h4>
              <a 
                href="https://goo.gl/maps/1rQVgrnHGrzCNiWB7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block mb-4"
              >
                First Floor, Shop No 4 Pendse Bhuwan, Tilak Road, Sadashiv Peth, Opp Durvankur Dining Hall, Pune 411030
              </a>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-cta" />
                  <a href="tel:+917776000019" className="hover:text-primary transition-colors">+91 77760 00019</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-cta" />
                  <a href="tel:+917602727555" className="hover:text-primary transition-colors">Mumbai: +91 7602727555</a>
                </div>
              </div>
            </div>

            {/* Quick Links & Email */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/explore" className="text-muted-foreground hover:text-primary transition-colors">
                    Explore Destinations
                  </a>
                </li>
                <li>
                  <a href="/community" className="text-muted-foreground hover:text-primary transition-colors">
                    Community Stories
                  </a>
                </li>
                <li>
                  <a
                    href="https://suntourismpune.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Book Tours →
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-cta" />
                <a href="mailto:enquiry@suntourismpune.com" className="hover:text-primary transition-colors">
                  enquiry@suntourismpune.com
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer & Copyright */}
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center leading-relaxed mb-3">
              <strong>Disclaimer:</strong> This site is for stories, updates & learning. For tour
              packages & bookings, please visit{" "}
              <a
                href="https://suntourismpune.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                suntourismpune.co.in
              </a>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
              <p className="flex items-center gap-1">
                Copyright © 2025 All rights reserved with Sun Touriism Internationall Private Limited.
              </p>
              <p className="flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-accent fill-accent" /> by Sun Tourism Pune
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
