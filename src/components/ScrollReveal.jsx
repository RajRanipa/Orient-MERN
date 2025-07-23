// import { useEffect, useRef } from 'react';
// import { useScrollObserver } from '../context/ScrollObserverContext';

// const ANIMATION_CLASSES = {
//   'fade-up': {
//     hidden: 'opacity-0 translate-y-6',
//     visible: 'opacity-100 translate-y-0',
//   },
//   'fade-down': {
//     hidden: 'opacity-0 -translate-y-6',
//     visible: 'opacity-100 translate-y-0',
//   },
//   'fade-left': {
//     hidden: 'opacity-0 -translate-x-6',
//     visible: 'opacity-100 translate-x-0',
//   },
//   'fade-right': {
//     hidden: 'opacity-0 translate-x-6',
//     visible: 'opacity-100 translate-x-0',
//   },
//   'zoom-in': {
//     hidden: 'opacity-0 scale-90',
//     visible: 'opacity-100 scale-100',
//   },
// };

// const ScrollReveal = ({ id, children, className = '', animation = 'fade-up', revealOnce = true }) => {
//   const ref = useRef(null);
//   const { observe, unobserve, entries } = useScrollObserver();
//   const visible = entries[id];

//   const anim = ANIMATION_CLASSES[animation] || ANIMATION_CLASSES['fade-up'];

//   useEffect(() => {
//     if (ref.current) observe(id, ref.current);
//     return () => {
//       if (ref.current instanceof Element) {
//         unobserve(ref.current);
//       }
//     };
//   }, [id, observe, unobserve]);

//   return (
//     <div
//       ref={ref}
//       className={`${className} transition duration-700 ease-out transform ${
//         visible ? anim.visible : anim.hidden
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default ScrollReveal;

import { useEffect, useRef } from 'react';
import { useScrollObserver } from '../context/ScrollObserverContext';

const ANIMATION_CLASSES = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 -translate-x-6',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 translate-x-6',
    visible: 'opacity-100 translate-x-0',
  },
  'zoom-in': {
    hidden: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
};

const ScrollReveal = ({
  id,
  children,
  animation = 'fade-up',
  className = '',
}) => {
  const ref = useRef(null);
  const { observe, unobserve, visibleMap } = useScrollObserver();
  const isVisible = visibleMap[id]; // true/false toggle

  const anim = ANIMATION_CLASSES[animation] || ANIMATION_CLASSES['fade-up'];

  useEffect(() => {
    if (ref.current) observe(id, ref.current);
    return () => {
      if (ref.current) unobserve(ref.current);
    };
  }, [id]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${className} ${
        isVisible ? anim.visible : anim.hidden
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;