import emailjs from "@emailjs/browser";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Send,
  ShieldCheck,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { tours } from "@/data/tours";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  destination: z.string().optional(),
  travelMonth: z.string().optional(),
  groupSize: z.string().optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const officeAddress = [
  "Sun Tourism International Pvt. Ltd.",
  "Prestige Plaza, Office No. 3, Ground Floor,",
  "Old Mumbai - Pune Hwy, Akurdi, Pune 411035",
];
const officePhoneHref = "tel:+917722000888";
const officePhoneLabel = "+91 77220 00888";
const officeEmail = "enquiry@suntourismpune.com";
const mapLink = "https://goo.gl/maps/1rQVgrnHGrzCNiWB7";
const whatsappNumber = "917722000888";
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelMonth: "",
    groupSize: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
        toast({
          title: "Email Setup Incomplete",
          description: "The contact form email service is not configured yet. Please try again shortly.",
          variant: "destructive",
        });
        return;
      }

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          destination: validatedData.destination || "Not specified",
          travelMonth: validatedData.travelMonth || "Not specified",
          groupSize: validatedData.groupSize || "Not specified",
          message: validatedData.message || "No additional requirements provided.",
        },
        {
          publicKey: emailJsPublicKey,
          limitRate: {
            id: "contact-form",
            throttle: 10000,
          },
        },
      );

      toast({
        title: "Enquiry Sent!",
        description: "Your enquiry has been emailed to our team. We will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelMonth: "",
        groupSize: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Could Not Send Enquiry",
          description: "Please try again in a moment or contact us directly by phone or WhatsApp.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const months = [
    "January 2026",
    "February 2026",
    "March 2026",
    "April 2026",
    "May 2026",
    "June 2026",
    "July 2026",
    "August 2026",
    "September 2026",
    "October 2026",
    "November 2026",
    "December 2026",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="container mx-auto px-4 pb-10 pt-20 md:pb-14 md:pt-24">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-border/30 bg-card/75 p-8 shadow-xl backdrop-blur-sm md:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Plane className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Plan Your Next Journey</span>
              </div>

              <h1 className="mb-5 font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Let&apos;s shape your next unforgettable tour.
              </h1>

              <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                Reach out for fixed departures, group tour guidance, and end-to-end planning
                with the same care that shapes every Sun Tourism journey.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/30 bg-background/70 p-4 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">Fast replies</p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Email-first enquiries with WhatsApp support whenever you want a quicker follow-up.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/30 bg-background/70 p-4 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">Trusted guidance</p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Talk to a team that handles departures, documents, and guest care every day.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/30 bg-card/70 p-8 shadow-xl backdrop-blur-sm md:p-10">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-accent">Akurdi Office</p>
                <h2 className="mt-2 text-3xl font-heading font-bold text-foreground">
                  Visit, call, or message us.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Address</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {officeAddress.join(" ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href={officePhoneHref}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {officePhoneLabel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${officeEmail}`}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {officeEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                      <br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full px-6">
                  <a href={mapLink} target="_blank" rel="noopener noreferrer">
                    Open in Maps
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/30 bg-card/80 p-6 shadow-xl backdrop-blur-sm md:p-10">
              <div className="mb-8 grid gap-6 border-b border-border/30 pb-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-accent">Booking Enquiry</p>
                  <h2 className="mt-2 text-3xl font-heading font-bold text-foreground md:text-4xl">
                    Tell us what kind of trip you have in mind.
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border/30 bg-background/70 p-4 shadow-xl">
                    <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                    <p className="text-sm leading-6 text-muted-foreground">
                      Your details stay private and are only used to help with your enquiry.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-border/30 bg-background/70 p-4 shadow-xl">
                    <Send className="mb-3 h-5 w-5 text-primary" />
                    <p className="text-sm leading-6 text-muted-foreground">
                      Share your destination, timing, and preferences so we can guide you faster.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination">Preferred Destination</Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) => handleInputChange("destination", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.shortTitle}>
                            {tour.shortTitle}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="travelMonth">Preferred Travel Month</Label>
                    <Select
                      value={formData.travelMonth}
                      onValueChange={(value) => handleInputChange("travelMonth", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="groupSize">Group Size</Label>
                    <Select
                      value={formData.groupSize}
                      onValueChange={(value) => handleInputChange("groupSize", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Number of travellers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 People</SelectItem>
                        <SelectItem value="3-5">3-5 People</SelectItem>
                        <SelectItem value="6-10">6-10 People</SelectItem>
                        <SelectItem value="10+">10+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your preferences, special requirements, dietary needs, or who will be travelling with you."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full gap-2 md:w-auto md:px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Enquiry by Email
                    </>
                  )}
                </Button>

                <p className="text-xs leading-6 text-muted-foreground">
                  By submitting this form, you agree to receive communication from Sun Tourism.
                  We only use your details to respond to your enquiry and plan your trip better.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
