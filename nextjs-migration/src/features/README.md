# Pasta de Features

Mantenha a mesma estrutura de features do projeto atual:

```
features/
├── produtos/
│   ├── components/    # CartaoProduto, FiltrosProduto
│   ├── data/          # produtos.data.ts
│   ├── types/         # produto.types.ts
│   └── constants/     # categorias.ts
├── home/
├── sobre/
└── contato/
```

## Migração

1. Copie as pastas de features mantendo a estrutura
2. Atualize imports de componentes UI para a nova localização
3. Adicione "use client" nos componentes que precisam de interatividade
4. Substitua `<img>` por `<Image>` do Next.js onde apropriado
