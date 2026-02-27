import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { compile, run } from '@mdx-js/mdx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { SITE } from '@/lib/constants';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { useMDXComponents } from '@/mdx-components';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — ${SITE.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Compile MDX to React component
  const compiled = await compile(post.content, { outputFormat: 'function-body' });
  const { default: MDXContent } = await run(String(compiled), {
    jsx,
    jsxs,
    Fragment,
    baseUrl: import.meta.url,
  });

  const components = useMDXComponents({});

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/blog" className="text-sm text-brand-blue hover:underline mb-8 inline-block">
          &larr; Back to blog
        </Link>

        <time className="text-xs text-brand-black/40 uppercase tracking-wider">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <h1 className="text-4xl font-bold text-brand-black mt-3 mb-2">{post.title}</h1>
        <p className="text-brand-black/50 text-lg mb-12">{post.description}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
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

        <div className="prose prose-lg max-w-none">
          <MDXContent components={components} />
        </div>

        <div className="mt-16 pt-8 border-t border-brand-mid-grey/30">
          <Link href="/blog" className="text-sm text-brand-blue hover:underline">
            &larr; Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
