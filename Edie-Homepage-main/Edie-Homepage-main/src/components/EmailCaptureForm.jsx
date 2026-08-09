import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailCaptureForm({
  id,
  label = "Email address",
  placeholder = "you@company.com",
  buttonText = "Get in touch",
  tone = "light",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputId = id ?? "email-capture";

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    const successTone =
      tone === "dark"
        ? "border-white/15 bg-white/5 text-white"
        : "border-brand-100 bg-brand-50 text-ink-900";

    return (
      <div
        role="status"
        className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium ${successTone}`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
        Thanks! We'll be in touch within one business day.
      </div>
    );
  }

  const inputTone =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white placeholder:text-ink-400 focus:border-white/40"
      : "border-ink-200 bg-white text-ink-900 placeholder:text-ink-400 focus:border-brand-500";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="w-full max-w-md"
    >
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError("");
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30 ${inputTone}`}
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 active:scale-[0.98]"
        >
          {buttonText}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm font-medium text-rose-600" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
