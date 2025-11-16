# Pasta de Componentes

## Estrutura

```
components/
├── ui/              # Componentes shadcn/ui
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── layout/          # Componentes de layout
    ├── Layout.tsx
    ├── LinkNavegacao.tsx
    └── ...
```

## Migração

1. Copie todos os componentes de `src/shared/components/ui/` para `src/components/ui/`
2. Atualize os imports de `@/shared/utils/cn` para `@/lib/utils`
3. Copie os componentes de layout de `src/shared/components/layout/` para `src/components/layout/`
4. Adicione "use client" nos componentes que usam hooks ou eventos
5. Substitua `import { Link } from "react-router-dom"` por `import Link from "next/link"`
6. Substitua `useLocation` por `usePathname` do `next/navigation`
