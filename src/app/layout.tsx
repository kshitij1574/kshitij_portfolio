import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kshitij Kamble | Data Science Portfolio",
  description: "Data Science enthusiast specializing in Machine Learning, Statistics, and Data Structures & Algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark md:scroll-smooth">
      <body className={`${inter.className} bg-[#121212] text-white antialiased selection:bg-white/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
