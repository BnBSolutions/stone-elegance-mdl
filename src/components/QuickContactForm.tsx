import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuickContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Mesaj trimis cu succes!',
      description: 'Vă vom contacta în cel mai scurt timp.',
    });
    
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Contact Rapid
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Să discutăm despre proiectul tău
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Suntem aici să te ajutăm să alegi piatra perfectă pentru spațiul tău. Contactează-ne pentru o consultație gratuită și o ofertă personalizată în lei moldovenești.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Showroom & Depozit</h4>
                  <p className="text-muted-foreground text-sm">
                    Str. Industrială 25, Chișinău, Moldova
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Telefon Vânzări</h4>
                  <a href="tel:+37322123456" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                    +373 22 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <a href="mailto:info@stonexim.md" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                    info@stonexim.md
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Program</h4>
                  <p className="text-muted-foreground text-sm">
                    Luni - Vineri: 09:00 - 18:00<br />
                    Sâmbătă: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="font-serif text-xl font-bold text-primary mb-6">
                Trimite-ne un mesaj rapid
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Numele tău *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
                    placeholder="Ion Popescu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
                    placeholder="+373 69 123 456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesaj
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Descrie pe scurt proiectul tău..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-copper rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Se trimite...'
                  ) : (
                    <>
                      Trimite mesaj
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Toate prețurile sunt în lei moldovenești (MDL) și includ TVA.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactForm;
