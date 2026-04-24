import { useState } from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import RouteMeta from "../components/RouteMeta";
import { learnContent } from "../content/learnContent";

function LearnPage() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <>
      <RouteMeta
        title="Learn | The Carbon Underground"
        description="Explore the ideas, questions, and evidence behind soil restoration, regenerative agriculture, and climate recovery."
      />

      <PageIntro
        eyebrow="Learn"
        title="Start with the few ideas that make the rest of the work understandable."
        lede={learnContent.intro}
        aside={
          <div className="aside-card">
            <span className="card-kicker">Use it for</span>
            <h3>{learnContent.aside.title}</h3>
            <p>{learnContent.aside.text}</p>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <article className="signup-card manifesto-card">
            <span className="eyebrow">{learnContent.primer.eyebrow}</span>
            <h2>{learnContent.primer.title}</h2>
            <p>{learnContent.primer.text}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <span className="eyebrow">Start here</span>
            <h2>Read in this order if the argument is new to you.</h2>
            <p>
              The quickest way to understand the work is to start with legacy carbon, then move into soil and water,
              and then look at field proof.
            </p>
          </div>
          <div className="project-grid">
            {learnContent.modules.map((item) => (
              <article key={item.title} className="project-card">
                <img src={item.image} alt={item.title} />
                <div className="project-body">
                  <span className="card-kicker">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={item.href}>{item.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft learn-key-ideas-section">
        <div className="container">
          <div className="learn-key-ideas-header">
            <div>
              <span className="eyebrow">Key ideas</span>
              <h2>
                Keep these ideas in view
                <br />
                as you move <span>deeper.</span>
              </h2>
            </div>
            <p>Four ideas that make the rest of the argument easier to follow and harder to dismiss.</p>
          </div>

          <div className="learn-key-ideas-grid">
            {learnContent.keyIdeas.map((item, index) => (
              <article key={item.title} className={`learn-key-idea-card is-${index + 1}`}>
                <div className="learn-key-idea-label">{item.label}</div>
                <h3>{item.title}</h3>
                <div className="learn-key-idea-divider" aria-hidden="true" />
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark learn-faq-section">
        <div className="container">
          <div className="learn-faq-layout">
            <div className="learn-faq-left">
              <span className="eyebrow">Common questions</span>
              <h2>
                Answer the questions most people ask before they <span>trust</span> the larger case.
              </h2>
              <p>
                These are the four questions that come up first. Getting them answered clearly makes the rest of the
                argument easier to follow.
              </p>
              <div className="learn-faq-count" aria-label={`${learnContent.faq.length} questions addressed`}>
                <strong>{learnContent.faq.length}</strong>
                <span>
                  Questions
                  <br />
                  addressed
                </span>
              </div>
            </div>

            <div className="faq-list learn-faq-list">
              {learnContent.faq.map((item, index) => {
                const isOpen = openQuestion === index;

                return (
                  <article key={item.question} className={`faq-item learn-faq-item${isOpen ? " is-open" : ""}`}>
                    <button
                      className="learn-faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`learn-faq-answer-${index}`}
                      onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                    >
                      <span className="learn-faq-question-inner">
                        <span className="learn-faq-number">{String(index + 1).padStart(2, "0")}</span>
                        <span className="learn-faq-question-text">{item.question}</span>
                      </span>
                      <span className="learn-faq-chevron" aria-hidden="true">
                        <svg viewBox="0 0 10 10">
                          <polyline points="2,3 5,7 8,3" />
                        </svg>
                      </span>
                    </button>

                    <div id={`learn-faq-answer-${index}`} className="learn-faq-answer" hidden={!isOpen}>
                      <div className="learn-faq-answer-inner">
                        <p>{item.answer}</p>
                        <span className={`learn-faq-tag is-${item.tone || "green"}`}>{item.tag}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LearnPage;
