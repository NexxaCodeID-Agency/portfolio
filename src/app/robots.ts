import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/", // Biar folder admin lo nggak muncul di pencarian Google
    },
    sitemap: "https://nexxacodeid.site/sitemap.xml",
  };
}
