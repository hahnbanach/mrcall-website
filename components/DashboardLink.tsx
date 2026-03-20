'use client';

import { buildDashboardUrl } from '@/lib/tracking';

/**
 * An <a> tag that appends UTM params + _tsid at click time (not render time),
 * avoiding SSR/hydration mismatch while ensuring query params are always forwarded.
 */
export default function DashboardLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        window.location.href = buildDashboardUrl(href);
      }}
    >
      {children}
    </a>
  );
}
