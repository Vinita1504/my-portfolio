import About from '@/components/About';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - ViNiTa BhArTi',
  description: 'Learn more about ViNiTa BhArTi, a passionate full-stack developer with over 5 years of experience crafting beautiful, functional digital experiences.',
};

export default function AboutPage() {
  return (
    <PageLayout activeSection="about">
      <About />
    </PageLayout>
  );
}
