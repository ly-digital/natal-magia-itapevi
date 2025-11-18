// Event types and data structure for Rua de Natal events
export interface Event {
  id: number;
  name: string;
  cia?: string;
  date: string;
  time: string;
  type: string;
  synopsis: string;
  location: string;
  hasLibras: boolean;
  image: string;
}

export const events: Event[] = [
  {
    id: 1,
    name: "Paradinha da Rua de Natal",
    cia: "",
    date: "2025-12-05",
    time: "18:00",
    type: "paradinha",
    synopsis: "Com muita música, brilho e alegria, a Paradinha da Rua de Natal abre o caminho da festa! Este ano, quem conduz o cortejo são as Guardiãs do Natal — Coralina, Bravalina, Risinho e Uny. Juntas, elas lideram o desfile pelas ruas do centro de Itapevi espalhando a magia.\n\nColorida e vibrante, a paradinha tem início na Praça 18 de Fevereiro e convida o público a seguir junto até a Rua de Natal, para a realização do Espetáculo de Luzes. Nesses dias especiais, após o acendimento da rua, as Guardiãs sobem ao palco para a performance 'O Despertar das Guardiãs'.",
    location: "Praça 18 de Fevereiro",
    hasLibras: true,
    image: "paradinha da rua de natal.jpg"
  },
  {
    id: 2,
    name: "Espetáculo de Luzes",
    cia: "",
    date: "2025-12-05",
    time: "19:00",
    type: "espetaculodeluzes",
    synopsis: "Diariamente a Rua de Natal ganha vida com vida com o Espetáculo de Luzes. A experiência imersiva e emocionante, transforma a rua em um cenário iluminado e repleto de encanto.\nEm 2025 quem conta essa história são as Guardiãs do Natal.  Elas convidam o público a embarcar nessa aventura até o grande momento do acendimento da Rua de Natal.",
    location: "Rua Leopoldina de Camargo, 260",
    hasLibras: true,
    image: "espetáculo de luzes.jpg"
  },
  {
    id: 3,
    name: "Chegada do Papai Noel",
    cia: "",
    date: "2025-12-05",
    time: "19:00",
    type: "papainoel",
    synopsis: "A Chegada do Papai Noel é o ponto alto das noites da Rua de Natal de Itapevi, e acontece logo após o Espetáculo de Luzes. O bom velhinho surge em meio ao brilho das luzes e à música, saudando o público. Após sua chegada, é oficialmente aberta a Vila do Natal — um espaço especialmente preparado para receber as crianças que desejam tirar fotos, entregar suas cartinhas e viver de perto a magia do Natal.",
    location: "Rua Leopoldina de Camargo, 260",
    hasLibras: true,
    image: "chegada do papai noel.jpg"
  },
  {
    id: 4,
    name: "Estupendo Circo di SóLadies",
    cia: "Circo di SóLadies | Nem SóLadies",
    date: "2025-12-05",
    time: "19:30",
    type: "circo",
    synopsis: "Após muito tempo trabalhando em diversos teatros e circos, cansades dos mandos e desmandos dos patrões, três palhaces decidem criar seu próprio circo e rodar pelo mundo. A adaptação de cenas clássicas do circo tradicional, música, poesia e interação com a plateia compõem as apresentações de Estupendo Circo di SóLadies, levando o universo feminino em sua trajetória cômica, para crianças, jovens e adultos.",
    location: "Praça 18 de Fevereiro",
    hasLibras: true,
    image: "CréditoSissyEiko_Estupendo02jpg - Circo di SóLadies e Nem SóLadies também!.jpg"
  },
  {
    id: 5,
    name: "Marcelo Nakamura",
    cia: "",
    date: "2025-12-05",
    time: "21:00",
    type: "musica",
    synopsis: "O cantor e compositor manauara Marcelo Nakamura apresenta um show autoral que destaca a diversidade rítmica e cultural da Amazônia, dialogando com diferentes expressões da música brasileira. O artista reúne influências do boi-bumbá, cumbia, beiradão, carimbó e brega, entre outros ritmos regionais, resultando em um espetáculo dançante e cheio de identidade. Acompanhado por uma banda completa, Marcelo Nakamura propõe uma experiência sonora que valoriza as tradições amazônicas ao mesmo tempo em que incorpora elementos contemporâneos, reafirmando seu compromisso com a difusão da música popular amazônica e brasileira.",
    location: "Rua Leopoldina de Camargo, 260",
    hasLibras: true,
    image: "AP1-1172-ts1759505840 - Marcelo Nakamura.jpg"
  }
  // More events would be added here from the full CSV
];
