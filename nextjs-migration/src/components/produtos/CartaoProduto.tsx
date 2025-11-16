import Link from "next/link";
import { Produto } from "@/types/produto.types";
import { Card, CardContent } from "@/components/ui/card";

interface CartaoProdutoProps {
  produto: Produto;
}

export const CartaoProduto = ({ produto }: CartaoProdutoProps) => {
  return (
    <Link href={`/produtos/${produto.slug}`}>
      <Card className="group overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover-lift">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {produto.destaque && (
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-sm">
                Destaque
              </div>
            )}
          </div>

          <div className="p-4 space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {produto.categoria}
            </p>
            <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {produto.nome}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {produto.descricao}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
