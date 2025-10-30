import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Rua de Natal",
    subtitle: "Itapevi",
    date: "5 a 23 de Dezembro",
    highlights: [
      "+ de 50 atrações",
      "Música • Teatro",
      "Dança • Circo",
    ],
    info: "Espetáculo de luzes todos os dias às 19h",
  },
  {
    id: 2,
    title: "Visite o Papai Noel",
    dates: "Dias 05, 06, 07, 12, 13, 14, 19, 20, 21, 22, 23",
    time: "a partir das 19h",
  },
  {
    id: 3,
    title: "Paradinha de Natal",
    dates: "Dias 05, 07, 12, 13, 14, 19, 20, 21, 22, 23",
    location: "Saída da Praça 18 de Fevereiro",
    time: "às 18h",
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
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-accent animate-snow-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${10 + Math.random() * 20}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Slides */}
      <div className="relative h-full flex items-center justify-center">
        {slides[currentSlide].id === 1 && (
          <div className="text-center text-accent-foreground px-4 space-y-8 animate-in fade-in duration-1000">
            <h1 className="text-6xl md:text-8xl font-bold text-accent font-effloresce">
              {slides[currentSlide].title}
            </h1>
            <p className="text-3xl md:text-5xl text-accent-foreground font-light font-gabarito">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-2xl md:text-4xl text-accent font-semibold font-gabarito">
              {slides[currentSlide].date}
            </p>
            <div className="space-y-3 text-xl md:text-2xl">
              {slides[currentSlide].highlights?.map((item, idx) => (
                <p key={idx} className="text-accent-foreground font-medium font-gabarito">
                  {item}
                </p>
              ))}
            </div>
            <p className="text-lg md:text-xl text-accent-foreground mt-8 font-gabarito">
              {slides[currentSlide].info}
            </p>
          </div>
        )}

        {slides[currentSlide].id === 2 && (
          <div className="text-center text-accent-foreground px-4 space-y-8 animate-in fade-in duration-1000">
            <h2 className="text-5xl md:text-7xl font-bold text-accent font-effloresce">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl md:text-3xl text-accent-foreground font-gabarito">
              {slides[currentSlide].dates}
            </p>
            <p className="text-3xl md:text-4xl text-accent font-semibold font-gabarito">
              {slides[currentSlide].time}
            </p>
          </div>
        )}

        {slides[currentSlide].id === 3 && (
          <div className="text-center text-accent-foreground px-4 space-y-8 animate-in fade-in duration-1000">
            <h2 className="text-5xl md:text-7xl font-bold text-accent font-effloresce">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl md:text-3xl text-accent-foreground font-gabarito">
              {slides[currentSlide].dates}
            </p>
            <p className="text-xl md:text-2xl text-accent-foreground font-gabarito">
              {slides[currentSlide].location}
            </p>
            <p className="text-3xl md:text-4xl text-accent font-semibold font-gabarito">
              {slides[currentSlide].time}
            </p>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-foreground hover:text-accent hover:bg-accent/20"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-foreground hover:text-accent hover:bg-accent/20"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-accent w-8"
                : "bg-accent-foreground/50 hover:bg-accent-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
