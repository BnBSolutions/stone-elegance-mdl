import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Award, Users, Globe, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import heroGranite from '@/assets/hero-granite.jpg';

const timeline = [
  {
    year: '2008',
    title: 'Fondare',
    description: 'STONEXIM a fost fondată în Chișinău cu viziunea de a aduce piatră naturală premium în Moldova.',
  },
  {
    year: '2012',
    title: 'Primul Showroom',
    description: 'Deschidem primul showroom specializat și depozit propriu în zona industrială.',
  },
  {
    year: '2016',
    title: 'Parteneriate Internaționale',
    description: 'Stabilim parteneriate directe cu cariere din Italia, Spania, India și Brazilia.',
  },
  {
    year: '2020',
    title: 'Extindere Națională',
    description: 'Lansăm servicii de livrare în toată Moldova și atelierul de prelucrare propriu.',
  },
  {
    year: '2024',
    title: 'Lider de Piață',
    description: 'Peste 1000 de proiecte finalizate și cea mai largă gamă de piatră naturală din Moldova.',
  },
];

const process = [
  {
    icon: Globe,
    title: 'Selectare din Carieră',
    description: 'Colaborăm direct cu cele mai renumite cariere din lume pentru a selecta piatră de cea mai înaltă calitate.',
  },
  {
    icon: Package,
    title: 'Import Direct',
    description: 'Importăm direct, fără intermediari, garantând prețuri competitive în lei moldovenești.',
  },
  {
    icon: Shield,
    title: 'Control Calitate',
    description: 'Fiecare placă este verificată la sosire pentru a asigura standarde premium.',
  },
  {
    icon: Truck,
    title: 'Livrare Moldova',
    description: 'Livrăm în toată Moldova cu echipe profesioniste și manipulare atentă.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Calitate Premium',
    description: 'Selectăm doar materiale de cea mai înaltă calitate din cele mai bune cariere.',
  },
  {
    icon: Users,
    title: 'Parteneriat de Încredere',
    description: 'Construim relații pe termen lung cu clienții, arhitecții și designerii.',
  },
  {
    icon: Shield,
    title: 'Prețuri Corecte',
    description: 'Import direct înseamnă prețuri de importator, fără adaosuri inutile.',
  },
];

const DespreNoi = () => {
  useEffect(() => {
    document.title = 'Despre Noi | STONEXIM - Povestea Noastră';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroGranite}
            alt="Textură granit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Despre STONEXIM
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Povestea Noastră
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Din 2008, STONEXIM este liderul importului de piatră naturală premium în Republica Moldova. 
              Aducem eleganța carierelor din Italia, Spania și Brazilia direct în casele și afacerile moldovenilor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Evoluție
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Istoria STONEXIM
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-border" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative lg:w-1/2 mb-12 ${
                  index % 2 === 0 ? 'lg:pr-16 lg:ml-0' : 'lg:pl-16 lg:ml-auto'
                }`}
              >
                <div className="bg-card p-8 rounded-xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                  <span className="font-serif text-4xl font-bold text-accent">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-8px',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Procesul Nostru
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              De la Carieră la Casa Ta
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un proces simplificat care îți garantează calitate premium la prețuri de importator direct în lei moldovenești.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(50%+40px)] right-0 h-[2px] bg-border" />
                  )}
                </div>
                <span className="text-sm text-accent font-semibold mb-2 block">
                  Pas {index + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Valorile Noastre
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              De Ce STONEXIM?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Hai să colaborăm
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Fie că ești arhitect, designer sau proprietar, suntem aici să te ajutăm să transformi spațiile cu piatră naturală premium.
            </p>
            <Link
              to="/contact"
              className="btn-copper inline-flex items-center gap-2 rounded-sm"
            >
              Contactează-ne
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DespreNoi;
