import { Toaster } from "@/shared/components/ui/toaster";
import { Toaster as Sonner } from "@/shared/components/ui/sonner";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/shared/components/layout/Layout";
import Home from "@/features/home/pages/Home";
import ListaProdutos from "@/features/produtos/pages/ListaProdutos";
import DetalhesProduto from "@/features/produtos/pages/DetalhesProduto";
import Sobre from "@/features/sobre/pages/Sobre";
import Contato from "@/features/contato/pages/Contato";
import NaoEncontrada from "@/pages/NaoEncontrada";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
