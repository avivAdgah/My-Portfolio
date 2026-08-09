import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
      <main>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <Gallery/>
        <ContactUs/>
        <Footer/>
      </main>
  );
}
