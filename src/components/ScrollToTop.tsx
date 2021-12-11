import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};
