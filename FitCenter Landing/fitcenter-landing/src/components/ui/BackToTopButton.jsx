"use client";

import { FaArrowUp } from "react-icons/fa6";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-blue-500"
    >
      Back to top
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}
