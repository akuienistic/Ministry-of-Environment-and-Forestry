import { TreePine, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TreePine size={20} />
              <h3 className="font-heading text-lg font-bold">Environment is Life</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm font-body leading-relaxed">
              The Ministry of Environment and Forestry is mandated with the protection and conservation of the environment, ensuring sustainable utilization of the environmental resource base.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm font-body text-primary-foreground/80">
              <li><a href="/about" className="hover:text-primary-foreground transition-colors">About the Ministry</a></li>
              <li><a href="/directorates" className="hover:text-primary-foreground transition-colors">Directorates</a></li>
              <li><a href="/programs" className="hover:text-primary-foreground transition-colors">Programs & Initiatives</a></li>
              <li><a href="/news" className="hover:text-primary-foreground transition-colors">News & Updates</a></li>
              <li><a href="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm font-body text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Juba, Central Equatoria, South Sudan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+211 (0) 912 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>info@moef.gov.ss</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 text-center text-xs font-body text-primary-foreground/70 space-y-1">
          <p>© {new Date().getFullYear()} Ministry of Environment and Forestry – South Sudan</p>
          <p>
            Designed and built by{" "}
            <a
              href="https://www.linkedin.com/in/simon-akuien-atem-710895290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground transition-colors"
            >
              Simon Star Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
