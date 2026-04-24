import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdoptPage = lazy(() => import("./pages/AdoptPage"));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const EdisonPage = lazy(() => import("./pages/EdisonPage"));
const EvidencePage = lazy(() => import("./pages/EvidencePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ImageCreditsPage = lazy(() => import("./pages/ImageCreditsPage"));
const LarryMessagePage = lazy(() => import("./pages/LarryMessagePage"));
const LearnPage = lazy(() => import("./pages/LearnPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const WhyPage = lazy(() => import("./pages/WhyPage"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="section">
            <div className="container">Loading...</div>
          </div>
        }
      >
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
