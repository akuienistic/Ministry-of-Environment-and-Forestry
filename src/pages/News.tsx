import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import natureBanner from "@/assets/nature-banner.jpg";
import wildlife from "@/assets/wildlife.jpg";
import wetland from "@/assets/wetland-landscape.jpg";
import forestCanopy from "@/assets/forest-canopy.jpg";

const newsItems = [
  {
    date: "24 February 2026",
    title: "Boma-Badingilo Landscape Endorsed for UNESCO World Heritage Status",
    content: "South Sudan has formally endorsed the Boma-Badingilo landscape for global recognition, marking a historic step towards international recognition of the country's natural heritage. The endorsement was approved by the Ministry of Wildlife Conservation and the Department of Culture, Museums, and National Heritage, paving the way for UNESCO World Heritage inscription.",
    image: wildlife,
    category: "Conservation",
    badge: "Featured",
  },
  {
    date: "5 February 2026",
    title: "World Bank Releases South Sudan Country Climate Development Report 2026",
    content: "The World Bank's report projects that South Sudan will require over $13 billion in climate adaptation investments by 2050. Extreme flooding, now considered the 'new normal,' covers up to one-quarter of the country in severe years, cutting communities off from essential services and markets.",
    image: wetland,
    category: "Climate",
    badge: "New",
  },
  {
    date: "22 February 2026",
    title: "Nile Basin Nations Pledge Cooperation on Shared Water Resources",
    content: "Egypt's Minister of Water Resources and Irrigation visited South Sudan, emphasizing cooperation with Nile Basin countries and sharing technical expertise. The visit included participation in Nile Day celebrations and discussions on sustainable water management.",
    image: forestCanopy,
    category: "International",
    badge: null,
  },
  {
    date: "25 June 2024",
    title: "World's Largest Land Mammal Migration Confirmed in South Sudan",
    content: "The first comprehensive aerial survey of wildlife in South Sudan has confirmed the Great Nile Migration as the largest land mammal migration on Earth, featuring over 6 million white-eared kob, tiang, Mongalla gazelle, and Bohor reedbuck moving across the Boma-Badingilo landscape.",
    image: wildlife,
    category: "Wildlife",
    badge: "Milestone",
  },
  {
    date: "2024",
    title: "Technology Needs Assessment for Climate Change Published",
    content: "South Sudan completed a comprehensive Technology Needs Assessment identifying barriers and enabling frameworks for climate change adaptation and mitigation across priority sectors including agriculture, water resources, and forestry.",
    image: forestCanopy,
    category: "Climate",
    badge: "Published",
  },
  {
    date: "2023",
    title: "Ecosystem-based Adaptation Programme Launched (2023–2028)",
    content: "In partnership with UNEP, South Sudan launched a five-year Ecosystem-based Adaptation programme to strengthen the resilience of vulnerable communities and ecosystems to climate change impacts.",
    image: wetland,
    category: "Programs",
    badge: "Ongoing",
  },
];

const News = () => {
  return (
    <div>
      <section className="relative h-64 flex items-center">
        <img src={natureBanner} alt="Nature" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">News & Updates</h1>
          <p className="text-primary-foreground/80 font-body mt-2">Latest from the Ministry</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <Card key={item.title} className="overflow-hidden border-border hover:shadow-md transition-shadow group">
                <div className="flex flex-col md:flex-row">
                  <img src={item.image} alt={item.title} className="w-full md:w-64 h-48 md:h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                  <CardContent className="p-6 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs font-body">{item.category}</Badge>
                      {item.badge && (
                        <Badge className="text-xs font-body bg-primary text-primary-foreground">{item.badge}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                      <Calendar size={14} />
                      <span className="font-body">{item.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.content}</p>
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

export default News;
