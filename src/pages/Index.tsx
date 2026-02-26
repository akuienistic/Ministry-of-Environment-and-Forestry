import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Droplets, Shield, Globe, Quote, MapPin, Calendar, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroForest from "@/assets/hero-forest.jpg";
import forestCanopy from "@/assets/forest-canopy.jpg";
import wetland from "@/assets/wetland-landscape.jpg";
import wildlife from "@/assets/wildlife.jpg";
import ministerImg from "@/assets/minister.jpg";

const leadership = [
  {
    name: "Hon. Mabior Garang de Mabior",
    title: "Minister",
    fullTitle: "Minister of Environment & Forestry",
    image: ministerImg,
    quote:
      "Our environment is the foundation of our nation's future. Together, we must protect South Sudan's forests, wetlands, and wildlife for generations to come.",
    location: "Juba, South Sudan",
    since: "Since 2021",
    initials: "JN",
  },
  {
    name: "To Be Added Upon Request",
    title: "Under Secretary",
    fullTitle: "Under Secretary",
    image: null,
    quote:
      "Sustainable environmental management is crucial for South Sudan's development. We are committed to implementing policies that protect our natural heritage.",
    location: "Juba, South Sudan",
    since: "Since 2021",
    initials: "JA",
  },
  {
    name: "To Be Added Upon Request",
    title: "Director General",
    fullTitle: "Director General - Environment",
    image: null,
    quote:
      "Biodiversity conservation is at the heart of our work. The Sudd wetland and Great Nile Migration are treasures we must preserve.",
    location: "Juba, South Sudan",
    since: "2020",
    initials: "DK",
  },
];

const highlights = [
  {
    icon: TreePine,
    title: "Forest Conservation",
    description:
      "Protecting South Sudan's vast forest reserves through sustainable management and community engagement.",
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
    excerpt:
      "South Sudan formally endorses the Boma-Badingilo landscape for global recognition, a historic step towards international recognition of the country's natural heritage.",
    image: wildlife,
  },
  {
    date: "February 2026",
    title: "World Bank Releases South Sudan Climate Development Report",
    excerpt:
      "The report projects that South Sudan will require over $13 billion in climate adaptation investments by 2050.",
    image: wetland,
  },
  {
    date: "2024",
    title: "World's Largest Land Mammal Migration Confirmed",
    excerpt:
      "Aerial surveys confirm the Great Nile Migration — featuring over 6 million antelope — as the world's largest land mammal migration.",
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
            <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">Republic of South Sudan</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Ministry of Environment & Forestry
            </h1>
            <p className="text-primary-foreground/90 text-lg font-body mb-8 leading-relaxed">
              Protecting and conserving South Sudan's environment for present and future generations.{" "}
              <em>Environment is Life.</em>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-body">
                <Link to="/about">
                  Learn About Us <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-body border-primary-foreground text-primary-foreground bg-primary-foreground/20"
              >
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
            The Ministry is mandated with the protection and conservation of the environment and ensuring sustainable
            utilization of South Sudan's environmental resources.
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
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Ministry Leadership</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Meet the dedicated team leading environmental conservation and sustainable resource management in South
              Sudan.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  {leader.image ? (
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-green-500/20">
                      <span className="font-heading text-7xl font-bold text-primary/40">{leader.initials}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="text-xs font-body uppercase tracking-widest text-primary-foreground/80 mb-1">
                      {leader.title}
                    </p>
                    <h3 className="text-xl font-heading font-bold">{leader.name}</h3>
                    <p className="text-primary-foreground/90 text-sm font-medium">{leader.fullTitle}</p>
                  </div>
                </div>
                <CardContent className="p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="relative mb-4">
                    <Quote size={16} className="text-primary/30 absolute -top-1 -left-0" />
                    <p className="text-muted-foreground font-body text-sm leading-relaxed pl-5 italic line-clamp-3">
                      {leader.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-border/50 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-primary" />
                      <span>{leader.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-primary" />
                      <span>{leader.since}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground">Latest News</h2>
            <Button asChild variant="ghost" className="font-body text-primary">
              <Link to="/news">
                View All <ArrowRight className="ml-1" size={16} />
              </Link>
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
