// // src/context/ScrollObserverContext.js
// import { createContext, useContext, useEffect, useRef, useState } from 'react';

// const ScrollObserverContext = createContext();

// export const ScrollObserverProvider = ({ children }) => {
//   const [entries, setEntries] = useState({});
//   const observer = useRef(null);

//   useEffect(() => {
//     observer.current = new IntersectionObserver((observed) => {
//       const updates = {};
//       observed.forEach(entry => {
//         const id = entry.target.dataset.scrollid;

//         // Only mark as true once
//         if (entry.isIntersecting && !entries[id]) {
//           updates[id] = true;
//         }
//       });
//       if (Object.keys(updates).length > 0) {
//         setEntries(prev => ({ ...prev, ...updates }));
//       }
//     }, {
//       threshold: 0.2,
//     });

//     return () => observer.current?.disconnect();
//   }, [entries]); // Listen to updates to prevent infinite loop

//   const observe = (id, element) => {
//     if (element) {
//       element.dataset.scrollid = id;
//       observer.current?.observe(element);
//     }
//   };

//   const unobserve = (element) => {
//     observer.current?.unobserve(element);
//   };

//   return (
//     <ScrollObserverContext.Provider value={{ observe, unobserve, entries }}>
//       {children}
//     </ScrollObserverContext.Provider>
//   );
// };

// export const useScrollObserver = () => useContext(ScrollObserverContext);

import { createContext, useContext, useEffect, useRef, useState } from 'react';

const ScrollObserverContext = createContext();

export const ScrollObserverProvider = ({ children }) => {
  const [visibleMap, setVisibleMap] = useState({});
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach((entry) => {
          const id = entry.target.dataset.scrollid;
          updates[id] = entry.isIntersecting; // true when any part is visible
        });
        setVisibleMap((prev) => ({ ...prev, ...updates }));
      },
      {
        threshold: 0.01, // even 1% visible triggers
      }
    );

    return () => observer.current?.disconnect();
  }, []);

  const observe = (id, el) => {
    if (el) {
      el.dataset.scrollid = id;
      observer.current?.observe(el);
    }
  };

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