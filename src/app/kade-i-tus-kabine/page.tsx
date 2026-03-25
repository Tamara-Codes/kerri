import { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Kade i tuš-kabine | Studio KERRI Design",
  description: "Kade, tuš-kabine i wellness rješenja talijanskog dizajna za savršenu kupaonicu.",
};

export default function KadeITusKabinePage() {
  return <CategoryPage categorySlug="kade-i-tus-kabine" />;
}
