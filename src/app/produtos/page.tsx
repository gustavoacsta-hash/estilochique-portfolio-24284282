import { Metadata } from "next";
import { ListaProdutosClient } from "./ListaProdutosClient";

export const metadata: Metadata = {
  title: "Produtos - Estilo Chique",
  description: "Explore nossa coleção completa de produtos elegantes e atemporais.",
};

export default function ProdutosPage() {
  return <ListaProdutosClient />;
}
