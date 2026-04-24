import { homeContent } from "../content/homeContent";

const REASON_META = [
  { num: "37B", dataLabel: "Tons added this year alone" },
  { num: "25%", dataLabel: "Of global emissions tied to food systems" },
  {
    num: "600M",
    dataLabel: "Farms waiting for field proof",
    chips: ["Inspectable data", "Long-horizon study", "Commercial scale", "Grower-ready", "Peer-reviewed"],
  },
];

function FieldProofSection() {
  const { proofLead, proofStrip } = homeContent;

  return (
    <section className="field-proof-section" aria-labelledby="field-proof-title">
      <div className="field-proof-wrap">
        <header className="field-proof-header">
          <div className="field-proof-eyebrow" id="field-proof-title">
            {proofLead.eyebrow}
          </div>
          <p className="field-proof-intro">{proofLead.lede}</p>
        </header>

        <div className="field-proof-reasons">
          {proofStrip.map((reason, index) => {
            const meta = REASON_META[index] || REASON_META[REASON_META.length - 1];

            return (
              <article key={reason.title} className={`field-proof-reason field-proof-reason-${index + 1}`}>
                <div className="field-proof-reason-inner">
                  <div className="field-proof-num">
                    <div className="field-proof-num-large">{reason.num}</div>
                  </div>

                  <div className="field-proof-body">
                    <div className="field-proof-tag">{reason.label}</div>
                    <h3 className="field-proof-title">{reason.title}</h3>
                    <p className="field-proof-desc">{reason.text}</p>

                    {meta.chips ? (
                      <div className="field-proof-chips">
                        {meta.chips.map((chip) => (
                          <span key={chip} className="field-proof-chip">
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="field-proof-data">
                    <div className="field-proof-data-num">{meta.num}</div>
                    <div className="field-proof-data-label">{meta.dataLabel}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="field-proof-fade-bridge" />
      </div>
    </section>
  );
}

export default FieldProofSection;
