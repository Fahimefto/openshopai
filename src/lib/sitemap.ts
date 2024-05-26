type SiteMapElement = {
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
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};
