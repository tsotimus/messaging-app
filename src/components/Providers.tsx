"use client";

import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { type PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";

type Theme = "light" | "dark";

const ToasterSetup = () => {
    const { theme = "dark" } = useTheme();
    return (
      <Toaster
          toastOptions={{
          duration: 2500,
          }}
          visibleToasts={5}
          theme={theme as Theme}
          expand
      />
    )
}


const Providers = ({children}:PropsWithChildren) => {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <ClerkProvider>
          <NuqsAdapter>
            <ToasterSetup />
            {children}
          </NuqsAdapter>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default Providers;
