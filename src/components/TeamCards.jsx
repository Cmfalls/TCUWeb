function TeamCards({ people, theme = "light", className = "" }) {
  const gridClassName = ["team-grid", className].filter(Boolean).join(" ");

  return (
    <div className={gridClassName}>
      {people.map((person) => (
        <article key={person.name} className={`team-card ${theme === "dark" ? "team-card-dark" : ""}`}>
          {person.image ? (
            <div className="team-media">
              <img src={person.image} alt={person.alt || person.name} />
            </div>
          ) : (
            <div className="team-initials" aria-hidden="true">
              {person.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}

          <div className="team-body">
            <span className="team-role">{person.role}</span>
            <h3>{person.name}</h3>
            {person.title ? <strong className="team-title">{person.title}</strong> : null}
            {person.summary ? <p>{person.summary}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export default TeamCards;
