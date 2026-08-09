export default function Card({ icon, title, text }) {
  return (
    <article
      className="flex flex-1 flex-col justify-center items-center rounded-2xl h-50 gap-5 p-7 hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
                shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-700/10 text-3xl text-blue-700">
        {icon}
      </div>
      <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">{title}</h3>
      <p className="text-center">{text}</p>
    </article>
  );
}
