import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Star, Languages, Share2 } from "lucide-react";
import { Music, Theater, Bus } from "lucide-react";
import { BalletDancer, CircusTent, SantaHat, ParadinhaIcon, LibrasIcon } from "@/components/icons/CustomIcons";
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
    accessibility: "Acessível com libras",
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
    accessibility: "Acessível com libras",
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
    accessibility: "Acessível com libras",
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
    accessibility: "Acessível com libras",
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
    { id: "paradinha", label: "Paradinha", icon: ParadinhaIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#004731] to-[#006345]">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-16">
        {/* Hero Section with Image */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          {event.image ? (
            <img 
              src={event.image} 
              alt={event.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#fbc942]/30 to-[#7a1c18]/30 flex items-center justify-center">
              {Icon && <Icon className="w-32 h-32 md:w-48 md:h-48 text-[#fbc942]/60" />}
            </div>
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#004731] via-[#004731]/50 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-6 left-4 md:left-8 z-10">
            <Link to="/programacao-completa">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[#7a1c18] transition-all shadow-xl"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
          
          {/* Event Badge */}
          <div className="absolute top-6 right-4 md:right-8 z-10">
            <Badge className="bg-[#fbc942] text-[#7a1c18] border-none font-gabarito font-bold text-sm px-4 py-2 shadow-xl">
              {typeLabels[event.type as keyof typeof typeLabels]}
            </Badge>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 -mt-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              {/* Event Title Card */}
              <Card className="bg-[#004731] border-[#fbc942]/30 border-2 shadow-2xl overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fbc942] font-effloresce mb-4 leading-tight">
                    {event.name}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl font-gabarito leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>

              {/* Event Details Card */}
              <Card className="bg-[#004731] border-white/20 shadow-xl">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-[#006345] rounded-lg">
                      <div className="w-12 h-12 bg-[#fbc942] rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-[#7a1c18]" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-gabarito">Data</p>
                        <p className="text-white font-bold text-lg font-gabarito">{event.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-[#006345] rounded-lg">
                      <div className="w-12 h-12 bg-[#fbc942] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#7a1c18]" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-gabarito">Horário</p>
                        <p className="text-white font-bold text-lg font-gabarito">{event.time}</p>
                      </div>
                    </div>
                    
                    {event.location && (
                      <div className="flex items-start gap-4 p-4 bg-[#006345] rounded-lg">
                        <div className="w-12 h-12 bg-[#fbc942] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[#7a1c18]" />
                        </div>
                        <div>
                          <p className="text-white/70 text-sm font-gabarito">Local</p>
                          <p className="text-white font-bold text-lg font-gabarito">{event.location}</p>
                        </div>
                      </div>
                    )}

                    {event.accessibility?.includes("libras") && (
                      <div className="flex items-start gap-4 p-4 bg-[#006345] rounded-lg">
                        <div className="w-12 h-12 bg-[#fbc942] rounded-full flex items-center justify-center flex-shrink-0">
                          <LibrasIcon className="w-6 h-6 text-[#7a1c18]" />
                        </div>
                        <div>
                          <p className="text-white/70 text-sm font-gabarito">Acessibilidade</p>
                          <p className="text-white font-bold text-lg font-gabarito">Libras</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Actions Card */}
              <Card className="bg-[#004731] border-[#fbc942]/30 border-2 shadow-xl sticky top-24 overflow-hidden">
                <CardHeader className="bg-[#006345] border-b border-white/10">
                  <CardTitle className="text-xl font-effloresce text-[#fbc942]">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3 bg-[#004731]">
                  <Button 
                    className="w-full bg-[#fbc942] text-[#7a1c18] hover:bg-white font-gabarito font-bold shadow-lg"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: event.name,
                          text: event.description,
                          url: window.location.href,
                        });
                      }
                    }}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar Evento
                  </Button>
                  
                  <Link to="/programacao-completa" className="block">
                    <Button 
                      variant="outline" 
                      className="w-full bg-white/10 border-white/40 text-white hover:bg-white hover:text-[#7a1c18] font-gabarito font-semibold"
                    >
                      Ver Todos os Eventos
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Outros Eventos do Dia */}
              {sameDayEvents.length > 0 && (
                <Card className="bg-[#004731] border-white/20 shadow-xl">
                  <CardHeader className="bg-[#006345] border-b border-white/10">
                    <CardTitle className="text-xl font-effloresce text-[#fbc942]">
                      Eventos no mesmo dia
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {sameDayEvents.map((sameDayEvent) => {
                      const SameDayIcon = languageIcons[sameDayEvent.type as keyof typeof languageIcons];
                      return (
                        <Link key={sameDayEvent.id} to={`/evento/${sameDayEvent.id}`}>
                          <div className="p-3 bg-[#006345] rounded-lg cursor-pointer">
                            <div className="flex gap-3 items-start">
                              <div className="w-10 h-10 bg-[#fbc942] rounded-lg flex items-center justify-center flex-shrink-0">
                                {SameDayIcon && <SameDayIcon className="w-5 h-5 text-[#7a1c18]" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-sm text-white font-gabarito line-clamp-2 mb-1">
                                  {sameDayEvent.name}
                                </h3>
                                <p className="text-xs text-white/70 font-gabarito">
                                  {sameDayEvent.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </CardContent>
                </Card>
              )}

              {/* Próximos Eventos */}
              {nextDayEvents.length > 0 && (
                <Card className="bg-[#004731] border-white/20 shadow-xl">
                  <CardHeader className="bg-[#006345] border-b border-white/10">
                    <CardTitle className="text-xl font-effloresce text-[#fbc942]">
                      Próximos Eventos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {nextDayEvents.map((nextEvent) => {
                      const NextIcon = languageIcons[nextEvent.type as keyof typeof languageIcons];
                      return (
                        <Link key={nextEvent.id} to={`/evento/${nextEvent.id}`}>
                          <div className="p-3 bg-[#006345] hover:bg-[#fbc942] rounded-lg transition-all hover:shadow-lg cursor-pointer group">
                            <div className="flex gap-3 items-start">
                              <div className="w-10 h-10 bg-[#fbc942] group-hover:bg-[#7a1c18] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                {NextIcon && <NextIcon className="w-5 h-5 text-[#7a1c18] group-hover:text-white" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-sm text-white group-hover:text-[#7a1c18] font-gabarito line-clamp-2 mb-1">
                                  {nextEvent.name}
                                </h3>
                                <p className="text-xs text-white/70 group-hover:text-[#7a1c18]/80 font-gabarito">
                                  {nextEvent.date} às {nextEvent.time}
                                </p>
                              </div>
                            </div>
                          </div>
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
