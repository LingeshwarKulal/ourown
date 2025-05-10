import React from 'react';

const OurOwnLogo = ({ className = '', width = 200, height = 40, variant = 'dark' }) => {
  // Colors for the logo
  const logoColors = {
    dark: {
      main: '#0066AA', // Blue
      text: '#FF5500', // Orange
    },
    light: {
      main: '#FFFFFF', // White
      text: '#FFFFFF', // White
    }
  };
  
  const colors = logoColors[variant] || logoColors.dark;
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg 
        width={width} 
        height={height * 0.75} 
        viewBox="0 0 300 60" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* OUROWN text */}
        <g fill={colors.main}>
          {/* O */}
          <path d="M25.5 30C25.5 19.5 34 11 44.5 11C55 11 63.5 19.5 63.5 30C63.5 40.5 55 49 44.5 49C34 49 25.5 40.5 25.5 30ZM36 30C36 34.7 39.8 38.5 44.5 38.5C49.2 38.5 53 34.7 53 30C53 25.3 49.2 21.5 44.5 21.5C39.8 21.5 36 25.3 36 30Z"/>
          {/* U */}
          <path d="M68 13H78.5V37C78.5 41.7 82.3 45.5 87 45.5C91.7 45.5 95.5 41.7 95.5 37V13H106V37C106 47.5 97.5 56 87 56C76.5 56 68 47.5 68 37V13Z"/>
          {/* R */}
          <path d="M111 13H131C137.8 13 143.5 18.7 143.5 25.5C143.5 30.5 140.3 34.7 135.8 36.5L144 47H132L125.5 38H121.5V47H111V13ZM121.5 29H131C132.4 29 133.5 27.9 133.5 26.5C133.5 25.1 132.4 24 131 24H121.5V29Z"/>
          {/* O */}
          <path d="M149.5 30C149.5 19.5 158 11 168.5 11C179 11 187.5 19.5 187.5 30C187.5 40.5 179 49 168.5 49C158 49 149.5 40.5 149.5 30ZM160 30C160 34.7 163.8 38.5 168.5 38.5C173.2 38.5 177 34.7 177 30C177 25.3 173.2 21.5 168.5 21.5C163.8 21.5 160 25.3 160 30Z"/>
          {/* W */}
          <path d="M192 13H204L210 32L216 13H224L230 32L236 13H248L236 47H227L221 29L215 47H206L192 13Z"/>
          {/* N */}
          <path d="M252 13H262.5V31L278 13H290V47H279.5V29L264 47H252V13Z"/>
        </g>
      </svg>
      
      <div 
        className="text-xs mt-1 font-medium" 
        style={{ color: colors.text }}
      >
        Entrepreneurs Solution India Ltd
      </div>
    </div>
  );
};

export default OurOwnLogo; 