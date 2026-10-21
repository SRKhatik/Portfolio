import Anthropic from "@anthropic-ai/sdk";
import { buildKnowledgeText } from "../../src/agent/knowledge.js";

// Requires ANTHROPIC_API_KEY in Netlify environment variables.
const client = new Anthropic();

const SYSTEM = `You are "Ask SRK", the assistant on Shubham Khatik's portfolio website.
Answer visitors' questions about Shubham (recruiters, clients, collaborators) using only the profile below.
Speak about him in the third person, warmly and concisely (2-6 short sentences or a short bullet list, plain text, no markdown headings).
If something isn't in the profile, say you don't have that detail and suggest emailing him. Never invent employers, prices, numbers or links.
When someone wants to hire or work with him, point them to the contact form or his email.
Stay on topic: politely decline requests unrelated to Shubham, his work or hiring him.

PROFILE:
${buildKnowledgeText()}`;

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  let messages;
  try {
    ({ messages } = await req.json());
  } catch {
    return json(400, { error: "Invalid JSON" });
  }
  // Keep only the recent, well-formed turns; cap length to limit abuse.
  messages = (Array.isArray(messages) ? messages : [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-10)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1500) }));
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages.at(-1).role !== "user") return json(400, { error: "No question" });

  try {
    const response = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 4096,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      cache_control: { type: "ephemeral" },
      system: SYSTEM,
      messages,
    });
    if (response.stop_reason === "refusal") {
      return json(200, { answer: "I can only help with questions about Shubham and his work." });
    }
    const answer = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
    return json(200, { answer });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return json(429, { error: "Busy, try again shortly" });
    if (error instanceof Anthropic.APIError) return json(502, { error: `Upstream error ${error.status}` });
    return json(500, { error: "Agent unavailable" });
  }
};
