import { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Pločice | Studio KERRI Design",
  description: "Širok izbor keramičkih pločica vodećih talijanskih proizvođača. Naxos, La Fabbrica, Serenissima, CIR i mnogi drugi brendovi.",
};

export default function PlocicePage() {
  return <CategoryPage categorySlug="plocice" />;
}
