'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogPostCard from './BlogPostCard';

interface Article {
  id: string;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    href: string;
  };
}

// Add a loading state component
const LoadingBlogPosts = () => (
  <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((index) => (
      <div 
        key={index}
        className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 animate-pulse"
      >
        <div className="h-4 bg-zinc-800 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-zinc-800 rounded w-3/4 mb-4"></div>
        <div className="h-20 bg-zinc-800 rounded mb-4"></div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-zinc-800"></div>
          <div>
            <div className="h-4 bg-zinc-800 rounded w-24 mb-2"></div>
            <div className="h-3 bg-zinc-800 rounded w-20"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function Blog() {
  const [posts, setPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/articles');
        const articles = await response.json();
        setPosts(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <section className="w-full bg-black py-16 sm:py-24" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2 
            className="text-3xl font-bold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            From the blog
            <span className="text-red-500">.</span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-zinc-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn cybersecurity through our beautiful blog.
          </motion.p>
        </div>

        {loading ? (
          <LoadingBlogPosts />
        ) : posts.length > 0 ? (
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                href={post.href}
                description={post.description}
                date={post.date}
                datetime={post.datetime}
                category={post.category}
                author={post.author}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-16 text-center p-8 border border-dashed border-zinc-800 rounded-xl">
            <p className="text-zinc-400">No blog posts yet. Check back soon!</p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <motion.a
            href="/blog"
            className="inline-block px-6 py-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all posts
          </motion.a>
        </div>
      </div>
    </section>
  );
}
