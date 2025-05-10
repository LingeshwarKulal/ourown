// Theme colors
export const colors = {
  primary: {
    light: '#6366f1', // Indigo 500
    DEFAULT: '#4f46e5', // Indigo 600
    dark: '#4338ca', // Indigo 700
  },
  secondary: {
    light: '#a855f7', // Purple 500
    DEFAULT: '#9333ea', // Purple 600
    dark: '#7e22ce', // Purple 700
  },
  accent: {
    light: '#3b82f6', // Blue 500
    DEFAULT: '#2563eb', // Blue 600
    dark: '#1d4ed8', // Blue 700
  },
  background: {
    light: '#f9fafb', // Gray 50
    DEFAULT: '#f3f4f6', // Gray 100
    dark: '#1f2937', // Gray 800
  },
  text: {
    primary: '#111827', // Gray 900
    secondary: '#4b5563', // Gray 600
    light: '#9ca3af', // Gray 400
  }
};

// Gradients
export const gradients = {
  primary: 'bg-gradient-to-r from-indigo-600 to-purple-600',
  secondary: 'bg-gradient-to-r from-purple-600 to-blue-600',
  dark: 'bg-gradient-to-r from-gray-800 to-gray-900',
};

// Typography
export const typography = {
  heading: {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl md:text-3xl font-bold',
    h4: 'text-xl md:text-2xl font-bold',
  },
  body: {
    large: 'text-lg',
    base: 'text-base',
    small: 'text-sm',
  }
};

// Spacing
export const spacing = {
  section: 'py-12 md:py-16 lg:py-20',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
};

// Components
export const components = {
  card: {
    base: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
    hover: 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300',
  },
  button: {
    base: 'rounded-full font-medium transition-all duration-300',
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  },
  input: {
    base: 'w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300',
  }
};

// Animation variants
export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }
}; 