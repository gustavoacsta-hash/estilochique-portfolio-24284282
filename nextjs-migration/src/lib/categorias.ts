export const CATEGORIAS = [
  "Todos",
  "Vestidos",
  "Blusas",
  "Calças",
  "Saias",
  "Blazers",
  "Acessórios",
] as const;

export type Categoria = typeof CATEGORIAS[number];
