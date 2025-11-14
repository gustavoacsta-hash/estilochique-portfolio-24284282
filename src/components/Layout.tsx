import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

interface LayoutProps {
  children: ReactNode;
}

const navegacao = [
  { nome: "Início", url: "/" },
  { nome: "Produtos", url: "/produtos" },
  { nome: "Sobre", url: "/sobre" },
  { nome: "Contato", url: "/contato" },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 md:h-24 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Estilo Chique" className="h-16 md:h-20 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navegacao.map((item) => (
              <Link
                key={item.nome}
                to={item.url}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.url
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.nome}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            <Sheet open={menuMobileAberto} onOpenChange={setMenuMobileAberto}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="font-serif text-xl text-left flex items-center">
                    <img src={logo} alt="Estilo Chique" className="h-12 w-auto" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navegacao.map((item) => (
                    <Link
                      key={item.nome}
                      to={item.url}
                      onClick={() => setMenuMobileAberto(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary py-2",
                        location.pathname === item.url
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.nome}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <img src={logo} alt="Estilo Chique" className="h-14 w-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Moda elegante e atemporal para mulheres que valorizam qualidade e sofisticação.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Navegação</h4>
              <ul className="space-y-2">
                {navegacao.map((item) => (
                  <li key={item.nome}>
                    <Link
                      to={item.url}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@estilochique.com</li>
                <li>WhatsApp: (a definir)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Estilo Chique. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
