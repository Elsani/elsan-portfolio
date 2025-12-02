// app/api/contact/route.js
export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  console.log("New contact message:", { name, email, message });

  // Këtu mund ta lidhësh me:
  // - dërgim email (nodemailer)
  // - ruajtje në DB
  // - Discord / Slack webhook, etj.

  return new Response(
    JSON.stringify({ ok: true, message: "Message received" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
