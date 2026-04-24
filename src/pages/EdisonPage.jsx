import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AdoptionGapSection from "../components/AdoptionGapSection";
import EarlyBackingSection from "../components/EarlyBackingSection";
import EdisonAnnouncementSection from "../components/EdisonAnnouncementSection";
import EdisonCampusBuildoutSection from "../components/EdisonCampusBuildoutSection";
import EdisonGivingTiersSection from "../components/EdisonGivingTiersSection";
import EdisonInstitutionFrameSection from "../components/EdisonInstitutionFrameSection";
import EdisonRDProjectsSection from "../components/EdisonRDProjectsSection";
import EdisonResearchFrameworkSection from "../components/EdisonResearchFrameworkSection";
import EdisonTimelineSection from "../components/EdisonTimelineSection";
import EdisonUniqueSection from "../components/EdisonUniqueSection";
import PracticeStackSection from "../components/PracticeStackSection";
import RegionalIndicatorsSection from "../components/RegionalIndicatorsSection";
import RouteMeta from "../components/RouteMeta";
import ValleyClaimsSection from "../components/ValleyClaimsSection";
import WhyEdisonBelongsSection from "../components/WhyEdisonBelongsSection";
import WhyItMattersEdisonSection from "../components/WhyItMattersEdisonSection";
import { edisonClaimTrail } from "../content/claimSources";
import { edisonContent } from "../content/aboutSupportContent";

function EdisonPage() {
  const foundingFrameRef = useRef(null);
  const threeCropsFrameRef = useRef(null);
  const fourObjectivesFrameRef = useRef(null);
  const regionalIndicatorSourceIds = new Set(
    (edisonContent.embeddedEvidence?.items || []).map((item) => item.sourceId).filter(Boolean),
  );
  const nonRepeatingValleyClaims = edisonClaimTrail.filter((id) => !regionalIndicatorSourceIds.has(id));
  const closingAccent = "wider case.";
  const closingTitle = edisonContent.closingBridge.title;
  const closingTitleLead = closingTitle.endsWith(closingAccent)
    ? closingTitle.slice(0, -closingAccent.length).trim()
    : closingTitle;

  useEffect(() => {
    const bindFrameAutoHeight = (frame) => {
      if (!frame) {
        return () => {};
      }

      const syncFrameHeight = () => {
        try {
          const doc = frame.contentDocument || frame.contentWindow?.document;
          if (!doc) return;
          const height = Math.max(doc.body?.scrollHeight || 0, doc.documentElement?.scrollHeight || 0);
          if (height > 0) {
            frame.style.height = `${height}px`;
          }
        } catch {
          // Same-origin content is expected; swallow if browser blocks temporarily.
        }
      };

      const onLoad = () => {
        syncFrameHeight();
        window.setTimeout(syncFrameHeight, 120);
        window.setTimeout(syncFrameHeight, 420);
      };

      frame.addEventListener("load", onLoad);
      window.addEventListener("resize", syncFrameHeight);
      onLoad();

      return () => {
        frame.removeEventListener("load", onLoad);
        window.removeEventListener("resize", syncFrameHeight);
      };
    };

    const unbindFounding = bindFrameAutoHeight(foundingFrameRef.current);
    const unbindThreeCrops = bindFrameAutoHeight(threeCropsFrameRef.current);
    const unbindFourObjectives = bindFrameAutoHeight(fourObjectivesFrameRef.current);

    return () => {
      unbindFounding();
      unbindThreeCrops();
      unbindFourObjectives();
    };
  }, []);

  return (
    <>
      <RouteMeta
        title="Edison | The Carbon Underground"
        description="The Edison Institute is a farm-based R&D center in California's Central Valley studying regenerative agriculture, water security, and farm resilience under real operating pressure."
      />

      <EdisonAnnouncementSection />

      <EdisonInstitutionFrameSection content={edisonContent.documentFrame} />

      <section className="section section-soft edison-founding-section edison-founding-embed-section">
        <div className="container">
          <iframe
            ref={foundingFrameRef}
            className="edison-founding-embed"
            src="/partials/tcu-built-on-partnership.html"
            loading="lazy"
            title="Built On A Partnership"
          />
        </div>
      </section>

      <WhyEdisonBelongsSection content={edisonContent.valleyCase} />

      <RegionalIndicatorsSection content={edisonContent.embeddedEvidence} />

      <ValleyClaimsSection claimIds={nonRepeatingValleyClaims} />

      <AdoptionGapSection content={edisonContent.knowledgeGap} />

      <EdisonResearchFrameworkSection />

      <EdisonUniqueSection />

      {edisonContent.visualBridge && (
        <section className="edison-visual-bridge">
          <figure>
            <img src={edisonContent.visualBridge.image} alt={edisonContent.visualBridge.imageAlt} loading="lazy" decoding="async" />
            <figcaption>{edisonContent.visualBridge.caption}</figcaption>
          </figure>
        </section>
      )}

      <section className="section section-dark edison-three-proofs-section edison-three-crops-embed-section">
        <div className="container">
          <iframe
            ref={threeCropsFrameRef}
            className="edison-three-crops-embed"
            src="/partials/tcu-three-crops.html"
            loading="lazy"
            title="Three Crops, Three Proofs"
          />
        </div>
      </section>

      <section className="section section-soft edison-objectives-section edison-four-objectives-embed-section">
        <div className="container">
          <iframe
            ref={fourObjectivesFrameRef}
            className="edison-four-objectives-embed"
            src="/partials/tcu-four-objectives.html"
            loading="lazy"
            title="Four Objectives"
          />
        </div>
      </section>

      <EdisonRDProjectsSection />

      <PracticeStackSection content={edisonContent.practiceStack} />

      <EdisonTimelineSection />

      <EdisonCampusBuildoutSection content={edisonContent.campusBuildout} />

      <EarlyBackingSection content={edisonContent.capacityBuildout} />

      <WhyItMattersEdisonSection content={edisonContent.institutionalLogic} />

      <EdisonGivingTiersSection />

      <section className="section section-soft edison-close-section">
        <div className="container">
          <article className="edison-close-card">
            <div className="edison-close-grid">
              <div className="edison-close-copy">
                <div>
                  <span className="edison-close-eyebrow">{edisonContent.closingBridge.eyebrow}</span>
                  <h2>
                    {closingTitleLead}{" "}
                    <span>{closingAccent}</span>
                  </h2>
                </div>

                <p>{edisonContent.closingBridge.text}</p>

                <div className="edison-close-actions">
                  <Link data-cta={edisonContent.closingBridge.action.label} to={edisonContent.closingBridge.action.to}>
                    {edisonContent.closingBridge.action.label}
                  </Link>
                  <Link
                    className="secondary"
                    data-cta={edisonContent.closingBridge.secondary.label}
                    to={edisonContent.closingBridge.secondary.to}
                  >
                    {edisonContent.closingBridge.secondary.label}
                  </Link>
                </div>
              </div>

              <div className="edison-close-photo-col">
                <div className="edison-close-photo-frame">
                  <img
                    src={edisonContent.closingBridge.image}
                    alt={edisonContent.closingBridge.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="edison-close-photo-caption">{edisonContent.closingBridge.caption}</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default EdisonPage;
