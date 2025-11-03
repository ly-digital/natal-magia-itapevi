import sponsorsLogo from "@/assets/sponsors-logos.png";

export const Footer = () => {
  return (
    <footer className="bg-primary py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm p-10 rounded-3xl border-2 border-accent/30 shadow-2xl">
          <img
            src={sponsorsLogo}
            alt="Fomento, Apresentação, Patrocínio, Apoio, Produção e Realização"
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-primary-foreground mt-12 text-base font-gabarito opacity-90">
          © 2025 Rua de Natal de Itapevi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
