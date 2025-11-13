export default function Produtos() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold">
            Nossa Coleção
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore peças cuidadosamente selecionadas para complementar seu estilo
          </p>
        </div>

        {/* TODO: Implement product grid, filters, and search in next iteration */}
        <div className="text-center py-24">
          <p className="text-muted-foreground">
            Grid de produtos será implementado na próxima entrega
          </p>
        </div>
      </div>
    </div>
  );
}
