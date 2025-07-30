import { useEffect, useRef, useState } from "react";

export const useInViewAnimation = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: isSmallScreen ? 0 : 0.1, // 👈 dynamic threshold
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};
