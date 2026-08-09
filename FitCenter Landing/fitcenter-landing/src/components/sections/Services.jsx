import Card from "../ui/Card";
import SectionEyebrow from "../ui/SectionEyebrow";
import { FaRunning } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { GiJumpingRope } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";

export default function Services() {
  const services = [
    {
      title: "Personal Training",
      text: "One-on-one training tailored to your goals.",
      icon: <FaRunning aria-hidden="true" />,
    },
    {
      title: "Group Classes",
      text: "Train together in motivating group sessions.",
      icon: <FaPeopleGroup aria-hidden="true" />,
    },
    {
      title: "Nutrition Plans",
      text: "Practical nutrition guidance for lasting results.",
      icon: <GiFruitBowl aria-hidden="true" />,
    },
    {
      title: "Yoga",
      text: "Improve flexibility, balance, and wellbeing.",
      icon: <GrYoga aria-hidden="true" />,
    },
    {
      title: "Cardio",
      text: "Boost endurance and improve cardiovascular fitness.",
      icon: <GiJumpingRope aria-hidden="true" />,
    },
    {
      title: "CrossFit",
      text: "High-intensity functional workouts for all levels.",
      icon: <GiMuscleUp aria-hidden="true" />,
    },
  ];

  return (
    <section
      id="services"
      className="px-4 py-16 sm:px-6 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Our Services</SectionEyebrow>

        <p className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-tight md:text-4xl">
          Choose the training program that best fits your goals and lifestyle.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}