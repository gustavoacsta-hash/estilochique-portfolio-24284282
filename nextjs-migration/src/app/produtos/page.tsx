import { Metadata } from "next";
import { ListaProdutosClient } from "@/components/produtos/ListaProdutosClient";

export const metadata: Metadata = {
  title: "Produtos - Estilo Chique",
  description: "Explore nossa coleção completa de produtos. Peças elegantes e atemporais selecionadas especialmente para você.",
};

export default function ProdutosPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold">
            Nossa Coleção
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore peças cuidadosamente selecionadas para complementar seu estilo
          </p>
        </div>

        <ListaProdutosClient />
      </div>
    </main>
  );
}
