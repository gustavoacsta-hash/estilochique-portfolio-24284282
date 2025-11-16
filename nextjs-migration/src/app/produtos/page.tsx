import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos - Minha Loja",
  description: "Explore nossa coleção completa de produtos",
};

export default function ProdutosPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1>Produtos</h1>
        <p>Migre o conteúdo de src/features/produtos/pages/ListaProdutos.tsx para cá</p>
        <p>Lembre-se de criar um Client Component separado para a lógica de filtros e estado</p>
      </div>
    </main>
  );
}
