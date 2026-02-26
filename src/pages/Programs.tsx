import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TreePine, Droplets, CloudSun, Globe, Sprout, ShieldCheck, Clock, Users, Star } from "lucide-react";
import forestCanopy from "@/assets/forest-canopy.jpg";
import natureBanner from "@/assets/nature-banner.jpg";
import wetland from "@/assets/wetland-landscape.jpg";

const programs = [
  {
    icon: TreePine,
    title: "National Reforestation Campaign",
    description: "A nationwide initiative to restore degraded forests and increase tree cover across South Sudan, engaging communities in planting and sustainable forest management.",
    image: forestCanopy,
    category: "Forestry",
    status: "Active",
  },
  {
    icon: Droplets,
    title: "Sudd Wetland Conservation",
    description: "Protecting Africa's largest wetland through sustainable management, community-based natural resource management, and Ramsar Convention implementation.",
    image: wetland,
    category: "Wetlands",
    status: "Ongoing",
  },
  {
    icon: CloudSun,
    title: "Climate Change Adaptation Programme",
    description: "Strengthening the capacity of government and communities for a climate-resilient future, supported by UNDP and the Green Climate Fund. Focuses on agriculture, water, and disaster risk reduction.",
    image: natureBanner,
    category: "Climate",
    status: "Active",
  },
  {
    icon: Globe,
    title: "Boma-Badingilo Landscape Conservation",
    description: "Partnership with African Parks to manage Boma and Badingilo National Parks, home to the world's largest land mammal migration — the Great Nile Migration with over 6 million antelope.",
    image: forestCanopy,
    category: "Wildlife",
    status: "Featured",
  },
  {
    icon: Sprout,
    title: "National Biodiversity Strategy (NBSAP 2018–2027)",
    description: "Implementing the National Biodiversity Strategy and Action Plan to conserve South Sudan's rich biodiversity, developed in partnership with UNEP and the Convention on Biological Diversity.",
    image: wetland,
    category: "Biodiversity",
    status: "Ongoing",
  },
  {
    icon: ShieldCheck,
    title: "Environmental Impact Assessment Programme",
    description: "Ensuring all major development projects undergo rigorous environmental assessments to prevent ecological degradation and promote sustainable development.",
    image: natureBanner,
    category: "Policy",
    status: "Active",
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
              <Card key={prog.title} className="overflow-hidden border-border hover:shadow-lg transition-shadow group">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <Badge 
                        className={`text-xs font-body ${
                          prog.status === 'Featured' ? 'bg-amber-500 text-white' : 
                          prog.status === 'Active' ? 'bg-green-600 text-white' : 
                          'bg-primary text-white'
                        }`}
                      >
                        {prog.status === 'Featured' && <Star className="w-3 h-3 mr-1" />}
                        {prog.status === 'Active' && <Clock className="w-3 h-3 mr-1" />}
                        {prog.status === 'Ongoing' && <Users className="w-3 h-3 mr-1" />}
                        {prog.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <prog.icon className="text-primary" size={24} />
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-bold text-foreground">{prog.title}</h3>
                        <Badge variant="outline" className="text-xs font-body mt-1">{prog.category}</Badge>
                      </div>
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
