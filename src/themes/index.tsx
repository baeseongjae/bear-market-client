"use client";

import { ThemeProvider } from "next-themes";

function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default ThemeProviders;
