'use client';  // Add this at the top to mark as Client Component

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const posts = [
    {
        id: 1,
        title: 'Introduction into Cryptography',
        href: '/blog/articles/introduction-into-cryptography',
        description:
            'The presentation will offer valuable insights into why cryptography matters and how we can use and apply different algorithms in real world scenarios.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Cryptography', href: '#' },
        author: {
            name: 'Ashad Mohamed',
            role: 'Founder / President',
            href: 'https://github.com/deigott',
            imageUrl: 'https://avatars.githubusercontent.com/u/143202415?v=4',
        },
    },
    {
        id: 1,
        title: 'Introduction into Cryptography',
        href: '/blog/articles/introduction-into-cryptography',
        description:
      'The presentation will offer valuable insights into why cryptography matters and how we can use and apply different algorithms in real world scenarios.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Cryptography', href: '#' },
        author: {
            name: 'Ashad Mohamed',
            role: 'Founder / President',
            href: 'https://github.com/deigott',
            imageUrl:
        'https://avatars.githubusercontent.com/u/143202415?v=4',
        },
    },
    {
        id: 1,
        title: 'Introduction into Cryptography',
        href: '/blog/articles/introduction-into-cryptography',
        description:
      'The presentation will offer valuable insights into why cryptography matters and how we can use and apply different algorithms in real world scenarios.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Cryptography', href: '#' },
        author: {
            name: 'Ashad Mohamed',
            role: 'Founder / President',
            href: 'https://github.com/deigott',
            imageUrl:
        'https://avatars.githubusercontent.com/u/143202415?v=4',
        },
    },
    // More posts...
]

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
)

export default function Blog() {
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
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link
                            href="/blog"
                            prefetch
                            className="inline-flex justify-center rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors duration-300"
                        >
                            Visit Blog
                        </Link>
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-xl border border-red-500 px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-500/10 transition-colors duration-300"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <motion.article 
                            key={post.id} 
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-red-500/50 transition-colors duration-300">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-red-500 font-mono">
                                        {post.date}
                                    </time>
                                    <span className="relative rounded-full bg-red-500/10 px-3 py-1.5 font-medium text-red-500">
                                        {post.category.title}
                                    </span>
                                </div>
                                <div className="group relative mt-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                        <Link href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-4 text-zinc-400 line-clamp-3">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image 
                                        src={post.author.imageUrl} 
                                        alt={post.author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="text-sm">
                                        <p className="font-semibold text-white">
                                            <Link href={post.author.href}>
                                                {post.author.name}
                                            </Link>
                                        </p>
                                        <p className="text-zinc-400">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
