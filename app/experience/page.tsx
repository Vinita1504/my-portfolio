import Experience from '@/components/Experience';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience & Education - ViNiTa BhArTi',
  description: 'View ViNiTa BhArTi\'s professional journey, work experience at leading tech companies, and educational background in computer science.',
};

export default function ExperiencePage() {
  return (
    <PageLayout activeSection="experience">
      <Experience />
    </PageLayout>
  );
}
