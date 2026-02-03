import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const projectTypes = [
  'Bucătărie',
  'Baie',
  'Living / Sufragerie',
  'Dormitor',
  'Scări',
  'Exterior / Terasă',
  'Spațiu comercial',
  'Alt proiect',
];

const budgetRanges = [
  'Sub 20 000 lei',
  '20 000 - 50 000 lei',
  '50 000 - 100 000 lei',
  '100 000 - 200 000 lei',
  'Peste 200 000 lei',
  'Necunoscut',
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    area: '',
    budget: '',
    message: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact & Oferte | STONEXIM';
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Max 5 files
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Cerere trimisă cu succes!',
      description: 'Vă vom contacta în maxim 24 de ore cu o ofertă personalizată.',
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      area: '',
      budget: '',
      message: '',
    });
    setFiles([]);
    setIsSubmitting(false);
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
              Contact
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Solicită Ofertă
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl">
              Completează formularul pentru o ofertă personalizată. Toate prețurile sunt în lei moldovenești (MDL) și includ TVA.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <h2 className="font-serif text-2xl font-bold text-primary mb-8">
                  Informații Contact
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Showroom & Depozit</h4>
                      <p className="text-muted-foreground text-sm">
                        Str. Industrială 25,<br />
                        Chișinău, MD-2023, Moldova
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Telefon Vânzări</h4>
                      <a href="tel:+37322123456" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                        +373 22 123 456
                      </a>
                      <a href="tel:+37369123456" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                        +373 69 123 456 (Mobil)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <a href="mailto:info@stonexim.md" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                        info@stonexim.md
                      </a>
                      <a href="mailto:vanzari@stonexim.md" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                        vanzari@stonexim.md
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
                        Sâmbătă: 10:00 - 14:00<br />
                        Duminică: Închis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">
                      Str. Industrială 25, Chișinău
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-6 p-4 bg-muted/50 rounded-lg">
                  <strong>Notă:</strong> Toate prețurile sunt în lei moldovenești (MDL) și includ TVA. 
                  Livrare disponibilă în toată Moldova.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 md:p-10 border border-border">
                <h2 className="font-serif text-2xl font-bold text-primary mb-8">
                  Formular Cerere Ofertă
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nume complet *
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

                  {/* Phone */}
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

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
                      placeholder="email@exemplu.md"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tip proiect *
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
                    >
                      <option value="">Selectează...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Area */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Suprafață estimată (mp)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
                      placeholder="ex: 25"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Buget aproximativ (MDL)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300"
                    >
                      <option value="">Selectează...</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Detalii proiect
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Descrie proiectul tău în detaliu: tip de piatră preferat, finisaje, culori, deadline, etc."
                  />
                </div>

                {/* File Upload */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Atașează planuri/fotografii (opțional)
                  </label>
                  <div className="border-2 border-dashed border-input rounded-lg p-6 text-center hover:border-accent/50 transition-colors duration-300">
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.dwg"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <span className="text-sm text-muted-foreground block">
                        Click pentru a încărca sau trage fișierele aici
                      </span>
                      <span className="text-xs text-muted-foreground/70 mt-1 block">
                        Imagini, PDF, DWG (max. 5 fișiere)
                      </span>
                    </label>
                  </div>

                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-muted px-4 py-2 rounded-lg">
                          <span className="text-sm text-foreground truncate max-w-[80%]">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-copper rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Se trimite cererea...'
                  ) : (
                    <>
                      Trimite cererea de ofertă
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Prin trimiterea formularului, sunteți de acord cu prelucrarea datelor personale conform GDPR.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
