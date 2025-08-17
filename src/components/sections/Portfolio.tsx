import { motion } from 'framer-motion';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Brand Landing',
    category: 'Brand Identity',
    image: portfolio1,
    description: 'Premium brand positioning with sophisticated visual hierarchy'
  },
  {
    id: 2,
    title: 'E-commerce Excellence',
    category: 'Product Showcase',
    image: portfolio2,
    description: 'Conversion-optimized design driving 300% increase in sales'
  },
  {
    id: 3,
    title: 'Corporate Elegance',
    category: 'Professional Services',
    image: portfolio3,
    description: 'Trust-building design for high-value B2B conversions'
  }
];

const Portfolio = () => {
  return (
    <section className="py-section bg-accent">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Recent Work &
            <br />
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-foreground-light max-w-3xl mx-auto leading-relaxed">
            Each project represents a unique challenge solved through thoughtful design, strategic thinking, and exceptional execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="card-luxury overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-foreground-muted uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-foreground-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-foreground-muted text-lg">
            Ready to see your vision come to life?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;