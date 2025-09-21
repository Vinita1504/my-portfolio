import Projects from '@/components/Projects';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - ViNiTa BhArTi',
  description: 'Discover ViNiTa BhArTi\'s featured projects including SaaS dashboards, e-commerce platforms, AI chat assistants, and more innovative web applications.',
};

export default function ProjectsPage() {
  return (
    <PageLayout activeSection="projects">
      <Projects />
    </PageLayout>
  );
}
