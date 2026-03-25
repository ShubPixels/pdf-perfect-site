import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

import { navLinks } from "@/config/navigation";
import { useVisitorCounter } from "@/hooks/use-visitor-counter";

export const Footer = () => {
  const { count, loading } = useVisitorCounter();

  return (
    <footer className="mt-20">
      <div className="bg-cta py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm font-medium text-foreground">
              Follow Sun Tourism for traveller stories, updates, and fresh inspiration.
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/suntouriismpune/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-80"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/suntourismpune/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-80"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@suntourismpune6312"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-80"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sun-touriism-internationall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-80"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.link/97984j"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-80"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src="/logo.png" alt="Sun Tourism" className="h-12 w-auto" />
                <div>
                  <h3 className="font-bold text-foreground">Sun Tourism</h3>
                  <p className="text-xs italic text-muted-foreground">Ghar Se Ghar Tak</p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Real traveller stories, useful travel guidance, and memorable moments from
                Sun Tourism journeys since 2007.
              </p>

              <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 p-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Total Visitors</p>
                  <p className="text-lg font-bold text-primary">
                    {loading ? "..." : count?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                P.C.M.C Head Office
              </h4>

              <a
                href="https://goo.gl/maps/1rQVgrnHGrzCNiWB7"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Sun Tourism International Pvt. Ltd., Prestige Plaza, Office No. 3,
                Ground Floor, Old Mumbai - Pune Hwy, Akurdi, Pune 411035
              </a>

              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+917722000888" className="transition-colors hover:text-primary">
                  +91 77220 00888
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href="mailto:enquiry@suntourismpune.com"
                  className="transition-colors hover:text-primary"
                >
                  enquiry@suntourismpune.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
              <ul className="mb-6 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://suntourismpune.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                  >
                    Book Tours
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>

              <a
                href="https://wa.link/97984j"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="mb-3 text-center text-xs leading-relaxed text-muted-foreground">
              <strong>Disclaimer:</strong> This site is for stories, updates, and learning.
              For tour packages and bookings, please visit{" "}
              <a
                href="https://suntourismpune.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                suntourismpune.co.in
              </a>
            </p>

            <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
              <p>Copyright &copy; 2025 All rights reserved with Sun Tourism International Private Limited.</p>
              <p>
                Website developed by{" "}
                <a
                  href="https://advybes.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Advybes Media LLP
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
