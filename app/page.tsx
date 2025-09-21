import Hero from '@/components/Hero';
import PageLayout from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout activeSection="home">
      <Hero />
    </PageLayout>
  );
}