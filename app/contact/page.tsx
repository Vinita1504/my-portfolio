import Contact from '@/components/Contact';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - ViNiTa BhArTi',
  description: 'Get in touch with ViNiTa BhArTi for freelance work, collaboration opportunities, or to discuss your next web development project.',
};

export default function ContactPage() {
  return (
    <PageLayout activeSection="contact">
      <Contact />
    </PageLayout>
  );
}
