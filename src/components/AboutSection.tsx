export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-l-4 border-t-4 border-primary opacity-20 rounded-tl-3xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-r-4 border-b-4 border-primary opacity-20 rounded-br-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-16 font-effloresce">
          Sobre
        </h2>
        <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-primary/20">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6 font-gabarito text-lg">
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
      </div>
    </section>
  );
};
