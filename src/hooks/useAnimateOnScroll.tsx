
import { useEffect, useRef, RefObject, useState } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: AnimationOptions = {}
): [RefObject<T>, boolean] {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { 
    threshold = 0.1, 
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true 
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

export default useAnimateOnScroll;
