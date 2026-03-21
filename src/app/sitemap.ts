import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexxacodeid.site";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1, // Halaman utama dapet prioritas paling tinggi
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly", // Karena lo bakal sering update proyek, set ke weekly
      priority: 0.8, // Prioritas cukup tinggi buat halaman portofolio
    },
    // Kalau nanti lo nambah halaman /about atau /services, tinggal tambah di bawah sini
  ];
}
