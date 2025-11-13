import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-semibold tracking-tight">
              ESTILO CHIQUE
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-semibold">ESTILO CHIQUE</h3>
              <p className="text-sm text-muted-foreground">
                Moda elegante e atemporal para mulheres que valorizam qualidade e sofisticação.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Navegação</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@estilochique.com</li>
                <li>WhatsApp: (a definir)</li>
              </ul>
            </div>

            {/* Social */}
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
