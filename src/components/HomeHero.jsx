import { Link } from "react-router-dom";
import DeferredVideo from "./DeferredVideo";

function HomeHero({ content }) {
  return (
    <section className="home-hero">
      <picture className="home-hero-media" aria-hidden="true">
        {content.mobilePoster ? <source media="(max-width: 780px)" srcSet={content.mobilePoster} /> : null}
        <img
          className="home-hero-image"
          src={content.posterImage}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      {content.backgroundVideo ? (
        <DeferredVideo
          className="home-hero-video"
          preload="metadata"
          poster={content.posterImage}
          src={content.backgroundVideo}
          ariaHidden
        />
      ) : null}
      <div className="home-hero-overlay" />

      <div className="container home-hero-shell">
        <div className="home-hero-copy">
          <p className="home-hero-kicker">{content.kicker}</p>
          <h1>{content.title}</h1>
          <p className="home-hero-lede">{content.lede}</p>

          <div className="hero-actions home-hero-actions">
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
        </div>

        <aside className="home-hero-film">
          <Link className="home-hero-film-frame" to={content.filmLink.to}>
            {content.filmVideo ? (
              <DeferredVideo
                preload="metadata"
                poster={content.filmPoster}
                src={content.filmVideo}
                ariaHidden
              />
            ) : (
              <img
                src={content.filmPoster}
                alt="Working farmland tied to The Edison Institute"
                loading="lazy"
                decoding="async"
              />
            )}
            <span className="home-hero-film-badge">{content.filmEyebrow}</span>
            <span aria-hidden="true" className="home-hero-play">
              Play
            </span>
          </Link>

          <div className="home-hero-film-copy">
            <span className="card-kicker">{content.filmEyebrow}</span>
            <strong>{content.filmTitle}</strong>
            <p>{content.filmText}</p>
            <Link className="home-hero-film-link" to={content.filmLink.to}>
              {content.filmLink.label}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HomeHero;
