import { useEffect, useRef, useState } from "react";

function DeferredVideo({
  src,
  poster,
  label,
  className = "",
  preload = "metadata",
  loadStrategy = "idle",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ariaHidden = false,
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(loadStrategy === "eager");

  useEffect(() => {
    if (!src || shouldLoad || typeof window === "undefined") {
      return undefined;
    }

    const loadVideo = () => setShouldLoad(true);
    let observer;
    let timeoutId;
    let idleId;

    if (loadStrategy === "visible" && videoRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "240px 0px" },
      );

      observer.observe(videoRef.current);
    } else if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadVideo, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(loadVideo, 450);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }

      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [loadStrategy, shouldLoad, src]);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) {
      return;
    }

    videoRef.current.load();

    if (autoPlay) {
      videoRef.current.play().catch(() => {});
    }
  }, [autoPlay, shouldLoad]);

  const activateVideo = () => setShouldLoad(true);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={shouldLoad ? preload : "none"}
      poster={poster}
      aria-hidden={ariaHidden ? true : undefined}
      aria-label={ariaHidden ? undefined : label}
      onMouseEnter={activateVideo}
      onFocus={activateVideo}
      onTouchStart={activateVideo}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}

export default DeferredVideo;
