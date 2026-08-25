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

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
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
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <Nav />
      <ScrollProgress />
      <main id="main">
        <Hero />
        <CitySignal />
        <Story />
        <Festivals />
        <GlobalMap />
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
