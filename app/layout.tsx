import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import favicon from "/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypedUI",
  description: "Generative UI for Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href={favicon.src} type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
