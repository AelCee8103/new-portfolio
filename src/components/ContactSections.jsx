import {
  FacebookIcon,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import { useEffect } from "react";
import emailjs, { send } from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      emailjs
        .sendForm("service_1i40daj", "template_5tzyvwb", form.current, {
          publicKey: "kB4epaWS2u5e5Fbi8",
        })
        .then(
          () => {
            toast({
              title: "Message sent!",
              description:
                "Thank you for reaching out. I will get back to you soon.",
            });

            console.log("SUCCESS!");

            setIsSubmitting(false);
            // Reset the form after successful submission
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log("FAILED...", error.text);

            setIsSubmitting(false);
          }
        );
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together or have a question? Reach out and let's
          connect!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information{" "}
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                  {""}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors underline"
                    href="mailto:a.cantila.533397@umindanao.edu.ph"
                  >
                    a.cantila.533397@umindanao.edu.ph
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                  {""}
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors underline"
                    href="tel:09914740873"
                  >
                    0991-474-0873
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                  {""}
                </div>
                <div>
                  <h4 className="font-medium"> Location </h4>
                  <a className="text-muted-foreground  transition-colors">
                    Panacan, Davao City, Philippines
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/augustine-ervin-leig-cantila-525543279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQUGI5u%2F%2FQmaGrbgSg1d2cw%3D%3D"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/aelcee.cantila/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form onSubmit={sendEmail} ref={form} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Hi there! I would like to discuss..."
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
