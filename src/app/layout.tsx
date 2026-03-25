import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio KERRI Design | 30 Godina Kvalitete",
  description:
    "Studio KERRI Design - Vaš partner za pločice, sanitarije, kupaonski namještaj, kade i tuš-kabine. 30 godina kvalitete u Matuljima.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
