import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-64px)] items-center overflow-hidden px-4 py-16 md:px-8 lg:px-12"
    >
      <Image
        src="/images/HeroCover.webp"
        alt="Athlete training at FitCenter"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center] md:object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="flex flex-col font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            TRANSFORM
            <span className="text-blue-700">YOUR BODY</span>
          </h1>

          <p className="mt-4 text-lg font-semibold leading-relaxed text-gray-100 sm:text-xl md:text-2xl">
            Build Strength. Stay Healthy.
            <span className="block">
              Be the best version of yourself.
            </span>
          </p>

          <Button href="#contact" className="mt-7 px-8 py-3 text-sm focus:ring-offset-black sm:text-base">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}