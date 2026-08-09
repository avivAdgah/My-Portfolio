import { ArrowRight } from "lucide-react";
import { images } from "../assets/images";
import EmailCaptureForm from "./EmailCaptureForm";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Unhappy with your current website?</p>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
            We create beautiful, fast web experiences that convert
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-600">
            Edie is a small studio of designers and engineers who build
            websites and products for brands that want to look and feel as
            good as they perform. From first sketch to shipped code.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#work" className="btn-secondary">
              See our work
            </a>
          </div>

          <div className="mt-10 border-t border-ink-100 pt-8">
            <p className="text-sm font-medium text-ink-500">
              Want us to reach out instead?
            </p>
            <div className="mt-3">
              <EmailCaptureForm id="hero-email" buttonText="Notify me" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-brand-50 to-transparent" />
          <img
            src={images.heroImage}
            alt="Designer and developer collaborating on a website layout at a shared desk"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-ink-900/10"
            width={640}
            height={480}
            loading="eager"
          />

          <div className="absolute -bottom-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border border-ink-100 bg-white p-5 shadow-lg sm:w-72 sm:left-auto sm:right-4 sm:translate-x-0">
            <h3 className="text-base font-bold text-ink-950">
              Story, emotion, and purpose
            </h3>
            <p className="mt-1.5 text-sm text-ink-600">
              Every site we build starts with your customers' problem, not a
              template.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
