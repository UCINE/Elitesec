import { readdir } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

interface Author {
    name: string;
    // role: string;
    href: string;
    // imageUrl: string;
}

interface Category {
    title: string;
    href: string;
}

interface Article {
    id: string;
    href: string;
    title: string;
    description: string;
    date: string;
    datetime: string;
    category: Category;
    author: Author;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const articlesDirectory = join(process.cwd(), 'pages/blog/articles');
        const files = await readdir(articlesDirectory);
        const mdxFiles = files.filter(file => file.endsWith('.mdx'));

        const articles: Article[] = await Promise.all(
            mdxFiles.map(async (filename): Promise<Article> => {
                const filePath = join(articlesDirectory, filename);
                const fileContents = await fs.readFile(filePath, 'utf8');
                const { data } = matter(fileContents);
                
                // Format the date to YYYY-MM-DD
                const rawDate = new Date(data.date);
                const formattedDate = rawDate.toISOString().split('T')[0];
                
                return {
                    id: filename.replace(/\.mdx$/, ''),
                    href: `/blog/articles/${filename.replace(/\.mdx$/, '')}`,
                    title: data.title,
                    description: data.description,
                    date: formattedDate,
                    datetime: rawDate.toISOString(),
                    category: {
                        title: data.category,
                        href: '#'
                    },
                    author: {
                        name: data.author?.name,
                        // role: data.author?.role || 'Founder / President',
                        href: data.author?.href,
                        // imageUrl: data.author?.imageUrl || 'https://avatars.githubusercontent.com/u/143202415?v=4'
                    }
                };
            })
        );

        res.status(200).json(articles);
    } catch (error) {
        console.error('Error reading articles:', error);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
}