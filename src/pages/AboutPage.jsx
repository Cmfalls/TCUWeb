import { Link } from "react-router-dom";
import AboutHeroSection from "../components/AboutHeroSection";
import InstitutionalRoleSection from "../components/InstitutionalRoleSection";
import LeadershipSection from "../components/LeadershipSection";
import FoundingPartnersSection from "../components/FoundingPartnersSection";
import MissionSection from "../components/MissionSection";
import RelationshipHistorySection from "../components/RelationshipHistorySection";
import ResearchLeadershipSection from "../components/ResearchLeadershipSection";
import RouteMeta from "../components/RouteMeta";
import StewardshipArtifact from "../components/StewardshipArtifact";
import { aboutContent } from "../content/aboutSupportContent";

function AboutPage() {
  return (
    <>
      <RouteMeta
        title="About | The Carbon Underground"
        description="Learn about The Carbon Underground, its leadership, and its work advancing living soil, regenerative agriculture, and climate recovery."
      />

      <AboutHeroSection content={aboutContent} />

      <MissionSection content={aboutContent.missionSection} />

      <InstitutionalRoleSection content={aboutContent.foundation} />

      <LeadershipSection people={aboutContent.team} />

      <ResearchLeadershipSection people={aboutContent.researchTeam} />

      <FoundingPartnersSection partners={aboutContent.foundingPartners} />

      <StewardshipArtifact />

      <RelationshipHistorySection cards={aboutContent.historyCards} />

      <section className="section">
        <div className="container">
          <article className="signup-card founder-preview">
            <div className="founder-preview-media">
              <img src={aboutContent.founderPreview.image} alt="Larry Kopald speaking at a podium" />
            </div>
            <div>
              <span className="eyebrow">Founder voice</span>
              <h2>{aboutContent.founderPreview.title}</h2>
              <p>{aboutContent.founderPreview.text}</p>
            </div>
            <div className="support-actions">
              <Link to="/larrys-message">Open Larry's message</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
