// Anonymous cookie-choice counter.
// POST /api/consent  {"choice":"granted"|"denied"}  → records one choice.
// GET  /api/consent                                → {"accepted": n, "declined": n}
// Nothing about the visitor is stored: each choice is an empty blob whose
// key is only the choice and the date.
import { getStore } from "@netlify/blobs";

const CHOICES = { granted: "accepted", denied: "declined" };

async function count(store, prefix) {
  let total = 0;
  for await (const page of store.list({ prefix, paginate: true })) {
    total += page.blobs.length;
  }
  return total;
}

export default async (req) => {
  const store = getStore("consent");

  if (req.method === "GET") {
    const [accepted, declined] = await Promise.all([
      count(store, "accepted/"),
      count(store, "declined/"),
    ]);
    return Response.json(
      { accepted, declined },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let choice;
  try {
    ({ choice } = await req.json());
  } catch {
    return new Response("Bad request", { status: 400 });
  }
  const label = CHOICES[choice];
  if (!label) return new Response("Bad request", { status: 400 });

  const day = new Date().toISOString().slice(0, 10);
  await store.set(`${label}/${day}/${crypto.randomUUID()}`, "");
  return new Response(null, { status: 204 });
};

export const config = { path: "/api/consent" };
