import GivingOpportunitiesSection from "../components/GivingOpportunitiesSection";
import InstitutionalFootingSection from "../components/InstitutionalFootingSection";
import RouteMeta from "../components/RouteMeta";
import StayCloseSection from "../components/StayCloseSection";
import SupportHeroArtifact from "../components/SupportHeroArtifact";
import SupportUnlockSection from "../components/SupportUnlockSection";
import WaysToBackSection from "../components/WaysToBackSection";
import WhatSupportMakesVisibleSection from "../components/WhatSupportMakesVisibleSection";
import WhereWeStandSection from "../components/WhereWeStandSection";
import WhereSupportGoesSection from "../components/WhereSupportGoesSection";
import WhyNowSection from "../components/WhyNowSection";
import { supportContent } from "../content/aboutSupportContent";

function SupportPage() {
  return (
    <>
      <RouteMeta
        title="Support | The Carbon Underground"
        description="Support The Carbon Underground through giving, partnership, and ongoing engagement with its work on soil, agriculture, and climate recovery."
      />

      <SupportHeroArtifact />

      <WhereWeStandSection fundingProgress={supportContent.fundingProgress} />

      <WhyNowSection />

      <WaysToBackSection caseStatement={supportContent.caseStatement} cards={supportContent.cards} />

      <GivingOpportunitiesSection />

      <SupportUnlockSection />

      <WhatSupportMakesVisibleSection content={supportContent.visualBand} />

      <WhereSupportGoesSection />

      <InstitutionalFootingSection partners={supportContent.partnerSignals} />

      <StayCloseSection content={supportContent.decisionGuide} />
    </>
  );
}

export default SupportPage;
