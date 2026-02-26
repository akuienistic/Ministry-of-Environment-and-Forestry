import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import natureBanner from "@/assets/nature-banner.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    reset();
    toast({
      title: "✅ Message Sent Successfully",
      description: `Thank you, ${data.name}. We will respond to your inquiry shortly.`,
    });
  };

  const onError = () => {
    toast({
      title: "⚠️ Form Validation Error",
      description: "Please correct the highlighted fields before submitting.",
      variant: "destructive",
    });
  };

  return (
    <div>
      <section className="relative h-64 flex items-center">
        <img src={natureBanner} alt="Nature" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/80 font-body mt-2">Get in touch with the Ministry</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">Get In Touch</h2>
              <p className="font-body text-muted-foreground">
                For inquiries, partnerships, or feedback, please reach out through any of the following channels or use the contact form.
              </p>

              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "Ministry of Environment & Forestry, Juba, Central Equatoria, South Sudan" },
                  { icon: Phone, label: "Phone", value: "+211 (0) 912 000 000" },
                  { icon: Mail, label: "Email", value: "info@moef.gov.ss" },
                  { icon: Clock, label: "Working Hours", value: "Mon – Fri: 8:00 AM – 5:00 PM" },
                ].map((item) => (
                  <Card key={item.label} className="border-border">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="font-body text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                        <User size={14} className="text-primary" /> Full Name
                      </label>
                      <Input {...register("name")} placeholder="Enter your full name" className="font-body" />
                      {errors.name && (
                        <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                        <Mail size={14} className="text-primary" /> Email Address
                      </label>
                      <Input {...register("email")} type="email" placeholder="Enter your email" className="font-body" />
                      {errors.email && (
                        <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                        <MessageSquare size={14} className="text-primary" /> Subject
                      </label>
                      <Input {...register("subject")} placeholder="What is this about?" className="font-body" />
                      {errors.subject && (
                        <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                        <MessageSquare size={14} className="text-primary" /> Message
                      </label>
                      <Textarea {...register("message")} placeholder="Type your message here..." rows={5} className="font-body" />
                      {errors.message && (
                        <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" disabled={submitting} className="w-full font-body" size="lg">
                      {submitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
