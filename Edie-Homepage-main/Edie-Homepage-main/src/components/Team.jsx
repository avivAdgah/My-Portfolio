import { images } from "../assets/images";
import { team } from "../data/content";

export default function Team() {
  return (
    <section id="team" className="bg-ink-50/60 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-rose-500">Meet the team</p>
          <h2 className="section-heading mt-4">
            We're a chilled, laid-back team who ship on time
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-600">
            Five people, one shared obsession: building products that make
            our clients' customers say "wow." No agency bloat, no jargon.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={images[member.image]}
                alt={`Portrait of ${member.name}, ${member.role}`}
                className="aspect-square w-full rounded-2xl object-cover shadow-sm"
                loading="lazy"
                width={300}
                height={300}
              />
              <h3 className="mt-3 text-sm font-bold text-ink-950 sm:text-base">
                {member.name}
              </h3>
              <p className="text-xs text-ink-500 sm:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
