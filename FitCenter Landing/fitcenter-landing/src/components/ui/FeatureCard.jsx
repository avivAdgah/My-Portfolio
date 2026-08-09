export default function FeatureCard({ icon, text }) {
  return (
    <article className="flex items-center rounded-2xl gap-4 border-2 border-gray-700 p-4 hover:border-blue-700 hover:-translate-y-1 transition-all duration-300">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-lg text-white">
        {icon}
      </div>
      <p className="font-semibold">{text}</p>
    </article>
  );
}
