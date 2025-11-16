# Estrutura de Migração para Next.js 14

Esta pasta contém a estrutura completa de referência para migrar seu projeto Vite + React para Next.js 14 com App Router.

## 📁 Estrutura Criada

```
nextjs-migration/
├── src/
│   ├── app/                    # App Router (páginas)
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Estilos globais
│   │   ├── produtos/
│   │   │   ├── page.tsx       # Lista de produtos
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Detalhes do produto
│   │   ├── sobre/
│   │   │   └── page.tsx
│   │   ├── contato/
│   │   │   └── page.tsx
│   │   └── not-found.tsx
│   ├── components/            # Componentes (copie de src/shared/components)
│   │   └── README.md
│   ├── features/              # Features (copie de src/features)
│   │   └── README.md
│   └── lib/
│       └── utils.ts           # Utilitários (cn function)
├── public/
│   └── images/                # Imagens (copie de src/assets)
│       └── README.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Como Usar

### 1. Criar Novo Projeto Next.js

```bash
npx create-next-app@latest meu-projeto-nextjs
# Selecione:
# ✅ TypeScript
# ✅ ESLint
# ✅ Tailwind CSS
# ✅ src/ directory
# ✅ App Router
# ❌ Turbopack
```

### 2. Copiar Arquivos de Configuração

Copie os arquivos desta pasta `nextjs-migration/` para seu novo projeto:
- `next.config.js`
- `tailwind.config.ts`
- `tsconfig.json`
- `package.json` (ou instale as dependências manualmente)

### 3. Copiar Estrutura de Pastas

```bash
# Copie a estrutura src/app/
cp -r nextjs-migration/src/app/* novo-projeto/src/app/

# Copie lib/utils
cp -r nextjs-migration/src/lib novo-projeto/src/

# Crie as pastas
mkdir novo-projeto/src/components
mkdir novo-projeto/src/features
mkdir novo-projeto/public/images
```

### 4. Migrar Componentes

**Componentes UI (shadcn):**
```bash
# Copie de: src/shared/components/ui/
# Para: novo-projeto/src/components/ui/
```

**Atualizações necessárias:**
- Trocar `@/shared/utils/cn` → `@/lib/utils`

**Componentes de Layout:**
```bash
# Copie de: src/shared/components/layout/
# Para: novo-projeto/src/components/layout/
```

**Atualizações necessárias:**
- Adicionar `"use client"` no topo
- Trocar `import { Link } from "react-router-dom"` → `import Link from "next/link"`
- Trocar `useLocation()` → `usePathname()` do `next/navigation`

### 5. Migrar Features

Copie todo o conteúdo de `src/features/` mantendo a estrutura:

```bash
cp -r src/features/* novo-projeto/src/features/
```

**Componentes que precisam de "use client":**
- `CartaoProduto.tsx` - se tiver eventos de clique
- `FiltrosProduto.tsx` - usa useState
- Qualquer componente que use hooks ou eventos

### 6. Migrar Imagens

```bash
# Copie todas as imagens
cp src/assets/* novo-projeto/public/images/
```

**Atualizar uso de imagens:**
```tsx
// Antes
import heroImage from "@/assets/hero-image.jpg";
<img src={heroImage} />

// Depois
import Image from "next/image";
<Image src="/images/hero-image.jpg" width={1920} height={1080} />
```

### 7. Instalar Dependências

```bash
cd novo-projeto
npm install
```

### 8. Executar

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## ⚠️ Pontos de Atenção

### Client Components vs Server Components

**Precisam de "use client":**
- ✅ Componentes com useState, useEffect, hooks
- ✅ Componentes com eventos (onClick, onChange, etc.)
- ✅ Componentes que usam Context
- ✅ Formulários com interatividade

**Podem ser Server Components:**
- ✅ Páginas estáticas
- ✅ Layouts
- ✅ Componentes de UI sem estado

### Roteamento

| Vite + React Router | Next.js App Router |
|---------------------|-------------------|
| `/` (App.tsx) | `app/page.tsx` |
| `/produtos` | `app/produtos/page.tsx` |
| `/produtos/:slug` | `app/produtos/[slug]/page.tsx` |
| `/sobre` | `app/sobre/page.tsx` |
| `/contato` | `app/contato/page.tsx` |
| `/404` | `app/not-found.tsx` |

### Links

```tsx
// Antes (React Router)
import { Link } from "react-router-dom";
<Link to="/produtos">Produtos</Link>

// Depois (Next.js)
import Link from "next/link";
<Link href="/produtos">Produtos</Link>
```

### Navegação Programática

```tsx
// Antes (React Router)
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/produtos");

// Depois (Next.js)
"use client";
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/produtos");
```

## 📚 Recursos

- [Guia completo: MIGRACAO-NEXTJS.md](../MIGRACAO-NEXTJS.md)
- [Documentação Next.js](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)

## ✅ Checklist de Migração

- [ ] Criar novo projeto Next.js
- [ ] Copiar arquivos de configuração
- [ ] Migrar componentes UI
- [ ] Migrar componentes de layout
- [ ] Migrar features
- [ ] Migrar imagens
- [ ] Atualizar imports
- [ ] Adicionar "use client" onde necessário
- [ ] Testar todas as rotas
- [ ] Testar funcionalidades interativas
- [ ] Verificar SEO (metadata)
- [ ] Build de produção
- [ ] Deploy

## 🎯 Próximos Passos

Após a migração básica, considere:

1. **Otimização de Imagens**: Configurar Image Optimization
2. **SEO Avançado**: Adicionar metadata dinâmica
3. **API Routes**: Criar endpoints para WhatsApp, formulários, etc.
4. **Autenticação**: Implementar NextAuth.js
5. **ISR**: Configurar Incremental Static Regeneration para produtos
