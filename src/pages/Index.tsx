import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Portfolio />
      <CTA />
    </div>
  );
};

export default Index;
