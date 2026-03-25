import { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Namještaj | Studio KERRI Design",
  description: "Kupaonski namještaj talijanskog dizajna. Artesi kolekcije koje spajaju funkcionalnost i eleganciju.",
};

export default function NamjestajPage() {
  return <CategoryPage categorySlug="namjestaj" />;
}
