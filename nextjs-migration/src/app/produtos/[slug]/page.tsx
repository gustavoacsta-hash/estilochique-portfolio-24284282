import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { produtos } from "@/lib/produtos.data";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {
  params: { slug: string };
};

// Gerar metadata dinâmica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const produto = produtos.find((p) => p.slug === params.slug);
  
  if (!produto) {
    return {
      title: "Produto não encontrado - Estilo Chique",
    };
  }

  return {
    title: `${produto.nome} - Estilo Chique`,
    description: produto.descricao,
  };
}

// Gerar paths estáticos
export async function generateStaticParams() {
  return produtos.map((produto) => ({
    slug: produto.slug,
  }));
}

export default function DetalhesProdutoPage({ params }: Props) {
  const produto = produtos.find((p) => p.slug === params.slug);

  if (!produto) {
    notFound();
  }

  const enviarWhatsApp = () => {
    const mensagem = `Olá! Tenho interesse no produto: ${produto.nome}`;
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen py-24">
      <div className="container max-w-6xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/produtos">Produtos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{produto.nome}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Link
          href="/produtos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para produtos
        </Link>

        <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
          <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {produto.categoria}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                {produto.nome}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {produto.descricao}
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="font-semibold mb-4">Detalhes do Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Peça selecionada com materiais de alta qualidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Design atemporal e elegante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ideal para diversas ocasiões</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Acabamento impecável</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <Button 
                onClick={enviarWhatsApp} 
                size="lg" 
                className="w-full gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Fazer Pedido via WhatsApp
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Entre em contato para verificar disponibilidade e valores
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
