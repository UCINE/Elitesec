import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elites3c.club",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: "https://elites3c.club/blog",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: "https://elites3c.club/blog/articles/csrf",
      lastModified: new Date("2024-02-25"),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add more URLs as you create more content
  ];
}
