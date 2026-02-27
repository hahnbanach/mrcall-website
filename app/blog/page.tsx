import { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';
import BlogIndexContent from './BlogIndexContent';

export const metadata: Metadata = {
  title: `Blog — ${SITE.name}`,
  description: `Insights on AI communication, phone agents, and business automation from ${SITE.name}.`,
};

export default function BlogPage() {
  const posts = getAllPosts().map(({ content, ...rest }) => rest);
  return <BlogIndexContent posts={posts} />;
}
