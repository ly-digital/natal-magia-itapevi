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
    name: "Espetáculo de Luzes",
    date: "05/12",
    time: "19h",
    type: "musica",
    description: "Um espetáculo mágico de luzes que ilumina toda a rua.",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: 2,
    name: "Papai Noel",
    date: "05/12",
    time: "19h",
    type: "papainoel",
    description: "Encontro com o Papai Noel para fotos e conversas.",
    image: null,
    accessibility: "Acessível para todos",
  },
  // Add more attractions here
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
    <section id="calendario" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 font-effloresce">
          Programação
        </h2>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-12 space-y-6">
          <Input
            type="text"
            placeholder="Buscar atração..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />

          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedDate === "" ? "default" : "outline"}
              onClick={() => setSelectedDate("")}
              className="rounded-full"
            >
              Todas as datas
            </Button>
            {dates.map((date) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredAttractions.map((attraction) => {
            const Icon = languageIcons[attraction.type as keyof typeof languageIcons] || Music;
            return (
              <Link key={attraction.id} to={`/evento/${attraction.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {Icon && <Icon className="w-20 h-20 text-primary" />}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{attraction.name}</CardTitle>
                      <Badge className={languageColors[attraction.type as keyof typeof languageColors]}>
                        {types.find((t) => t.id === attraction.type)?.label}
                      </Badge>
                    </div>
                    <CardDescription>
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
