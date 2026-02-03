import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const languages = [
  { code: 'RO', label: 'Română' },
  { code: 'RU', label: 'Русский' },
  { code: 'EN', label: 'English' },
];

const navLinks = [
  { path: '/', label: 'Acasă' },
  { path: '/produse', label: 'Produse' },
  { path: '/proiecte', label: 'Proiecte' },
  { path: '/despre-noi', label: 'Despre noi' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('RO');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}>
                  STONE<span className="text-accent">XIM</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    isScrolled ? 'text-foreground' : 'text-white/90'
                  } ${location.pathname === link.path ? 'text-accent' : ''}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 text-sm">
                {languages.map((lang, index) => (
                  <span key={lang.code} className="flex items-center">
                    <button
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-2 py-1 transition-colors duration-300 ${
                        currentLang === lang.code
                          ? 'text-accent font-semibold'
                          : isScrolled
                          ? 'text-muted-foreground hover:text-foreground'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {lang.code}
                    </button>
                    {index < languages.length - 1 && (
                      <span className={`${isScrolled ? 'text-muted-foreground' : 'text-white/50'}`}>|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Phone CTA */}
              <a
                href="tel:+37322123456"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+373 22 123 456</span>
              </a>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn-copper text-sm py-2 px-6 rounded-sm"
              >
                Solicită ofertă
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-serif font-medium text-white/90 hover:text-accent transition-colors duration-300 ${
                        location.pathname === link.path ? 'text-accent' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 mt-8"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-3 py-2 text-sm transition-colors duration-300 ${
                        currentLang === lang.code
                          ? 'text-accent font-semibold border-b-2 border-accent'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/contact"
                    className="btn-copper text-base py-3 px-8 rounded-sm mt-4 inline-block"
                  >
                    Solicită ofertă
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
