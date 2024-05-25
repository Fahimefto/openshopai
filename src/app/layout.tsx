import type { Metadata } from "next";
import { Rethink_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReduxStoreProvider from "@/provider/redux-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "OpenShop.ai",
  description: "OpenShop.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ReduxStoreProvider>
          <div vaul-drawer-wrapper="" className="bg-background">
            {children}
          </div>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
