import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rua-de-natal-logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="Rua de Natal Itapevi" className="h-12 md:h-16" />
        
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("sobre")}
            className="text-primary-foreground hover:text-accent font-semibold transition-colors"
          >
            Sobre
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("calendario")}
            className="text-primary-foreground hover:text-accent font-semibold transition-colors"
          >
            Calendário
          </Button>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-accent transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};
