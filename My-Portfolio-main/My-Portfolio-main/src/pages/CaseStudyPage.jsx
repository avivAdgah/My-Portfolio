import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CaseStudyPage.css";

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project || !project.caseStudy) {
    return (
      <>
        <Navbar />
        <main className="container case-study-not-found">
          <h1>Case study not found</h1>
          <p className="section-text">
            The project you're looking for doesn't exist or doesn't have a
            case study yet.
          </p>
          <Link to="/#work" className="btn btn-primary">
            Back to Work
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const { name, industryLabel, image, liveUrl, technologies, caseStudy } =
    project;
  const title = `${name} Case Study | Aviv Adgah`;
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
          ← Back to Work
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
            <h2>Project Overview</h2>
            <p>{caseStudy.purpose}</p>
          </section>

          <section>
            <h2>The Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </section>

          <section>
            <h2>The Solution</h2>
            <p>{caseStudy.solution}</p>
          </section>

          <section>
            <h2>Design Approach</h2>
            <p>{caseStudy.designApproach}</p>
          </section>

          <section>
            <h2>Key Features</h2>
            <ul>
              {caseStudy.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Responsive Experience</h2>
            <p>{caseStudy.responsive}</p>
          </section>

          <section>
            <h2>Technologies</h2>
            <ul className="case-study-tech">
              {technologies.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {caseStudy.screenshots?.length > 0 && (
            <section>
              <h2>Screenshots</h2>
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
            Visit Live Website
          </a>
          <Link to="/#contact" className="btn btn-secondary">
            Start a Similar Project
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
