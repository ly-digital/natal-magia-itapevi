import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Music, Theater, Bus, Calendar as CalendarIcon, Clock, MapPin, Star } from "lucide-react";
import { BalletDancer, CircusTent, SantaHat, ParadinhaIcon, LibrasIcon } from "@/components/icons/CustomIcons";
import evento1 from "@/assets/evento-1.png";
import evento2 from "@/assets/evento-2.png";
import evento3 from "@/assets/evento-3.png";
import evento4 from "@/assets/evento-4.png";
import evento6 from "@/assets/evento-6.png";
import evento7 from "@/assets/evento-7.png";
import evento8 from "@/assets/evento-8.png";

// Estrutura de dados dos eventos (mesma do CalendarSection)
const attractions = [
  {
    id: 1,
    name: "Paradinha de Natal",
    date: "2025-11-04",
    time: "19:00",
    type: "paradinha",
    synopsis:
      "Desfile mágico com personagens natalinos pelas ruas de Itapevi, trazendo alegria e encantamento para toda a família.",
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
    synopsis:
      "Apresentação luminosa que transforma a rua em um cenário mágico de Natal, com efeitos especiais e música.",
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
    synopsis:
      "Encontro especial com o Papai Noel, onde crianças podem tirar fotos e entregar suas cartinhas com pedidos de Natal.",
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
    synopsis:
      "Uma apresentação de comédia e malabarismo com bonecos de neve brincalhões que disputam a atenção do público com travessuras hilárias.",
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
    synopsis:
      "Um balé encantador onde os brinquedos de uma loja de Natal ganham vida magicamente ao soar da meia-noite.",
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
  paradinha: Bus,
};

const types = [
  { id: "musica", label: "Música", icon: Music },
  { id: "teatro", label: "Teatro", icon: Theater },
  { id: "danca", label: "Dança", icon: BalletDancer },
  { id: "circo", label: "Circo", icon: CircusTent },
  { id: "papainoel", label: "Papai Noel", icon: SantaHat },
  { id: "paradinha", label: "Paradinha", icon: ParadinhaIcon },
];

const timeSlots = [
  { id: "morning", label: "Manhã (06:00-12:00)", start: 6, end: 12 },
  { id: "afternoon", label: "Tarde (12:00-18:00)", start: 12, end: 18 },
  { id: "evening", label: "Noite (18:00-00:00)", start: 18, end: 24 },
];

const ProgramacaoCompleta = () => {
  const [searchParams] = useSearchParams();
  const tipoFromUrl = searchParams.get("tipo");

  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");
  const [selectedType, setSelectedType] = useState(tipoFromUrl || "");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update selected type when URL parameter changes
  useEffect(() => {
    if (tipoFromUrl) {
      setSelectedType(tipoFromUrl);
    }
  }, [tipoFromUrl]);

  // Função para verificar se evento já passou
  const isEventPast = (dateStr: string, timeStr: string) => {
    const eventDate = new Date(`${dateStr}T${timeStr}`);
    return eventDate < new Date();
  };

  // Filtra e ordena eventos
  const filteredAttractions = useMemo(() => {
    let filtered = attractions.filter((attraction) => {
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

    // Ordena: próximos eventos primeiro, depois eventos passados
    const now = new Date();
    filtered.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);

      const isPastA = dateA < now;
      const isPastB = dateB < now;

      // Se um é futuro e outro é passado, futuro vem primeiro
      if (isPastA !== isPastB) {
        return isPastA ? 1 : -1;
      }

      // Se ambos são futuros ou ambos são passados, ordena por data
      return dateA.getTime() - dateB.getTime();
    });

    return filtered;
  }, [selectedDate, selectedTime, selectedType]);

  // Gera lista única de datas
  const availableDates = useMemo(() => {
    const dates = [...new Set(attractions.map((a) => a.date))].sort();
    return dates;
  }, []);

  // Eventos do dia selecionado ou próximo
  const eventsOfSelectedDay = useMemo(() => {
    if (selectedDate === "all") {
      // Pega a data mais próxima futura
      const now = new Date();
      const futureEvents = attractions.filter((a) => {
        const eventDate = new Date(`${a.date}T${a.time}`);
        return eventDate >= now;
      });
      if (futureEvents.length > 0) {
        const nextDate = futureEvents.sort((a, b) => {
          const dateA = new Date(`${a.date}T${a.time}`);
          const dateB = new Date(`${b.date}T${b.time}`);
          return dateA.getTime() - dateB.getTime();
        })[0].date;
        return attractions.filter((a) => a.date === nextDate).slice(0, 5);
      }
      return [];
    }
    return attractions.filter((a) => a.date === selectedDate).slice(0, 5);
  }, [selectedDate]);

  // Formata data para exibição
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-[#004731]">
      <Navigation />

      <main className="container mx-auto px-4 pt-40 pb-12 md:pt-32 md:pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navegação Lateral - Fixa no scroll */}
          <aside className="lg:w-80 lg:sticky lg:top-24 lg:self-start space-y-6">
            {/* Eventos do Dia */}
            {eventsOfSelectedDay.length > 0 && (
              <Card className="bg-[#004731] border-white/20 overflow-hidden">
                <div className="p-4 bg-[#006345]">
                  <h3 className="text-lg font-bold text-[#fbc942] font-effloresce">Eventos do dia</h3>
                </div>
                <div className="p-4 space-y-3">
                  {eventsOfSelectedDay.map((event) => {
                    const Icon = languageIcons[event.type as keyof typeof languageIcons] || Music;
                    return (
                      <Link
                        key={event.id}
                        to={`/evento/${event.id}`}
                        className="block p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-[#fbc942] flex-shrink-0 mt-1" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-white font-gabarito line-clamp-1">
                              {event.name}
                            </h4>
                            <p className="text-xs text-white/70 font-gabarito mt-1">{event.time}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Card>
            )}

            {/* Filtros - Categorias de Eventos */}
            <Card className="bg-[#004731] border-white/20 overflow-hidden">
              <div className="p-4 bg-[#006345]">
                <h3 className="text-lg font-bold text-[#fbc942] font-effloresce">Categorias</h3>
              </div>
              <div className="p-4">
                <TooltipProvider>
                  <div className="flex flex-wrap gap-3">
                    {types.map((type) => {
                      const Icon = type.icon;
                      return (
                        <Tooltip key={type.id}>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => setSelectedType(selectedType === type.id ? "" : type.id)}
                              className={`rounded-full w-12 h-12 flex items-center justify-center transition-colors ${
                                selectedType === type.id
                                  ? "bg-[#fbc942] text-[#7a1c18]"
                                  : "bg-white/10 text-white hover:bg-white/20"
                              }`}
                            >
                              <Icon className="w-6 h-6" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent
                            side="bottom"
                            className="bg-white text-[#7a1c18] font-gabarito font-semibold z-50"
                          >
                            <p>{type.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </TooltipProvider>
              </div>
            </Card>

            {/* Filtros - Data e Horário */}
            <Card className="bg-[#004731] border-white/20 overflow-hidden">
              <div className="p-4 bg-[#006345]">
                <h3 className="text-lg font-bold text-[#fbc942] font-effloresce">Filtros</h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#fbc942] font-gabarito mb-2 block">Data</label>
                  <Select value={selectedDate} onValueChange={setSelectedDate}>
                    <SelectTrigger className="bg-white/10 border-white/40 text-white font-gabarito hover:bg-white/15">
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
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#fbc942] font-gabarito mb-2 block">Horário</label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-white/10 border-white/40 text-white font-gabarito hover:bg-white/15">
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
                </div>
              </div>
            </Card>
          </aside>

          {/* Conteúdo Principal */}
          <div className="flex-1">
            {/* Cabeçalho */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-[#fbc942] font-effloresce mb-4">
                Programação completa
              </h1>
              <p className="text-white text-lg font-gabarito">
                Confira abaixo todos os dias e horários das atrações da Rua de Natal.
              </p>
            </div>

            {/* Grid de Eventos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAttractions.map((attraction) => {
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
                        <h3 className="text-xl text-[#fbc942] font-effloresce leading-tight font-bold">
                          {attraction.name}
                        </h3>

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
                            <span className="text-sm font-gabarito font-semibold leading-tight">
                              {attraction.location}
                            </span>
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

            {filteredAttractions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/70 text-lg font-gabarito">
                  Nenhuma atração encontrada com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramacaoCompleta;
