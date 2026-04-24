import { NextResponse } from "next/server";

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  try {
    const html = await fetch("https://www.youtube.com/@DarrenTsai_/videos", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; bot/1.0)" },
      next: { revalidate: 3600 },
    }).then(r => r.text());

    // YouTube embeds initial data as JSON in the page
    const match = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
    const id = match?.[1] ?? "JjEbd-vSZV4";

    const titleMatch = html.match(/"title":\{"runs":\[\{"text":"([^"]+)"\}/);
    const title = titleMatch?.[1] ?? "Latest Video";

    return NextResponse.json({ id, title });
  } catch {
    return NextResponse.json({ id: "JjEbd-vSZV4", title: "How To Get Prequalified For A Home Loan" });
  }
}
