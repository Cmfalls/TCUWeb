import ResponsiveImage from "./ResponsiveImage";

function VisualBand({ eyebrow, title, text, primary, secondary, images, className = "" }) {
  const bandClassName = ["visual-band", className].filter(Boolean).join(" ");

  return (
    <section className={bandClassName}>
      <div className="container visual-band-layout">
        <div className="visual-band-copy">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {text ? <p>{text}</p> : null}
        </div>
        <div className="visual-band-images">
          {[primary, secondary, ...(images || [])].filter(Boolean).map((image, index) => (
            <figure key={`${image.src}-${index}`} className="visual-band-figure">
              <ResponsiveImage src={image.src} alt={image.alt} />
              {image.caption ? <figcaption>{image.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisualBand;
