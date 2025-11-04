import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Theater, Users, Tent, Gift, Bus, Calendar as CalendarIcon, Clock, Accessibility, Star } from "lucide-react";

// Eventos principais conforme PDF
const attractions = [
  {
    id: 1,
    name: "Paradinha de Natal",
    date: "05/12 a 23/12",
    time: "19h às 23h",
    type: "paradinha",
    description: "Desfile mágico com personagens natalinos pelas ruas de Itapevi, trazendo alegria e encantamento para toda a família.",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: 2,
    name: "Espetáculo de Luzes",
    date: "05/12 a 23/12",
    time: "Diariamente",
    type: "teatro",
    description: "Apresentação luminosa que transforma a rua em um cenário mágico de Natal, com efeitos especiais e música.",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: 3,
    name: "O Príncipe da Paz",
    date: "05/12 a 23/12",
    time: "Horários variados",
    type: "teatro",
    description: "Espetáculo teatral que conta a história do nascimento de Jesus de forma emocionante e envolvente.",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: 4,
    name: "Visita ao Papai Noel",
    date: "05/12 a 23/12",
    time: "19h às 23h",
    type: "papainoel",
    description: "Encontro especial com o Papai Noel, onde crianças podem tirar fotos e entregar suas cartinhas com pedidos de Natal.",
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
  const [selectedDate, setSelectedDate] = useState("all");
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
    const matchesDate = selectedDate === "all" || attraction.date === selectedDate;
    const matchesType = !selectedType || attraction.type === selectedType;
    return matchesDate && matchesType;
  });

  return (
    <section id="calendario" className="py-20 px-4 bg-[#006345]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <CalendarIcon className="w-10 h-10 md:w-12 md:h-12 text-[#fbc942]" />
          <h2 className="text-4xl md:text-6xl font-bold text-[#fbc942] text-center font-effloresce">
            Programação
          </h2>
        </div>
        <p className="text-center text-white text-lg md:text-xl mb-12 font-gabarito">
          Confira todas as atrações do festival
        </p>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-12 space-y-6">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <Button
              variant={selectedType === "" ? "default" : "outline"}
              onClick={() => setSelectedType("")}
              className={selectedType === "" ? "bg-[#fbc942] text-[#006345] hover:bg-[#fbc942]/90 rounded-full font-gabarito" : "bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full font-gabarito"}
            >
              <Star className="w-4 h-4 mr-2" />
              Todos
            </Button>
            {types.map((type) => {
              const Icon = languageIcons[type.id as keyof typeof languageIcons];
              return (
                <Button
                  key={type.id}
                  variant="outline"
                  onClick={() => setSelectedType(type.id)}
                  className={selectedType === type.id ? "bg-[#fbc942] text-[#006345] hover:bg-[#fbc942]/90 border-[#fbc942] rounded-full font-gabarito" : "bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full font-gabarito"}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {type.label}
                </Button>
              );
            })}
          </div>

          <div className="flex justify-start max-w-xs">
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="bg-transparent border-white/30 text-white font-gabarito">
                <SelectValue placeholder="Todas as datas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as datas</SelectItem>
                {dates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {date}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Attractions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredAttractions.map((attraction) => {
            const Icon = languageIcons[attraction.type as keyof typeof languageIcons] || Music;
            return (
              <Link key={attraction.id} to={`/evento/${attraction.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full bg-[#004731] border-[#fbc942]/30">
                  <div className="h-56 bg-gradient-to-br from-[#fbc942]/20 to-[#7a1c18]/20 flex items-center justify-center">
                    {Icon && <Icon className="w-24 h-24 text-[#fbc942]" />}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#fbc942] font-effloresce mb-2">{attraction.name}</CardTitle>
                    <Badge className="w-fit bg-[#fbc942]/20 text-[#fbc942] border border-[#fbc942]/50 font-gabarito">
                      {types.find((t) => t.id === attraction.type)?.label}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-white/80 font-gabarito">{attraction.description}</p>
                    <div className="flex items-center gap-2 text-white/70">
                      <CalendarIcon className="w-4 h-4" />
                      <span className="text-sm font-gabarito">{attraction.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-gabarito">{attraction.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#fbc942] pt-2">
                      <Accessibility className="w-4 h-4" />
                      <span className="text-sm font-gabarito font-medium">{attraction.accessibility}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {filteredAttractions.length === 0 && (
          <p className="text-center text-white/70 text-lg mt-12 font-gabarito">
            Nenhuma atração encontrada com os filtros selecionados.
          </p>
        )}
      </div>
    </section>
  );
};
