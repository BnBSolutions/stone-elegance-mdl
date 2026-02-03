import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stoneTypes = [
  { id: 'granit', name: 'Granit', pricePerSqm: 2200 },
  { id: 'marmura', name: 'Marmură', pricePerSqm: 2800 },
  { id: 'travertin', name: 'Travertin', pricePerSqm: 1800 },
  { id: 'faianta', name: 'Faianță premium', pricePerSqm: 650 },
];

const PriceCalculator = () => {
  const [stoneType, setStoneType] = useState(stoneTypes[0]);
  const [area, setArea] = useState(10);
  
  const estimatedPrice = stoneType.pricePerSqm * area;
  const minPrice = Math.round(estimatedPrice * 0.85);
  const maxPrice = Math.round(estimatedPrice * 1.15);

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <CalcIcon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-medium tracking-widest uppercase text-sm">
                Calculator Estimativ
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Calculează costul proiectului tău
            </h2>
            
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Folosește calculatorul nostru pentru o estimare orientativă a costurilor. Pentru un preț exact, solicită o ofertă personalizată în lei moldovenești.
            </p>

            <Link
              to="/contact"
              className="btn-copper inline-flex items-center gap-2 rounded-sm"
            >
              Solicită ofertă exactă
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            {/* Stone Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-4">Tip de piatră</label>
              <div className="grid grid-cols-2 gap-3">
                {stoneTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setStoneType(type)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      stoneType.id === type.id
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-white/10 hover:bg-white/20 text-primary-foreground'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Suprafață (mp)</label>
                <span className="text-2xl font-serif font-bold text-accent">{area} mp</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between mt-2 text-xs text-primary-foreground/50">
                <span>1 mp</span>
                <span>100 mp</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <span className="text-sm text-primary-foreground/70 block mb-2">
                Estimare cost
              </span>
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {minPrice.toLocaleString()} - {maxPrice.toLocaleString()} lei
              </div>
              <span className="text-xs text-primary-foreground/50">
                * Prețul final depinde de tipul exact de piatră și finisaje
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
