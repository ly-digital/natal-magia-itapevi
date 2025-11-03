import { MapPin, Calendar, Clock, Heart } from "lucide-react";

export const InformationSection = () => {
  const infos = [
    {
      icon: MapPin,
      title: "Localização",
      content: "Rua Leopoldina de Camargo, 260 - Itapevi",
    },
    {
      icon: Calendar,
      title: "Quando",
      content: "De 05 a 23 de dezembro",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Diariamente das 19h às 23h",
    },
    {
      icon: Heart,
      title: "Acessibilidade",
      content: "Entrada Gratuita e recursos de acessibilidade",
    },
  ];

  return (
    <section id="informacoes" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-16 font-effloresce">
          Informações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infos.map((info, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-[#006345]/20 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#006345] rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-[#fbc942]" />
                </div>
                <h3 className="text-xl font-bold text-[#7a1c18] font-gabarito">
                  {info.title}
                </h3>
                <p className="text-base text-[#006345] font-gabarito leading-relaxed">
                  {info.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
