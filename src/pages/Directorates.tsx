import { Card, CardContent } from "@/components/ui/card";
import { Trees, Droplets, CloudSun, Leaf, Landmark, Scale } from "lucide-react";
import natureBanner from "@/assets/nature-banner.jpg";

const directorates = [
  {
    icon: Trees,
    name: "Directorate of Forestry",
    description: "Responsible for the management, conservation, and sustainable utilization of South Sudan's forest resources. Oversees reforestation programs, forest inventory, and community forestry initiatives.",
  },
  {
    icon: Droplets,
    name: "Directorate of Wetlands and Biodiversity",
    description: "Charged with the protection of wetland ecosystems including the Sudd, biodiversity conservation, and implementation of the National Biodiversity Strategy and Action Plan (NBSAP 2018–2027).",
  },
  {
    icon: CloudSun,
    name: "Directorate of Climate Change",
    description: "Coordinates South Sudan's response to climate change including adaptation, mitigation strategies, and UNFCCC reporting. Manages the National Adaptation Programme of Action (NAPA).",
  },
  {
    icon: Leaf,
    name: "Directorate of Environmental Planning",
    description: "Oversees Environmental Impact Assessments (EIA), environmental audits, and ensures that development projects comply with environmental regulations and standards.",
  },
  {
    icon: Landmark,
    name: "Directorate of Administration and Finance",
    description: "Manages the Ministry's administrative functions, human resources, financial planning, and budgetary allocations to ensure effective operations.",
  },
  {
    icon: Scale,
    name: "Directorate of Policy and Legal Affairs",
    description: "Develops environmental policies, legislation, and regulations. Ensures implementation of the National Environment Policy 2015–2025 and coordinates with legal bodies.",
  },
];

const Directorates = () => {
  return (
    <div>
      <section className="relative h-64 flex items-center">
        <img src={natureBanner} alt="Nature" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Directorates</h1>
          <p className="text-primary-foreground/80 font-body mt-2">Organizational Structure</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="font-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The Ministry is organized into specialized directorates, each tasked with a specific mandate in environmental governance and conservation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {directorates.map((dir) => (
              <Card key={dir.name} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <dir.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{dir.name}</h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{dir.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directorates;
