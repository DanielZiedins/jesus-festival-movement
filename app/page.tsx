import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import GreatCommission from "@/components/GreatCommission";
import Model from "@/components/Model";
import Festivals from "@/components/Festivals";
import HowToStart from "@/components/HowToStart";
import GlobalMap from "@/components/GlobalMap";
import Testimonies from "@/components/Testimonies";
import Partnership from "@/components/Partnership";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CitySignal from "@/components/CitySignal";
import ScrollProgress from "@/components/ScrollProgress";
import ShopSpotlight from "@/components/ShopSpotlight";
import JoinMovement from "@/components/JoinMovement";
import JsonLd from "@/components/JsonLd";
import { FAQS, SITE } from "@/lib/content";
import { EVENTS, eventPhase, eventStageCopy } from "@/lib/events";

/**
 * Re-render daily so date-derived copy (the "happening next / now / held"
 * states on the journey card, map pin and Event schema) rolls over on its
 * own instead of waiting for the next deploy.
 */
export const revalidate = 86400;

/** Event schema for festivals that are upcoming or live — valid, dated, deduped against /[slug]. */
function eventNodes() {
  return EVENTS.filter((e) => eventPhase(e) !== "ended").map((e) => ({
    "@type": "Event",
    "@id": `${SITE.url}/${e.slug}#event`,
    name: e.name,
    url: `${SITE.url}/${e.slug}`,
    description: `${e.theme}. Two days of worship, the Word and prayer at ${e.venue}, ${e.city}, ${e.country}, with ${e.speaker.name}. Free and open to all; streaming live on ${e.streaming.platforms.join(" and ")}.`,
    startDate: `${e.startDate}T09:00:00+00:00`,
    endDate: `${e.endDate}T20:00:00+00:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    isAccessibleForFree: true,
    location: [
      {
        "@type": "Place",
        name: e.venue,
        address: {
          "@type": "PostalAddress",
          addressLocality: e.city,
          addressRegion: e.region,
          addressCountry: e.countryCode,
        },
        geo: { "@type": "GeoCoordinates", latitude: e.lat, longitude: e.lng },
      },
      { "@type": "VirtualLocation", url: `${SITE.url}/${e.slug}#watch`, name: e.streaming.label },
    ],
    performer: { "@type": "Person", name: e.speaker.name },
    organizer: { "@id": `${SITE.url}/#organization` },
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "GHS",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/${e.slug}`,
    },
  }));
}

// Built per render (not at module load) so a warm serverless instance can't
// keep serving yesterday's event phase after the daily revalidation.
const homeStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": [
    ...eventNodes(),
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/#webpage`,
      url: SITE.url,
      name: "Jesus Festival Movement — Gospel Festivals for Cities & Nations",
      description: SITE.description,
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-CA",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Jesus Festival Movement",
          item: SITE.url,
        },
      ],
    },
  ],
});

export default function Home() {
  const mapCopy = Object.fromEntries(EVENTS.map((e) => [e.city, eventStageCopy(e).mapCopy]));
  return (
    <>
      <JsonLd data={homeStructuredData()} />
      <Nav />
      <ScrollProgress />
      <main id="main">
        <Hero />
        <CitySignal />
        <Story />
        <Festivals />
        <GlobalMap copyOverrides={mapCopy} />
        <Model />
        <GreatCommission />
        <HowToStart />
        <ShopSpotlight />
        <Testimonies />
        <JoinMovement />
        <Partnership />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
