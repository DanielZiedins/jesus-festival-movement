import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Vision from "@/components/Vision";
import ScriptureQuote from "@/components/ScriptureQuote";
import GreatCommission from "@/components/GreatCommission";
import Model from "@/components/Model";
import Festivals from "@/components/Festivals";
import HowToStart from "@/components/HowToStart";
import GlobalMap from "@/components/GlobalMap";
import Testimonies from "@/components/Testimonies";
import KnowJesus from "@/components/KnowJesus";
import JoinMovement from "@/components/JoinMovement";
import Partnership from "@/components/Partnership";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ui/ScrollFX";
import StickyJoin from "@/components/StickyJoin";
import { SITE, FAQS } from "@/lib/content";

/**
 * Page-specific schema. Kept here rather than in the root layout so the
 * FAQPage and Event markup only ever appears on the page that actually shows
 * that content — Google treats mismatched FAQ markup as a violation.
 */
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "Jesus Festival: Hamilton",
      description:
        "An evangelistic Gospel festival in Hamilton, Ontario with worship, Gospel preaching, baptisms, unity, and outreach.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Hamilton, Ontario, Canada",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hamilton",
          addressRegion: "ON",
          addressCountry: "CA",
        },
      },
      organizer: { "@id": `${SITE.url}/#organization` },
      url: "https://JesusFestival.ca",
    },
    {
      "@type": "Event",
      name: "Jesus Festival: Niagara",
      description:
        "An evangelistic Gospel festival in the Niagara region with worship, Gospel preaching, unity, and outreach.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Niagara, Ontario, Canada",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Niagara",
          addressRegion: "ON",
          addressCountry: "CA",
        },
      },
      organizer: { "@id": `${SITE.url}/#organization` },
      url: "https://JesusFestivalNiagara.com",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <ScrollFX />
      <StickyJoin />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Story />
        <ScriptureQuote
          quote="And this gospel of the kingdom will be preached in all the world as a witness to all the nations, and then the end will come."
          reference="Matthew 24:14"
        />
        <Vision />
        <GreatCommission />
        <ScriptureQuote
          quote="How beautiful are the feet of those who bring good news!"
          reference="Romans 10:15"
        />
        <Model />
        <Festivals />
        <HowToStart />
        <GlobalMap />
        <ScriptureQuote
          quote="The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest."
          reference="Matthew 9:37–38"
        />
        <Testimonies />
        <JoinMovement />
        <KnowJesus />
        <Partnership />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
