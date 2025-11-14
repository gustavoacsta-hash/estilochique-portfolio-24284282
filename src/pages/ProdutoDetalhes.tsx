import { useParams, Link, Navigate } from "react-router-dom";
import { produtos } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ProdutoDetalhes() {
  const { slug } = useParams();
  const produto = produtos.find((p) => p.slug === slug);

  if (!produto) {
    return <Navigate to="/produtos" replace />;
  }

  const enviarWhatsApp = () => {
    const mensagem = `Olá! Gostaria de fazer um pedido do produto: ${produto.nome}`;
    const telefone = "5511999999999"; // Substitua pelo seu número
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/produtos">Produtos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{produto.nome}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        <Link to="/produtos" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para produtos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <div className="aspect-[3/4] relative bg-muted">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                  {produto.destaque && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-sm">
                      Destaque
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {produto.categoria}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                {produto.nome}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {produto.descricao}
              </p>
            </div>

            <div className="border-t border-border/50 pt-8 space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Detalhes do Produto</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Tecidos de alta qualidade
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Corte e acabamento impecáveis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Disponível sob encomenda
                  </li>
                </ul>
              </div>

              <Button 
                onClick={enviarWhatsApp}
                size="lg" 
                className="w-full rounded-sm"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fazer Pedido no WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Entre em contato para consultar disponibilidade e tamanhos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
