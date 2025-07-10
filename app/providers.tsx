"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@/contexts/themeProvider";
import { I18nProvider } from "@/contexts/languageProvider";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>{children}</I18nProvider>
      <Toaster />
    </ThemeProvider>
  );
}
