// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling to top
    });
  }, [pathname]); // Run when the path changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
