import Link from 'next/link'

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

export default function Blog() {
    return (
        <div className="bg-black py-16 px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">From the blog</h2>
                    <p className="mt-4 text-lg leading-2 text-gray-400">
                        Learn cybersecurity through our beautiful blog.
                    </p>
                    <Link
                        href="/blog"
                        prefetch
                        className="flex-none rounded-md bg-indigo-500 mt-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                        Visit Blog
                    </Link>
                    <button
                        type="submit"
                        className="flex-none rounded-md border border-indigo-500 mt-4 text-indigo-500 ml-4 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                        Learn More
                    </button>
                </div>
                <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-white">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-gray-100"
                                    >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-white">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-white">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                        ))}
                </div>
            </div>
        </div>
        )
}
