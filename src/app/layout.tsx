import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import Providers from "@/components/Providers";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import Nav from "@/features/home/Nav";



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  title: {
    default: "Boilerplate",
    template: `%s | Boilerplate`,
  },
  description: "Building something cool",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="w-full h-full" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "scroll-smooth font-sans h-full"
        )}
      >
        <Providers>
          <div className="relative h-full">
            <Nav/>
            <main
              id="skip-nav"
              className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8 min-h-[80vh]"
            >
                {children}
            </main>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
