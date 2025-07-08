import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lucas Santana - Front-End Engineer",
  description:
    "Desenvolvedor Front-End apaixonado por criar experiências de usuário incríveis com tecnologias web modernas.",
  keywords: [
    "Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Web Development",
  ],
  authors: [{ name: "Lucas Santana" }],
  creator: "Lucas Santana",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lucassantana.dev",
    title: "Lucas Santana - Front-End Engineer",
    description:
      "Desenvolvedor Front-End apaixonado por criar experiências de usuário incríveis.",
    siteName: "Lucas Santana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Santana - Front-End Engineer",
    description:
      "Desenvolvedor Front-End apaixonado por criar experiências de usuário incríveis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
