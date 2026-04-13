import { siteConfig } from "@/lib/constants";

interface BlogPostingProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  url: string;
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: "Don Seibert",
      url: siteConfig.linkedin,
    },
    sameAs: [siteConfig.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  date,
  image,
  url,
}: BlogPostingProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    url,
    author: {
      "@type": "Person",
      name: "Don Seibert",
      url: siteConfig.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  if (image) {
    data.image = `${siteConfig.url}${image}`;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
