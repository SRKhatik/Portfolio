import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contact, socials } from "../data/profile";
import { emailConfig } from "../data/config";
import { Section, Reveal } from "./ui";
import { Icon } from "./icons";

const EMPTY = { name: "", email: "", subject: "", message: "", company: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f) {
  const errors = {};
  if (f.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) errors.email = "Please enter a valid email.";
  if (f.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const mailtoFallback = `mailto:${contact.email}?subject=${encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)}`;

  const submit = async (e) => {
    e.preventDefault();
    if (form.company) return; // honeypot: bots fill hidden fields
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("sending");
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim() || `New portfolio enquiry from ${name}`;
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          // EmailJS "Contact Us" template variables
          name,
          email,
          title: subject,
          message: form.message.trim(),
          time: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
          // aliases, so a custom template layout also works
          from_name: name,
          from_email: email,
          reply_to: email,
          subject,
        },
        emailConfig.publicKey
      );
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      console.error("EmailJS error:", err?.status, err?.text || err);
      setStatus("error");
    }
  };

  const details = [
    { icon: FiMail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: FiPhone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: FaWhatsapp, label: "WhatsApp", value: "Chat on WhatsApp", href: `https://wa.me/${contact.whatsapp}` },
    { icon: FiMapPin, label: "Location", value: contact.location },
  ];

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something great" intro="Have a project, a role or a store that needs fixing? Send a message and I'll get back within 24 hours.">
      <div className="contact">
        <Reveal className="contact__info">
          {details.map(({ icon: I, label, value, href }) => (
            <div key={label} className="contact__item">
              <span className="contact__icon"><I /></span>
              <div>
                <small>{label}</small>
                {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{value}</a> : <span>{value}</span>}
              </div>
            </div>
          ))}
          <div className="socials socials--left">
            {socials.filter((s) => s.id !== "email").map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}><Icon name={s.id} /></a>
            ))}
          </div>
        </Reveal>

        <Reveal i={1} as="form" className="card contact__form" onSubmit={submit} noValidate>
          <div className="field-row">
            <Field label="Your name" name="name" value={form.name} onChange={update} error={errors.name} autoComplete="name" />
            <Field label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} autoComplete="email" />
          </div>
          <Field label="Subject (optional)" name="subject" value={form.subject} onChange={update} />
          <Field label="Message" name="message" textarea value={form.message} onChange={update} error={errors.message} />
          <input type="text" name="company" value={form.company} onChange={update} className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
            {status === "sending" ? <><FiLoader className="spin" /> Sending…</> : <><FiSend /> Send message</>}
          </button>

          <AnimatePresence>
            {status === "sent" && (
              <motion.p className="form-status form-status--ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status">
                <FiCheckCircle /> Thanks! Your message reached Shubham. Expect a reply soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p className="form-status form-status--err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert">
                <FiAlertCircle /> Couldn&apos;t send right now. <a href={mailtoFallback}>Email me directly instead</a>.
              </motion.p>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, name, textarea, error, ...props }) {
  const C = textarea ? "textarea" : "input";
  return (
    <label className={`field ${error ? "field--error" : ""}`}>
      <span>{label}</span>
      <C name={name} rows={textarea ? 5 : undefined} aria-invalid={!!error} {...props} />
      {error && <em>{error}</em>}
    </label>
  );
}
