import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { footerLinks, contactInfo, socialLinks } from "../data/content";
import EmailCaptureForm from "./EmailCaptureForm";

const SOCIAL_ICONS = { Instagram, Linkedin, Twitter };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink-950 text-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to build something great?
            </h2>
            <p className="mt-3 max-w-md text-ink-300">
              Tell us about your project and we'll get back to you within one
              business day with next steps.
            </p>
            <div className="mt-6">
              <EmailCaptureForm
                id="footer-email"
                tone="dark"
                buttonText="Contact us"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:justify-items-end">
            <nav aria-label="Footer navigation">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                Navigate
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-300">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
                  <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
                  {contactInfo.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <a href="#home" className="text-2xl font-extrabold">
            Edie
          </a>

          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="text-sm text-ink-400">
            &copy; {year} Edie Studio. Made by Aviv Adgah.
          </p>
        </div>
      </div>
    </footer>
  );
}
