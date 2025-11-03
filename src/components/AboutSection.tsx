export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-16 border-2 border-accent/30">
          <h2 className="text-4xl md:text-6xl font-bold text-accent text-center mb-12 font-effloresce">
            Sobre
          </h2>
          <div className="space-y-6 text-primary-foreground leading-relaxed font-gabarito text-lg md:text-xl text-center">
            <p>
              A Rua de Natal de Itapevi chega à sua 3ª edição em dezembro de 2025, 
              transformando a cidade em um grande palco de celebração, arte e encantamento.
            </p>
            <p>
              Entre os dias 5 e 23 de dezembro, o evento ocupa a via pública com mais de 
              50 atrações artísticas, reunindo espetáculos de circo, dança, teatro e música, 
              além da tradicional chegada do Papai Noel e do emocionante Espetáculo de Luzes, 
              apresentado diariamente.
            </p>
            <p>
              Totalmente gratuita e voltada à comunidade local, a Rua de Natal é um festival 
              multilinguagem que celebra o espírito natalino por meio da arte, da convivência 
              e da valorização dos artistas e coletivos culturais da região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
