import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Provedores } from "@/app/providers";
import { Rotas } from "@/app/rotas";

const App = () => (
  <BrowserRouter>
    <Provedores>
      <Toaster />
      <Sonner />
      <Rotas />
    </Provedores>
  </BrowserRouter>
);

export default App;
