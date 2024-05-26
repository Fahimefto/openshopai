import { getSitemapURLS } from "@/lib/sitemap";
//force dynamic

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const data = await request.json();
  const { url } = data;

  const sitemap = await getSitemapURLS(url);

  return Response.json({
    data: sitemap,
  });
}
