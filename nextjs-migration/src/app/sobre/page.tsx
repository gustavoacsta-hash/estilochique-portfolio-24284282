import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós - Estilo Chique",
  description: "Conheça nossa história, filosofia e valores. Elegância atemporal para mulheres que valorizam qualidade e estilo.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold">
            Nossa História
          </h1>
          <p className="text-xl text-muted-foreground">
            Uma jornada de elegância e sofisticação
          </p>
        </div>

        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Bem-vinda à Estilo Chique
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Somos uma marca dedicada a mulheres que apreciam a verdadeira elegância.
              Cada peça em nossa coleção é cuidadosamente selecionada para oferecer não
              apenas moda, mas uma experiência de estilo que transcende tendências passageiras.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Nossa Filosofia
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que a verdadeira elegância é atemporal. Nossa missão é proporcionar
              peças que se tornam parte essencial do seu guarda-roupa, combinando qualidade
              excepcional com design sofisticado. Cada item é escolhido pensando na mulher
              moderna que valoriza tanto o conforto quanto o estilo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Nossos Valores
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Qualidade Superior:</strong> Selecionamos apenas peças com materiais nobres e acabamento impecável</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Elegância Atemporal:</strong> Priorizamos designs clássicos que permanecem relevantes através das estações</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Atendimento Personalizado:</strong> Cada cliente é única e merece atenção especial</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Sustentabilidade:</strong> Valorizamos peças duráveis que reduzem o impacto no meio ambiente</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Experiência Personalizada
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Entendemos que cada mulher tem seu estilo único. Por isso, oferecemos uma
              experiência de compra cuidadosamente elaborada, com atendimento consultivo
              para ajudá-la a encontrar as peças perfeitas que complementam sua personalidade
              e estilo de vida.
            </p>
          </section>

          <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg text-muted-foreground bg-muted/30 rounded-r-sm">
            "A elegância não consiste em vestir roupas novas, mas em vestir-se bem."
          </blockquote>
        </div>
      </div>
    </main>
  );
}
