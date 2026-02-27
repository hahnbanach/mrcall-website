import Image from 'next/image';
import Link from 'next/link';
import { URLS, CONTACT, SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logos/mrcall-icon.png"
                alt="MrCall"
                width={36}
                height={36}
                className="w-9 h-9 brightness-0 invert"
              />
              <span className="text-xl font-bold tracking-tight">MrCall</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {SITE.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={URLS.signup} className="text-white/70 hover:text-white transition-colors text-sm">
                  Get started
                </a>
              </li>
              <li>
                <a href={URLS.signin} className="text-white/70 hover:text-white transition-colors text-sm">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <Link href="/usecases" className="text-white/70 hover:text-white transition-colors text-sm">
                  Use cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contacts" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={URLS.youtube} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/70 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <a href="/llms.txt" className="text-white/70 hover:text-white transition-colors text-sm">
                  llms.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white/60 transition-colors">
              {CONTACT.phone}
            </a>
            {' '}&middot;{' '}
            <a href={`mailto:${CONTACT.support}`} className="hover:text-white/60 transition-colors">
              {CONTACT.support}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
