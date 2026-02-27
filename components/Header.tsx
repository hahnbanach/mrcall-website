'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PillButton from './PillButton';
import { URLS, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logos/mrcall-icon.png"
              alt="MrCall"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <Image
              src="/logos/mrcall-wordmark.png"
              alt="MrCall"
              width={120}
              height={30}
              className="h-7 w-auto hidden sm:block"
            />
          </Link>

          {/* Navigation links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-black/70 hover:text-brand-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <a
              href={URLS.signin}
              className="text-sm text-brand-black/70 hover:text-brand-black transition-colors hidden sm:inline"
            >
              Sign in
            </a>
            <PillButton href={URLS.signup} size="small" external>
              Try free
            </PillButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
