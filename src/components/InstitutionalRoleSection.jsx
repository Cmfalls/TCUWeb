const objectives = [
  {
    tag: "Public case",
    heading: "Make the case plainly enough to travel.",
    copy:
      "Make the public case plainly enough that it can travel beyond climate specialists and reach the farmers, funders, and food companies who act on it.",
  },
  {
    tag: "Field proof",
    heading: "Support field proof through Edison.",
    copy:
      "Support field proof through Edison and research relationships tied to working land, not isolated from the pressures farmers actually face.",
  },
  {
    tag: "Stewardship",
    heading: "Build the partnerships to keep it durable.",
    copy:
      "Build the partnerships and stewardship needed to keep long-horizon work durable across funding cycles and institutional change.",
  },
];

function InstitutionalRoleSection({ content }) {
  return (
    <section className="institutional-role-polish-section" aria-labelledby="institutional-role-polish-title">
      <div className="institutional-role-polish-inner">
        <div className="institutional-role-polish-hero">
          <figure className="institutional-role-polish-photo">
            <div className="institutional-role-polish-frame-header">
              <div>Climate pressure / Working land</div>
              <span>Central Valley / Active</span>
            </div>
            <div className="institutional-role-polish-frame-body">
              <img src={content.image} alt={content.imageAlt} loading="lazy" decoding="async" />
              <div className="institutional-role-polish-drop-marker">IMG / Cracked Earth</div>
            </div>
          </figure>

          <div className="institutional-role-polish-copy">
            <div>
              <div className="institutional-role-polish-eyebrow">{content.eyebrow}</div>
              <h2 id="institutional-role-polish-title">
                TCU exists to keep climate, agriculture, and living-systems repair in the{" "}
                <span>same conversation.</span>
              </h2>
            </div>

            <p>
              The organization was built around a simple problem: climate language travels faster than operational
              confidence. TCU helps close that gap by{" "}
              <strong>
                making the case publicly, connecting it to field evidence, and staying close to the partnerships needed
                for adoption
              </strong>
              .
            </p>

            <p>
              That means the work cannot live only in essays, only in research, or only in philanthropy. It has to move
              between those worlds without losing seriousness in any of them.
            </p>

            <div className="institutional-role-polish-callout">
              <div>Three founding organizations</div>
              <p>
                The Edison Institute is a project of The Carbon Underground, CRARS at CSU Chico, and the Schuman Family
                Foundation,{" "}
                <strong>
                  over 80 years combined in agricultural innovation, scientific research, business development,
                  communications, and government relations
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="institutional-role-polish-objectives">
          {objectives.map((item, index) => (
            <article key={item.tag} className={`institutional-role-polish-objective objective-${index + 1}`}>
              <div className="institutional-role-polish-objective-tag">{item.tag}</div>
              <h3>{item.heading}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstitutionalRoleSection;
