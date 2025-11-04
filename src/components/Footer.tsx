import sponsorsLogo from "@/assets/sponsors-logos.png";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#7a1c18] py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <a 
            href="https://instagram.com/ruadenatalitapevi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-white hover:text-[#fbc942] transition-colors text-lg font-gabarito"
            aria-label="Instagram @ruadenatalitapevi"
          >
            <Instagram className="w-6 h-6" />
            <span>@ruadenatalitapevi</span>
          </a>
        </div>
        
        <div className="max-w-6xl mx-auto mb-12">
          <img
            src={sponsorsLogo}
            alt="Fomento, Apresentação, Patrocínio, Apoio, Produção e Realização"
            className="w-full h-auto"
          />
        </div>
        
        <div className="text-center">
          <p className="text-white/90 text-base font-gabarito">
            © 2025 Rua de Natal de Itapevi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
