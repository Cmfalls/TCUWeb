import ResponsiveImage from "./ResponsiveImage";

const documentedItems = [
  "Baseline conditions",
  "Field infrastructure",
  "Seasonal change",
  "Grower practice",
];

function WhatSupportMakesVisibleSection({ content }) {
  const primary = content?.primary;
  const secondary = content?.secondary;
  const thirdImage = {
    src: "/images/visuals/photo-bank/agri-antelope-07.jpg",
    alt: "Field research activity on working land",
    caption: "Visible measurement on working land strengthens the case.",
  };

  return (
    <section className="support-visible-section">
      <div className="support-visible-shell">
        <div className="support-visible-hero">
          <div className="support-visible-text-col">
            <div>
              <div className="support-visible-eyebrow">{content?.eyebrow || "What Support Makes Visible"}</div>
              <h2 className="support-visible-headline">
                A stronger visual record helps proof <span className="accent">travel</span>.
              </h2>
              <p className="support-visible-body-copy">{content?.text}</p>
            </div>

            <div className="support-visible-disciplines">
              <div className="support-visible-disciplines-label">What gets documented</div>
              <div className="support-visible-disciplines-grid">
                {documentedItems.map((item) => (
                  <div key={item} className="support-visible-discipline">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="support-visible-collage">
            <article className="support-visible-tile support-visible-tile-1">
              <ResponsiveImage src={primary?.src} alt={primary?.alt} className="support-visible-photo" />
              <div className="support-visible-tile-label">
                <div className="support-visible-tile-label-tag">On The Ground</div>
                <div className="support-visible-tile-label-text">{primary?.caption}</div>
              </div>
            </article>

            <article className="support-visible-tile support-visible-tile-2">
              <ResponsiveImage src={secondary?.src} alt={secondary?.alt} className="support-visible-photo" />
              <div className="support-visible-tile-label">
                <div className="support-visible-tile-label-tag">Infrastructure</div>
                <div className="support-visible-tile-label-text">{secondary?.caption}</div>
              </div>
            </article>

            <article className="support-visible-tile support-visible-tile-3">
              <ResponsiveImage src={thirdImage.src} alt={thirdImage.alt} className="support-visible-photo" />
              <div className="support-visible-tile-label">
                <div className="support-visible-tile-label-tag">Working Land</div>
                <div className="support-visible-tile-label-text">{thirdImage.caption}</div>
              </div>
            </article>

            <article className="support-visible-tile support-visible-tile-4">
              <div className="support-visible-quote-tag">Why It Matters</div>
              <p className="support-visible-quote-text">
                What we can <em>see</em> is what the public can believe.
              </p>
            </article>

            <article className="support-visible-tile support-visible-tile-5">
              <div>
                <div className="support-visible-archive-label">The Record</div>
                <div className="support-visible-archive-num">120+</div>
                <p className="support-visible-archive-desc">Photos, field notes, and seasonal updates published as the work unfolds.</p>
              </div>
              <div className="support-visible-archive-footer">
                <span>Growing archive</span>
                <div className="support-visible-archive-dots" aria-hidden="true">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatSupportMakesVisibleSection;