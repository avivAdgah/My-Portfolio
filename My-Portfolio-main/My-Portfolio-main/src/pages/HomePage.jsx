import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import Services from "../components/Services";
import HowIWork from "../components/HowIWork";
import Technologies from "../components/Technologies";
import About from "../components/About";
import FinalCTA from "../components/FinalCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language].homeMeta;

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <link rel="canonical" href="https://aviv-portfolio.com/" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content="https://aviv-portfolio.com/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <HowIWork />
        <Technologies />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
