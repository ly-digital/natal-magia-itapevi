import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    pretitle: "De 05 a 23 de dezembro",
    title: "+ de 50 atrações gratuitas",
    subtitle: "música, dança, circo e teatro",
  },
  {
    id: 2,
    pretitle: "",
    title: "Visite o Papai Noel",
    subtitle: "datas e horário (das 19h00 às 23h)",
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
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Decorative elements - Crescent moon on left */}
      <div className="absolute left-[5%] md:left-[10%] top-[15%] md:top-[20%] w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-40 z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 30 10 A 40 40 0 1 0 30 90 A 35 35 0 1 1 30 10"
            fill="#FDB913"
          />
        </svg>
      </div>
      
      {/* Decorative stars on right */}
      <div className="absolute right-[5%] md:right-[15%] top-[20%] w-12 h-12 md:w-16 md:h-16 opacity-50 z-0">
        <svg viewBox="0 0 51 48" className="w-full h-full fill-accent">
          <path d="M25.5 0L31.5532 16.5532L48 22.5L31.5532 28.4468L25.5 45L19.4468 28.4468L3 22.5L19.4468 16.5532L25.5 0Z" />
        </svg>
      </div>
      <div className="absolute right-[8%] md:right-[12%] top-[40%] w-10 h-10 md:w-14 md:h-14 opacity-40 z-0">
        <svg viewBox="0 0 51 48" className="w-full h-full fill-accent">
          <path d="M25.5 0L31.5532 16.5532L48 22.5L31.5532 28.4468L25.5 45L19.4468 28.4468L3 22.5L19.4468 16.5532L25.5 0Z" />
        </svg>
      </div>
      <div className="absolute right-[12%] md:right-[18%] top-[60%] w-8 h-8 md:w-12 md:h-12 opacity-35 z-0">
        <svg viewBox="0 0 51 48" className="w-full h-full fill-accent">
          <path d="M25.5 0L31.5532 16.5532L48 22.5L31.5532 28.4468L25.5 45L19.4468 28.4468L3 22.5L19.4468 16.5532L25.5 0Z" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 space-y-4 md:space-y-6 animate-in fade-in duration-1000">
        {slides[currentSlide].pretitle && (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide uppercase text-white/90">
            {slides[currentSlide].pretitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-accent font-effloresce leading-tight tracking-wide">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide lowercase text-white">
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
