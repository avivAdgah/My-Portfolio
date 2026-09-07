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

const TITLE = "Aviv Adgah | Web Designer & Developer";
const DESCRIPTION =
  "Aviv Adgah designs and builds custom, responsive websites for businesses, professionals and growing brands — business websites, landing pages, portfolios and custom web apps with React and Next.js.";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://aviv-portfolio.com/" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
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
