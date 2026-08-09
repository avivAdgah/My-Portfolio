import FeatureCard from "../ui/FeatureCard";
import SectionEyebrow from "../ui/SectionEyebrow";
import { FaCheck } from "react-icons/fa6";

export default function WhyChooseUs() {
  const reasons = [
    {
      text: "Certified Trainers",
      icon: <FaCheck aria-hidden="true" />,
    },
    {
      text: "Personalized Programs",
      icon: <FaCheck aria-hidden="true" />,
    },
    {
      text: "Flexible Schedule",
      icon: <FaCheck aria-hidden="true" />,
    },
    {
      text: "Modern Equipment",
      icon: <FaCheck aria-hidden="true" />,
    },
    {
      text: "AI Fitness Assistant",
      icon: <FaCheck aria-hidden="true" />,
    },
    {
      text: "Nutrition Support",
      icon: <FaCheck aria-hidden="true" />,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-black  px-4 py-16 sm:px-6 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <div>
          <SectionEyebrow>Why Choose Us</SectionEyebrow>

          <h3 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
            Why Clients Trust FitCenter
          </h3>

          <p className="mt-4 max-w-lg leading-relaxed text-gray-300">
            Our approach combines expert coaching, personalized plans, and
            modern technology.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid gap-5 sm:grid-cols-2 text-white">
          {reasons.map((reason) => (
            <FeatureCard
              key={reason.text}
              icon={reason.icon}
              text={reason.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
