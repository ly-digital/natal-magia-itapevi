import sobreEstrelasImage from "@/assets/sobre-estrelas.webp";

export const AboutSection = () => {
  return (
    <section id="sobre" className="pt-0 pb-20 px-4 bg-[#7a1c18] relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex justify-center mb-8">
          <img 
            src={sobreEstrelasImage} 
            alt="Decoração de estrelas da Rua de Natal" 
            className="max-w-full h-auto -mb-6"
          />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-[#fbc942] text-center mb-12 font-effloresce">
          Sobre
        </h2>

        <div className="bg-[#006345] backdrop-blur-sm rounded-2xl p-8 md:p-16 border-2 border-[#fbc942]/30">
          <div className="space-y-6 text-white leading-relaxed font-gabarito text-lg md:text-xl text-center">
            <p>
              A <span className="text-[#fbc942] font-bold">Rua de Natal de Itapevi</span> chega à sua <span className="text-[#fbc942] font-bold">3ª edição</span>, em dezembro de 2025, 
              transformando a cidade em um grande palco de celebração, arte e encantamento.
            </p>
            <p>
              De <span className="text-[#fbc942] font-bold">5 a 23 de dezembro</span>, o evento ocupa a Rua Leopoldina de Camargo com mais de 
              <span className="text-[#fbc942] font-bold">50 atrações artísticas</span>. Com espetáculos de circo, dança, teatro e música, 
              a tradicional chegada do Papai Noel e o emocionante Espetáculo de Luzes, apresentado diariamente.
            </p>
            <p>
              Entre as novidades deste ano, destaque para a <span className="text-[#fbc942] font-bold">Paradinha de Natal</span> — um cortejo cheio de brilho e alegria 
              que parte da Praça 18 de Fevereiro, percorre o novo calçadão e convida o público a se juntar para realizar o acendimento da Rua no Espetáculo de Luzes.
            </p>
            <p>
              Com <span className="text-[#fbc942] font-bold">entrada gratuita e recursos de acessibilidade</span>, a Rua de Natal convida toda a comunidade 
              a se reunir e celebrar, com arte e cultura, a alegria do Natal — porque - juntos trazemos a magia. <span className="text-[#fbc942] font-bold">Participe!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
