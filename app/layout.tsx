import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import RevealEngine from "@/components/ui/RevealEngine";
import { SITE } from "@/lib/content";
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
  themeColor: "#05060f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Jesus Festival Movement | Global Gospel Festivals & Evangelism Movement",
    template: "%s | Jesus Festival Movement",
  },
  description: SITE.description,
  keywords: [
    "Jesus Festival",
    "Jesus Festival Movement",
    "Christian festival",
    "Gospel festival",
    "evangelism event",
    "Christian outreach event",
    "start a Jesus Festival",
    "Great Commission movement",
    "worship festival",
    "Jesus Festival Hamilton",
    "Jesus Festival Niagara",
    "Love on The World",
    "global evangelism movement",
  ],
  authors: [{ name: "Jesus Festival Movement" }],
  creator: "Jesus Festival Movement",
  publisher: "Jesus Festival Movement",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "The Journal — Jesus Festival Movement" },
      ],
    },
  },
  category: "Religion & Spirituality",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Jesus Festival Movement — From Hamilton to the Nations",
    description:
      "A global evangelistic movement raising up Gospel festivals that become lasting movements. Gather. Worship. Preach Jesus. Reach the lost. Multiply.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus Festival Movement — From Hamilton to the Nations",
    description:
      "A global evangelistic movement raising up Gospel festivals that become lasting movements. Take the step of faith.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
      foundingLocation: {
        "@type": "Place",
        name: "Hamilton, Ontario, Canada",
      },
      areaServed: "Worldwide",
      sameAs: [
        "https://JesusFestival.ca",
        "https://JesusFestivalNiagara.com",
        "https://LoveOnTheWorld.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the head script below adds `.js` to this
    // element before React hydrates, which is an intentional mismatch.
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Arms the CSS motion system. Runs before first paint so there's no
          flash of un-hidden content, and is deliberately the ONLY thing that
          adds `.js` — if scripts fail, `[data-reveal="scroll"]` is never
          hidden and every reader still gets the content.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        {/* One shared IntersectionObserver for every <Reveal> on the page. */}
        <RevealEngine />
        {children}
      </body>
    </html>
  );
}
