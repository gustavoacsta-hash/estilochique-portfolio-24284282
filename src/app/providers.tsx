import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

interface ProvedoresProps {
  children: React.ReactNode;
}

export function Provedores({ children }: ProvedoresProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
