"use client";

import { useState, useMemo } from "react";
import { produtos } from "@/features/produtos/data/produtos.data";
import { CartaoProduto } from "@/features/produtos/components/CartaoProduto";
import { FiltrosProduto } from "@/features/produtos/components/FiltrosProduto";
import { categorias } from "@/features/produtos/constants/categorias";
import { Button } from "@/components/ui/button";

export function ListaProdutosClient() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [textoBusca, setTextoBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 12;

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((produto) => {
      const correspondeCategoria =
        categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada;
      const correspondeBusca =
        textoBusca === "" ||
        produto.nome.toLowerCase().includes(textoBusca.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoBusca.toLowerCase());
      return correspondeCategoria && correspondeBusca;
    });
  }, [categoriaSelecionada, textoBusca]);

  const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
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
    setPaginaAtual((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irProximaPagina = () => {
    setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold">
              Nossa Coleção
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra peças exclusivas que combinam elegância e qualidade excepcional
            </p>
          </div>

          <FiltrosProduto
            categorias={categorias}
            categoriaSelecionada={categoriaSelecionada}
            aoMudarCategoria={mudarCategoria}
            textoBusca={textoBusca}
            aoMudarBusca={mudarBusca}
          />

          <div className="text-sm text-muted-foreground">
            {produtosFiltrados.length === 1
              ? "1 produto encontrado"
              : `${produtosFiltrados.length} produtos encontrados`}
          </div>

          {produtosPagina.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {produtosPagina.map((produto) => (
                <CartaoProduto key={produto.id} produto={produto} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 space-y-4">
              <p className="text-lg text-muted-foreground">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setCategoriaSelecionada("Todos");
                  setTextoBusca("");
                  setPaginaAtual(1);
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}

          {totalPaginas > 1 && (
            <div className="flex justify-center items-center gap-4 pt-8">
              <Button
                variant="outline"
                onClick={irPaginaAnterior}
                disabled={paginaAtual === 1}
              >
                Anterior
              </Button>
              <span className="text-sm text-muted-foreground">
                Página {paginaAtual} de {totalPaginas}
              </span>
              <Button
                variant="outline"
                onClick={irProximaPagina}
                disabled={paginaAtual === totalPaginas}
              >
                Próxima
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
