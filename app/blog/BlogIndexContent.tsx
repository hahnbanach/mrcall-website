'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

interface Props {
  posts: BlogPostMeta[];
}

export default function BlogIndexContent({ posts }: Props) {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:underline mb-8 inline-block">
          &larr; Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-black mb-4">Blog</h1>
          <p className="text-lg text-brand-black/60">
            Insights on AI communication and business automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl p-8 shadow-sm border border-brand-mid-grey/20 hover:shadow-md hover:border-brand-blue/20 transition-all h-full"
              >
                <time className="text-xs text-brand-black/40 uppercase tracking-wider">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-lg font-bold text-brand-black mt-3 mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-brand-black/50 leading-relaxed">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-brand-blue bg-brand-blue/5 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-brand-black/40 text-center py-20">
            No posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  );
}
