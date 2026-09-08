import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import projects, { localizeProject } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./CaseStudyPage.css";

export default function CaseStudyPage() {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language].caseStudy;
  const rawProject = projects.find((item) => item.id === id);
  const project = rawProject ? localizeProject(rawProject, language) : null;

  if (!project || !project.caseStudy) {
    return (
      <>
        <Navbar />
        <main className="container case-study-not-found">
          <h1>{t.notFoundTitle}</h1>
          <p className="section-text">{t.notFoundText}</p>
          <Link to="/#work" className="btn btn-primary">
            {t.backToWorkBtn}
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const { name, industryLabel, image, liveUrl, technologies, caseStudy } =
    project;
  const title =
    language === "he"
      ? `${name} — קייס סטאדי | אביב אדגה`
      : `${name} Case Study | Aviv Adgah`;
  const description = caseStudy.purpose;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://aviv-portfolio.com/work/${project.id}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://aviv-portfolio.com/work/${project.id}`}
        />
      </Helmet>
      <Navbar />
      <main className="case-study container">
        <Link to="/#work" className="back-link">
          {t.backToWork}
        </Link>

        <p className="case-study-industry">{industryLabel}</p>
        <h1 className="case-study-title">{name}</h1>
        <p className="case-study-purpose">{caseStudy.purpose}</p>

        <div className="case-study-hero-image">
          <img
            src={`/assets/images/${image}`}
            alt={`${name} – ${industryLabel} homepage screenshot`}
            loading="lazy"
          />
        </div>

        <div className="case-study-body">
          <section>
            <h2>{t.projectOverview}</h2>
            <p>{caseStudy.purpose}</p>
          </section>

          <section>
            <h2>{t.theChallenge}</h2>
            <p>{caseStudy.challenge}</p>
          </section>

          <section>
            <h2>{t.theSolution}</h2>
            <p>{caseStudy.solution}</p>
          </section>

          <section>
            <h2>{t.designApproach}</h2>
            <p>{caseStudy.designApproach}</p>
          </section>

          <section>
            <h2>{t.keyFeatures}</h2>
            <ul>
              {caseStudy.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{t.responsiveExperience}</h2>
            <p>{caseStudy.responsive}</p>
          </section>

          <section>
            <h2>{t.technologies}</h2>
            <ul className="case-study-tech" dir="ltr">
              {technologies.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {caseStudy.screenshots?.length > 0 && (
            <section>
              <h2>{t.screenshots}</h2>
              <div className="case-study-screenshots">
                {caseStudy.screenshots.map((screenshot) => (
                  <img
                    key={screenshot}
                    src={`/assets/images/${screenshot}`}
                    alt={`${name} screenshot`}
                    loading="lazy"
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="case-study-cta">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {t.visitLiveWebsite}
          </a>
          <Link to="/#contact" className="btn btn-secondary">
            {t.startSimilarProject}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
