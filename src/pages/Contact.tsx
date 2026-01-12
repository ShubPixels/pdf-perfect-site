import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { tours } from "@/data/tours";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Plane } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  destination: z.string().optional(),
  travelMonth: z.string().optional(),
  groupSize: z.string().optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

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
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Build WhatsApp message
      const message = `*New Tour Enquiry*%0A%0A*Name:* ${encodeURIComponent(validatedData.name)}%0A*Email:* ${encodeURIComponent(validatedData.email)}%0A*Phone:* ${encodeURIComponent(validatedData.phone)}%0A${validatedData.destination ? `*Destination:* ${encodeURIComponent(validatedData.destination)}%0A` : ""}${validatedData.travelMonth ? `*Travel Month:* ${encodeURIComponent(validatedData.travelMonth)}%0A` : ""}${validatedData.groupSize ? `*Group Size:* ${encodeURIComponent(validatedData.groupSize)}%0A` : ""}${validatedData.message ? `%0A*Message:*%0A${encodeURIComponent(validatedData.message)}` : ""}`;

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/919922526498?text=${message}`, "_blank");

      toast({
        title: "Enquiry Sent!",
        description: "We'll get back to you within 24 hours. Thank you!",
      });

      // Reset form
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
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const months = [
    "January 2026", "February 2026", "March 2026", "April 2026",
    "May 2026", "June 2026", "July 2026", "August 2026",
    "September 2026", "October 2026", "November 2026", "December 2026"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                <Plane className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Plan Your Dream Trip</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Book Your <span className="text-primary">Adventure</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to explore? Fill out the form below and our travel experts will craft 
                the perfect itinerary just for you. Ghar Se Ghar Tak – we handle everything!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Have questions about our tours? Our team is here to help you plan 
                    your perfect getaway.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office Address</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Sun Tourism Pune<br />
                        First Floor, City Point Building,<br />
                        Dhole Patil Road, Pune 411001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        <a href="tel:+919922526498" className="hover:text-primary transition-colors">
                          +91 99225 26498
                        </a>
                        <br />
                        <a href="tel:+912026163600" className="hover:text-primary transition-colors">
                          020 2616 3600
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        <a href="mailto:info@suntourismpune.com" className="hover:text-primary transition-colors">
                          info@suntourismpune.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Working Hours</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Mon - Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Button */}
                <a
                  href="https://wa.me/919922526498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Booking Enquiry Form</h2>
                    <p className="text-muted-foreground text-sm">
                      Fill in your details and we'll send you a customized tour package.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
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

                    <div className="grid sm:grid-cols-2 gap-6">
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
                        <Select value={formData.destination} onValueChange={(value) => handleInputChange("destination", value)}>
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

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="travelMonth">Preferred Travel Month</Label>
                        <Select value={formData.travelMonth} onValueChange={(value) => handleInputChange("travelMonth", value)}>
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
                        <Select value={formData.groupSize} onValueChange={(value) => handleInputChange("groupSize", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Number of travelers" />
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
                        placeholder="Tell us about your travel preferences, special requirements, dietary needs, etc."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Enquiry via WhatsApp
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive communication from Sun Tourism. 
                      We respect your privacy and never share your information.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
