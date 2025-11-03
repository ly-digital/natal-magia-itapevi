import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Music, Theater, Users, Tent, Gift, Bus } from "lucide-react";

// Mock data - replace with real data
const attractions = [
  {
    id: 1,
    name: "Espetáculo de Dança Natalina",
    date: "05/12",
    time: "19h",
    type: "danca",
    description: "Performance de dança com figurinos natalinos coloridos.",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: 2,
    name: "Paradinha de Natal",
    date: "05/12",
    time: "18h",
    type: "paradinha",
    description: "Desfile mágico com personagens natalinos pelas ruas.",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: 3,
    name: "Apresentação Circense",
    date: "06/12",
    time: "20h",
    type: "circo",
    description: "Circo com acrobacias e performances encantadoras.",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: 4,
    name: "Show Musical de Natal",
    date: "07/12",
    time: "19h",
    type: "musica",
    description: "Coral e banda tocando clássicos natalinos.",
    image: null,
    accessibility: "Acessível para todos",
  },
];

const languageIcons = {
  musica: Music,
  teatro: Theater,
  danca: Users,
  circo: Tent,
  papainoel: Gift,
  paradinha: Bus,
};

const languageColors = {
  musica: "bg-secondary text-white",
  teatro: "bg-accent text-foreground",
  danca: "bg-primary text-primary-foreground",
  circo: "bg-muted text-foreground",
  papainoel: "bg-accent text-foreground",
  paradinha: "bg-secondary text-white",
};

export const CalendarSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const dates = Array.from({ length: 19 }, (_, i) => {
    const day = i + 5;
    return `${day.toString().padStart(2, "0")}/12`;
  });

  const types = [
    { id: "musica", label: "Música" },
    { id: "teatro", label: "Teatro" },
    { id: "danca", label: "Dança" },
    { id: "circo", label: "Circo" },
    { id: "papainoel", label: "Papai Noel" },
    { id: "paradinha", label: "Paradinha" },
  ];

  const filteredAttractions = attractions.filter((attraction) => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !selectedDate || attraction.date === selectedDate;
    const matchesType = !selectedType || attraction.type === selectedType;
    return matchesSearch && matchesDate && matchesType;
  });

  return (
    <section id="calendario" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-16 font-effloresce">
          Programação
        </h2>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-16 space-y-8">
          <Input
            type="text"
            placeholder="Buscar atração..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto text-lg"
          />

          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedDate === "" ? "default" : "outline"}
              onClick={() => setSelectedDate("")}
              className="rounded-full"
            >
              Todas as datas
            </Button>
            {dates.slice(0, 10).map((date) => (
              <Button
                key={date}
                variant={selectedDate === date ? "default" : "outline"}
                onClick={() => setSelectedDate(date)}
                className="rounded-full"
              >
                {date}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedType === "" ? "default" : "outline"}
              onClick={() => setSelectedType("")}
              className="rounded-full"
            >
              Todas as linguagens
            </Button>
            {types.map((type) => {
              const Icon = languageIcons[type.id as keyof typeof languageIcons];
              return (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  onClick={() => setSelectedType(type.id)}
                  className="rounded-full gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {type.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Attractions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredAttractions.map((attraction) => {
            const Icon = languageIcons[attraction.type as keyof typeof languageIcons] || Music;
            return (
              <Link key={attraction.id} to={`/evento/${attraction.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full border-2">
                  <div className="h-56 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {Icon && <Icon className="w-24 h-24 text-primary" />}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{attraction.name}</CardTitle>
                      <Badge className={languageColors[attraction.type as keyof typeof languageColors]}>
                        {types.find((t) => t.id === attraction.type)?.label}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {attraction.date} às {attraction.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{attraction.description}</p>
                    <p className="text-xs text-primary font-medium">{attraction.accessibility}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {filteredAttractions.length === 0 && (
          <p className="text-center text-muted-foreground text-lg mt-12">
            Nenhuma atração encontrada com os filtros selecionados.
          </p>
        )}
      </div>
    </section>
  );
};
