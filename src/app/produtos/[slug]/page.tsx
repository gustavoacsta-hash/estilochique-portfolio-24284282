import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { produtos } from "@/features/produtos/data/produtos.data";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { WhatsAppButton } from "./WhatsAppButton";

type Props = {
  params: { slug: string };
};

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

  return (
    <div className="min-h-screen py-12">
      <div className="container">
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
            <BreadcrumbPage>{produto.nome}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        <Link href="/produtos" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para produtos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <div className="aspect-[3/4] relative bg-muted">
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    fill
                    className="object-cover"
                    priority
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
                    Design atemporal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Versatilidade para diversas ocasiões
                  </li>
                </ul>
              </div>

              <WhatsAppButton produtoNome={produto.nome} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
