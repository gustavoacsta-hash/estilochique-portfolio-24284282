import Link from "next/link";
import Image from "next/image";

const navegacao = [
  { nome: "Home", caminho: "/" },
  { nome: "Produtos", caminho: "/produtos" },
  { nome: "Sobre", caminho: "/sobre" },
  { nome: "Contato", caminho: "/contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 mt-24">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image 
              src="/images/logo.svg" 
              alt="Estilo Chique" 
              width={80} 
              height={64}
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Elegância atemporal para mulheres que valorizam qualidade e estilo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navegacao.map((item) => (
                <li key={item.caminho}>
                  <Link
                    href={item.caminho}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@estilochique.com</li>
              <li>(Número a definir)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Estilo Chique. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
