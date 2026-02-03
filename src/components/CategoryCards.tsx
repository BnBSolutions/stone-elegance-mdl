import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import marbleWhite from '@/assets/marble-white.jpg';
import graniteBlack from '@/assets/granite-black.jpg';
import marbleBeige from '@/assets/marble-beige.jpg';

const categories = [
  {
    id: 'granit',
    title: 'Granit',
    description: 'Rezistență și eleganță pentru orice spațiu',
    image: graniteBlack,
    count: '25+ variante',
    price: 'de la 1 800 lei/mp',
  },
  {
    id: 'marmura',
    title: 'Marmură',
    description: 'Rafinament natural premium',
    image: marbleWhite,
    count: '18+ variante',
    price: 'de la 2 200 lei/mp',
  },
  {
    id: 'faianta',
    title: 'Faianță',
    description: 'Design modern pentru interior',
    image: marbleBeige,
    count: '30+ modele',
    price: 'de la 450 lei/mp',
  },
];

const CategoryCards = () => {
  return (
    <section className="section-padding bg-background">
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
            Colecții Premium
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Explorează Categoriile
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descoperă gama noastră completă de piatră naturală premium, importată direct din cele mai renumite cariere din lume.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Link
                to={`/produse?categorie=${category.id}`}
                className="group block"
              >
                <div className="card-stone relative overflow-hidden aspect-[4/5]">
                  {/* Image */}
                  <div className="absolute inset-0 img-zoom">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="text-accent text-sm font-medium mb-2 block">
                        {category.count}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-secondary text-sm font-medium">
                          {category.price}
                        </span>
                        <span className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Vezi colecția
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copper Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/produse"
            className="btn-outline-stone inline-flex items-center gap-2"
          >
            Vezi toate produsele
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryCards;
