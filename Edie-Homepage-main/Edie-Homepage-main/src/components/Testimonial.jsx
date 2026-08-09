import { Quote } from "lucide-react";
import { images } from "../assets/images";
import { testimonial } from "../data/content";

export default function Testimonial() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <figure className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-ink-100 bg-white p-8 text-center shadow-sm sm:p-12">
          <Quote className="h-9 w-9 text-brand-200" aria-hidden="true" />
          <blockquote className="mt-6 text-xl font-semibold leading-snug text-ink-950 sm:text-2xl">
            "{testimonial.quote}"
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <img
              src={images[testimonial.image]}
              alt={`Portrait of ${testimonial.name}`}
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
              width={48}
              height={48}
            />
            <div className="text-left">
              <div className="text-sm font-bold text-ink-950">
                {testimonial.name}
              </div>
              <div className="text-sm text-ink-500">{testimonial.role}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
