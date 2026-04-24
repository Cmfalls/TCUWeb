function MissionSection({ content }) {
  const { mission, missionHighlight, missionTags = [], vision, visionSources, opportunity, theoryOfChange } = content;
  const highlight = missionHighlight || "regenerative agriculture";
  const missionParts = mission.includes(highlight) ? mission.split(highlight) : null;

  return (
    <section className="mission-section section">
      <div className="container">
        <div className="mission-inner">
          <article className="mission-card mission-card-dark">
            <span className="eyebrow">Our Mission</span>
            <p className="mission-statement">
              {missionParts ? (
                <>
                  {missionParts[0]}
                  <span>{highlight}</span>
                  {missionParts[1]}
                </>
              ) : (
                mission
              )}
            </p>

            {missionTags.length > 0 && (
              <>
                <div className="mission-divider" aria-hidden="true" />
                <div className="mission-tags" aria-label="Mission themes">
                  {missionTags.map((tag, index) => (
                    <span key={tag} className={`mission-tag ${index < 2 ? "is-green" : "is-muted"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </article>

          <article className="mission-card mission-card-light">
            <span className="eyebrow">Vision &amp; Theory of Change</span>

            <div className="mission-vision-block">
              <div className="mission-vision-label is-amber">The Problem</div>
              <p className="mission-vision">{vision}</p>
              {visionSources && <p className="mission-sources">Sources: {visionSources}</p>}
            </div>

            {opportunity && (
              <div className="mission-vision-block">
                <div className="mission-vision-label is-green">The Opportunity</div>
                <p className="mission-vision">{opportunity}</p>
              </div>
            )}

            <div className="mission-pull">
              <p>{theoryOfChange}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
