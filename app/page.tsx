import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Vision from "@/components/Vision";
import ScriptureQuote from "@/components/ScriptureQuote";
import GreatCommission from "@/components/GreatCommission";
import Model from "@/components/Model";
import Festivals from "@/components/Festivals";
import HowToStart from "@/components/HowToStart";
import GlobalMap from "@/components/GlobalMap";
import Testimonies from "@/components/Testimonies";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
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
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
