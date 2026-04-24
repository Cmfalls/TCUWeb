import { useState } from "react";
import { Link } from "react-router-dom";
import RouteMeta from "../components/RouteMeta";
import { blogArticles, featuredArticle } from "../content/blogContent";

function CategoryTag({ label }) {
  return <span className="blog-category-tag">{label}</span>;
}

function BlogCard({ article }) {
  return (
    <Link className="blog-card" to={`/blog/${article.slug}`} aria-label={article.title}>
      <div className="blog-card-image">
        <img src={article.image} alt="" loading="lazy" />
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <CategoryTag label={article.category} />
          <time className="blog-card-date" dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
        </div>
        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-excerpt">{article.excerpt}</p>
      </div>
    </Link>
  );
}

function BlogPage() {
  const categories = ["All", ...new Set(blogArticles.map((a) => a.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const gridArticles = blogArticles.slice(1);
  const filteredArticles =
    activeCategory === "All"
      ? gridArticles
      : gridArticles.filter((a) => a.category === activeCategory);

  return (
    <>
      <RouteMeta
        title="Articles | The Carbon Underground"
        description="News, research, and field reporting on regenerative agriculture, living soil, and climate recovery from The Carbon Underground."
      />

      <section className="blog-hero section">
        <div className="container">
          <span className="eyebrow">Articles</span>
          <h1 className="blog-hero-title">Field reports, science, and the case for living soil</h1>
          <p className="blog-hero-sub">
            Press coverage, research findings, and partner news that document the growing movement toward regenerative agriculture and climate recovery.
          </p>
        </div>
      </section>

      <section className="section blog-featured-section">
        <div className="container">
          <Link className="blog-featured" to={`/blog/${featuredArticle.slug}`} aria-label={featuredArticle.title}>
            <div className="blog-featured-image">
              <img src={featuredArticle.image} alt="" />
              <div className="blog-featured-overlay" />
              <div className="blog-featured-body">
                <span className="blog-featured-eyebrow">Featured</span>
                <div className="blog-card-meta">
                  <CategoryTag label={featuredArticle.category} />
                  <time className="blog-card-date" dateTime={featuredArticle.date}>
                    {new Date(featuredArticle.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  {featuredArticle.readTime && (
                    <span className="blog-card-date">{featuredArticle.readTime}</span>
                  )}
                </div>
                <h2 className="blog-featured-title">{featuredArticle.title}</h2>
                {featuredArticle.author && (
                  <p className="blog-featured-author">By {featuredArticle.author}</p>
                )}
                <p className="blog-featured-excerpt">{featuredArticle.excerpt}</p>
                <span className="blog-featured-cta">Read article →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-filter-row">
            <span className="blog-filter-label">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-chip${activeCategory === cat ? " is-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
