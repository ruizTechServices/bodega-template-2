import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manhattan Grocer",
  description: "Fresh, local, and organic groceries delivered to your door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen z-40`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}