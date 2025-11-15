# Guia Completo de Migração: Vite + React → Next.js 14 (App Router)

Este guia detalha como migrar seu projeto de e-commerce "Estilo Chique" de Vite + React para Next.js 14 com App Router.

---

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Estrutura de Pastas](#estrutura-de-pastas)
3. [Configuração Inicial](#configuração-inicial)
4. [Migração de Componentes](#migração-de-componentes)
5. [Migração de Páginas](#migração-de-páginas)
6. [Roteamento](#roteamento)
7. [Imagens e Assets](#imagens-e-assets)
8. [Metadados e SEO](#metadados-e-seo)
9. [Styling](#styling)
10. [Checklist Final](#checklist-final)

---

## 🔧 Pré-requisitos

### 1. Criar novo projeto Next.js

```bash
npx create-next-app@latest estilo-chique-nextjs
```

Escolha as seguintes opções:
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ `src/` directory: Yes
- ✅ App Router: Yes
- ✅ Import alias: Yes (@/*)

### 2. Instalar dependências necessárias

```bash
cd estilo-chique-nextjs
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install @tanstack/react-query
npm install sonner
npm install tailwindcss-animate
```

---

## 📁 Estrutura de Pastas

### Estrutura Atual (Vite + React)
```
src/
├── features/
│   ├── home/pages/Home.tsx
│   ├── produtos/pages/ListaProdutos.tsx
│   ├── produtos/pages/DetalhesProduto.tsx
│   ├── sobre/pages/Sobre.tsx
│   └── contato/pages/Contato.tsx
├── shared/
│   ├── components/
│   └── utils/
├── assets/
└── App.tsx
```

### Nova Estrutura (Next.js 14)
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── produtos/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── sobre/
│   │   └── page.tsx
│   └── contato/
│       └── page.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   └── features/
│       ├── home/
│       ├── produtos/
│       ├── sobre/
│       └── contato/
├── lib/
│   └── utils.ts
└── public/
    └── images/
```

---

## ⚙️ Configuração Inicial

### 1. tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 2. src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 3. src/lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🧩 Migração de Componentes

### Componentes UI (shadcn)

Todos os componentes em `src/shared/components/ui/` podem ser copiados diretamente para `src/components/ui/`.

**Única mudança necessária:** Atualizar imports de `@/shared/utils/cn` para `@/lib/utils`:

```typescript
// Antes (Vite)
import { cn } from "@/shared/utils/cn";

// Depois (Next.js)
import { cn } from "@/lib/utils";
```

### Componentes de Layout

#### src/components/layout/Layout.tsx

```typescript
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { LinkNavegacao } from "./LinkNavegacao";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="font-serif text-xl font-bold">Estilo Chique</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <LinkNavegacao href="/">Home</LinkNavegacao>
            <LinkNavegacao href="/produtos">Produtos</LinkNavegacao>
            <LinkNavegacao href="/sobre">Sobre</LinkNavegacao>
            <LinkNavegacao href="/contato">Contato</LinkNavegacao>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/50 bg-muted/50 py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">Estilo Chique</h3>
              <p className="text-sm text-muted-foreground">
                Moda feminina elegante e atemporal para todas as ocasiões.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/produtos" className="text-muted-foreground hover:text-foreground transition-colors">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@estilochique.com.br</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Estilo Chique. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

**⚠️ IMPORTANTE:** Adicione `"use client"` porque usa hooks do React Router (que agora será navegação client-side).

#### src/components/layout/LinkNavegacao.tsx

```typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface LinkNavegacaoProps {
  href: string;
  children: React.ReactNode;
}

export function LinkNavegacao({ href, children }: LinkNavegacaoProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground/80",
        isActive ? "text-foreground" : "text-foreground/60"
      )}
    >
      {children}
    </Link>
  );
}
```

**Mudanças principais:**
- `useLocation()` do React Router → `usePathname()` do Next.js
- `Link` do React Router → `Link` do Next.js
- `to` → `href`

---

## 📄 Migração de Páginas

### 1. Root Layout - src/app/layout.tsx

```typescript
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/QueryProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Estilo Chique - Moda Feminina Elegante",
  description: "Descubra moda feminina elegante e atemporal. Vestidos, blusas, calças e acessórios sofisticados para todas as ocasiões.",
  keywords: ["moda feminina", "roupas elegantes", "vestidos", "moda sofisticada"],
  authors: [{ name: "Estilo Chique" }],
  openGraph: {
    title: "Estilo Chique - Moda Feminina Elegante",
    description: "Descubra moda feminina elegante e atemporal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <QueryProvider>
          <TooltipProvider>
            <Layout>{children}</Layout>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
```

### 2. QueryProvider - src/components/providers/QueryProvider.tsx

```typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

### 3. Home Page - src/app/page.tsx

```typescript
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Estilo Chique - Moda Feminina Elegante e Atemporal",
  description: "Descubra nossa coleção exclusiva de moda feminina. Vestidos, blusas, calças e acessórios sofisticados para mulheres que valorizam qualidade e elegância.",
  openGraph: {
    title: "Estilo Chique - Moda Feminina Elegante",
    description: "Descubra nossa coleção exclusiva de moda feminina.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-image.jpg"
          alt="Coleção de moda feminina elegante e sofisticada"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold animate-fade-in-up">
            Elegância Atemporal
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Descubra peças únicas que expressam sua personalidade
          </p>
          <Link href="/produtos">
            <Button size="lg" className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Ver Coleção
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Qualidade Premium</h3>
                <p className="text-muted-foreground">
                  Selecionamos apenas os melhores tecidos e materiais para garantir durabilidade e conforto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Entrega Segura</h3>
                <p className="text-muted-foreground">
                  Suas compras chegam com segurança e no prazo, garantindo sua satisfação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Atendimento Personalizado</h3>
                <p className="text-muted-foreground">
                  Nossa equipe está sempre pronta para ajudar você a encontrar as peças perfeitas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Pronta para renovar seu guarda-roupa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção completa e encontre peças que combinam perfeitamente com seu estilo.
          </p>
          <Link href="/produtos">
            <Button size="lg">
              Explorar Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
```

**Mudanças principais:**
- Exportar `metadata` para SEO
- Usar `Image` do Next.js com `fill` e `sizes`
- `Link` do Next.js com `href`
- Não precisa de `"use client"` (é Server Component por padrão)

### 4. Produtos Page - src/app/produtos/page.tsx

```typescript
import type { Metadata } from "next";
import { ListaProdutosClient } from "@/components/features/produtos/ListaProdutosClient";

export const metadata: Metadata = {
  title: "Produtos - Estilo Chique",
  description: "Explore nossa coleção completa de moda feminina: vestidos elegantes, blusas sofisticadas, calças versáteis e acessórios exclusivos.",
  openGraph: {
    title: "Produtos - Estilo Chique",
    description: "Explore nossa coleção completa de moda feminina elegante.",
  },
};

export default function ProdutosPage() {
  return <ListaProdutosClient />;
}
```

#### src/components/features/produtos/ListaProdutosClient.tsx

```typescript
"use client";

import { useState, useMemo } from "react";
import { produtos } from "@/lib/data/produtos";
import { CartaoProduto } from "./CartaoProduto";
import { FiltrosProduto } from "./FiltrosProduto";
import { Button } from "@/components/ui/button";

const PRODUTOS_POR_PAGINA = 9;

export function ListaProdutosClient() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");
  const [textoBusca, setTextoBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((produto) => {
      const matchCategoria =
        categoriaSelecionada === "todas" ||
        produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase();

      const matchBusca =
        textoBusca === "" ||
        produto.nome.toLowerCase().includes(textoBusca.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoBusca.toLowerCase());

      return matchCategoria && matchBusca;
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

  const mudarBusca = (busca: string) => {
    setTextoBusca(busca);
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
        <div className="space-y-4 mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Nossa Coleção</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Descubra peças únicas que combinam elegância e sofisticação.
          </p>
        </div>

        <FiltrosProduto
          categoriaSelecionada={categoriaSelecionada}
          textoBusca={textoBusca}
          onCategoriaChange={mudarCategoria}
          onBuscaChange={mudarBusca}
        />

        <div className="mb-6 text-sm text-muted-foreground">
          {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} encontrado
          {produtosFiltrados.length !== 1 ? "s" : ""}
        </div>

        {produtosPagina.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {produtosPagina.map((produto) => (
                <CartaoProduto key={produto.id} produto={produto} />
              ))}
            </div>

            {totalPaginas > 1 && (
              <div className="flex justify-center items-center gap-4">
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
          </>
        ) : (
          <div className="text-center py-12 space-y-4">
            <p className="text-lg text-muted-foreground">
              Nenhum produto encontrado com os filtros selecionados.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setCategoriaSelecionada("todas");
                setTextoBusca("");
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
```

**⚠️ IMPORTANTE:** Separe em Server Component (page.tsx) e Client Component (ListaProdutosClient.tsx) porque usa `useState`.

### 5. Detalhes do Produto - src/app/produtos/[slug]/page.tsx

```typescript
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { produtos } from "@/lib/data/produtos";
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
import { WhatsAppButton } from "@/components/features/produtos/WhatsAppButton";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const produto = produtos.find((p) => p.slug === params.slug);

  if (!produto) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: `${produto.nome} - Estilo Chique`,
    description: produto.descricao,
    openGraph: {
      title: produto.nome,
      description: produto.descricao,
      images: [produto.imagem],
    },
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

        <Link
          href="/produtos"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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
```

#### src/components/features/produtos/WhatsAppButton.tsx

```typescript
"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  produtoNome: string;
}

export function WhatsAppButton({ produtoNome }: WhatsAppButtonProps) {
  const enviarWhatsApp = () => {
    const mensagem = `Olá! Gostaria de fazer um pedido do produto: ${produtoNome}`;
    const telefone = "5511999999999";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <Button size="lg" onClick={enviarWhatsApp} className="w-full">
      <MessageCircle className="mr-2 h-5 w-5" />
      Fazer Pedido via WhatsApp
    </Button>
  );
}
```

**Recursos do Next.js usados:**
- `generateMetadata` - SEO dinâmico
- `generateStaticParams` - Pre-render de páginas estáticas
- `notFound()` - Página 404
- Dynamic routing com `[slug]`

### 6. Página Sobre - src/app/sobre/page.tsx

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Estilo Chique",
  description: "Conheça a história da Estilo Chique, nossa filosofia de moda atemporal e os valores que nos guiam na criação de peças elegantes e sofisticadas.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <div className="space-y-4 mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Nossa História</h1>
          <p className="text-lg text-muted-foreground">
            Elegância que transcende o tempo
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Bem-vinda à Estilo Chique
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Há mais de uma década, a Estilo Chique nasceu com um propósito claro: trazer
              elegância atemporal para o guarda-roupa de mulheres que valorizam qualidade,
              sofisticação e autenticidade. Cada peça da nossa coleção é cuidadosamente
              selecionada para proporcionar não apenas um visual impecável, mas também
              conforto e confiança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">Nossa Filosofia</h2>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que a verdadeira elegância está na simplicidade e na atenção aos
              detalhes. Nosso compromisso é oferecer peças versáteis que se adaptam ao seu
              estilo de vida, permitindo que você expresse sua personalidade única em cada
              ocasião.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">Nossos Valores</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Qualidade Superior:</strong> Selecionamos apenas os melhores
                  tecidos e materiais para garantir durabilidade e conforto.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Design Atemporal:</strong> Criamos peças que transcendem as
                  tendências passageiras, acompanhando você por muitas estações.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Atendimento Personalizado:</strong> Cada cliente é única, e
                  nosso objetivo é proporcionar uma experiência de compra excepcional.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Sustentabilidade:</strong> Comprometemo-nos com práticas
                  responsáveis em toda a nossa cadeia de produção.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Experiência Personalizada
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Na Estilo Chique, entendemos que cada mulher tem seu estilo único. Por isso,
              oferecemos atendimento personalizado para ajudá-la a encontrar as peças
              perfeitas que realçam sua beleza natural e se adequam ao seu estilo de vida.
            </p>
          </section>

          <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground my-12">
            "A elegância é a única beleza que nunca se desvanece."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
```

### 7. Página Contato - src/app/contato/page.tsx

Similar às outras páginas, adicione `metadata` e converta para Server Component ou Client Component conforme necessário.

### 8. Página 404 - src/app/not-found.tsx

```typescript
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 animate-fade-in-up">
        <h1 className="font-serif text-9xl font-bold text-primary">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold">
          Página Não Encontrada
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button size="lg" className="mt-8">
            <Home className="mr-2 h-5 w-5" />
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
```

---

## 🖼️ Imagens e Assets

### Migração de Imagens

1. **Mova as imagens** de `src/assets/` para `public/images/`
2. **Atualize todos os imports**:

```typescript
// ❌ Antes (Vite)
import heroImage from "@/assets/hero-image.jpg";
<img src={heroImage} alt="Hero" />

// ✅ Depois (Next.js)
import Image from "next/image";
<Image src="/images/hero-image.jpg" alt="Hero" fill className="object-cover" />
```

### Componente CartaoProduto com Next.js Image

```typescript
"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Produto } from "@/lib/types/produto";

interface CartaoProdutoProps {
  produto: Produto;
}

export function CartaoProduto({ produto }: CartaoProdutoProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-border transition-colors">
      <CardContent className="p-0">
        <Link href={`/produtos/${produto.slug}`}>
          <div className="aspect-[3/4] relative bg-muted overflow-hidden">
            <Image
              src={produto.imagem}
              alt={produto.nome}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {produto.destaque && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-sm">
                Destaque
              </div>
            )}
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <div className="space-y-2 flex-1 w-full">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {produto.categoria}
          </p>
          <Link href={`/produtos/${produto.slug}`}>
            <h3 className="font-serif text-xl font-semibold hover:text-primary transition-colors">
              {produto.nome}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {produto.descricao}
          </p>
        </div>
        <Link href={`/produtos/${produto.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
```

---

## 🔍 Metadados e SEO

### Metadados Estáticos

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Título da Página",
  description: "Descrição da página",
  keywords: ["palavra1", "palavra2"],
  openGraph: {
    title: "Título OG",
    description: "Descrição OG",
    images: ["/images/og-image.jpg"],
  },
};
```

### Metadados Dinâmicos

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const produto = await getProduto(params.slug);
  
  return {
    title: `${produto.nome} - Estilo Chique`,
    description: produto.descricao,
    openGraph: {
      title: produto.nome,
      description: produto.descricao,
      images: [produto.imagem],
    },
  };
}
```

---

## 🎨 Styling

O Tailwind CSS funciona da mesma forma no Next.js. Apenas certifique-se de:

1. Copiar todo o conteúdo de `src/index.css` para `src/app/globals.css`
2. Copiar `tailwind.config.ts` (já mostrado acima)
3. Importar `globals.css` no `layout.tsx`

---

## ✅ Checklist Final

### Configuração
- [ ] Criar projeto Next.js com App Router
- [ ] Instalar todas as dependências
- [ ] Configurar `tailwind.config.ts`
- [ ] Configurar `globals.css`
- [ ] Criar `src/lib/utils.ts`

### Componentes
- [ ] Migrar componentes UI de `src/shared/components/ui/` → `src/components/ui/`
- [ ] Atualizar imports de `@/shared/utils/cn` → `@/lib/utils`
- [ ] Adicionar `"use client"` em componentes interativos
- [ ] Migrar Layout e LinkNavegacao
- [ ] Atualizar `Link` e `useLocation` → `usePathname`

### Páginas
- [ ] Criar `src/app/layout.tsx` com fontes e providers
- [ ] Criar `src/app/page.tsx` (Home)
- [ ] Criar `src/app/produtos/page.tsx`
- [ ] Criar `src/app/produtos/[slug]/page.tsx`
- [ ] Criar `src/app/sobre/page.tsx`
- [ ] Criar `src/app/contato/page.tsx`
- [ ] Criar `src/app/not-found.tsx`
- [ ] Adicionar `metadata` em todas as páginas

### Imagens e Assets
- [ ] Mover imagens para `public/images/`
- [ ] Substituir `<img>` por `<Image>` do Next.js
- [ ] Adicionar propriedades `fill`, `sizes`, e `priority` conforme necessário

### Dados
- [ ] Mover `produtos.data.ts` para `src/lib/data/`
- [ ] Mover types para `src/lib/types/`
- [ ] Mover constants para `src/lib/constants/`

### Funcionalidades
- [ ] Testar todas as rotas
- [ ] Verificar navegação entre páginas
- [ ] Testar filtros e busca de produtos
- [ ] Verificar botão WhatsApp
- [ ] Testar responsividade
- [ ] Verificar SEO (meta tags)

### Deploy
- [ ] Testar build local: `npm run build`
- [ ] Testar preview: `npm start`
- [ ] Deploy no Vercel: `vercel deploy`

---

## 🚀 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar build localmente
npm start

# Lint
npm run lint

# Deploy no Vercel
vercel deploy
```

---

## 📚 Recursos Adicionais

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

## ⚠️ Diferenças Importantes

| Recurso | Vite + React | Next.js 14 |
|---------|-------------|-----------|
| Roteamento | React Router | File-based routing |
| Link | `<Link to="/path">` | `<Link href="/path">` |
| Imagens | `import img` ou `<img>` | `<Image>` component |
| SEO | React Helmet | Metadata export |
| Navegação | `useLocation()` | `usePathname()` |
| Client-side | Padrão | Adicionar `"use client"` |
| Build | `npm run build` → `dist/` | `npm run build` → `.next/` |

---

Boa sorte com a migração! 🎉
