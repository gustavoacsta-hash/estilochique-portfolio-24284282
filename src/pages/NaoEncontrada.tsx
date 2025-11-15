import { Link } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { Home } from "lucide-react";

export default function NaoEncontrada() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 animate-fade-in-up">
        <h1 className="font-serif text-9xl font-bold text-primary">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold">
          Página Não Encontrada
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button size="lg" className="mt-8">
            <Home className="mr-2 h-5 w-5" />
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
