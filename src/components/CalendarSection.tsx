import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Theater, Bus, Calendar as CalendarIcon, Clock, MapPin, Star } from "lucide-react";
import { BalletDancer, CircusTent, SantaHat, ParadinhaIcon, LibrasIcon } from "./icons/CustomIcons";
import evento1 from "@/assets/evento-1.png";
import evento2 from "@/assets/evento-2.png";
import evento3 from "@/assets/evento-3.png";
import evento4 from "@/assets/evento-4.png";
import evento6 from "@/assets/evento-6.png";
import evento7 from "@/assets/evento-7.png";
import evento8 from "@/assets/evento-8.png";

// Estrutura de dados dos eventos
// Para adicionar eventos, edite o arquivo attractions-data.ts ou importe via CSV
const attractions = [
  {
    id: 1,
    name: "Paradinha de Natal",
    date: "2025-11-04",
    time: "19:00",
    type: "paradinha",
    synopsis: "Desfile mágico com personagens natalinos pelas ruas de Itapevi, trazendo alegria e encantamento para toda a família.",
    location: "Praça 18 de Fevereiro",
    hasLibras: true,
    image: evento1,
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
    image: evento2,
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
    image: evento3,
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
    image: evento4,
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
    image: evento6,
  },
  {
    id: 6,
    name: "Batalha de Bonecos de Neve",
    date: "2025-11-01",
    time: "07:00",
    type: "circo",
    synopsis: "Uma apresentação de comédia e malabarismo com bonecos de neve brincalhões que disputam a atenção do público com travessuras hilárias.",
    location: "",
    hasLibras: false,
    image: evento7,
  },
  {
    id: 7,
    name: "A Dança dos Brinquedos",
    date: "2025-12-24",
    time: "15:00",
    type: "danca",
    synopsis: "Um balé encantador onde os brinquedos de uma loja de Natal ganham vida magicamente ao soar da meia-noite.",
    location: "",
    hasLibras: true,
    image: evento8,
  },
];

const languageIcons = {
  musica: Music,
  teatro: Theater,
  danca: BalletDancer,
  circo: CircusTent,
  papainoel: SantaHat,
  paradinha: ParadinhaIcon,
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
              className={selectedType === "" ? "bg-[#fbc942] text-[#7a1c18] hover:bg-white hover:text-[#7a1c18] border-none rounded-full font-gabarito font-semibold shadow-lg transition-all" : "bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-[#7a1c18] rounded-full font-gabarito transition-all"}
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
                  className={selectedType === type.id ? "bg-[#fbc942] text-[#7a1c18] hover:bg-white hover:text-[#7a1c18] border-none rounded-full font-gabarito font-semibold shadow-lg transition-all" : "bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-[#7a1c18] rounded-full font-gabarito transition-all"}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {type.label}
                </Button>
              );
            })}
          </div>

          {/* Dropdowns de data, horário e período */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="bg-white/10 backdrop-blur-sm border-white/40 text-white font-gabarito w-[200px] hover:bg-white/15 hover:border-white/60 transition-all">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Todas as datas" />
              </SelectTrigger>
              <SelectContent className="bg-white border-white/30 z-50">
                <SelectItem value="all">Todas as datas</SelectItem>
                {availableDates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {formatDate(date)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="bg-white/10 backdrop-blur-sm border-white/40 text-white font-gabarito w-[220px] hover:bg-white/15 hover:border-white/60 transition-all">
                <Clock className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Todos os horários" />
              </SelectTrigger>
              <SelectContent className="bg-white border-white/30 z-50">
                <SelectItem value="all">Todos os horários</SelectItem>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot.id} value={slot.id}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="bg-white/10 backdrop-blur-sm border-white/40 text-white font-gabarito w-[200px] hover:bg-white/15 hover:border-white/60 transition-all">
                <SelectValue placeholder="Filtrar por período" />
              </SelectTrigger>
              <SelectContent className="bg-white border-white/30 z-50">
                <SelectItem value="upcoming">Próximos eventos</SelectItem>
                <SelectItem value="past">Eventos passados</SelectItem>
                <SelectItem value="all">Todos os eventos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Attractions grid - Limitado a 4 eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {displayedAttractions.map((attraction) => {
            const Icon = languageIcons[attraction.type as keyof typeof languageIcons] || Music;
            const isPast = isEventPast(attraction.date, attraction.time);
            
            return (
              <Link key={attraction.id} to={`/evento/${attraction.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer h-full bg-[#004731] backdrop-blur-sm border-2 border-white/20 hover:border-[#fbc942] rounded-2xl">
                  {/* Imagem ou placeholder */}
                  <div className="relative h-48 overflow-hidden">
                    {attraction.image ? (
                      <img 
                        src={attraction.image} 
                        alt={attraction.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#fbc942]/30 to-[#7a1c18]/30 flex items-center justify-center">
                        <Icon className="w-20 h-20 text-[#fbc942]/60" />
                      </div>
                    )}
                    
                    {/* Badges sobrepostos na imagem */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <Badge className="bg-[#fbc942] text-[#7a1c18] border-none font-gabarito font-semibold shadow-lg">
                        {types.find((t) => t.id === attraction.type)?.label}
                      </Badge>
                      {isPast && (
                        <Badge className="bg-[#7a1c18] text-white border-none font-gabarito font-semibold shadow-lg">
                          Evento encerrado
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Conteúdo do card */}
                  <CardContent className="p-5 space-y-3">
                    <h3 className="text-xl text-[#fbc942] font-effloresce leading-tight font-bold">{attraction.name}</h3>
                    
                    <p className="text-sm text-white/90 font-gabarito line-clamp-2 leading-relaxed">
                      {attraction.synopsis}
                    </p>
                    
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2 text-white/80">
                        <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-gabarito font-semibold">{formatDate(attraction.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-gabarito font-semibold">{attraction.time}</span>
                      </div>
                      <div className="flex items-start gap-2 text-white/80">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-gabarito font-semibold leading-tight">{attraction.location}</span>
                      </div>
                    </div>

                    {attraction.hasLibras && (
                      <div className="pt-2">
                        <Badge className="bg-[#fbc942] text-[#7a1c18] border-none font-gabarito font-semibold">
                          <LibrasIcon className="w-3 h-3 mr-1" />
                          Libras
                        </Badge>
                      </div>
                    )}
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
              <Button className="bg-[#fbc942] text-[#7a1c18] hover:bg-[#fbc942]/90 hover:shadow-xl font-gabarito font-semibold text-lg px-8 py-6 rounded-full transition-all">
                Ver Programação Completa ({filteredAttractions.length} eventos)
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
