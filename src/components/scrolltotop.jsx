import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property from the current location
  const { pathname } = useLocation();

  useEffect(() => {
    // On every route change, scroll to the top left of the window
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;