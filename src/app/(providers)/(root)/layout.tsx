import Header from "@/components/Header";
import React from "react";
import { ToastContainer } from "react-toastify";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <ToastContainer
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
    </div>
  );
}

export default RootLayout;
