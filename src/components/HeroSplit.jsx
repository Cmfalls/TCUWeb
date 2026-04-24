import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HeroSplit({ content }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phraseCount = content.phrases?.length ?? 0;
  const shouldRotate = phraseCount > 1;
  const currentPhrase = phraseCount ? content.phrases[phraseIndex] : null;

  useEffect(() => {
    if (!shouldRotate) {
      return undefined;
    }
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phraseCount);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [phraseCount, shouldRotate]);

  return (
    <section className="hero hero-split">
      <div className="hero-media">
        <div className="hero-panel" style={{ backgroundImage: `url(${content.leftImage})` }}>
          <div className="panel-label">{content.leftLabel}</div>
        </div>
        <div className="hero-panel" style={{ backgroundImage: `url(${content.rightImage})` }}>
          <div className="panel-label">{content.rightLabel}</div>
        </div>
      </div>
      {content.mobileImage ? (
        <div className="hero-mobile-visual" style={{ backgroundImage: `url(${content.mobileImage})` }} />
      ) : null}
      <div className="hero-overlay" />

      <div className="container hero-content">
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        {currentPhrase ? (
          <div className="hero-phrase-wrap" aria-live="polite">
            {content.phraseLabel ? <span className="hero-phrase-label">{content.phraseLabel}</span> : null}
            <strong className="hero-phrase">{currentPhrase}</strong>
          </div>
        ) : null}
        <p className="hero-copy">{content.lede}</p>

        <div className="hero-actions">
          {content.actions.map((action) =>
            action.to ? (
              <Link
                key={action.label}
                className={action.variant === "secondary" ? "secondary" : ""}
                data-cta={action.label}
                to={action.to}
              >
                {action.label}
              </Link>
            ) : (
              <a
                key={action.label}
                className={action.variant === "secondary" ? "secondary" : ""}
                data-cta={action.label}
                href={action.href}
              >
                {action.label}
              </a>
            ),
          )}
        </div>

        <div className={`hero-note-grid hero-note-grid-${content.notes.length}`}>
          {content.notes.map((note) => (
            <article key={note.label} className="hero-note">
              <strong>{note.label}</strong>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSplit;
