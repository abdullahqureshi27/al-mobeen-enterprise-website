import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://almobeenenterprise.vercel.app";

export const metadata: Metadata = {
  title: "Contact Al Mobeen Enterprise (Mobeen Chemicals) | Jodia Bazar Karachi",
  description:
    "Contact Al Mobeen Enterprise (Mobeen Chemicals / Al Mobeen Ent / Mobeen Chm) for bulk chemical quotations, daily spot market pricing, and supply inquiries in Jodia Bazar, Karachi.",
  keywords: [
    "Mobeen Chemicals contact",
    "Al Mobeen Enterprise contact number",
    "al mobeen ent jodia bazar",
    "mobeen chm phone number",
    "bulk chemical price Karachi",
    "chemical supplier Jodia Bazar contact",
    "wholesale chemical inquiry Pakistan",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Al Mobeen Enterprise (Mobeen Chemicals) | Jodia Bazar Karachi",
    description:
      "Get daily spot pricing and quotations for bulk industrial chemicals from Al Mobeen Enterprise (Mobeen Chemicals / Al Mobeen Ent / Mobeen Chm).",
    url: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
