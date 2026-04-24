import DeferredVideo from "./DeferredVideo";

function VideoAccent({ src, poster, label, className = "" }) {
  const videoClassName = ["video-accent", className].filter(Boolean).join(" ");

  return (
    <div className={videoClassName}>
      <DeferredVideo poster={poster} src={src} label={label} loadStrategy="visible" />
    </div>
  );
}

export default VideoAccent;
