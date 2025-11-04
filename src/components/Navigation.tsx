import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/rua-de-natal-logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo centered at top */}
          <div className="flex justify-center py-3 border-b border-white/20">
            <Link to="/" className="cursor-pointer">
              <img src={logo} alt="Rua de Natal Itapevi" className="h-10" />
            </Link>
          </div>
          
          {/* Menu and Instagram row */}
          <div className="flex items-center justify-between py-2">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:text-[#7a1c18]"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-primary text-primary-foreground">
                <SheetHeader>
                  <SheetTitle className="text-primary-foreground font-effloresce text-2xl">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {isHomePage ? (
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection("sobre")}
                        className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors justify-start text-lg"
                      >
                        Sobre
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection("informacoes")}
                        className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors justify-start text-lg"
                      >
                        Informações
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection("calendario")}
                        className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors justify-start text-lg"
                      >
                        Calendário
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/#sobre" onClick={() => setIsMenuOpen(false)}>
                        <Button
                          variant="ghost"
                          className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors justify-start text-lg w-full"
                        >
                          Sobre
                        </Button>
                      </Link>
                      <Link to="/#informacoes" onClick={() => setIsMenuOpen(false)}>
                        <Button
                          variant="ghost"
                          className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors justify-start text-lg w-full"
                        >
                          Informações
                        </Button>
                      </Link>
                      <Link to="/#calendario" onClick={() => setIsMenuOpen(false)}>
                        <Button
                          variant="ghost"
                          className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors justify-start text-lg w-full"
                        >
                          Calendário
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <a
              href="https://instagram.com/ruadenatalitapevi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-[#7a1c18] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between py-4">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="Rua de Natal Itapevi" className="h-12 md:h-16" />
          </Link>
          
          <div className="flex items-center gap-6">
            {isHomePage ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors"
                >
                  Sobre
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("informacoes")}
                  className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors"
                >
                  Informações
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("calendario")}
                  className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors"
                >
                  Calendário
                </Button>
              </>
            ) : (
              <>
                <Link to="/#sobre">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors"
                  >
                    Sobre
                  </Button>
                </Link>
                <Link to="/#informacoes">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors"
                  >
                    Informações
                  </Button>
                </Link>
                <Link to="/#calendario">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:text-[#7a1c18] font-semibold transition-colors"
                  >
                    Calendário
                  </Button>
                </Link>
              </>
            )}
            <a
              href="https://instagram.com/ruadenatalitapevi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-[#7a1c18] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
