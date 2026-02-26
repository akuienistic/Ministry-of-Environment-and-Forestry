import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Droplets, CloudSun, Globe, Sprout, ShieldCheck } from "lucide-react";
import forestCanopy from "@/assets/forest-canopy.jpg";
import natureBanner from "@/assets/nature-banner.jpg";
import wetland from "@/assets/wetland-landscape.jpg";

const programs = [
  {
    icon: TreePine,
    title: "National Reforestation Campaign",
    description: "A nationwide initiative to restore degraded forests and increase tree cover across South Sudan, engaging communities in planting and sustainable forest management.",
    image: forestCanopy,
  },
  {
    icon: Droplets,
    title: "Sudd Wetland Conservation",
    description: "Protecting Africa's largest wetland through sustainable management, community-based natural resource management, and Ramsar Convention implementation.",
    image: wetland,
  },
  {
    icon: CloudSun,
    title: "Climate Change Adaptation Programme",
    description: "Strengthening the capacity of government and communities for a climate-resilient future, supported by UNDP and the Green Climate Fund. Focuses on agriculture, water, and disaster risk reduction.",
    image: natureBanner,
  },
  {
    icon: Globe,
    title: "Boma-Badingilo Landscape Conservation",
    description: "Partnership with African Parks to manage Boma and Badingilo National Parks, home to the world's largest land mammal migration — the Great Nile Migration with over 6 million antelope.",
    image: forestCanopy,
  },
  {
    icon: Sprout,
    title: "National Biodiversity Strategy (NBSAP 2018–2027)",
    description: "Implementing the National Biodiversity Strategy and Action Plan to conserve South Sudan's rich biodiversity, developed in partnership with UNEP and the Convention on Biological Diversity.",
    image: wetland,
  },
  {
    icon: ShieldCheck,
    title: "Environmental Impact Assessment Programme",
    description: "Ensuring all major development projects undergo rigorous environmental assessments to prevent ecological degradation and promote sustainable development.",
    image: natureBanner,
  },
];

const Programs = () => {
  return (
    <div>
      <section className="relative h-64 flex items-center">
        <img src={natureBanner} alt="Nature" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Programs & Initiatives</h1>
          <p className="text-primary-foreground/80 font-body mt-2">Key Environmental Programs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="space-y-8">
            {programs.map((prog, i) => (
              <Card key={prog.title} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <img src={prog.image} alt={prog.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                  <CardContent className="p-6 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <prog.icon className="text-primary" size={24} />
                      <h3 className="font-heading text-xl font-bold text-foreground">{prog.title}</h3>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">{prog.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
