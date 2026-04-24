import ResponsiveImage from "./ResponsiveImage";

function VisualMosaic({ items, className = "" }) {
  const mosaicClassName = ["visual-mosaic", className].filter(Boolean).join(" ");

  return (
    <div className={mosaicClassName}>
      {items.map((item, index) => (
        <figure key={`${item.src}-${index}`} className="visual-mosaic-item">
          <ResponsiveImage src={item.src} alt={item.alt} />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}

export default VisualMosaic;
