function PageIntro({ eyebrow, title, lede, aside, actions }) {
  return (
    <section className="page-intro section page-intro-shell">
      <div className="container page-intro-layout">
        <div className="page-intro-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{lede}</p>
          {actions ? <div className="intro-actions">{actions}</div> : null}
        </div>
        {aside ? <div className="page-intro-aside">{aside}</div> : null}
      </div>
    </section>
  );
}

export default PageIntro;
