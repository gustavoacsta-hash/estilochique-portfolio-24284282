export default function Sobre() {
  return (
    <div className="min-h-screen py-24">
      <div className="container max-w-4xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold">
              Nossa História
            </h1>
            <p className="text-xl text-muted-foreground">
              Elegância que transcende tendências
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-semibold">
                Bem-vinda à Estilo Chique
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nascemos da paixão por moda atemporal e pela crença de que cada mulher merece 
                se sentir confiante e elegante em suas escolhas. Na Estilo Chique, acreditamos 
                que a verdadeira sofisticação está nos detalhes e na qualidade que permanece.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-semibold">
                Nossa Filosofia
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Selecionamos cuidadosamente cada peça da nossa coleção, priorizando materiais 
                nobres, cortes impecáveis e designs que transcendem as estações. Acreditamos 
                em investir em peças-chave que acompanham você em diversos momentos da vida, 
                sempre com elegância e versatilidade.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-semibold">
                Nossos Valores
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span><strong className="text-foreground">Qualidade:</strong> Priorizamos materiais premium e acabamentos impecáveis em cada peça</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span><strong className="text-foreground">Exclusividade:</strong> Coleções limitadas que valorizam a individualidade</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span><strong className="text-foreground">Atemporalidade:</strong> Peças que permanecem relevantes além das tendências passageiras</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span><strong className="text-foreground">Sustentabilidade:</strong> Compromisso com práticas conscientes e duradouras</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-semibold">
                Experiência Personalizada
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Oferecemos um atendimento personalizado para ajudá-la a encontrar as peças 
                perfeitas que complementam seu estilo único. Nossa equipe está sempre pronta 
                para orientar e inspirar suas escolhas, garantindo que cada compra seja uma 
                experiência memorável.
              </p>
            </div>

            <div className="mt-12 p-8 bg-muted/50 rounded-sm">
              <p className="text-center text-lg italic text-muted-foreground">
                "A moda passa, o estilo permanece. Na Estilo Chique, 
                celebramos a elegância que nunca sai de moda."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
