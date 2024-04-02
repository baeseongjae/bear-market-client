import { AuthProvider } from "@/contexts/auth.context";
import ReactQueryProvider from "@/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default Providers;
