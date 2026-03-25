import { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Sanitarije | Studio KERRI Design",
  description: "Sanitarna oprema, slavine i kupaonska galanterija vrhunske kvalitete. ArtCeram, Kerasan, Paffoni, Daniel i drugi talijanski brendovi.",
};

export default function SanitarijePage() {
  return <CategoryPage categorySlug="sanitarije" />;
}
