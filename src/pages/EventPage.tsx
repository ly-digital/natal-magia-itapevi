import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import { Music, Theater, Bus } from "lucide-react";
import { BalletDancer, CircusTent, SantaHat } from "@/components/icons/CustomIcons";
import evento1 from "@/assets/evento-1.png";
import evento2 from "@/assets/evento-2.png";
import evento3 from "@/assets/evento-3.png";
import evento4 from "@/assets/evento-4.png";
import evento6 from "@/assets/evento-6.png";
import evento7 from "@/assets/evento-7.png";
import evento8 from "@/assets/evento-8.png";

// Mock data - replace with real data
const events = [
  {
    id: "1",
    name: "Paradinha de Natal",
    date: "04/11/2025",
    time: "19:00",
    type: "paradinha",
    description: "Desfile mágico com personagens natalinos pelas ruas de Itapevi, trazendo alegria e encantamento para toda a família.",
    fullDescription: "Um cortejo cheio de brilho e alegria que parte da Praça 18 de Fevereiro, percorre o novo calçadão e convida o público a se juntar para realizar o acendimento da Rua no Espetáculo de Luzes. É um desfile mágico com personagens natalinos pelas ruas, trazendo alegria e encantamento para toda a família.",
    location: "Praça 18 de Fevereiro",
    image: evento1,
    accessibility: "Interpretação em Libras disponível",
  },
  {
    id: "2",
    name: "Espetáculo de Luzes",
    date: "06/12/2025",
    time: "20:30",
    type: "teatro",
    description: "Apresentação luminosa que transforma a rua em um cenário mágico de Natal, com efeitos especiais e música.",
    fullDescription: "Esta apresentação luminosa transforma a Rua Leopoldina de Camargo em um cenário mágico de Natal, com efeitos especiais e música. É um show emocionante de luzes, apresentado diariamente, que celebra o acendimento da rua.",
    location: "Rua Leopoldina de Camargo, 260",
    image: evento2,
    accessibility: "Acessível para todos",
  },
  {
    id: "3",
    name: "O Príncipe da Paz",
    date: "07/12/2025",
    time: "19:30",
    type: "teatro",
    description: "Espetáculo teatral que conta a história do nascimento de Jesus de forma emocionante e envolvente.",
    fullDescription: "Uma apresentação teatral emocionante e envolvente que conta a história do nascimento de Jesus. É um espetáculo que utiliza arte, dança e figurinos para recontar a tradicional história do Natal, com foco na mensagem de união e esperança.",
    location: "Rua Leopoldina de Camargo, 260",
    image: evento3,
    accessibility: "Interpretação em Libras disponível",
  },
  {
    id: "4",
    name: "Visita ao Papai Noel",
    date: "08/12/2025",
    time: "18:00",
    type: "papainoel",
    description: "Encontro especial com o Papai Noel, onde crianças podem tirar fotos e entregar suas cartinhas com pedidos de Natal.",
    fullDescription: "Encontro mágico com o Papai Noel para fotos e conversas especiais. O Papai Noel estará disponível na Praça 18 de Fevereiro para receber todas as famílias e ouvir os desejos de Natal das crianças.",
    location: "Praça 18 de Fevereiro",
    image: evento4,
    accessibility: "Acessível para todos",
  },
  {
    id: "5",
    name: "Concerto de Natal",
    date: "10/12/2025",
    time: "20:00",
    type: "musica",
    description: "Apresentação musical com canções natalinas interpretadas por artistas locais.",
    fullDescription: "Um show com a participação de músicos e coralistas da região, que interpretam os grandes clássicos natalinos internacionais e brasileiros. É uma noite de harmonia e celebração para acender o espírito festivo através da música.",
    location: "Rua Leopoldina de Camargo, 260",
    image: evento6,
    accessibility: "Interpretação em Libras disponível",
  },
  {
    id: "6",
    name: "Batalha de Bonecos de Neve",
    date: "01/11/2025",
    time: "07:00",
    type: "circo",
    description: "Uma apresentação de comédia e malabarismo com bonecos de neve brincalhões que disputam a atenção do público com travessuras hilárias.",
    fullDescription: "Dois palhaços, vestidos como os mais desajeitados bonecos de neve, se enfrentam em uma 'batalha' de malabarismos com pinos, aros e bolas de Natal. Este é um show de circo com foco em comédia física e interação com a plateia, garantindo muitas risadas para as crianças e os adultos. O final surpresa inclui uma 'nevasca' artificial no local do evento.",
    location: "",
    image: evento7,
    accessibility: "Acessível para todos",
  },
  {
    id: "7",
    name: "A Dança dos Brinquedos",
    date: "24/12/2025",
    time: "15:00",
    type: "danca",
    description: "Um balé encantador onde os brinquedos de uma loja de Natal ganham vida magicamente ao soar da meia-noite.",
    fullDescription: "Prepare-se para ser transportado para um mundo de fantasia. Esta performance de balé clássico e contemporâneo apresenta a história da Fada Açucarada e seus brinquedos de madeira, que executam coreografias complexas e delicadas. É um espetáculo de dança com figurinos exuberantes e trilha sonora natalina, ideal para todas as idades, celebrando a imaginação e a magia dos presentes.",
    location: "",
    image: evento8,
    accessibility: "Interpretação em Libras disponível",
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

const languageColors = {
  musica: "bg-secondary text-white",
  teatro: "bg-accent text-foreground",
  danca: "bg-primary text-primary-foreground",
  circo: "bg-muted text-foreground",
  papainoel: "bg-accent text-foreground",
  paradinha: "bg-secondary text-white",
};

const typeLabels = {
  musica: "Música",
  teatro: "Teatro",
  danca: "Dança",
  circo: "Circo",
  papainoel: "Papai Noel",
  paradinha: "Paradinha",
};

export default function EventPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4 font-effloresce">
            Evento não encontrado
          </h1>
          <Link to="/#calendario">
            <Button variant="default">Voltar para Programação</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = languageIcons[event.type as keyof typeof languageIcons];
  const sameDayEvents = events.filter((e) => e.id !== id && e.date === event.date);
  
  // Get next day events
  const getNextDayEvents = () => {
    const currentDate = new Date(event.date.split('/').reverse().join('-'));
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    const nextDayStr = `${String(nextDay.getDate()).padStart(2, '0')}/${String(nextDay.getMonth() + 1).padStart(2, '0')}`;
    return events.filter((e) => e.id !== id && e.date === nextDayStr);
  };
  
  const nextDayEvents = getNextDayEvents();
  
  const eventTypes = [
    { id: "musica", label: "Música", icon: Music },
    { id: "teatro", label: "Teatro", icon: Theater },
    { id: "danca", label: "Dança", icon: BalletDancer },
    { id: "circo", label: "Circo", icon: CircusTent },
    { id: "papainoel", label: "Papai Noel", icon: SantaHat },
    { id: "paradinha", label: "Paradinha", icon: Bus },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 md:pt-24 pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cover Image */}
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden flex items-center justify-center">
              {Icon && <Icon className="w-32 h-32 md:w-40 md:h-40 text-primary" />}
            </div>

            {/* Event Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h1 className="text-4xl md:text-5xl font-bold text-primary font-effloresce">
                  {event.name}
                </h1>
                <Badge className={languageColors[event.type as keyof typeof languageColors]}>
                  {typeLabels[event.type as keyof typeof typeLabels]}
                </Badge>
              </div>

              {/* Event Details */}
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-effloresce">Sobre o Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{event.fullDescription}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {event.accessibility}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categorias de Eventos - Icons only horizontal */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-effloresce">Categorias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/programacao-completa" className="group relative">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white hover:border-[#7a1c18] transition-all cursor-pointer">
                        <Star className="w-5 h-5 text-foreground group-hover:text-[#7a1c18]" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-14 z-50 hidden group-hover:block">
                        <div className="bg-white text-[#7a1c18] px-3 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-gabarito font-semibold">
                          Todos os Eventos
                        </div>
                      </div>
                    </Link>
                    {eventTypes.map((type) => {
                      const TypeIcon = type.icon;
                      return (
                        <Link key={type.id} to={`/programacao-completa?tipo=${type.id}`} className="group relative">
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white hover:border-[#7a1c18] transition-all cursor-pointer">
                            <TypeIcon className="w-5 h-5 text-foreground group-hover:text-[#7a1c18]" />
                          </div>
                          <div className="absolute left-1/2 -translate-x-1/2 top-14 z-50 hidden group-hover:block">
                            <div className="bg-white text-[#7a1c18] px-3 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-gabarito font-semibold">
                              {type.label}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Eventos No Mesmo Dia */}
              {sameDayEvents.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-effloresce">Eventos no Mesmo Dia</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {sameDayEvents.map((sameDayEvent) => {
                      const SameDayIcon = languageIcons[sameDayEvent.type as keyof typeof languageIcons];
                      return (
                        <Link key={sameDayEvent.id} to={`/evento/${sameDayEvent.id}`}>
                          <Card className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-4">
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                                  {SameDayIcon && <SameDayIcon className="w-6 h-6 text-primary" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                                    {sameDayEvent.name}
                                  </h3>
                                  <p className="text-xs text-muted-foreground">
                                    {sameDayEvent.time}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </CardContent>
                </Card>
              )}

              {/* Eventos do Dia Seguinte */}
              {nextDayEvents.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-effloresce">Eventos do Dia Seguinte</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {nextDayEvents.map((nextEvent) => {
                      const NextIcon = languageIcons[nextEvent.type as keyof typeof languageIcons];
                      return (
                        <Link key={nextEvent.id} to={`/evento/${nextEvent.id}`}>
                          <Card className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-4">
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                                  {NextIcon && <NextIcon className="w-6 h-6 text-primary" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                                    {nextEvent.name}
                                  </h3>
                                  <p className="text-xs text-muted-foreground">
                                    {nextEvent.date} às {nextEvent.time}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
