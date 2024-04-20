import React from "react";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="box-border max-w-screen-lg px-8 pt-5 mx-auto">
      {children}
    </main>
  );
}

export default Page;
