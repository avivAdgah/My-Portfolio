export default function SectionEyebrow({ children, className = "", as: Tag = "h2" }) {
  return (
    <Tag
      className={`flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-widest text-blue-700 sm:text-xl ${className}`}
    >
      <span aria-hidden="true" className="h-[3px] w-8 bg-blue-700" />
      {children}
    </Tag>
  );
}
