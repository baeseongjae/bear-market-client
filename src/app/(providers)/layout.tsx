import { AuthProvider } from "@/contexts/auth.context";
import { ModalProvider } from "@/contexts/modal.context";
import { SearchProvider } from "@/contexts/search.context";
import ReactQueryProvider from "@/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ModalProvider>
          <SearchProvider>{children}</SearchProvider>
        </ModalProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default Providers;
