import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-QBN2R9CVY3', {
        page_path: location.pathname + location.search, // include query string
      });
    }
  }, [location]);
};

export default usePageTracking;