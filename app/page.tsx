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
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <Story />
        <Festivals />
        <GlobalMap />
        <Model />
        <GreatCommission />
        <HowToStart />
        <Testimonies />
        <Partnership />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
