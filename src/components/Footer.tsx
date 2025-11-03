import sponsorsLogo from "@/assets/sponsors-logos.png";

export const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-background/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent/20">
          <img
            src={sponsorsLogo}
            alt="Patrocinadores"
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-primary-foreground mt-10 text-sm font-gabarito">
          © 2025 Rua de Natal de Itapevi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
