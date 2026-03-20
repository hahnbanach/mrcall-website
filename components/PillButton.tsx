'use client';

import { Link } from '@/i18n/navigation';
import { buildDashboardUrl } from '@/lib/tracking';

type Variant = 'primary' | 'secondary' | 'orange';
type Size = 'large' | 'small';

interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-brand-blue text-white hover:bg-brand-grey-80 transition-colors duration-300',
  secondary: 'bg-brand-black text-white hover:bg-brand-orange hover:text-brand-black transition-colors duration-300',
  orange: 'bg-brand-orange text-white hover:bg-brand-black transition-colors duration-300',
};

const sizeStyles: Record<Size, string> = {
  large: 'h-[66px] rounded-[33px] px-10 text-lg font-bold',
  small: 'h-[44px] rounded-[22px] px-6 text-sm font-bold',
};

/** Check if a URL points to the MrCall dashboard */
function isDashboardUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.hostname === 'dashboard.mrcall.ai' || parsed.hostname === 'app.mrcall.ai';
  } catch {
    return false;
  }
}

export default function PillButton({
  href,
  children,
  variant = 'primary',
  size = 'large',
  className = '',
  external = false,
}: PillButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap cursor-pointer';
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const isDashboard = isDashboardUrl(href);

  if (external || isDashboard) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={isDashboard ? (e) => {
          e.preventDefault();
          window.location.href = buildDashboardUrl(href);
        } : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
