import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, BookOpen, Users } from "lucide-react";
import logo from "@/assets/logo.jpg";
import natureBanner from "@/assets/nature-banner.jpg";

const About = () => {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 flex items-center">
        <img src={natureBanner} alt="Nature" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">About the Ministry</h1>
          <p className="text-primary-foreground/80 font-body mt-2">Formed in 2011 · Headquartered in Juba</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <img src={logo} alt="Ministry Logo" className="w-40 h-40 rounded-full shadow-lg shrink-0 mx-auto md:mx-0" />
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Ministry of Environment and Forestry</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                The Ministry of Environment and Forestry is a Government of South Sudan institution established in 2011 following the country's independence. The Ministry is mandated with the protection and conservation of the environment as well as ensuring sustainable utilization of the environmental resource base to meet the needs of both the present and future generations.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                The incumbent Minister is <strong>Hon. Josephine Napwon</strong>, while <strong>Joseph Africano Bartel</strong> serves as the Under Secretary. The Ministry works closely with international partners including UNEP, UNDP, the Global Environment Facility (GEF), and the World Bank.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                South Sudan is home to some of the world's most remarkable natural assets, including the Sudd — Africa's largest wetland — and the Great Nile Migration, the world's largest land mammal migration with over 6 million antelope traversing the Boma-Badingilo landscape.
              </p>
            </div>
          </div>

          {/* Mission, Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To protect and conserve the environment and natural resources of South Sudan through sustainable policies, community engagement, and international partnerships, ensuring ecological integrity for current and future generations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  A South Sudan where the environment is sustainably managed and conserved for the prosperity and well-being of all its people, contributing to national development and global environmental goals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Facts */}
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Key Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {[
              { icon: BookOpen, text: "National Environment Policy 2015–2025 guides all environmental legislation and action." },
              { icon: Users, text: "National Biodiversity Strategy and Action Plan (NBSAP) 2018–2027 developed with UNEP support." },
              { icon: BookOpen, text: "Initial National Communication to UNFCCC submitted in 2018." },
              { icon: Users, text: "Technology Needs Assessment for Climate Change Adaptation and Mitigation completed in 2024." },
            ].map((fact, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
                <fact.icon className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="font-body text-sm text-secondary-foreground">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
