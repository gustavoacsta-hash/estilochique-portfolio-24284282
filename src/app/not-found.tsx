import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary">
          404
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button size="lg" className="mt-4">
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
