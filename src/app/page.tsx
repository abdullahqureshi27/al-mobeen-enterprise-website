import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import WarehouseShowcaseBanner from "@/components/home/WarehouseShowcaseBanner";
import ProductCategoriesGrid from "@/components/home/ProductCategoriesGrid";
import BestSellersMarquee from "@/components/home/BestSellersMarquee";
import IndustriesSection from "@/components/home/IndustriesSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import CTABand from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutSnapshot />

      {/* Sticky Full-Screen Parallax Warehouse Image Showcase */}
      <div className="relative">
        <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
          <WarehouseShowcaseBanner />
        </div>
        <div className="relative z-10 bg-base border-t border-border shadow-[0_-30px_70px_rgba(0,0,0,0.5)]">
          <ProductCategoriesGrid />
        </div>
      </div>

      <BestSellersMarquee />
      <IndustriesSection />
      <HomeFAQSection />
      <CTABand />
    </>
  );
}
