import RouteMeta from "../components/RouteMeta";
import { visualAssets } from "../content/visualAssets";

function ImageCreditsPage() {
  return (
    <>
      <RouteMeta
        title="Image Credits | The Carbon Underground"
        description="Credits and source notes for visual assets used on The Carbon Underground website."
      />

      <section className="page-intro section image-credits-intro">
        <div className="container page-intro-layout">
          <div className="page-intro-copy">
            <span className="eyebrow">Image Credits</span>
            <h1>Visual source notes for the TCU website.</h1>
            <p>
              These images were selected from the local TCU media library for the visual-heavy site refresh. Source
              and license details should be verified against the media bank before final public launch.
            </p>
          </div>
          <div className="page-intro-aside">
            <div className="aside-card">
              <span className="card-kicker">Asset policy</span>
              <h3>Use only curated site assets.</h3>
              <p>
                The site imports optimized web copies from the library rather than shipping originals or the full media
                bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container image-credit-list">
          {visualAssets.map((asset) => (
            <article key={`${asset.id}-${asset.path}`} className="image-credit-card">
              <img src={asset.path} alt={asset.alt} loading="lazy" decoding="async" />
              <div>
                <span className="card-kicker">{asset.collection}</span>
                <h2>{asset.title}</h2>
                <p>{asset.alt}</p>
                <dl>
                  <div>
                    <dt>Asset ID</dt>
                    <dd>{asset.id}</dd>
                  </div>
                  <div>
                    <dt>Placement</dt>
                    <dd>{asset.placement}</dd>
                  </div>
                  <div>
                    <dt>Credit</dt>
                    <dd>{asset.credit}</dd>
                  </div>
                  <div>
                    <dt>License</dt>
                    <dd>{asset.license}</dd>
                  </div>
                  <div>
                    <dt>Source path</dt>
                    <dd>{asset.sourcePath}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ImageCreditsPage;
