import Card from "../ui/Card";
import SectionEyebrow from "../ui/SectionEyebrow";
import { FaHeartbeat } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

export default function About() {
  const aboutCards = [
    {
      title: "Strength",
      text: "Build muscle with experts",
      icon: <FaDumbbell aria-hidden="true" className="text-blue-700" />,
    },
    {
      title: "Health",
      text: "Healthy body and lifestyle",
      icon: <FaHeartbeat aria-hidden="true" className="text-blue-700" />,
    },
    {
      title: "Results",
      text: "Achieve goals faster",
      icon: <IoMdTrophy aria-hidden="true" className="text-blue-700" />,
    },
  ];

  return (
    <section
      id="about"
      className="bg-gray-100 px-4 py-16 sm:px-6 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Text */}
        <div>
          <SectionEyebrow>About Us</SectionEyebrow>

          <h3 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight text-gray-900 md:text-4xl">
            Fitness Is More Than Exercise
          </h3>

          <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
            At FitCenter, we believe fitness is a lifestyle. Our mission is to
            help you become stronger, healthier, and more confident every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}