"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContatoForm() {
  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado");
  };

  return (
    <div className="bg-muted/30 p-8 rounded-sm">
      <form onSubmit={enviarFormulario} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone (opcional)</Label>
          <Input
            id="telefone"
            type="tel"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensagem">Mensagem</Label>
          <Textarea
            id="mensagem"
            placeholder="Como podemos ajudá-la?"
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          Enviar Mensagem
        </Button>
      </form>
    </div>
  );
}
