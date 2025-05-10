import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  
  const testimonials = [
    {
      quote: "OUROWN's governance dashboard gave us real-time visibility into pilot performance, cutting our time-to-market by 40% and unlocking new revenue streams.",
      name: "Vikram Mehra",
      title: "Chief Innovation Officer",
      company: "Fortune 500 Automotive",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      logo: "⚙️"
    },
    {
      quote: "As a first-time founder, OUROWN's Troup-Based Model provided me with all the expertise I needed—legal, finance, tech, marketing—without having to hire a large team upfront.",
      name: "Priya Sharma",
      title: "Founder & CEO",
      company: "TechSprout Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      logo: "🚀"
    },
    {
      quote: "The structured support system and clear stage-gate milestones helped us align our grant allocations with measurable outcomes, maximizing impact for every rupee spent.",
      name: "Rajiv Kumar",
      title: "Program Director",
      company: "Government Innovation Cell",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      logo: "🏛️"
    }
  ];
  
  // Auto-rotate carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);
  
  // Reset timer when manually changing slides
  const handleDotClick = (index) => {
    setActiveIndex(index);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
  };
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-40 left-[10%] w-80 h-80 rounded-full bg-gradient-ocean opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full bg-gradient-candy opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-300">What Our Partners Say</h2>
          <p className="text-lg text-dark-200 max-w-2xl mx-auto">
            Hear from the entrepreneurs, corporate leaders, and government officials who've collaborated with OUROWN.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial slides */}
          <div className="relative h-[420px] md:h-[320px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className={`absolute inset-0 ${activeIndex === index ? 'z-20' : 'z-10 pointer-events-none'}`}
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-medium h-full flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-dark-300 italic mb-6 font-serif">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className="font-display font-bold text-dark-300">{testimonial.name}</h4>
                      <p className="text-dark-200 text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-primary-100">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-gradient-candy flex items-center justify-center text-white text-2xl">
                      {testimonial.logo}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={() => handleDotClick((activeIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-30 w-12 h-12 rounded-full bg-white shadow-medium flex items-center justify-center text-dark-300 hover:text-primary-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => handleDotClick((activeIndex + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 z-30 w-12 h-12 rounded-full bg-white shadow-medium flex items-center justify-center text-dark-300 hover:text-primary-600 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel; 