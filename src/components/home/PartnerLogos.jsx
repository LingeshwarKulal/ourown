import { motion } from 'framer-motion';

const PartnerLogos = () => {
  const partners = [
    { name: 'Bluella Ltd.', logo: '🔷' },
    { name: 'BusyAge', logo: '🕒' },
    { name: 'Government Seal', logo: '🏛️' },
    { name: 'VC Firm', logo: '💰' },
    { name: 'University', logo: '🎓' },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-300">Trusted By</h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-3">
                {partner.logo}
              </div>
              <span className="text-dark-300 font-medium text-sm">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos; 