export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 font-effloresce">
          Sobre o Evento
        </h2>
        <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6 font-gabarito">
          <p>
            A Rua de Natal de Itapevi chega à sua 3ª edição em dezembro de 2025, 
            transformando a cidade em um grande palco de celebração, arte e encantamento. 
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
    </section>
  );
};
