import Link from "next/link";

const baseStyles =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-700 font-heading font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-700/30 transition-all duration-300 hover:scale-105 hover:bg-blue-800 hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100";

export default function Button({ href, className = "", children, ...props }) {
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
