import { motion } from 'framer-motion';
import { Shield, Zap, Palette, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Every design is crafted with meticulous attention to detail, ensuring pixel-perfect execution and luxurious aesthetics.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'From concept to launch in record time. Our streamlined process delivers exceptional results without compromising quality.'
  },
  {
    icon: Palette,
    title: 'Elegant Design',
    description: 'Sophisticated, minimal designs that capture attention and convey professionalism while maintaining brand authenticity.'
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    description: 'Strategic design decisions backed by data and psychology to maximize conversions and achieve your business goals.'
  }
];

const Benefits = () => {
  return (
    <section className="py-section bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Why Choose Our
            <br />
            <span className="text-gradient">Design Excellence</span>
          </h2>
          <p className="text-xl text-foreground-light max-w-3xl mx-auto leading-relaxed">
            We combine artistic vision with strategic thinking to create landing pages that not only look exceptional but deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-premium p-8 h-full transition-all duration-300 group-hover:shadow-luxury">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-accent rounded-radius flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;