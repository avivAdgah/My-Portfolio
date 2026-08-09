import { PenTool, Code2, Server, ArrowRight } from "lucide-react";
import { services } from "../data/content";

const ICONS = { PenTool, Code2, Server };

const COLOR_STYLES = {
  brand: "bg-brand-50 text-brand-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
};

export default function Services() {
  return (
    <section id="services" className="bg-ink-50/60 py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="section-heading mt-4">
            We offer high-demand services
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            From the first pixel to the last line of code, our team covers
            every layer your product needs to launch and grow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${COLOR_STYLES[service.color]}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink-950">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-600">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-600"
                >
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
