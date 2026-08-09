export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, tel, email, message } = body;

  if (!name?.trim() || !tel?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // TODO: connect to a real email provider (e.g. Resend, SendGrid) using env vars.
  console.log("New contact form submission:", { name, tel, email, message });

  return Response.json({ success: true });
}
