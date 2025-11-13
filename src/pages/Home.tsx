import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Estilo Chique - Moda Elegante"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center space-y-8 px-4 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Elegância
            <br />
            Atemporal
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Descubra peças únicas que refletem seu estilo e personalidade
          </p>
          <Link to="/produtos">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 rounded-sm"
            >
              Explorar Coleção
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold">Qualidade Premium</h3>
              <p className="text-muted-foreground">
                Peças selecionadas com materiais nobres e acabamento impecável
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold">Exclusividade</h3>
              <p className="text-muted-foreground">
                Coleções limitadas que valorizam sua individualidade
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">
                Consultoria especializada para encontrar o look perfeito
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Pronta para elevar seu estilo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção e descubra peças que complementam perfeitamente seu guarda-roupa
          </p>
          <Link to="/produtos">
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 rounded-sm border-2"
            >
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
