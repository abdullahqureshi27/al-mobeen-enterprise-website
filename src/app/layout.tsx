import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#041D46",
};
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteProvider } from "@/components/QuoteProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import QuoteListDrawer from "@/components/QuoteListDrawer";
import QuickQuoteWidget from "@/components/QuickQuoteWidget";
import ScrollProgressWidget from "@/components/ScrollProgressWidget";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://almobeenenterprise.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al Mobeen Enterprise (Mobeen Chemicals) | Karachi's #1 Bulk Chemical Dealer & Wholesaler",
    template: "%s | Al Mobeen Enterprise (Mobeen Chemicals)",
  },
  description:
    "Al Mobeen Enterprise (also known as Mobeen Chemicals, Al Mobeen Ent & Mobeen Chm) is Karachi's premier bulk chemical dealer, importer & wholesaler in Jodia Bazar. 30+ years supplying 80+ industrial chemicals, solvents, DOP, resins & acids in bulk quantities across Pakistan.",
  verification: {
    google: "googlee34c2c102a28c308",
  },
  keywords: [
    "Al Mobeen Enterprise",
    "mobeen Chemicals",
    "Mobeen Chemical",
    "al mobeen ent",
    "mobeen chm",
    "Mobeen Chemicals Karachi",
    "Al Mobeen Enterprise Karachi",
    "Al Mobeen Ent Karachi",
    "Mobeen Chm Karachi",
    "bulk chemical dealer Karachi",
    "chemical wholesaler Jodia Bazar",
    "best chemical seller Karachi",
    "bulk chemical supplier Pakistan",
    "bulk chemicals Karachi",
    "bulk quantity chemical supply",
    "Jodia Bazar chemical market Karachi",
    "DOP plasticizer supplier Karachi",
    "Titanium Dioxide wholesale Pakistan",
    "industrial solvents Karachi bulk",
    "pigments and resins distributor",
    "chemical trading company Karachi",
    "bulk chemical importers Pakistan",
    "Karachi chemical distributors",
  ],
  authors: [{ name: "Al Mobeen Enterprise (Mobeen Chemicals)", url: siteUrl }],
  creator: "Al Mobeen Enterprise",
  publisher: "Al Mobeen Enterprise (Mobeen Chemicals)",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Al Mobeen Enterprise (Mobeen Chemicals)",
    title: "Al Mobeen Enterprise (Mobeen Chemicals) | Karachi's #1 Bulk Chemical Dealer & Wholesaler",
    description:
      "Al Mobeen Enterprise (Mobeen Chemicals / Al Mobeen Ent / Mobeen Chm) — Karachi's trusted bulk industrial chemical dealer & wholesaler in Jodia Bazar. Supplying 80+ high-grade industrial chemicals in bulk across Pakistan since 1995.",
    images: [
      {
        url: "/ame-logo.png",
        width: 1200,
        height: 630,
        alt: "Al Mobeen Enterprise (Mobeen Chemicals) Bulk Chemical Wholesaler Karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Mobeen Enterprise (Mobeen Chemicals) | Karachi's Premier Bulk Chemical Dealer",
    description:
      "Bulk industrial chemicals direct from Jodia Bazar, Karachi. DOP, Solvents, Resins, Titanium Dioxide & 80+ raw materials from Al Mobeen Enterprise (Mobeen Chemicals / Al Mobeen Ent).",
    images: ["/ame-logo.png"],
  },
  icons: {
    icon: [
      { url: "/ame-logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/ame-logo.png",
    apple: "/ame-logo.png",
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WholesaleStore", "LocalBusiness", "Organization"],
      "@id": `${siteUrl}/#localbusiness`,
      name: "Al Mobeen Enterprise",
      alternateName: [
        "Mobeen Chemicals",
        "mobeen Chemicals",
        "Al Mobeen Ent",
        "al mobeen ent",
        "Mobeen Chm",
        "mobeen chm",
        "Mobeen Chemical",
        "Al-Mobeen Enterprise",
        "Al Mobeen Enterprise Karachi",
        "Mobeen Chemicals Karachi",
        "AME Bulk Chemicals",
      ],
      description:
        "Al Mobeen Enterprise (also recognized as Mobeen Chemicals, Al Mobeen Ent, or Mobeen Chm) is Karachi's premier bulk chemical dealer, importer, and wholesale distributor based at Jodia Bazar since 1995. Over 30 years supplying 80+ industrial chemicals in bulk quantities across Pakistan.",
      url: siteUrl,
      logo: `${siteUrl}/ame-logo.png`,
      image: `${siteUrl}/ame-logo.png`,
      telephone: "+92-332-1134530",
      email: "almobeenenterprise@gmail.com",
      priceRange: "$$$",
      currenciesAccepted: "PKR, USD",
      paymentAccepted: "Cash, Bank Transfer, Pay Order, Letter of Credit (LC)",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "G/9, Golden Center, Weaver Lane, Jodia Bazar",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        postalCode: "74000",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.8519,
        longitude: 67.0006,
      },
      foundingDate: "1995",
      areaServed: [
        { "@type": "City", name: "Karachi" },
        { "@type": "AdministrativeArea", name: "Sindh" },
        { "@type": "City", name: "Lahore" },
        { "@type": "City", name: "Faisalabad" },
        { "@type": "City", name: "Gujranwala" },
        { "@type": "Country", name: "Pakistan" },
      ],
      sameAs: [
        "https://www.instagram.com/almobeenenterprise",
        "https://www.facebook.com/almobeenenterprise",
      ],
      knowsAbout: [
        "Al Mobeen Enterprise Karachi",
        "Mobeen Chemicals",
        "Al Mobeen Ent",
        "Mobeen Chm",
        "Bulk Chemical Supply Karachi",
        "Jodia Bazar Chemical Trading Market",
        "Industrial Solvents Bulk Wholesale",
        "DOP Dioctyl Phthalate Plasticizer Wholesale",
        "Titanium Dioxide Anatase and Rutile",
        "Synthetic Resins and Industrial Coatings",
        "Textile Chemicals Wholesale Pakistan",
        "Bulk Quantity Chemical Supply",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial Chemicals Wholesale Catalog",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Industrial Solvents (Bulk)",
          },
          {
            "@type": "OfferCatalog",
            name: "Plasticizers & DOP (Bulk)",
          },
          {
            "@type": "OfferCatalog",
            name: "Pigments & Titanium Dioxide (Bulk)",
          },
          {
            "@type": "OfferCatalog",
            name: "Synthetic Resins & Monomers (Bulk)",
          },
          {
            "@type": "OfferCatalog",
            name: "Industrial Acids & Raw Materials (Bulk)",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Al Mobeen Enterprise (Mobeen Chemicals)",
      alternateName: ["Mobeen Chemicals", "Al Mobeen Ent", "Mobeen Chm"],
      description: "Karachi's Premier Bulk Chemical Dealer & Wholesaler - Jodia Bazar. Al Mobeen Enterprise (Mobeen Chemicals).",
      publisher: {
        "@id": `${siteUrl}/#localbusiness`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/products?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Al Mobeen Enterprise (also known as Mobeen Chemicals, Al Mobeen Ent, Mobeen Chm)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Al Mobeen Enterprise—also widely known in the market as Mobeen Chemicals, Al Mobeen Ent, or Mobeen Chm—is Karachi's premier bulk chemical dealer and wholesale distributor operating from Jodia Bazar since 1995. Supplying 80+ industrial chemicals in bulk quantities with guaranteed honest grade purity and prompt nationwide dispatch across Pakistan.",
          },
        },
        {
          "@type": "Question",
          name: "Are Al Mobeen Enterprise, Mobeen Chemicals, Al Mobeen Ent, and Mobeen Chm the same business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Al Mobeen Enterprise is the registered business entity, frequently referred to by industry buyers and traders as Mobeen Chemicals, Al Mobeen Ent, or Mobeen Chm. All refer to our established wholesale commercial desk in Jodia Bazar, Karachi.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Al Mobeen Enterprise (Mobeen Chemicals) located in Karachi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Al Mobeen Enterprise (Mobeen Chemicals) is located at G/9, Golden Center, Weaver Lane, Jodia Bazar, Karachi, Pakistan—the central trading hub for chemicals and industrial raw materials.",
          },
        },
        {
          "@type": "Question",
          name: "What chemicals can be purchased in bulk quantities from Mobeen Chemicals / Al Mobeen Enterprise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mobeen Chemicals (Al Mobeen Enterprise) specializes in bulk wholesale quantities of solvents (IPA, Butyl Glycol, Ethyl Alcohol, Xylene, Acetone), plasticizers (DOP, DOTP, DBP), pigments (Titanium Dioxide Rutile & Anatase), synthetic resins (Epoxy, Alkyd), and industrial acids for paints, plastics, PVC, textiles, printing inks, and detergents.",
          },
        },
        {
          "@type": "Question",
          name: "Does Al Mobeen Enterprise / Mobeen Chemicals supply bulk chemicals outside Karachi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Al Mobeen Enterprise (Mobeen Chemicals) delivers bulk chemicals and raw materials nationwide across Pakistan, including Lahore, Faisalabad, Gujranwala, Sialkot, Sheikhupura, Rawalpindi, and Peshawar.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get daily bulk wholesale chemical rates from Mobeen Chemicals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can submit an online RFQ on our website or directly message our Jodia Bazar commercial desk on WhatsApp at +92 332 1134530 for daily spot prices on drums, tankers, and bulk consignments.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.classList.remove('dark');localStorage.removeItem('ame-theme');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-base text-ink transition-colors duration-300 relative">
        {/* <Script
          src="https://www.resolvdesk.online/widget.js"
          data-widget-key="rd_live_frRwD7a6Avc9PrUJVaH8OSXc18pprshaSBP3QI4kOlc"
          strategy="afterInteractive"
        /> */}
        <SmoothScrollProvider>
          <ThemeProvider>
            <LanguageProvider>
              <QuoteProvider>
                <ToastProvider>
                  <Navbar />
                  <main className="flex-1 relative z-10">{children}</main>
                  <Footer />
                  <QuickQuoteWidget />
                  <ScrollProgressWidget />
                  <QuoteListDrawer />
                </ToastProvider>
              </QuoteProvider>
            </LanguageProvider>
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
