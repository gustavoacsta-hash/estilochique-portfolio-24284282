"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LinkNavegacao } from "./LinkNavegacao";
import Image from "next/image";

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
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.svg" 
              alt="Estilo Chique" 
              width={96} 
              height={96}
              className="h-20 md:h-24 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navegacao.map((item) => (
              <LinkNavegacao
                key={item.caminho}
                href={item.caminho}
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
                      href={item.caminho}
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
              <Image 
                src="/images/logo.svg" 
                alt="Estilo Chique" 
                width={64} 
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
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:contato@estilochique.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@estilochique.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Redes Sociais</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Estilo Chique. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};
