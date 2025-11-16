"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  produtoNome: string;
}

export function WhatsAppButton({ produtoNome }: WhatsAppButtonProps) {
  const enviarWhatsApp = () => {
    const mensagem = `Olá! Gostaria de fazer um pedido do produto: ${produtoNome}`;
    const telefone = "5511999999999";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <Button size="lg" onClick={enviarWhatsApp} className="w-full">
      <MessageCircle className="mr-2 h-5 w-5" />
      Fazer Pedido via WhatsApp
    </Button>
  );
}
