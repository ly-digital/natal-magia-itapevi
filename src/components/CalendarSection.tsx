import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Theater, Users, Tent, Gift, Bus, Calendar as CalendarIcon, Clock, MapPin, Star, Languages } from "lucide-react";

// Estrutura de dados dos eventos
// Para adicionar eventos, edite o arquivo attractions-data.ts ou importe via CSV
const attractions = [
  {
    id: 1,
    name: "Paradinha de Natal",
    date: "2025-12-05", // Formato: YYYY-MM-DD
    time: "19:00",
    type: "paradinha",
    synopsis: "Desfile mágico com personagens natalinos pelas ruas de Itapevi, trazendo alegria e encantamento para toda a família.",
    location: "Praça 18 de Fevereiro",
    hasLibras: true,
    image: null, // Imagem 800x600px (4:3)
  },
  {
    id: 2,
    name: "Espetáculo de Luzes",
    date: "2025-12-06",
    time: "20:30",
    type: "teatro",
    synopsis: "Apresentação luminosa que transforma a rua em um cenário mágico de Natal, com efeitos especiais e música.",
    location: "Rua Leopoldina de Camargo, 260",
    hasLibras: false,
    image: null,
  },
  {
    id: 3,
    name: "O Príncipe da Paz",
    date: "2025-12-07",
    time: "19:30",
    type: "teatro",
    synopsis: "Espetáculo teatral que conta a história do nascimento de Jesus de forma emocionante e envolvente.",
    location: "Rua Leopoldina de Camargo, 260",
    hasLibras: true,
    image: null,
  },
  {
    id: 4,
    name: "Visita ao Papai Noel",
    date: "2025-12-08",
    time: "18:00",
    type: "papainoel",
    synopsis: "Encontro especial com o Papai Noel, onde crianças podem tirar fotos e entregar suas cartinhas com pedidos de Natal.",
    location: "Praça 18 de Fevereiro",
    hasLibras: false,
    image: null,
  },
  {
    id: 5,
    name: "Concerto de Natal",
    date: "2025-12-10",
    time: "20:00",
    type: "musica",
    synopsis: "Apresentação musical com canções natalinas interpretadas por artistas locais.",
    location: "Rua Leopoldina de Camargo, 260",
    hasLibras: true,
    image: null,
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

export const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("upcoming"); // "upcoming", "past", "all"

  const types = [
    { id: "musica", label: "Música" },
    { id: "teatro", label: "Teatro" },
    { id: "danca", label: "Dança" },
    { id: "circo", label: "Circo" },
    { id: "papainoel", label: "Papai Noel" },
    { id: "paradinha", label: "Paradinha" },
  ];

  const timeSlots = [
    { id: "morning", label: "Manhã (06:00-12:00)", start: 6, end: 12 },
    { id: "afternoon", label: "Tarde (12:00-18:00)", start: 12, end: 18 },
    { id: "evening", label: "Noite (18:00-00:00)", start: 18, end: 24 },
  ];

  // Função para verificar se evento já passou
  const isEventPast = (dateStr: string, timeStr: string) => {
    const eventDate = new Date(`${dateStr}T${timeStr}`);
    return eventDate < new Date();
  };

  // Filtra e ordena eventos
  const filteredAttractions = useMemo(() => {
    let filtered = attractions.filter((attraction) => {
      const eventDateTime = new Date(`${attraction.date}T${attraction.time}`);
      const now = new Date();
      const isPast = eventDateTime < now;

      // Filtro de período (passados/próximos)
      if (selectedPeriod === "upcoming" && isPast) return false;
      if (selectedPeriod === "past" && !isPast) return false;

      // Filtro de data
      if (selectedDate !== "all" && attraction.date !== selectedDate) return false;

      // Filtro de tipo
      if (selectedType && attraction.type !== selectedType) return false;

      // Filtro de horário
      if (selectedTime !== "all") {
        const timeSlot = timeSlots.find((t) => t.id === selectedTime);
        if (timeSlot) {
          const eventHour = parseInt(attraction.time.split(":")[0]);
          if (eventHour < timeSlot.start || eventHour >= timeSlot.end) return false;
        }
      }

      return true;
    });

    // Ordena por data e hora
    filtered.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA.getTime() - dateB.getTime();
    });

    return filtered;
  }, [selectedDate, selectedTime, selectedType, selectedPeriod]);

  // Gera lista única de datas
  const availableDates = useMemo(() => {
    const dates = [...new Set(attractions.map((a) => a.date))].sort();
    return dates;
  }, []);

  // Formata data para exibição
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  // Limita para 4 eventos mais próximos na home
  const displayedAttractions = filteredAttractions.slice(0, 4);

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
          {/* Filtros de linguagem */}
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

          {/* Dropdowns de data e horário */}
          <div className="flex flex-wrap gap-4 justify-start">
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="bg-transparent border-white/30 text-white font-gabarito w-[200px]">
                <SelectValue placeholder="Todas as datas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as datas</SelectItem>
                {availableDates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {formatDate(date)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="bg-transparent border-white/30 text-white font-gabarito w-[220px]">
                <SelectValue placeholder="Todos os horários" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os horários</SelectItem>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot.id} value={slot.id}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Attractions grid - Limitado a 4 eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {displayedAttractions.map((attraction) => {
            const Icon = languageIcons[attraction.type as keyof typeof languageIcons] || Music;
            const isPast = isEventPast(attraction.date, attraction.time);
            
            return (
              <Link key={attraction.id} to={`/evento/${attraction.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full bg-[#004731] border-[#fbc942]/30 relative">
                  {isPast && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-red-600 text-white border-red-700 font-gabarito">
                        Evento Encerrado
                      </Badge>
                    </div>
                  )}
                  <div className="h-56 bg-gradient-to-br from-[#fbc942]/20 to-[#7a1c18]/20 flex items-center justify-center">
                    {Icon && <Icon className="w-24 h-24 text-[#fbc942]" />}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#fbc942] font-effloresce mb-2">{attraction.name}</CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="w-fit bg-[#fbc942]/20 text-[#fbc942] border border-[#fbc942]/50 font-gabarito">
                        {types.find((t) => t.id === attraction.type)?.label}
                      </Badge>
                      {attraction.hasLibras && (
                        <Badge className="w-fit bg-blue-600/20 text-blue-400 border border-blue-400/50 font-gabarito">
                          <Languages className="w-3 h-3 mr-1" />
                          Libras
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-white/80 font-gabarito line-clamp-3">{attraction.synopsis}</p>
                    <div className="flex items-center gap-2 text-white/70">
                      <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm font-gabarito">{formatDate(attraction.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm font-gabarito">{attraction.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/70">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-gabarito">{attraction.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {displayedAttractions.length === 0 && (
          <p className="text-center text-white/70 text-lg mt-12 font-gabarito">
            Nenhuma atração encontrada com os filtros selecionados.
          </p>
        )}

        {filteredAttractions.length > 4 && (
          <div className="text-center mt-8">
            <Link to="/programacao-completa">
              <Button className="bg-[#fbc942] text-[#006345] hover:bg-[#fbc942]/90 font-gabarito text-lg px-8 py-6">
                Ver Programação Completa ({filteredAttractions.length} eventos)
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
