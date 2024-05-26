import * as cheerio from "cheerio";

export type SiteMapElement = {
  loc: string;
  changefreq?: string;
  lastmod?: string;
  priority?: string;
};

export const getSitemapURLS = async (weburl: string) => {
  try {
    const url = new URL(weburl);
    if (!url.hostname) {
      throw new Error("Invalid URL");
    }

    const reqUrl = `https://${url.hostname}/sitemap.xml`;
    const urls = await fetchAndParseSitemap(reqUrl);

    const xmlUrls = urls.filter((url) => url.includes(".xml"));
    if (xmlUrls.length === 0) {
      return urls;
    } else {
      const nestedUrls = await Promise.all(xmlUrls.map(fetchAndParseSitemap));
      return urls.concat(...nestedUrls);
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

const fetchAndParseSitemap = async (url: string) => {
  const res = await fetch(url, { method: "GET" });
  const text = await res.text();
  const $ = await cheerio.load(text);

  const urls: string[] = [];
  $("loc").each((index, element) => {
    const loc = $(element).text().trim();
    urls.push(loc);
  });

  return urls;
};
