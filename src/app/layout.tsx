import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { SideNavBar } from "@/components/SideNavBar";
import { TopAppBar } from "@/components/TopAppBar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Al-Maktabah",
  description: "The Scholarly Feed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background min-h-screen flex flex-col md:flex-row font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SideNavBar />
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64 bg-background">
          <TopAppBar />
          {children}
        </div>
      </body>
    </html>
  );
}
