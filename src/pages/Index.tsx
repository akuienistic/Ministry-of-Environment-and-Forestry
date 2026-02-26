import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Droplets, Shield, Globe, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroForest from "@/assets/hero-forest.jpg";
import forestCanopy from "@/assets/forest-canopy.jpg";
import wetland from "@/assets/wetland-landscape.jpg";
import wildlife from "@/assets/wildlife.jpg";
import ministerImg from "@/assets/minister.jpg";

const highlights = [
  {
    icon: TreePine,
    title: "Forest Conservation",
    description: "Protecting South Sudan's vast forest reserves through sustainable management and community engagement.",
  },
  {
    icon: Droplets,
    title: "Wetlands & Biodiversity",
    description: "Safeguarding the Sudd — Africa's largest wetland — and the extraordinary biodiversity it supports.",
  },
  {
    icon: Shield,
    title: "Climate Resilience",
    description: "Building climate adaptation capacity across all sectors for present and future generations.",
  },
  {
    icon: Globe,
    title: "International Cooperation",
    description: "Partnering with UNEP, UNDP, and global bodies to advance environmental protection goals.",
  },
];

const news = [
  {
    date: "February 2026",
    title: "Boma-Badingilo Landscape Endorsed for UNESCO World Heritage Status",
    excerpt: "South Sudan formally endorses the Boma-Badingilo landscape for global recognition, a historic step towards international recognition of the country's natural heritage.",
    image: wildlife,
  },
  {
    date: "February 2026",
    title: "World Bank Releases South Sudan Climate Development Report",
    excerpt: "The report projects that South Sudan will require over $13 billion in climate adaptation investments by 2050.",
    image: wetland,
  },
  {
    date: "2024",
    title: "World's Largest Land Mammal Migration Confirmed",
    excerpt: "Aerial surveys confirm the Great Nile Migration — featuring over 6 million antelope — as the world's largest land mammal migration.",
    image: forestCanopy,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <img
          src={heroForest}
          alt="South Sudan forest landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">
              Republic of South Sudan
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Ministry of Environment & Forestry
            </h1>
            <p className="text-primary-foreground/90 text-lg font-body mb-8 leading-relaxed">
              Protecting and conserving South Sudan's environment for present and future generations. <em>Environment is Life.</em>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-body">
                <Link to="/about">
                  Learn About Us <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">Our Core Mandates</h2>
          <p className="text-muted-foreground text-center font-body mb-12 max-w-2xl mx-auto">
            The Ministry is mandated with the protection and conservation of the environment and ensuring sustainable utilization of South Sudan's environmental resources.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <Card key={item.title} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">Ministry Leadership</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="shrink-0">
              <img
                src={ministerImg}
                alt="Hon. Mabior Garang De Mabior"
                className="w-56 h-64 object-cover object-top rounded-lg shadow-lg border-4 border-primary/20"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Minister</p>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-1">Hon. Mabior Garang De Mabior</h3>
              <p className="text-sm font-body text-primary font-semibold mb-4">Minister of Environment & Forestry</p>
              <div className="relative">
                <Quote size={20} className="text-primary/30 absolute -top-2 -left-2" />
                <p className="text-muted-foreground font-body text-sm leading-relaxed pl-5 italic">
                  "Our environment is the foundation of our nation's future. Together, we must protect South Sudan's forests, wetlands, and wildlife for generations to come."
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="mt-6 font-body">
                <Link to="/about">Learn More About the Ministry <ArrowRight className="ml-1.5" size={14} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground">Latest News</h2>
            <Button asChild variant="ghost" className="font-body text-primary">
              <Link to="/news">View All <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.title} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardContent className="p-5">
                  <p className="text-xs font-body text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground line-clamp-3">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <img src={forestCanopy} alt="Forest" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Environment is Life
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl mx-auto">
            Together, we can protect South Sudan's natural heritage for generations to come.
          </p>
          <Button asChild size="lg" className="font-body bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to="/programs">Explore Our Programs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
