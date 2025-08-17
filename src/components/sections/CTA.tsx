import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-section bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
            Ready to Elevate
            <br />
            <span className="text-gradient">Your Brand?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground-light mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's create a landing page that not only captures attention but converts visitors into customers through strategic design and flawless execution.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-medium rounded-radius-lg shadow-elegant transition-all duration-300 group"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-accent text-foreground px-8 py-4 text-lg font-medium rounded-radius-lg transition-all duration-300"
            >
              View Our Process
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-foreground-muted"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-radius flex items-center justify-center">
                <Mail className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-lg">hello@premiumdesign.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-radius flex items-center justify-center">
                <Phone className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;