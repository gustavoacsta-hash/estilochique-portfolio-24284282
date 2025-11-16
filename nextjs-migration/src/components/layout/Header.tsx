"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navegacao = [
  { nome: "Home", caminho: "/" },
  { nome: "Produtos", caminho: "/produtos" },
  { nome: "Sobre", caminho: "/sobre" },
  { nome: "Contato", caminho: "/contato" },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 md:h-28 items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="Estilo Chique" 
            width={120} 
            height={96}
            className="h-20 md:h-24 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navegacao.map((item) => (
            <Link
              key={item.caminho}
              href={item.caminho}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.caminho && "text-primary"
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

          <Sheet open={menuAberto} onOpenChange={setMenuAberto}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navegacao.map((item) => (
                  <Link
                    key={item.caminho}
                    href={item.caminho}
                    onClick={() => setMenuAberto(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary py-2",
                      pathname === item.caminho && "text-primary"
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
  );
}
