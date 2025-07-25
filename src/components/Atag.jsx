import './header.css';
import { NavLink } from 'react-router-dom';

const Atag = ({ linkname = '', href = '/', className = '', children, onClick = () => {} }) => {
  if (!linkname) return null;

  return (
    <NavLink to={href} className={`letters-a ${className}`} onClick={onClick}>
      {children}
      {linkname.split('').map((letter, index) => {
        const isSpace = letter === ' ';
        return (
          <span
            key={index}
            className={` pointer-events-none wrap-letter ${isSpace ? 'space' : ''} ${index === 0 ? 'uppercase' : ''}`}
            data-letter={ letter}
            style={{
              transitionDelay: `${index * 50}ms`,
              transitionProperty: 'transform',
            }}
          >
            {isSpace ? '\u00A0' : letter}
          </span>
        );
      })}
    </NavLink>
  );
};

export default Atag;

// In this component if linkname is back to top , it will make space or not , I want space and I want different classname for it 

// import './header.css';
// import { NavLink } from 'react-router-dom';

// const Atag = ({ linkname = '', href = '/', className = '', children }) => {
//   if (!linkname) return null;

//   return (
//     <>
//       <NavLink to={href} className={`letters-a ${className}`}>
//         {children}
//         {linkname.split('').map((letter, index) => (
//           <span
//             key={index}
//             className={`pointer-events-none wrap-letter ${letter === ' ' ? 'space' : ''}`}
//             data-letter={`${letter === ' ' ? ' ' : letter}`}
//             style={{ transitionDelay: ` ${index * 50}ms`, transitionProperty: 'transform' }}
//           >
//             {letter}
//           </span>
//         ))}
//       </NavLink>
//     </>
//   );
// };

// export default Atag;