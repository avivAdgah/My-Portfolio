import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToHash from "./components/ScrollToHash";
import WhatsAppButton from "./components/WhatsAppButton";
import ProjectBot from "./components/ProjectBot";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToHash />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work/:id" element={<CaseStudyPage />} />
            </Routes>
            <WhatsAppButton />
            <ProjectBot />
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
