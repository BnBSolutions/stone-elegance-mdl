import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Ruler, Wallet } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import projectKitchen from '@/assets/project-kitchen.jpg';
import projectBathroom from '@/assets/project-bathroom.jpg';
import marbleWhite from '@/assets/marble-white.jpg';
import marbleBeige from '@/assets/marble-beige.jpg';
import graniteBlack from '@/assets/granite-black.jpg';

interface Project {
  id: string;
  title: string;
  category: 'bucatarii' | 'bai' | 'comercial' | 'exterior';
  stoneType: string;
  area: string;
  budget: string;
  location: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Bucătărie Modernă Premium',
    category: 'bucatarii',
    stoneType: 'Marmură Carrara + Granit Gri',
    area: '28 mp',
    budget: '85 000 - 120 000 lei',
    location: 'Chișinău, Botanica',
    image: projectKitchen,
    description: 'Insulă din granit gri cu backsplash marmură Carrara',
  },
  {
    id: '2',
    title: 'Baie Spa Luxoasă',
    category: 'bai',
    stoneType: 'Marmură Carrara',
    area: '18 mp',
    budget: '65 000 - 85 000 lei',
    location: 'Chișinău, Centru',
    image: projectBathroom,
    description: 'Pereți și podea din marmură albă cu armături cupru',
  },
  {
    id: '3',
    title: 'Living Elegant',
    category: 'comercial',
    stoneType: 'Marmură Emperador',
    area: '45 mp',
    budget: '150 000 - 200 000 lei',
    location: 'Chișinău, Rîșcani',
    image: marbleBeige,
    description: 'Pardoseală completă din marmură premium',
  },
  {
    id: '4',
    title: 'Terasă Exterioară',
    category: 'exterior',
    stoneType: 'Granit Nero Assoluto',
    area: '32 mp',
    budget: '48 000 - 65 000 lei',
    location: 'Bălți',
    image: graniteBlack,
    description: 'Pardoseală exterioară rezistentă la intemperii',
  },
  {
    id: '5',
    title: 'Băi Gemene Villa',
    category: 'bai',
    stoneType: 'Travertin Crema',
    area: '24 mp',
    budget: '55 000 - 70 000 lei',
    location: 'Chișinău, Telecentru',
    image: marbleWhite,
    description: 'Două băi complete cu travertin crem',
  },
  {
    id: '6',
    title: 'Restaurant Premium',
    category: 'comercial',
    stoneType: 'Marmură + Granit Mix',
    area: '120 mp',
    budget: '280 000 - 350 000 lei',
    location: 'Chișinău, Centru',
    image: projectKitchen,
    description: 'Blaturi bar și pardoseală mix marmură-granit',
  },
];

const categories = [
  { id: 'toate', label: 'Toate' },
  { id: 'bucatarii', label: 'Bucătării' },
  { id: 'bai', label: 'Băi' },
  { id: 'comercial', label: 'Comercial' },
  { id: 'exterior', label: 'Exterior' },
];

const Proiecte = () => {
  const [activeCategory, setActiveCategory] = useState('toate');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.title = 'Proiecte Realizate | STONEXIM - Portofoliu';
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'toate' || project.category === activeCategory
  );

  const currentIndex = selectedProject 
    ? filteredProjects.findIndex(p => p.id === selectedProject.id) 
    : -1;

  const goToNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Portofoliu
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Proiecte Realizate
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl">
              Descoperă proiectele noastre finalizate în toată Moldova. Fiecare lucrare reflectă angajamentul nostru pentru calitate și eleganță.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-[72px] z-30 bg-background border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group"
              >
                <div className="card-stone overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Quick Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-accent font-medium uppercase tracking-wide">
                        {project.stoneType}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{project.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-card rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {currentIndex < filteredProjects.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-square lg:aspect-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 lg:p-10">
                  <span className="text-accent font-medium tracking-widest uppercase text-sm mb-3 block">
                    {selectedProject.stoneType}
                  </span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <MapPin className="w-5 h-5 text-accent" />
                      <div>
                        <span className="text-xs text-muted-foreground block">Locație</span>
                        <span className="font-medium text-foreground">{selectedProject.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Ruler className="w-5 h-5 text-accent" />
                      <div>
                        <span className="text-xs text-muted-foreground block">Suprafață</span>
                        <span className="font-medium text-foreground">{selectedProject.area}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Wallet className="w-5 h-5 text-accent" />
                      <div>
                        <span className="text-xs text-muted-foreground block">Buget estimativ</span>
                        <span className="font-medium text-foreground">{selectedProject.budget}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="btn-copper inline-flex items-center justify-center w-full rounded-lg"
                  >
                    Vreau un proiect similar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Proiecte;
