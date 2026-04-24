function WhereWeStandSection({ fundingProgress }) {
  return (
    <section className="where-stand-section">
      <div className="where-stand-shell">
        <div className="where-stand-head-row">
          <div>
            <div className="where-stand-eyebrow">Where We Stand</div>
            <h2 className="where-stand-headline">
              The foundation is in place. The gap is the <span className="accent">operating support</span> to do this right.
            </h2>
            <p className="where-stand-lede">
              The mission is real and underway. What we need now are people who see what we see and are willing to <strong>do something about it</strong>.
            </p>
          </div>

          <div className="where-stand-meta">
            <div className="where-stand-meta-header">Funding Snapshot</div>
            <div className="where-stand-meta-row"><span className="where-stand-meta-label">Phase</span><strong>Phase One</strong></div>
            <div className="where-stand-meta-row"><span className="where-stand-meta-label">Status</span><strong>Active</strong></div>
            <div className="where-stand-meta-row"><span className="where-stand-meta-label">As of</span><strong>April 2026</strong></div>
            <div className="where-stand-meta-row"><span className="where-stand-meta-label">Partner</span><strong>CRARS / CSU Chico</strong></div>
          </div>
        </div>

        <div className="where-stand-progress-card">
          <div className="where-stand-progress-header">
            <div className="where-stand-progress-title">Capital Raised vs Near-Term Need</div>
            <div className="where-stand-progress-meta">Phase One / $10M Target</div>
          </div>

          <div className="where-stand-bar-wrap">
            <div className="where-stand-bar">
              <div className="where-stand-bar-fill" />
              <div className="where-stand-bar-marker" style={{ left: "65%" }}>
                <div className="where-stand-bar-marker-label">Raised: {fundingProgress.raised.value}</div>
              </div>
            </div>
            <div className="where-stand-bar-scale">
              <span><strong>$0</strong></span>
              <span>$2.5M</span>
              <span>$5M</span>
              <span>$7.5M</span>
              <span><strong>$10M</strong></span>
            </div>
          </div>

          <div className="where-stand-stat-row">
            <div className="where-stand-stat-block">
              <div className="where-stand-stat-tag">Raised To Date</div>
              <div className="where-stand-stat-num raised">{fundingProgress.raised.value}</div>
              <div className="where-stand-stat-desc">Land, operations, and grants secured. <strong>Schuman Family Foundation donated the 325-acre Edison Farm</strong> plus committed operating support.</div>
              <div className="where-stand-ticks">
                <div className="where-stand-tick done"><span className="where-stand-tick-dot" />Land</div>
                <div className="where-stand-tick done"><span className="where-stand-tick-dot" />Staff</div>
                <div className="where-stand-tick done"><span className="where-stand-tick-dot" />Partnerships</div>
              </div>
            </div>

            <div className="where-stand-stat-divider" />

            <div className="where-stand-stat-block">
              <div className="where-stand-stat-tag gap">Near-Term Need</div>
              <div className="where-stand-stat-num gap">{fundingProgress.need.value}</div>
              <div className="where-stand-stat-desc">Operating runway and program launch. Covers research staff, field trials, data platform, and field education programs for the next phase.</div>
              <div className="where-stand-ticks">
                <div className="where-stand-tick pending"><span className="where-stand-tick-dot" />Operations</div>
                <div className="where-stand-tick pending"><span className="where-stand-tick-dot" />Research</div>
                <div className="where-stand-tick pending"><span className="where-stand-tick-dot" />Education</div>
              </div>
            </div>

            <div className="where-stand-stat-divider" />

            <div className="where-stand-stat-block">
              <div className="where-stand-stat-tag total">Combined Phase One</div>
              <div className="where-stand-stat-num">$10M</div>
              <div className="where-stand-stat-desc">The total ask across land, build, and runway. Every dollar in this phase is operating capacity, not overhead.</div>
              <div className="where-stand-ticks">
                <div className="where-stand-tick done"><span className="where-stand-tick-dot" />65% funded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhereWeStandSection;
