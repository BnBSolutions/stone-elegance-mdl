import { motion } from 'framer-motion';
import { Shield, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Durabilitate Excepțională',
    description: 'Piatra naturală rezistă sute de ani. Investiția perfectă pentru generații.',
    stat: '100+ ani',
    statLabel: 'durată de viață',
  },
  {
    icon: Sparkles,
    title: 'Unicat Natural',
    description: 'Fiecare placă este unică. Modele și texturi irepetabile create de natură.',
    stat: '100%',
    statLabel: 'natural',
  },
  {
    icon: TrendingUp,
    title: 'Valoare în Timp',
    description: 'Proprietățile cu piatră naturală își păstrează și cresc valoarea.',
    stat: '+25%',
    statLabel: 'valoare proprietate',
  },
];

const WhyNaturalStone = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Beneficii
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            De ce piatră naturală?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alegerea pietrei naturale este o investiție în calitate, estetică și durabilitate pe termen lung.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-card p-8 md:p-10 rounded-lg h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-accent/20">
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-border">
                  <span className="font-serif text-3xl font-bold text-accent">
                    {feature.stat}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-1">
                    {feature.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNaturalStone;
