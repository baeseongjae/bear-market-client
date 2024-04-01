import ReactQueryProvider from "@/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      {children}
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default Providers;
