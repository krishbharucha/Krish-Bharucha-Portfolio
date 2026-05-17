const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "krishb17@uw.edu";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return json(500, {
      error: "Contact email service is not configured yet. Add RESEND_API_KEY to your environment.",
    });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid form submission." });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const subject = String(payload.subject || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !email || !subject || !message) {
    return json(400, { error: "Please fill out every field." });
  }

  if (!isValidEmail(email)) {
    return json(400, { error: "Please enter a valid email address." });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: `${formatEmailName(name)} <${email}>`,
      subject: `Portfolio contact: ${subject}`,
      html: `
        <h2>New portfolio contact</h2>
        <p>Reply to this email to respond directly to ${escapeHtml(name)}.</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
      text: [
        "New portfolio contact",
        "Reply to this email to respond directly to the sender.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    return json(502, {
      error: error?.message || "Email could not be sent right now.",
    });
  }

  return json(200, { ok: true });
};

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatEmailName = (value) =>
  value.replace(/[\r\n<>"]/g, "").trim() || "Portfolio sender";
