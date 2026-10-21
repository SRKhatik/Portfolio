/**
 * Runtime configuration. Override any value with a .env file (see .env.example).
 *
 * Contact form → EmailJS (Gmail service sends, template's "To Email" receives:
 * shubhamkhatik@mkoji.com). Template variables sent: name, email, title,
 * message, time (+ aliases from_name, from_email, reply_to, subject).
 */
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_b01909i",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ep63snq",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Q45a4ZoOBPueFoJVK",
};

/** Serverless endpoint for the AI-powered "Ask SRK" agent. Falls back to offline answers if unavailable. */
export const askEndpoint = import.meta.env.VITE_ASK_SRK_ENDPOINT || "/.netlify/functions/ask-srk";
