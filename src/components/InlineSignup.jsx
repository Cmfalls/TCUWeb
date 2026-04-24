function InlineSignup() {
  return (
    <section className="section follow-edison-section">
      <div className="container">
        <article className="follow-edison-card">
          <div className="follow-edison-toolbar">
            <div className="follow-edison-toolbar-tag">Stay Close</div>
            <div className="follow-edison-toolbar-meta">Field updates - Research milestones - Edison progress</div>
          </div>

          <div className="follow-edison-body">
            <div className="follow-edison-left-col">
              <h2>
                Follow Edison progress, new evidence, and major institutional <span>updates.</span>
              </h2>
              <p>
                Join the update list for field milestones, new research context, published writing, and opportunities to
                support the work as it grows.
              </p>
            </div>

            <div className="follow-edison-right-col">
              <div className="follow-edison-visual-zone" />

              <div className="follow-edison-right-footer">
                <p>
                  Built for <strong>funders, partners, and readers</strong> who want milestone-driven updates rather than
                  ambient noise.
                </p>

                <div className="follow-edison-actions">
                  <a
                    data-cta="Join updates"
                    href="mailto:info@thecarbonunderground.org?subject=Join%20the%20TCU%20newsletter"
                  >
                    Join updates
                  </a>
                  <a
                    className="secondary"
                    data-cta="Partnership inquiry"
                    href="mailto:info@thecarbonunderground.org?subject=TCU%20Partnership%20Inquiry"
                  >
                    Partnership inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default InlineSignup;
