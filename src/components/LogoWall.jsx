function LogoWall({ items, theme = "light", className = "" }) {
  const wallClassName = ["logo-wall", theme === "dark" ? "logo-wall-dark" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wallClassName}>
      {items.map((item) => (
        <article key={item.name} className="logo-card">
          <div className="logo-card-mark">
            {item.logo ? (
              <img src={item.logo} alt={item.alt || item.name} />
            ) : (
              <span className="logo-card-initial" aria-hidden="true">
                {item.name.slice(0, 1)}
              </span>
            )}
          </div>
          <div className="logo-card-copy">
            <h3>{item.name}</h3>
            {item.note ? <p>{item.note}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export default LogoWall;
