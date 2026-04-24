import { Link, Navigate, useParams } from "react-router-dom";
import RouteMeta from "../components/RouteMeta";
import { blogArticles } from "../content/blogContent";

function ArticleDetailPage() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <RouteMeta
        title={`${article.title} | The Carbon Underground`}
        description={article.excerpt}
      />

      <div className="article-detail-hero">
        <img src={article.image} alt={article.title} />
        <div className="article-detail-hero-overlay" />
      </div>

      <section className="section">
        <div className="container article-detail-container">
          <Link className="article-detail-back" to="/blog">
            ← Back to Articles
          </Link>

          <div className="article-detail-header">
            <span className="blog-category-tag">{article.category}</span>
            <time className="blog-card-date" dateTime={article.date}>
              {formattedDate}
            </time>
            {article.readTime && (
              <span className="article-read-time">{article.readTime}</span>
            )}
          </div>

          <h1 className="article-detail-title">{article.title}</h1>

          {article.author && (
            <p className="article-detail-author">By {article.author}</p>
          )}

          <hr className="article-detail-rule" />

          <div className="article-detail-body">
            {article.body
              ? article.body.map((block, i) => {
                  if (typeof block === "string") return <p key={i}>{block}</p>;
                  if (block.type === "heading") return <h2 key={i} className="article-section-heading">{block.text}</h2>;
                  if (block.type === "pullquote") return (
                    <blockquote key={i} className="article-pullquote">
                      <p>{block.text}</p>
                    </blockquote>
                  );
                  return <p key={i}>{block.text}</p>;
                })
              : <p>{article.excerpt}</p>
            }
          </div>

          <Link className="article-detail-back article-detail-back-bottom" to="/blog">
            ← Back to Articles
          </Link>
        </div>
      </section>
    </>
  );
}

export default ArticleDetailPage;
