import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle, FiX, FiSend, FiCpu } from "react-icons/fi";
import { localAnswer, suggestedQuestions } from "../agent/knowledge";
import { askEndpoint } from "../data/config";
import { profile } from "../data/profile";

const GREETING = {
  role: "assistant",
  content: `Hi! I'm the SRK agent 👋 Ask me anything about ${profile.shortName}: skills, AI work, Shopify stores, Amazon & Flipkart listings, projects or how to hire him.`,
};

let aiAvailable = true; // flips to false after the first failure → offline answers for the session

async function ask(history) {
  const question = history[history.length - 1].content;
  if (aiAvailable) {
    try {
      const res = await fetch(askEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(1) }), // skip the greeting
      });
      if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
        const { answer } = await res.json();
        if (answer) return answer;
      }
      if (res.status !== 429) aiAvailable = false;
    } catch {
      aiAvailable = false;
    }
  }
  await new Promise((r) => setTimeout(r, 350)); // small natural pause
  return localAnswer(question);
}

/** Turns URLs, emails and the resume path into links; keeps line breaks. */
function RichText({ text }) {
  const parts = text.split(/(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+|\/Resume\.pdf)/g);
  return parts.map((p, i) => {
    if (/^https?:\/\//.test(p) || p === "/Resume.pdf") return <a key={i} href={p} target="_blank" rel="noreferrer">{p.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a>;
    if (/@/.test(p) && /^[\w.+-]+@/.test(p)) return <a key={i} href={`mailto:${p}`}>{p}</a>;
    return <span key={i}>{p}</span>;
  });
}

export default function AskSRK({ open, setOpen }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const send = async (text) => {
    const q = text.trim();
    if (!q || busy) return;
    const next = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setBusy(true);
    const answer = await ask(next);
    setMessages((m) => [...m, { role: "assistant", content: answer }]);
    setBusy(false);
  };

  return (
    <>
      <motion.button
        className="ask-fab"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close SRK agent" : "Ask the SRK agent"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <FiX /> : <><FiMessageCircle /><span>Ask SRK</span></>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="ask"
            role="dialog"
            aria-label="Ask SRK agent"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.22 }}
          >
            <div className="ask__head">
              <span className="ask__avatar"><FiCpu /></span>
              <div>
                <strong>SRK Agent</strong>
                <small><span className="pulse" /> Knows everything about {profile.shortName}</small>
              </div>
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close"><FiX /></button>
            </div>

            <div className="ask__list" ref={listRef} aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} className={`msg msg--${m.role}`}><RichText text={m.content} /></div>
              ))}
              {busy && <div className="msg msg--assistant typing" aria-label="Typing"><i /><i /><i /></div>}
              {messages.length === 1 && (
                <div className="ask__chips">
                  {suggestedQuestions.map((q) => <button key={q} className="chip" onClick={() => send(q)}>{q}</button>)}
                </div>
              )}
            </div>

            <form className="ask__form" onSubmit={(e) => { e.preventDefault(); send(input); }}>
              <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about skills, work, contact…" aria-label="Your question" maxLength={500} />
              <button className="icon-btn icon-btn--accent" disabled={busy || !input.trim()} aria-label="Send"><FiSend /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
