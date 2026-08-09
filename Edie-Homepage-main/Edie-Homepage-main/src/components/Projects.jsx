import { ArrowUpRight } from "lucide-react";
import { images } from "../assets/images";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-heading mt-4">
              Good design means good business
            </h2>
          </div>
          <a href="#contact" className="btn-secondary self-start sm:self-auto">
            Start your project
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={images[project.image]}
                  alt={`${project.title} project preview`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={480}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="m-5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950">
                    View project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-brand-600">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink-950">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
