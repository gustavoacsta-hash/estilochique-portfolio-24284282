import { Metadata } from "next";
import { ContatoForm } from "./ContatoForm";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato - Estilo Chique",
  description: "Entre em contato conosco. Estamos aqui para ajudá-la.",
};

export default function ContatoPage() {
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

          <ContatoForm />
        </div>
      </div>
    </div>
  );
}
