import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/components/ui/sheet";
import { LinkNavegacao } from "./LinkNavegacao";
import logo from "@/assets/logo.svg";

interface LayoutProps {
  children: ReactNode;
}

const navegacao = [
  { nome: "Home", caminho: "/" },
  { nome: "Produtos", caminho: "/produtos" },
  { nome: "Sobre", caminho: "/sobre" },
  { nome: "Contato", caminho: "/contato" },
];

export const Layout = ({ children }: LayoutProps) => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 md:h-28 items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Estilo Chique" className="h-20 md:h-24 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navegacao.map((item) => (
              <LinkNavegacao
                key={item.caminho}
                to={item.caminho}
                className="text-sm font-medium transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                {item.nome}
              </LinkNavegacao>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            <Sheet open={menuAberto} onOpenChange={setMenuAberto}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navegacao.map((item) => (
                    <LinkNavegacao
                      key={item.caminho}
                      to={item.caminho}
                      onClick={() => setMenuAberto(false)}
                      className="text-lg font-medium transition-colors hover:text-primary py-2"
                      activeClassName="text-primary"
                    >
                      {item.nome}
                    </LinkNavegacao>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/40 bg-muted/30 mt-24">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={logo} alt="Estilo Chique" className="h-16 w-auto" />
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
                      to={item.caminho}
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
    </div>
  );
};
