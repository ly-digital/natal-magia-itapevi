import sponsorsLogo from "@/assets/sponsors-logos.png";

export const Footer = () => {
  return (
    <footer className="bg-[#7a1c18] py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm p-10 rounded-3xl border-2 border-[#fbc942]/30 shadow-2xl">
          <img
            src={sponsorsLogo}
            alt="Fomento, Apresentação, Patrocínio, Apoio, Produção e Realização"
            className="w-full h-auto"
          />
        </div>
        <div className="text-center mt-12 space-y-4">
          <p className="text-white text-lg font-gabarito">
            Siga-nos nas redes sociais: <a href="https://instagram.com/ruadenatalitapevi" target="_blank" rel="noopener noreferrer" className="text-[#fbc942] font-bold hover:underline">@ruadenatalitapevi</a>
          </p>
          <p className="text-white/90 text-base font-gabarito">
            © 2025 Rua de Natal de Itapevi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
