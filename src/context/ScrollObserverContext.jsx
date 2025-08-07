// // src/context/ScrollObserverContext.js

import { createContext, useContext, useEffect, useRef, useState } from 'react';

const ScrollObserverContext = createContext();

export const ScrollObserverProvider = ({ children }) => {
  const [visibleMap, setVisibleMap] = useState({});

  // Initialize the observer directly
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach((entry) => {
          const id = entry.target.dataset.scrollid;
          updates[id] = entry.isIntersecting;
        });
        setVisibleMap((prev) => ({ ...prev, ...updates }));
      },
      {
        threshold: 0.01,
      }
    )
  );

  useEffect(() => {
    // The cleanup function is still important
    return () => observer.current?.disconnect();
  }, []);
  // const observer = useRef(null);

  // useEffect(() => {
  //   observer.current = new IntersectionObserver(
  //     (entries) => {
  //       const updates = {};
  //       entries.forEach((entry) => {
  //         const id = entry.target.dataset.scrollid;
  //         updates[id] = entry.isIntersecting; // true when any part is visible
  //       });
  //       setVisibleMap((prev) => ({ ...prev, ...updates }));
  //     },
  //     {
  //       threshold: 0.01, // even 1% visible triggers
  //     }
  //   );    
  //   return () => observer.current?.disconnect();
  // }, []);

  const observe = (id, el) => {
    // Check if observer.current is initialized
    if (el && observer.current) {
      el.dataset.scrollid = id;
      observer.current.observe(el);
    }
  };
  // const observe = (id, el) => {
  //   if (el) {
  //     el.dataset.scrollid = id;
  //     observer.current?.observe(el);
  //   }
  // };

  const unobserve = (el) => {
    observer.current?.unobserve(el);
  };

  return (
    <ScrollObserverContext.Provider value={{ observe, unobserve, visibleMap }}>
      {children}
    </ScrollObserverContext.Provider>
  );
};

export const useScrollObserver = () => useContext(ScrollObserverContext);