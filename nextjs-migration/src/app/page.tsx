import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1>Home Page</h1>
      <p>Migre o conteúdo de src/features/home/pages/Home.tsx para cá</p>
      <Link href="/produtos">
        <Button>Ver Produtos</Button>
      </Link>
    </main>
  );
}
