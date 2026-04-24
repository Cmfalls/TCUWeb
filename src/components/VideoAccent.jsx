function VideoAccent({ src, poster, label, className = "" }) {
  const videoClassName = ["video-accent", className].filter(Boolean).join(" ");

  return (
    <div className={videoClassName}>
      <video autoPlay loop muted playsInline poster={poster} aria-label={label}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoAccent;
