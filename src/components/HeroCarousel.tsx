import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAtracoes from "@/assets/hero-atracoes.jpg";
import heroPapaiNoel from "@/assets/hero-papai-noel.jpg";
import heroLuzes from "@/assets/hero-luzes.jpg";

const slides = [
  {
    id: 1,
    pretitle: "De 05 a 23 de dezembro",
    title: "+ de 50 atrações gratuitas",
    subtitle: "música, dança, circo e teatro",
    image: heroAtracoes,
  },
  {
    id: 2,
    pretitle: "",
    title: "Visite o Papai Noel",
    subtitle: "datas e horário (das 19h00 às 23h)",
    image: heroPapaiNoel,
  },
  {
    id: 3,
    pretitle: "",
    title: "Espetáculo de Luzes",
    subtitle: "todos os dias às 19h",
    image: heroLuzes,
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background images with transitions */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7a1c18]/40 via-transparent to-[#fbc942]/30 animate-pulse" />
        </div>
      ))}
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 space-y-4 md:space-y-6 max-w-5xl mx-auto">
        {slides[currentSlide].pretitle && (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide uppercase text-white/90 animate-fade-in">
            {slides[currentSlide].pretitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-accent font-effloresce leading-tight tracking-wide drop-shadow-2xl animate-scale-in">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide lowercase text-white drop-shadow-lg animate-fade-in">
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent hover:bg-white/10 z-20"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent hover:bg-white/10 z-20"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
