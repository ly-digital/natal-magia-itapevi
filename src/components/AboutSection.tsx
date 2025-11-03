export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-[#7a1c18] relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-[#fbc942] text-center mb-12 font-effloresce">
          Sobre
        </h2>
        <div className="bg-[#006345] backdrop-blur-sm rounded-2xl p-8 md:p-16 border-2 border-[#fbc942]/30">
          <div className="space-y-6 text-white leading-relaxed font-gabarito text-lg md:text-xl text-center">
            <p>
              A <span className="text-[#fbc942] font-bold">Rua de Natal de Itapevi</span> chega à sua <span className="text-[#fbc942] font-bold">3ª edição</span> em dezembro de 2025, 
              transformando a cidade em um grande palco de celebração, arte e encantamento.
            </p>
            <p>
              Entre os dias <span className="text-[#fbc942] font-bold">5 e 23 de dezembro</span>, o evento ocupa a via pública com mais de 
              <span className="text-[#fbc942] font-bold"> 50 atrações artísticas</span>, reunindo espetáculos de circo, dança, teatro e música, 
              além da tradicional chegada do <span className="text-[#fbc942] font-bold">Papai Noel</span> e do emocionante <span className="text-[#fbc942] font-bold">Espetáculo de Luzes</span>, 
              apresentado diariamente.
            </p>
            <p>
              Totalmente <span className="text-[#fbc942] font-bold">gratuita</span> e voltada à comunidade local, a Rua de Natal é um festival 
              multilinguagem que celebra o espírito natalino por meio da arte, da convivência 
              e da valorização dos artistas e coletivos culturais da região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
