import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KERRI Salon Keramike | 30 Godina Kvalitete",
  description:
    "Salon keramike KERRI - Vaš partner za pločice, sanitarije, kupaonski namještaj, kade i tuš-kabine. 30 godina kvalitete u Kastavu.",
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
