import sobreEstrelasImage from "@/assets/sobre-estrelas.webp";

export const AboutSection = () => {
  return (
    <section id="sobre" className="pt-0 pb-20 px-4 bg-[#7a1c18] relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex justify-center mb-8">
          <img
            src={sobreEstrelasImage}
            alt="Decoração de estrelas da Rua de Natal"
            className="max-w-full h-auto -mb-[150px]"
          />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-[#fbc942] text-center mb-12 font-effloresce">Sobre</h2>

        <div className="bg-[#006345] backdrop-blur-sm rounded-2xl p-8 md:p-16 border-2 border-[#fbc942]/30">
          <div className="space-y-2 text-white leading-relaxed font-gabarito text-lg md:text-xl text-center">
            <p>
              A <span className="text-[#fbc942] font-bold">Rua de Natal de Itapevi</span> chega à sua{" "}
              <span className="text-[#fbc942] font-bold">3ª edição</span> em dezembro de 2025, transformando a cidade em
              um grande palco de <span className="text-[#fbc942] font-bold">celebração, arte e encantamento</span>.
            </p>

            <p>
              De <span className="text-[#fbc942] font-bold">5 a 23 de dezembro</span>, o evento ocupa a{" "}
              <span className="text-[#fbc942] font-bold">Rua Leopoldina de Camargo</span> com mais de{" "}
              <span className="text-[#fbc942] font-bold">50 atrações artísticas</span> de{" "}
              <span className="text-[#fbc942] font-bold">circo, dança, teatro, música</span> e a tradicional{" "}
              <span className="text-[#fbc942] font-bold">chegada do Papai Noel</span>. O{" "}
              <span className="text-[#fbc942] font-bold">Espetáculo de Luzes</span> será apresentado diariamente, sempre
              às 19h.
            </p>

            <p>
              Entre as novidades deste ano, destaque para a{" "}
              <span className="text-[#fbc942] font-bold">Paradinha de Natal</span> — um cortejo cheio de brilho e
              alegria que parte da <span className="text-[#fbc942] font-bold">Praça 18 de Fevereiro</span>, percorre o{" "}
              <span className="text-[#fbc942] font-bold">novo calçadão</span> e convida o público a se juntar para
              realizar o <span className="text-[#fbc942] font-bold">acendimento da Rua</span> no{" "}
              <span className="text-[#fbc942] font-bold">Espetáculo de Luzes</span>.
            </p>

            <p>
              Com <span className="text-[#fbc942] font-bold">entrada gratuita e recursos de acessibilidade</span>, a{" "}
              <span className="text-[#fbc942] font-bold">Rua de Natal</span> convida toda a comunidade a se reunir e
              celebrar, com <span className="text-[#fbc942] font-bold">arte e cultura, a alegria do Natal</span> —
              porque juntos trazemos a magia.
            </p>

            <h3 className="text-[#fbc942] font-bold text-2xl md:text-3xl font-effloresce mt-4">Participe!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
