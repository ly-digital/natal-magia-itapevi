import sponsorsLogo from "@/assets/sponsors-logos.png";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-background/10 p-6 rounded-lg">
          <img
            src={sponsorsLogo}
            alt="Patrocinadores"
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-primary-foreground mt-8 text-sm font-gabarito">
          © 2025 Rua de Natal de Itapevi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
