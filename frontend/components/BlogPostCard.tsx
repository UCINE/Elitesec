import Link from 'next/link';
import { motion } from 'framer-motion';

interface Category {
  title: string;
  href: string;
}

interface Author {
  name: string;
  href: string;
}

interface BlogPostCardProps {
  id: string;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: Category;
  author: Author;
  index: number;
}

export default function BlogPostCard({
  id,
  title,
  href,
  description,
  date,
  datetime,
  category,
  author,
  index
}: BlogPostCardProps) {
  return (
    <motion.article 
      className="relative isolate flex flex-col gap-8 lg:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-red-500/50 transition-colors duration-300 h-full flex flex-col">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={datetime} className="text-red-500 font-mono">
            {date}
          </time>
          <span className="relative rounded-full bg-red-500/10 px-3 py-1.5 font-medium text-red-500">
            {category.title}
          </span>
        </div>
        <div className="group relative mt-4 flex-grow">
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
            <Link href={href}>
              {title}
            </Link>
          </h3>
          <p className="mt-4 text-sm leading-6 text-zinc-400 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <Link href={author.href} className="hover:text-red-500 transition-colors duration-300">
                {author.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}