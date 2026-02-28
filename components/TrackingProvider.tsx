'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/tracking';

interface TrackingProviderProps {
  locale: string;
  children: React.ReactNode;
}

/**
 * Wraps the app to automatically track page views on route changes.
 * Also fires the initial pageview on mount.
 *
 * Place this inside the layout, wrapping {children}.
 */
export default function TrackingProvider({ locale, children }: TrackingProviderProps) {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    // Avoid duplicate tracking on mount + first pathname change
    if (prevPathRef.current === pathname) return;
    prevPathRef.current = pathname;

    track('pageview', { locale });
  }, [pathname, locale]);

  return <>{children}</>;
}
