import { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import UseCasesContent from './UseCasesContent';

export const metadata: Metadata = {
  title: `Use Cases — ${SITE.name}`,
  description: `Discover how ${SITE.name} works for freelancers, medical practices, real estate, restaurants, dealerships, and property managers.`,
};

export default function UseCasesPage() {
  return <UseCasesContent />;
}
