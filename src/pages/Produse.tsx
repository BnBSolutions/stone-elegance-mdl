import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import marbleWhite from '@/assets/marble-white.jpg';
import graniteBlack from '@/assets/granite-black.jpg';
import marbleBeige from '@/assets/marble-beige.jpg';
import tilesFaience from '@/assets/tiles-faience.jpg';

interface Product {
  id: string;
  name: string;
  category: 'granit' | 'marmura' | 'faianta';
  color: string;
  origin: string;
  price: number;
  image: string;
  finish: string[];
  badge?: 'nou' | 'promo' | 'limitat';
}

const products: Product[] = [
  {
    id: '1',
    name: 'Nero Marquina',
    category: 'marmura',
    color: 'Negru',
    origin: 'Spania',
    price: 3200,
    image: graniteBlack,
    finish: ['Lustruit', 'Mat'],
    badge: 'nou',
  },
  {
    id: '2',
    name: 'Carrara Bianco',
    category: 'marmura',
    color: 'Alb',
    origin: 'Italia',
    price: 2800,
    image: marbleWhite,
    finish: ['Lustruit', 'Șlefuit'],
  },
  {
    id: '3',
    name: 'Crema Marfil',
    category: 'marmura',
    color: 'Bej',
    origin: 'Spania',
    price: 2400,
    image: marbleBeige,
    finish: ['Lustruit', 'Antichizat'],
    badge: 'promo',
  },
  {
    id: '4',
    name: 'Nero Assoluto',
    category: 'granit',
    color: 'Negru',
    origin: 'India',
    price: 1800,
    image: graniteBlack,
    finish: ['Lustruit', 'Flambat'],
  },
  {
    id: '5',
    name: 'Bianco Cristal',
    category: 'granit',
    color: 'Alb',
    origin: 'Brazilia',
    price: 2200,
    image: marbleWhite,
    finish: ['Lustruit'],
    badge: 'limitat',
  },
  {
    id: '6',
    name: 'Herringbone Premium',
    category: 'faianta',
    color: 'Gri',
    origin: 'Italia',
    price: 650,
    image: tilesFaience,
    finish: ['Mat', 'Semi-lustruit'],
  },
  {
    id: '7',
    name: 'Emperador Dark',
    category: 'marmura',
    color: 'Bej',
    origin: 'Spania',
    price: 2600,
    image: marbleBeige,
    finish: ['Lustruit'],
  },
  {
    id: '8',
    name: 'Baltic Brown',
    category: 'granit',
    color: 'Bej',
    origin: 'Finlanda',
    price: 1950,
    image: marbleBeige,
    finish: ['Lustruit', 'Mat'],
  },
];

const categories = ['toate', 'granit', 'marmura', 'faianta'];
const colors = ['toate', 'Alb', 'Bej', 'Negru', 'Gri', 'Verde'];

const Produse = () => {
  const [activeCategory, setActiveCategory] = useState('toate');
  const [activeColor, setActiveColor] = useState('toate');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    document.title = 'Catalog Produse | STONEXIM - Granit și Marmură';
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'toate' || product.category === activeCategory;
    const matchesColor = activeColor === 'toate' || product.color === activeColor;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesColor && matchesSearch;
  });

  const getBadgeClass = (badge?: string) => {
    switch (badge) {
      case 'nou':
        return 'badge-new';
      case 'promo':
        return 'badge-promo';
      case 'limitat':
        return 'badge-limited';
      default:
        return '';
    }
  };

  const getBadgeText = (badge?: string) => {
    switch (badge) {
      case 'nou':
        return 'Nou';
      case 'promo':
        return 'Promoție';
      case 'limitat':
        return 'Stoc limitat';
      default:
        return '';
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
              Catalog Premium
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Colecția Noastră
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl">
              Explorează gama completă de granit, marmură și faianță premium. Toate prețurile sunt în lei moldovenești (MDL).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] z-30 bg-background border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Caută produse..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category === 'toate' ? 'Toate' : category === 'marmura' ? 'Marmură' : category === 'faianta' ? 'Faianță' : category}
                </button>
              ))}
            </div>

            {/* Color Filter */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Culoare:</span>
              <select
                value={activeColor}
                onChange={(e) => setActiveColor(e.target.value)}
                className="px-3 py-2 rounded-lg border border-input bg-background text-sm focus:border-accent outline-none"
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color === 'toate' ? 'Toate' : color}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Filter className="w-4 h-4" />
              Filtre
            </button>
          </div>

          {/* Mobile Filters Dropdown */}
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="lg:hidden mt-4 pt-4 border-t border-border"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground w-full mb-2">Culoare:</span>
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                      activeColor === color
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {color === 'toate' ? 'Toate' : color}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="card-stone group h-full">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className={`absolute top-4 left-4 ${getBadgeClass(product.badge)}`}>
                        {getBadgeText(product.badge)}
                      </div>
                    )}

                    {/* Overlay CTA */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        to="/contact"
                        className="btn-copper py-2 px-6 rounded-sm text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Solicită ofertă în MDL
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs text-accent font-medium uppercase tracking-wide">
                      {product.origin}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-primary mt-1 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      {product.finish.slice(0, 2).map((f) => (
                        <span key={f} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        de la
                      </span>
                      <span className="font-serif text-lg font-bold text-accent">
                        {product.price.toLocaleString()} lei/mp
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nu am găsit produse care să corespundă criteriilor tale.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Nu ai găsit ce căutai?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Avem acces la sute de tipuri de piatră naturală. Contactează-ne pentru o ofertă personalizată în lei moldovenești.
            </p>
            <Link
              to="/contact"
              className="btn-copper inline-flex items-center gap-2 rounded-sm"
            >
              Solicită ofertă exactă
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Produse;
