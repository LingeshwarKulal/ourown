import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSlider = ({ 
  testimonials,
  autoplay = true,
  autoplaySpeed = 5000,
  style = "default", // Options: default, minimal, gradient
  showHeading = true // Whether to show the heading section
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, autoplaySpeed]);

  // Navigation functions
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0
    })
  };

  // Render based on style
  const renderTestimonial = () => {
    const testimonial = testimonials[currentIndex];
    
    switch(style) {
      case "minimal":
        return <MinimalTestimonial testimonial={testimonial} />;
      case "gradient":
        return <GradientTestimonial testimonial={testimonial} />;
      default:
        return <DefaultTestimonial testimonial={testimonial} />;
    }
  };

  return (
    <div className={`testimonial-slider ${style === "gradient" ? "bg-transparent" : "bg-gray-50"}`}>
      <div className="container max-w-5xl mx-auto">
        {/* Section Heading - only show if showHeading is true */}
        {showHeading && (
          <div className="mb-12 text-center">
            <h2 className="section-title">What Our Partners Say</h2>
            <div className="fancy-separator mb-0 mx-auto max-w-xs"></div>
          </div>
        )}
        
        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              {renderTestimonial()}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-indigo-700 hover:bg-indigo-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-indigo-700 hover:bg-indigo-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-indigo-600 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonial Variants
const DefaultTestimonial = ({ testimonial }) => {
  return (
    <div className="p-1">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
        <svg className="w-16 h-16 text-indigo-100 absolute top-6 left-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
        </svg>
        
        <div className="relative z-10">
          <p className="text-xl md:text-2xl font-light italic text-gray-700 mb-8">{testimonial.quote}</p>
          
          <div className="flex items-center">
            {testimonial.image && (
              <img 
                src={testimonial.image} 
                alt={testimonial.author} 
                className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-indigo-100"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/150x150?text=${testimonial.author.split(' ')[0]}`;
                }}
              />
            )}
            <div>
              <h4 className="font-bold text-indigo-900">{testimonial.author}</h4>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MinimalTestimonial = ({ testimonial }) => {
  return (
    <div className="p-1">
      <div className="border border-gray-100 rounded-xl p-8 md:p-10 bg-white">
        <div className="mb-6">
          {/* Star Rating */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        
          <p className="text-lg text-gray-700 mb-8">{testimonial.quote}</p>
          
          <div className="flex items-center">
            {testimonial.image && (
              <img 
                src={testimonial.image} 
                alt={testimonial.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/150x150?text=${testimonial.author.split(' ')[0]}`;
                }}
              />
            )}
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GradientTestimonial = ({ testimonial }) => {
  return (
    <div className="p-1">
      <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 p-0.5">
        <div className="bg-white rounded-lg p-8 md:p-10">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-100 ring-2 ring-indigo-600 shadow-lg relative">
              <img 
                src={testimonial.image} 
                alt={testimonial.author} 
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  // Fallback to a simple colored div with initials if image fails
                  const parent = e.target.parentNode;
                  const initials = testimonial.author.split(' ').map(n => n[0]).join('');
                  const div = document.createElement('div');
                  div.className = 'w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600';
                  div.innerHTML = `<span class="text-lg font-bold">${initials}</span>`;
                  parent.replaceChild(div, e.target);
                }}
              />
            </div>
          </div>
          
          <div className="text-center">
            <svg className="w-10 h-10 text-indigo-100 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
            </svg>
            
            <p className="text-xl md:text-2xl font-light italic text-gray-700 mb-6">{testimonial.quote}</p>
            
            <h4 className="font-bold text-lg text-indigo-900">{testimonial.author}</h4>
            <p className="text-indigo-500">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider; 