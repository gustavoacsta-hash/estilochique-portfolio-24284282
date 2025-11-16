"use client";

import { useState, useMemo } from "react";
import { produtos } from "@/lib/produtos.data";
import { CATEGORIAS } from "@/lib/categorias";
import { CartaoProduto } from "./CartaoProduto";
import { FiltrosProduto } from "./FiltrosProduto";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PRODUTOS_POR_PAGINA = 12;

export function ListaProdutosClient() {
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
    <>
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
            onClick={irPaginaAnterior}
            disabled={paginaAtual === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          <span className="text-sm text-muted-foreground">
            Página {paginaAtual} de {totalPaginas}
          </span>

          <Button
            variant="outline"
            onClick={irProximaPagina}
            disabled={paginaAtual === totalPaginas}
            className="gap-2"
          >
            Próxima
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}
