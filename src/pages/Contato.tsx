import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare } from "lucide-react";

export default function Contato() {
  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado");
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl font-bold">
                Fale Conosco
              </h1>
              <p className="text-lg text-muted-foreground">
                Estamos aqui para ajudá-la. Entre em contato e teremos prazer 
                em responder suas dúvidas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:contato@estilochique.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@estilochique.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    (Número a definir)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="font-semibold mb-4">Redes Sociais</h3>
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

              <Button
                type="submit"
                className="w-full"
                size="lg"
              >
                Enviar Mensagem
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Responderemos em até 24 horas úteis
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
