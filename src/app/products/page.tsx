import type { Metadata } from "next";
import ProductCatalog from "@/components/products/ProductCatalog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://almobeenenterprise.vercel.app");

export const metadata: Metadata = {
  title: "Bulk Industrial Chemicals Catalog | Al Mobeen Enterprise (Mobeen Chemicals)",
  description:
    "Explore Al Mobeen Enterprise (Mobeen Chemicals / Al Mobeen Ent / Mobeen Chm) catalog of 80+ bulk industrial chemicals in Karachi: bulk solvents, plasticizers (DOP), titanium dioxide, pigments, resins, and acids.",
  keywords: [
    "bulk chemicals catalog Karachi",
    "Mobeen Chemicals products",
    "Al Mobeen Ent chemicals",
    "mobeen chm catalog",
    "bulk chemical dealer Karachi",
    "industrial solvents wholesale Pakistan",
    "DOP bulk supplier Jodia Bazar",
  ],
  alternates: {
    canonical: `${siteUrl}/products`,
  },
};

import PageHero from "@/components/ui/PageHero";

export default function ProductsPage() {
  return (
    <div className="bg-base min-h-screen">
      <PageHero
        title="Industrial Chemicals Catalog"
        description="Browse our full range of bulk industrial chemicals sourced directly from Karachi's leading importers and large dealers. Select products to request a bulk quote."
        badgeText="Complete Product Range"
      />

      <div className="section-container py-12 md:py-16">

        {/* Catalog System */}
        <ProductCatalog />
      </div>
    </div>
  );
}
