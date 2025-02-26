import React from 'react';

interface BlogArticleSchemaProps {
  title: string;
  description: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  url: string;
}

const BlogArticleSchema = ({
  title,
  description,
  authorName,
  datePublished,
  dateModified,
  imageUrl,
  url
}: BlogArticleSchemaProps) => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: authorName
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: imageUrl ? imageUrl : 'https://elites3c.club/images/logo.png',
    publisher: {
      '@type': 'Organization',
      name: 'EliteSec',
      logo: {
        '@type': 'ImageObject',
        url: 'https://elites3c.club/images/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
};

export default BlogArticleSchema;