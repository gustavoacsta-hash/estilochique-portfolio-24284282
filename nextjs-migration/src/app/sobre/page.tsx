import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós - Minha Loja",
  description: "Conheça nossa história e valores",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1>Sobre Nós</h1>
        <p>Migre o conteúdo de src/features/sobre/pages/Sobre.tsx para cá</p>
      </div>
    </main>
  );
}
