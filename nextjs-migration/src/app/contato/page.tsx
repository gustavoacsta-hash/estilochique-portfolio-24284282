import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Minha Loja",
  description: "Entre em contato conosco",
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1>Contato</h1>
        <p>Migre o conteúdo de src/features/contato/pages/Contato.tsx para cá</p>
        <p>Lembre-se: formulários precisam de "use client"</p>
      </div>
    </main>
  );
}
