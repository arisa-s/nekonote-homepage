import type { Metadata } from "next";
import "./globals.css";
import { basisGrotesque, recoleta } from "@/lib/fonts";
import { Footer, Navbar } from "@/components/layout";

export const metadata: Metadata = {
  title: "Nekonote LLC",
  description: "Homepage for Nekonote LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" data-color="pink">
      {/* Apply theme dynamically */}
      <body
        className={`${recoleta.variable} ${basisGrotesque.variable} antialiased bg-primary text-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
