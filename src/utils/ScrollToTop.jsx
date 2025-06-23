import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component ensures that when a user navigates to a new page,
// they start at the top of the page rather than maintaining scroll position
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop; 