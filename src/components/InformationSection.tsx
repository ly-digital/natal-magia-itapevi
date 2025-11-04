import { MapPin, Calendar, Clock, User } from "lucide-react";

export const InformationSection = () => {
  const infos = [
    {
      icon: MapPin,
      title: "Localização",
      subtitle: "Rua Leopoldina de Camargo, 260 - Itapevi",
      content: "Em frente ao Ita Shopping",
    },
    {
      icon: Calendar,
      title: "Quando",
      subtitle: "De 05 a 23 de dezembro",
      content: "★ ENTRADA GRATUITA",
      highlight: true,
    },
    {
      icon: Clock,
      title: "Horário",
      subtitle: "Diariamente das 19h às 23h",
      content: "Confira a programação completa",
    },
    {
      icon: User,
      title: "Acessibilidade",
      subtitle: "Consulte programação",
      content: "",
    },
  ];

  return (
    <section id="informacoes" className="py-20 px-4 bg-[#006345]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infos.map((info, index) => (
            <div
              key={index}
              className="bg-[#004731] p-8 rounded-2xl border-2 border-[#fbc942]/30"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#fbc942d1] rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-8 h-8 text-[#fbc942]" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-2xl font-bold text-[#fbc942] font-effloresce">
                    {info.title}
                  </h3>
                  <p className="text-white font-bold font-gabarito text-lg">
                    {info.subtitle}
                  </p>
                  {info.content && (
                    <p className={`font-gabarito text-base ${info.highlight ? 'text-[#fbc942]' : 'text-white'}`}>
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
