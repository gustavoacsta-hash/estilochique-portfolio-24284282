import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// Gerar metadata dinâmica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Buscar produto com base no slug
  // const produto = produtos.find((p) => p.slug === params.slug);
  
  return {
    title: `Produto ${params.slug} - Minha Loja`,
    description: "Descrição do produto",
  };
}

// Gerar paths estáticos
export async function generateStaticParams() {
  // const produtos = await getProdutos();
  // return produtos.map((produto) => ({
  //   slug: produto.slug,
  // }));
  return [];
}

export default function DetalhesProdutoPage({ params }: Props) {
  // const produto = produtos.find((p) => p.slug === params.slug);
  // if (!produto) notFound();

  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1>Detalhes do Produto: {params.slug}</h1>
        <p>Migre o conteúdo de src/features/produtos/pages/DetalhesProduto.tsx para cá</p>
      </div>
    </main>
  );
}
