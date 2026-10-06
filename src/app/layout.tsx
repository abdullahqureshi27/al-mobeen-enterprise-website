import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://almobeenenterprise.com"),
  title: {
    default: "Al Mobeen Enterprise | Best Bulk Chemical Dealer & Wholesaler in Karachi (Jodia Bazar)",
    template: "%s | Al Mobeen Enterprise Karachi",
  },
  description:
    "Al Mobeen Enterprise is Karachi's premier bulk chemical dealer & wholesaler located in Jodia Bazar. 30+ years supplying 80+ industrial chemicals in bulk: DOP, Titanium Dioxide, Solvents, Pigments, Resins & Acids nationwide across Pakistan.",
  keywords: [
    "bulk chemical dealer Karachi",
    "chemical wholesaler Jodia Bazar",
    "best chemical seller Karachi",
    "industrial chemical supplier Pakistan",
    "bulk chemicals Karachi",
    "Jodia Bazar chemical market Karachi",
    "DOP plasticizer supplier Karachi",
    "Titanium Dioxide wholesale Pakistan",
    "industrial solvents Karachi",
    "pigments and resins distributor",
    "chemical trading company Karachi",
    "Al Mobeen Enterprise",
    "bulk chemical importers Pakistan",
    "Karachi chemical distributors",
  ],
  authors: [{ name: "Al Mobeen Enterprise", url: "https://almobeenenterprise.com" }],
  creator: "Al Mobeen Enterprise",
  publisher: "Al Mobeen Enterprise",
  alternates: {
    canonical: "https://almobeenenterprise.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almobeenenterprise.com",
    siteName: "Al Mobeen Enterprise",
    title: "Al Mobeen Enterprise | Best Bulk Chemical Dealer & Wholesaler in Karachi",
    description:
      "Karachi's trusted wholesale bulk chemical distributor based in Jodia Bazar. Supplying 80+ high-grade industrial chemicals with manufacturer COA across Pakistan since 1995.",
    images: [
      {
        url: "/ame-logo.png",
        width: 1200,
        height: 630,
        alt: "Al Mobeen Enterprise Bulk Chemicals Karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Mobeen Enterprise | Karachi's Premier Bulk Chemical Dealer",
    description:
      "Bulk industrial chemicals direct from Jodia Bazar, Karachi. DOP, Titanium Dioxide, Solvents, Resins, and 80+ raw materials.",
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
      "@type": ["WholesaleStore", "LocalBusiness"],
      "@id": "https://almobeenenterprise.com/#localbusiness",
      name: "Al Mobeen Enterprise",
      alternateName: [
        "Al-Mobeen Enterprise Karachi",
        "Al Mobeen Chemical Wholesaler",
        "AME Bulk Chemicals",
      ],
      description:
        "Karachi's premier bulk chemical dealer and wholesaler based in Jodia Bazar. Over 30 years supplying 80+ industrial chemicals in bulk quantities across Pakistan.",
      url: "https://almobeenenterprise.com",
      logo: "https://almobeenenterprise.com/ame-logo.png",
      image: "https://almobeenenterprise.com/ame-logo.png",
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
        "Bulk Chemical Supply Karachi",
        "Jodia Bazar Chemical Trading",
        "Industrial Solvents Distribution",
        "DOP Dioctyl Phthalate Plasticizer",
        "Titanium Dioxide Anatase and Rutile",
        "Synthetic Resins and Coatings",
        "Textile Chemicals Wholesale",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://almobeenenterprise.com/#website",
      url: "https://almobeenenterprise.com",
      name: "Al Mobeen Enterprise",
      description: "Karachi's Premier Bulk Chemical Dealer & Wholesaler - Jodia Bazar",
      publisher: {
        "@id": "https://almobeenenterprise.com/#localbusiness",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://almobeenenterprise.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://almobeenenterprise.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best bulk chemical dealer and wholesaler in Karachi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Al Mobeen Enterprise is widely recognized as one of the best bulk chemical dealers and wholesalers in Karachi, operating from Jodia Bazar since 1995. They supply 80+ industrial chemicals in bulk quantities with verified COAs and fast dispatch across Pakistan.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Al Mobeen Enterprise located in Karachi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Al Mobeen Enterprise is located at G/9, Golden Center, Weaver Lane, Jodia Bazar, Karachi, Pakistan—the central trading hub for chemicals and raw materials.",
          },
        },
        {
          "@type": "Question",
          name: "What chemicals can be purchased in bulk quantities from Al Mobeen Enterprise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Al Mobeen Enterprise sells bulk solvents (IPA, Butyl Glycol, Ethyl Alcohol, Xylene), plasticizers (DOP, DOTP, DBP), pigments (Titanium Dioxide Rutile & Anatase), synthetic resins, industrial acids, and raw materials for paints, textiles, plastics, detergents, and printing inks.",
          },
        },
        {
          "@type": "Question",
          name: "Does Al Mobeen Enterprise supply bulk chemicals outside Karachi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Al Mobeen Enterprise arranges nationwide logistics from Karachi to industrial hubs across Pakistan including Lahore, Faisalabad, Gujranwala, Sialkot, Rawalpindi, and Peshawar.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get a wholesale chemical price quotation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can submit an online RFQ using the quote list drawer on our website or directly contact our Jodia Bazar sales desk on WhatsApp at +92 332 1134530.",
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
            __html: `(function(){try{var t=localStorage.getItem('ame-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
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
