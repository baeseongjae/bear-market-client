import Header from "@/components/Header";
import ToastManager from "@/components/ToastManager";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <ToastManager />
    </div>
  );
}

export default RootLayout;
