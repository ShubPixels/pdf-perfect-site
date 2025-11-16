import { Heart, MessageCircle, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-foreground mb-3">All Tours Ghar Se Ghar Tak</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stories, updates & memories from Sun Tourism travellers – no bookings, just experiences.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://suntourismpune.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Sun Tourism
                </a>
              </li>
              <li>
                <a
                  href="https://suntourismpune.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sun Tourism Tours
                </a>
              </li>
              <li>
                <a
                  href="https://suntourismpune.co.in/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How We Create Ghar Se Ghar Tak
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Share your travel stories with us!
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> This site is for stories, updates & learning. For tour
            packages & bookings, please visit{" "}
            <a
              href="https://suntourismpune.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Sun Tourism Pune
            </a>
            .
          </p>
          <p className="text-xs text-muted-foreground text-center mt-3 flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent fill-accent" /> by Sun Tourism Pune
          </p>
        </div>
      </div>
    </footer>
  );
};
