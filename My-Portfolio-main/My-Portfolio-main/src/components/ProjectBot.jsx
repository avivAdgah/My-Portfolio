import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import bot, { examplesFor } from "../i18n/projectBot";
import projects, { localizeProject } from "../data/projects";
import { WHATSAPP_NUMBER } from "./WhatsAppButton";
import "./ProjectBot.css";

const EMAIL = "avivadgha@gmail.com";
const TYPING_MS = 650;

/**
 * Project planner: a short scripted chat that asks what the visitor wants to build,
 * then shows a summary, similar portfolio work, and sends it to Aviv on WhatsApp or by email.
 * History stores step ids and answer ids (not text), so switching language re-renders it.
 */
export default function ProjectBot() {
  const { language } = useLanguage();
  const steps = bot.steps[language];
  const t = bot.ui[language];

  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]); // { from: "bot", stepId } | { from: "user", stepId } | { from: "bot", end: true }
  const [answers, setAnswers] = useState({});
  const [stepIndex, setStepIndex] = useState(-1);
  const [typing, setTyping] = useState(false);
  const [picked, setPicked] = useState([]);
  const [text, setText] = useState("");
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const timer = useRef(null);

  const step = steps[stepIndex];
  const done = stepIndex >= steps.length;
  const waiting = !typing && step && history[history.length - 1]?.stepId === step.id;

  const askNext = (index) => {
    setTyping(true);
    timer.current = setTimeout(() => {
      setTyping(false);
      setStepIndex(index);
      setHistory((h) => [...h, index < steps.length ? { from: "bot", stepId: steps[index].id } : { from: "bot", end: true }]);
    }, TYPING_MS);
  };

  // First question when the chat is opened for the first time.
  useEffect(() => {
    if (open && stepIndex === -1 && !typing) askNext(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typing, open]);

  useEffect(() => {
    if (waiting && step.type === "text") inputRef.current?.focus();
  }, [waiting, step]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const answer = (value) => {
    setAnswers((a) => ({ ...a, [step.id]: value }));
    setHistory((h) => [...h, { from: "user", stepId: step.id }]);
    setPicked([]);
    setText("");
    askNext(stepIndex + 1);
  };

  const restart = () => {
    clearTimeout(timer.current);
    setHistory([]);
    setAnswers({});
    setPicked([]);
    setText("");
    setTyping(false);
    setStepIndex(-1);
    askNext(0);
  };

  /** Answer text in the current language. */
  const answerLabel = (stepId, value = answers[stepId]) => {
    const s = steps.find((x) => x.id === stepId);
    if (value === undefined || value === "" || (Array.isArray(value) && !value.length)) return t.none;
    if (s.type === "text") return value;
    const label = (id) => s.options.find((o) => o.id === id)?.label ?? id;
    return Array.isArray(value) ? value.map(label).join(", ") : label(value);
  };

  const summaryLines = steps.map((s) => `${t.labels[s.id]}: ${answerLabel(s.id)}`);
  const message = [t.messageHeader, "", ...summaryLines].join("\n");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(message)}`;
  const examples = done
    ? examplesFor(answers)
        .map((id) => projects.find((p) => p.id === id))
        .filter(Boolean)
        .map((p) => localizeProject(p, language))
    : [];

  return (
    <>
      {!open && (
        <button type="button" className="bot-launcher" onClick={() => setOpen(true)} aria-label={t.open}>
          <ChatIcon />
          <span className="bot-launcher-label">{t.open}</span>
        </button>
      )}

      {open && (
        <section className="bot-panel" role="dialog" aria-label={t.title}>
          <header className="bot-header">
            <span className="bot-avatar" aria-hidden="true">
              <ChatIcon />
            </span>
            <div className="bot-heading">
              <strong>{t.title}</strong>
              <span>{t.subtitle}</span>
            </div>
            <button type="button" className="bot-icon-btn" onClick={restart} aria-label={t.restart} title={t.restart}>
              ↺
            </button>
            <button type="button" className="bot-icon-btn" onClick={() => setOpen(false)} aria-label={t.close} title={t.close}>
              ✕
            </button>
          </header>

          <div className="bot-messages" ref={listRef} aria-live="polite">
            {history.map((m, i) => {
              if (m.end) {
                return (
                  <div key={i} className="bot-end">
                    <div className="bot-bubble">
                      <p>{t.summaryIntro(answers.name)}</p>
                      <dl className="bot-summary">
                        {steps
                          .filter((s) => s.id !== "name")
                          .map((s) => (
                            <div key={s.id}>
                              <dt>{t.labels[s.id]}</dt>
                              <dd>{answerLabel(s.id)}</dd>
                            </div>
                          ))}
                      </dl>
                    </div>
                    {examples.length > 0 && (
                      <div className="bot-bubble">
                        <p>{t.examplesIntro}</p>
                        <ul className="bot-examples">
                          {examples.map((p) => (
                            <li key={p.id}>
                              {p.caseStudy ? (
                                <Link to={`/work/${p.id}`} onClick={() => setOpen(false)}>
                                  <img src={`/assets/images/${p.image}`} alt="" loading="lazy" />
                                  <span>{p.name}</span>
                                </Link>
                              ) : (
                                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <img src={`/assets/images/${p.image}`} alt="" loading="lazy" />
                                  <span>{p.name}</span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="bot-bubble">
                      <p>{t.finishIntro}</p>
                      <div className="bot-actions">
                        <a className="bot-btn bot-btn-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                          {t.sendWhatsApp}
                        </a>
                        <a className="bot-btn bot-btn-ghost" href={mailHref}>
                          {t.sendEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              const s = steps.find((x) => x.id === m.stepId);
              return m.from === "bot" ? (
                <div key={i} className="bot-bubble">
                  <p>{s.question}</p>
                </div>
              ) : (
                <div key={i} className="bot-bubble bot-bubble-user">
                  <p>{answerLabel(m.stepId)}</p>
                </div>
              );
            })}
            {typing && (
              <div className="bot-bubble bot-typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          {waiting && step.type === "choice" && (
            <div className="bot-replies">
              {step.options.map((o) => (
                <button key={o.id} type="button" className="bot-chip" onClick={() => answer(o.id)}>
                  {o.label}
                </button>
              ))}
            </div>
          )}

          {waiting && step.type === "multi" && (
            <div className="bot-replies">
              {step.options.map((o) => {
                const on = picked.includes(o.id);
                return (
                  <button
                    key={o.id}
                    type="button"
                    className={on ? "bot-chip is-on" : "bot-chip"}
                    aria-pressed={on}
                    onClick={() => setPicked((p) => (on ? p.filter((x) => x !== o.id) : [...p, o.id]))}
                  >
                    {on && "✓ "}
                    {o.label}
                  </button>
                );
              })}
              <button type="button" className="bot-btn bot-btn-primary bot-confirm" onClick={() => answer(picked)}>
                {step.confirm}
                {picked.length > 0 && ` (${picked.length})`}
              </button>
            </div>
          )}

          {waiting && step.type === "text" && (
            <form
              className="bot-input"
              onSubmit={(e) => {
                e.preventDefault();
                if (text.trim()) answer(text.trim());
              }}
            >
              <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={step.placeholder}
                maxLength={120}
                aria-label={step.placeholder}
              />
              {step.skippable && !text.trim() ? (
                <button type="button" className="bot-btn bot-btn-ghost" onClick={() => answer("")}>
                  {t.skip}
                </button>
              ) : (
                <button type="submit" className="bot-btn bot-btn-primary" disabled={!text.trim()}>
                  {t.send}
                </button>
              )}
            </form>
          )}

          {done && !typing && (
            <div className="bot-replies">
              <button type="button" className="bot-chip" onClick={restart}>
                ↺ {t.restart}
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" strokeWidth="2.6" />
    </svg>
  );
}
