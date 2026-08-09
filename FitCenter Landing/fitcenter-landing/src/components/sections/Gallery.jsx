"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import SectionEyebrow from "../ui/SectionEyebrow";

const images = [
  {
    id: 1,
    src: "/images/GYM.webp",
    alt: "Modern gym",
  },
  {
    id: 2,
    src: "/images/Yoga-class.webp",
    alt: "Yoga training",
  },
  {
    id: 3,
    src: "/images/Running-Group.webp",
    alt: "Running group",
  },
  {
    id: 4,
    src: "/images/CrossFit-1.webp",
    alt: "CrossFit training",
  },
  {
    id: 5,
    src: "/images/Cardio.webp",
    alt: "Jump rope training",
  },
  {
    id: 6,
    src: "/images/Proper-nutrition.webp",
    alt: "Healthy nutrition",
  },
];

const infiniteImages = [...images, ...images];
const SLIDE_GAP = 16;
const AUTOPLAY_INTERVAL = 5000;

export default function Gallery() {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const offsetRef = useRef(0);
  const [offset, setOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [instant, setInstant] = useState(false);

  const measureSlideWidth = useCallback(() => {
    const firstSlide = trackRef.current?.firstElementChild;
    if (!firstSlide) return;
    setSlideWidth(firstSlide.getBoundingClientRect().width + SLIDE_GAP);
  }, []);

  useEffect(() => {
    measureSlideWidth();
    window.addEventListener("resize", measureSlideWidth);
    return () => window.removeEventListener("resize", measureSlideWidth);
  }, [measureSlideWidth]);

  // Always moves forward by one slide. Once we pass the first copy of the
  // images, wrap seamlessly into the duplicated copy (both look identical)
  // so the motion never reverses, no matter how many times this fires.
  const next = useCallback(() => {
    const nextOffset = offsetRef.current + 1;

    if (nextOffset >= images.length) {
      setInstant(true);
      offsetRef.current = nextOffset - images.length;
    } else {
      offsetRef.current = nextOffset;
    }

    setOffset(offsetRef.current);
  }, []);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(next, AUTOPLAY_INTERVAL);
  }, [next]);

  const stopAutoSlide = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide]);

  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  return (
    <section id="gallery" className="px-4 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <SectionEyebrow className="justify-center">Our Gallery</SectionEyebrow>

          <p className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight md:text-4xl">
            Explore our training spaces, group activities, and healthy
            lifestyle.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{
              transform: `translateX(-${offset * slideWidth}px)`,
              transition: instant ? "none" : "transform 500ms ease",
            }}
          >
            {infiniteImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="relative h-[260px] min-w-full shrink-0 overflow-hidden rounded-2xl sm:h-[320px] sm:min-w-[calc(50%-8px)] lg:h-[350px] lg:min-w-[calc(33.333%-11px)] lg:rounded-3xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition hover:scale-110 hover:bg-black/80 sm:right-4 sm:h-12 sm:w-12"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
