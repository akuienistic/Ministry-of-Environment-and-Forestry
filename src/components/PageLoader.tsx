import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

const PageLoader = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000);
    const removeTimer = setTimeout(() => setRemoved(true), 2600);
    return () => { clearTimeout(timer); clearTimeout(removeTimer); };
  }, []);

  if (removed) return null;

  return (
    <div className={`page-loader ${hidden ? "hidden" : ""}`}>
      <div className="flex flex-col items-center gap-6">
        <img src={logo} alt="Ministry Logo" className="loader-logo" />
        <div className="loader-bar-track">
          <div className="loader-bar" />
        </div>
        <div className="text-center">
          <p className="text-primary-foreground font-heading text-sm font-bold tracking-wide">
            Ministry of Environment & Forestry
          </p>
          <p className="text-primary-foreground/60 font-body text-xs mt-1 tracking-widest uppercase">
            Republic of South Sudan
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
