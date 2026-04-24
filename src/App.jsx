import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import AdoptPage from "./pages/AdoptPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import BlogPage from "./pages/BlogPage";
import EdisonPage from "./pages/EdisonPage";
import EvidencePage from "./pages/EvidencePage";
import HomePage from "./pages/HomePage";
import ImageCreditsPage from "./pages/ImageCreditsPage";
import LarryMessagePage from "./pages/LarryMessagePage";
import LearnPage from "./pages/LearnPage";
import ProjectsPage from "./pages/ProjectsPage";
import SupportPage from "./pages/SupportPage";
import WhyPage from "./pages/WhyPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/evidence" element={<EvidencePage />} />
          <Route path="/edison" element={<EdisonPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/edison" element={<Navigate to="/edison" replace />} />
          <Route path="/projects/adopt-a-meter" element={<AdoptPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/larrys-message" element={<LarryMessagePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticleDetailPage />} />
          <Route path="/image-credits" element={<ImageCreditsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
