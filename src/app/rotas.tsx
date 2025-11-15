import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/features/home/pages/Home";
import ListaProdutos from "@/features/produtos/pages/ListaProdutos";
import DetalhesProduto from "@/features/produtos/pages/DetalhesProduto";
import Sobre from "@/features/sobre/pages/Sobre";
import Contato from "@/features/contato/pages/Contato";
import NaoEncontrada from "@/pages/NaoEncontrada";

export function Rotas() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/produtos/:slug" element={<DetalhesProduto />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </Layout>
  );
}
