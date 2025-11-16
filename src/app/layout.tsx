import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/layout";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Estilo Chique - Elegância Atemporal",
  description: "Descubra peças únicas que refletem seu estilo e personalidade. Elegância atemporal para mulheres que valorizam qualidade e estilo.",
  keywords: ["moda feminina", "elegância", "estilo", "roupas", "fashion"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <TooltipProvider>
          <Layout>
            {children}
          </Layout>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
