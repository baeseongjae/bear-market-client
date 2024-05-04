import {
  AuthProvider,
  ModalProvider,
  SearchProvider,
  UserProvider,
} from "@/contexts";
import ReactQueryProvider from "@/react-query";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <UserProvider>
          <ModalProvider>
            <SearchProvider>{children}</SearchProvider>
          </ModalProvider>
        </UserProvider>
      </AuthProvider>
      {/* <ReactQueryDevtools /> */}
    </ReactQueryProvider>
  );
}

export default Providers;
