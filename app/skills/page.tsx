import Skills from '@/components/Skills';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Technologies - ViNiTa BhArTi',
  description: 'Explore ViNiTa BhArTi\'s technical expertise in frontend, backend, databases, and DevOps technologies including React, Next.js, Node.js, and more.',
};

export default function SkillsPage() {
  return (
    <PageLayout activeSection="skills">
      <Skills />
    </PageLayout>
  );
}
