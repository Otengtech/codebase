import { useEffect, useRef, useState } from "react";

export const useInViewAnimation = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      {
        threshold: isSmallScreen ? 0.2 : 0.1, // small screens wait for 20% visibility
        rootMargin: "0px 0px -10% 0px", // ensures it triggers slightly before fully visible
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};
