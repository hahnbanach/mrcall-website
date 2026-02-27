import { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import ContactsContent from './ContactsContent';

export const metadata: Metadata = {
  title: `Contact Us — ${SITE.name}`,
  description: `Get in touch with ${SITE.name}. Call us, email us, or book a meeting.`,
};

export default function ContactsPage() {
  return <ContactsContent />;
}
