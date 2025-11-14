import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  categorias: string[];
  categoriaSelecionada: string;
  aoMudarCategoria: (categoria: string) => void;
  textoBusca: string;
  aoMudarBusca: (texto: string) => void;
}

export const ProductFilters = ({
  categorias,
  categoriaSelecionada,
  aoMudarCategoria,
  textoBusca,
  aoMudarBusca,
}: ProductFiltersProps) => {
  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar produtos..."
          value={textoBusca}
          onChange={(e) => aoMudarBusca(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categorias.map((categoria) => (
          <Button
            key={categoria}
            variant={categoriaSelecionada === categoria ? "default" : "outline"}
            size="sm"
            onClick={() => aoMudarCategoria(categoria)}
            className={cn(
              "rounded-full transition-all",
              categoriaSelecionada === categoria
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            )}
          >
            {categoria}
          </Button>
        ))}
      </div>
    </div>
  );
};
