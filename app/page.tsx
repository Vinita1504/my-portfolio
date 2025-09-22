import Hero from '@/components/Hero';
import About from '@/components/About';
import PageLayout from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout activeSection="home">
      <Hero />
      <About />
    </PageLayout>
  );
}