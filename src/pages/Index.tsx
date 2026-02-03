import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

import Navbar from '@/components/Navbar';
import StatsCounter from '@/components/StatsCounter';
import CategoryCards from '@/components/CategoryCards';
import WhyNaturalStone from '@/components/WhyNaturalStone';
import PriceCalculator from '@/components/PriceCalculator';
import Testimonials from '@/components/Testimonials';
import QuickContactForm from '@/components/QuickContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import heroImage from '@/assets/hero-granite.jpg';

const Index = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    document.title = 'STONEXIM - Importator Oficial Granit & Marmură | Moldova';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Textură granit premium"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-4 md:px-8 relative z-10"
        >
          <div className="max-w-4xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Importator Oficial Moldova
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              STONE<span className="text-accent">XIM</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/80 mb-4 font-serif italic"
            >
              Eleganță solidă în fiecare placă
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-white/60 mb-10 max-w-2xl"
            >
              Granit și marmură premium importate direct din cele mai renumite cariere. 
              Prețuri de importator direct în lei moldovenești, fără intermediari.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/produse"
                className="btn-copper inline-flex items-center justify-center gap-2 rounded-sm text-base"
              >
                Vezi colecția
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center gap-2 rounded-sm text-base"
              >
                Solicită ofertă
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Category Cards */}
      <CategoryCards />

      {/* Why Natural Stone */}
      <WhyNaturalStone />

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Testimonials */}
      <Testimonials />

      {/* Quick Contact Form */}
      <QuickContactForm />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
