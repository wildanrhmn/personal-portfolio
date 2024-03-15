import type { Metadata } from "next";
import { suez } from "@/utils/fonts";
import Footer from "@/ui/home/Footer";
import "./globals.css";
import 'aos/dist/aos.css';

export const metadata: Metadata = {
  title: "Wildan's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className={`${suez.className} `}>
        <main className="dw-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
