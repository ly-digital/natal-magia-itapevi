import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Star } from "lucide-react";
import { Music, Theater, Users, Tent, Gift, Bus } from "lucide-react";

// Mock data - replace with real data
const events = [
  {
    id: "1",
    name: "Espetáculo de Luzes",
    date: "05/12",
    time: "19h",
    type: "musica",
    description: "Um espetáculo mágico de luzes que ilumina toda a rua, criando uma atmosfera encantadora para toda a família. As projeções coloridas dançam ao som de músicas natalinas, criando momentos inesquecíveis.",
    fullDescription: "O Espetáculo de Luzes é uma experiência sensorial única que transforma a Rua de Natal em um verdadeiro conto de fadas. Com tecnologia de ponta em projeção mapeada, as fachadas dos edifícios ganham vida com histórias natalinas animadas. O show acontece a cada hora e tem duração de 15 minutos, proporcionando múltiplas oportunidades para apreciar essa maravilha visual.",
    location: "Rua Principal",
    image: null,
    accessibility: "Acessível para todos",
  },
  {
    id: "2",
    name: "Papai Noel",
    date: "05/12",
    time: "19h",
    type: "papainoel",
    description: "Encontro com o Papai Noel para fotos e conversas.",
    fullDescription: "Uma oportunidade mágica para as crianças conhecerem o verdadeiro Papai Noel. Em sua casa especialmente decorada, ele receberá os pequenos para conversas acolhedoras, ouvirá os pedidos de Natal e estará disponível para fotos memoráveis.",
    location: "Casa do Papai Noel",
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
  const otherEvents = events.filter((e) => e.id !== id);
  const sameDayEvents = events.filter((e) => e.id !== id && e.date === event.date);
  
  const eventTypes = [
    { id: "musica", label: "Música", icon: Music },
    { id: "teatro", label: "Teatro", icon: Theater },
    { id: "danca", label: "Dança", icon: Users },
    { id: "circo", label: "Circo", icon: Tent },
    { id: "papainoel", label: "Papai Noel", icon: Gift },
    { id: "paradinha", label: "Paradinha", icon: Bus },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/#calendario">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Programação
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
          <div className="lg:col-span-1 space-y-6">
            {/* Categorias de Eventos */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl font-effloresce">Categorias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/#calendario">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2 bg-white/10 backdrop-blur-sm border-white/40 text-foreground hover:bg-white hover:text-[#7a1c18] transition-all"
                  >
                    <Star className="w-4 h-4" />
                    Todos os Eventos
                  </Button>
                </Link>
                {eventTypes.map((type) => {
                  const TypeIcon = type.icon;
                  return (
                    <Link key={type.id} to={`/#calendario?tipo=${type.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start gap-2 bg-white/10 backdrop-blur-sm border-white/40 text-foreground hover:bg-white hover:text-[#7a1c18] transition-all"
                      >
                        <TypeIcon className="w-4 h-4" />
                        {type.label}
                      </Button>
                    </Link>
                  );
                })}
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

            {/* Outros Eventos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-effloresce">Outros Eventos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {otherEvents.slice(0, 5).map((otherEvent) => {
                  const OtherIcon = languageIcons[otherEvent.type as keyof typeof languageIcons];
                  return (
                    <Link key={otherEvent.id} to={`/evento/${otherEvent.id}`}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                              {OtherIcon && <OtherIcon className="w-6 h-6 text-primary" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                                {otherEvent.name}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {otherEvent.date} às {otherEvent.time}
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
