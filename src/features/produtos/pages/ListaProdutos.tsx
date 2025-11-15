import { useState, useMemo } from "react";
import { produtos } from "../data/produtos.data";
import { CATEGORIAS } from "../constants/categorias";
import { CartaoProduto } from "../components/CartaoProduto";
import { FiltrosProduto } from "../components/FiltrosProduto";
import { Button } from "@/shared/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PRODUTOS_POR_PAGINA = 12;

export default function ListaProdutos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [textoBusca, setTextoBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((produto) => {
      const combinaCategoria =
        categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada;
      const combinaBusca =
        produto.nome.toLowerCase().includes(textoBusca.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoBusca.toLowerCase());
      return combinaCategoria && combinaBusca;
    });
  }, [categoriaSelecionada, textoBusca]);

  const totalPaginas = Math.ceil(produtosFiltrados.length / PRODUTOS_POR_PAGINA);
  const indiceInicio = (paginaAtual - 1) * PRODUTOS_POR_PAGINA;
  const indiceFim = indiceInicio + PRODUTOS_POR_PAGINA;
  const produtosPagina = produtosFiltrados.slice(indiceInicio, indiceFim);

  const mudarCategoria = (categoria: string) => {
    setCategoriaSelecionada(categoria);
    setPaginaAtual(1);
  };

  const mudarBusca = (texto: string) => {
    setTextoBusca(texto);
    setPaginaAtual(1);
  };

  const irPaginaAnterior = () => {
    setPaginaAtual((anterior) => Math.max(anterior - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irProximaPagina = () => {
    setPaginaAtual((anterior) => Math.min(anterior + 1, totalPaginas));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold">
            Nossa Coleção
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore peças cuidadosamente selecionadas para complementar seu estilo
          </p>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <FiltrosProduto
            categorias={CATEGORIAS}
            categoriaSelecionada={categoriaSelecionada}
            aoMudarCategoria={mudarCategoria}
            textoBusca={textoBusca}
            aoMudarBusca={mudarBusca}
          />
        </div>

        <div className="mb-6 text-sm text-muted-foreground">
          {produtosFiltrados.length} {produtosFiltrados.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </div>

        {produtosPagina.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {produtosPagina.map((produto) => (
              <CartaoProduto key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              Nenhum produto encontrado com os filtros selecionados.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setCategoriaSelecionada("Todos");
                setTextoBusca("");
              }}
              className="mt-6"
            >
              Limpar Filtros
            </Button>
          </div>
        )}

        {totalPaginas > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={irPaginaAnterior}
              disabled={paginaAtual === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Página {paginaAtual} de {totalPaginas}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={irProximaPagina}
              disabled={paginaAtual === totalPaginas}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
