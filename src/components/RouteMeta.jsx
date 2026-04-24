import { useEffect } from "react";

function RouteMeta({ title, description }) {
  useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = description;

    const setMeta = (property, content, attribute = "name") => {
      let tag = document.querySelector(`meta[${attribute}="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [description, title]);

  return null;
}

export default RouteMeta;
