import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    role: 'Proprietar apartament',
    location: 'Chișinău',
    text: 'Am ales STONEXIM pentru bucătăria noastră și sunt absolut încântată. Calitatea marmură și profesionalismul echipei au depășit așteptările. Prețurile în lei au fost foarte accesibile.',
    rating: 5,
    project: 'Blat bucătărie marmură Carrara',
  },
  {
    id: 2,
    name: 'Andrei Rusu',
    role: 'Arhitect',
    location: 'Bălți',
    text: 'Colaborez cu STONEXIM de peste 5 ani pentru proiectele mele. Varietatea de granit și promptitudinea livrărilor îi fac partenerul ideal. Recomand tuturor colegilor din domeniu.',
    rating: 5,
    project: 'Scări și pardoseli granit',
  },
  {
    id: 3,
    name: 'Elena Ciobanu',
    role: 'Designer interior',
    location: 'Chișinău',
    text: 'STONEXIM oferă cea mai bună selecție de piatră naturală din Moldova. Prețurile directe în MDL, fără intermediari, fac diferența enormă pentru bugetul clienților mei.',
    rating: 5,
    project: 'Băi complete travertin',
  },
];

const Testimonials = () => {
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
            Testimoniale
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peste 1000 de proiecte finalizate cu succes în toată Moldova. Iată ce părere au clienții noștri.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-card p-8 rounded-lg h-full border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Project Badge */}
                <div className="bg-muted px-4 py-2 rounded-full inline-block mb-6">
                  <span className="text-xs text-muted-foreground">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-serif font-bold text-accent text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
