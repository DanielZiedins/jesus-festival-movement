import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import RevealGuard from "@/components/RevealGuard";
import Measure from "@/components/Measure";
import { FOUNDERS, SITE } from "@/lib/content";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050812",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Jesus Festival Movement | Gospel Festivals for Cities & Nations",
    template: "%s | Jesus Festival Movement",
  },
  description: SITE.description,
  applicationName: SITE.name,
  category: "Religion & Spirituality",
  keywords: [
    "Jesus Festival Movement",
    "Jesus Festival Hamilton",
    "Jesus Festival Niagara",
    "Christian festival",
    "worship festival",
    "Gospel outreach event",
    "evangelism event",
    "Great Commission movement",
    "bring Jesus Festival to my city",
    "Christian revival event",
    "global evangelism movement",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: "Jesus Festival Movement — Gospel Festivals for Cities & Nations",
    description: SITE.tagline,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jesus Festival Movement — From Hamilton, Ontario to the nations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus Festival Movement — Gospel Festivals for Cities & Nations",
    description: SITE.tagline,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ReligiousOrganization"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      // Google rejects a mixed-case email in Organization schema ("Invalid value
      // in field email"); the visible address keeps its capitals.
      email: SITE.email.toLowerCase(),
      description: SITE.description,
      slogan: "One name. One mission. Every nation.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/jesus-festival-movement-logo.png`,
      },
      foundingLocation: {
        "@type": "Place",
        name: "Hamilton, Ontario, Canada",
      },
      areaServed: "Worldwide",
      // Defined here, in the layout, so every page resolves the same people.
      founder: FOUNDERS.map((f) => ({
        "@type": "Person",
        "@id": `${SITE.url}/#${f.id}`,
        name: f.name,
        jobTitle: f.role,
        url: f.url,
        sameAs: [...f.sameAs],
      })),
      contactPoint: {
        "@type": "ContactPoint",
        // Google rejects a mixed-case email in Organization schema ("Invalid value
        // in field email"); the visible address keeps its capitals.
        email: SITE.email.toLowerCase(),
        contactType: "Jesus Festival city inquiries",
        availableLanguage: "English",
      },
      sameAs: [
        "https://JesusFestival.ca",
        "https://JesusFestivalNiagara.com",
        "https://LoveOnTheWorld.com",
        "https://thykingdom.shop/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-CA",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <RevealGuard />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <JsonLd data={structuredData} />
        {children}
        <Measure />
      </body>
    </html>
  );
}
