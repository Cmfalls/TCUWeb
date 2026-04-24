import { Link } from "react-router-dom";

function HomeHero({ content }) {
  return (
    <section className="home-hero">
      {content.backgroundVideo ? (
        <video
          className="home-hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster={content.posterImage}
          aria-hidden="true"
        >
          <source src={content.backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div className="home-hero-media" style={{ backgroundImage: `url(${content.posterImage})` }} />
      )}
      {content.mobilePoster && !content.backgroundVideo ? (
        <div className="home-hero-mobile" style={{ backgroundImage: `url(${content.mobilePoster})` }} />
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
              <video autoPlay loop muted playsInline poster={content.filmPoster} aria-hidden="true">
                <source src={content.filmVideo} type="video/mp4" />
              </video>
            ) : (
              <img src={content.filmPoster} alt="Working farmland tied to The Edison Institute" />
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
