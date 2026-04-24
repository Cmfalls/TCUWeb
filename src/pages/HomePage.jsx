import BeyondFlagshipSection from "../components/BeyondFlagshipSection";
import EdisonAnnouncementSection from "../components/EdisonAnnouncementSection";
import ProjectsSnapshotSection from "../components/ProjectsSnapshotSection";
import EvidenceSnapshotSection from "../components/EvidenceSnapshotSection";
import FieldProofSection from "../components/FieldProofSection";
import HomeHero from "../components/HomeHero";
import InlineSignup from "../components/InlineSignup";
import InstitutionalCredibilityArtifact from "../components/InstitutionalCredibilityArtifact";
import RouteMeta from "../components/RouteMeta";
import SOMReadout from "../components/SOMReadout";
import SoilInfrastructureSection from "../components/SoilInfrastructureSection";
import SoilIntelligenceInteractive from "../components/SoilIntelligenceInteractive";
import TwoHalvesInteractive from "../components/TwoHalvesInteractive";
import { homeContent } from "../content/homeContent";

function HomePage() {
  return (
    <>
      <RouteMeta
        title="The Carbon Underground"
        description="The Carbon Underground connects living soil, field research, and institutional proof around climate recovery, water resilience, and agricultural transition."
      />

      <HomeHero content={homeContent.hero} />

      <FieldProofSection />

      <TwoHalvesInteractive />

      <SoilIntelligenceInteractive />

      <SoilInfrastructureSection content={homeContent.soilCase} />

      <EdisonAnnouncementSection variant="home" exploreTo="/edison" />

      <ProjectsSnapshotSection />

      <InstitutionalCredibilityArtifact />

      <EvidenceSnapshotSection variant="home" handoffDirection="below" />

      <SOMReadout />

      <BeyondFlagshipSection content={homeContent.extension} />

      <InlineSignup />
    </>
  );
}

export default HomePage;
