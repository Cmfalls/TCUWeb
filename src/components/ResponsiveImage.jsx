function ResponsiveImage({ src, alt, className = "", loading = "lazy", sizes, ...props }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      sizes={sizes}
      {...props}
    />
  );
}

export default ResponsiveImage;
