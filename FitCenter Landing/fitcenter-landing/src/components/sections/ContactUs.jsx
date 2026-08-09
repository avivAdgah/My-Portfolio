"use client";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const initialForm = { name: "", tel: "", email: "", message: "" };

export default function ContactUs() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 px-4 py-16 sm:px-6 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div>
          <SectionEyebrow>Contact Us</SectionEyebrow>

          <h3 className="mt-4 font-heading text-3xl font-bold uppercase md:text-4xl">
            {"Let's Start Your Fitness Journey"}
          </h3>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-3">
              <FaLocationDot aria-hidden="true" className="mt-1 text-blue-700" />
              <div>
                <p>123 Fitness St.</p>
                <p>Tel Aviv, Israel</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt aria-hidden="true" className="text-blue-700" />
              <p>050-1234-567</p>
            </div>

            <div className="flex items-center gap-3">
              <IoIosMail aria-hidden="true" className="text-blue-700 text-xl" />
              <p>info@fitcenter.com</p>
            </div>

            <div className="flex items-start gap-3">
              <FaClock aria-hidden="true" className="mt-1 text-blue-700" />
              <div>
                <p>Sun - Thu: 06:00 - 22:00</p>
                <p>Fri: 06:00 - 15:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:border-blue-700"
              />
            </div>

            <div>
              <label htmlFor="tel" className="mb-1 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                autoComplete="tel"
                placeholder="050-1234-567"
                required
                value={form.tel}
                onChange={handleChange}
                className="w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:border-blue-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:border-blue-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your fitness goals..."
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:border-blue-700"
            />
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-8 py-3 text-sm sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </Button>

          <p role="status" aria-live="polite">
            {status === "success" && (
              <span className="text-green-700">
                Thanks! Your message has been sent — we&apos;ll be in touch soon.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-700">{errorMessage}</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
