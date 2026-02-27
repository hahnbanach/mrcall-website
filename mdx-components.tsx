import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-brand-black mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-brand-black mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold text-brand-black mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-brand-black/80 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-4 text-brand-black/80">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-4 text-brand-black/80">{children}</ol>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-brand-blue hover:underline">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-blue pl-4 italic text-brand-black/60 my-4">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-brand-black">{children}</strong>
    ),
    ...components,
  };
}
