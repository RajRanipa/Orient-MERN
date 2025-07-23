import Container from '../../components/Container';
import './product.css';
import { Routes, Route, Outlet, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productConfig } from '../../components/products/productConfig.js';

const Products = () => {
  const location = useLocation();
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const path = location.pathname.split('/').pop(); // get 'ceramic-fiber-blanket' etc.
    if (productConfig[path]) {
      setActiveProduct(productConfig[path]);
    }
  }, [location.pathname]);

  useEffect(() => {
  if (!activeProduct) return;
  const productHeader = document.getElementById("product_name_header");
  if (productHeader) {
    const rect = productHeader.getBoundingClientRect();
    const scrollY = window.pageYOffset + rect.top - rect.height * 2;
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  }
}, [activeProduct]);

  // useEffect(() => {
  //   const product_name_header = document.getElementById('product_name_header');
  //   const active_product_icon_div = document.getElementById('active_product_icon_div');
  //   const scrollToElement = () => {
  //     if (product_name_header) {
  //       const product_name_header_rect = product_name_header.getBoundingClientRect();
  //       // Final scroll position = element's position in document - offset
  //       const scrollPosition = product_name_header_rect.top + window.pageYOffset - (product_name_header_rect.height * 2);

  //       window.scrollTo({
  //         behavior: "smooth",
  //         top: scrollPosition,
  //       });
  //     }
  //   };
  //   document.querySelectorAll('.icon-div').forEach(icon => {
  //     icon.addEventListener('click', () => {
  //       document.querySelectorAll('.icon-div').forEach(icon => {
  //         icon.classList.remove('active');
  //       });
  //       icon.classList.add('active');

  //       let svg = icon.children[0]?.children[0]; // safety check
  //       product_name_header.innerText = icon.title; // i am changing text here in this line for dynamic content as product change outlate change which is in this component , so when i refresh text change which i set here also svg image change which is i am changing in below line
  //       active_product_icon_div.innerHTML = svg?.outerHTML || '';

  //       scrollToElement();
  //     });

  //   });
  // }, []);

  const useProductPadding = () => {
    useEffect(() => {
      const setProductPaddings = () => {
        const product_header_wrapper = document.getElementById('product_header_wrapper');
        if (!product_header_wrapper) return;

        const product_header_Rect = product_header_wrapper.getBoundingClientRect();
        const product_padding = product_header_Rect.height + 'px';

        document.documentElement.style.setProperty('--product-padding', product_padding);

        // Optional: Set header color on scroll
        if (window.scrollY > product_header_Rect.height) {
          document.documentElement.style.setProperty('--h-color', '#0f1c36');
        } else {
          document.documentElement.style.setProperty('--h-color', 'white');
        }
      };

      // Call once on mount
      setProductPaddings();

      // Attach listeners
      window.addEventListener('resize', setProductPaddings);
      window.addEventListener('scroll', setProductPaddings);

      // Optional: on route change or dynamic content
      const interval = setInterval(setProductPaddings, 500);

      return () => {
        window.removeEventListener('resize', setProductPaddings);
        window.removeEventListener('scroll', setProductPaddings);
        clearInterval(interval);
      };
    }, []);
  };
  useProductPadding();
  return (
    <>
      <section className="relative min-h-fit pt-[var(--padding-top)] z-10">
        {/* === Overlay (optional, if video is too noisy) === */}
        <div className="product-header-wrapper" id="product_header_wrapper">
          <div className="product-header">
            <Container className="responsive-div">
              <div className="product-wrapper">
                <div className="icon-wrapper">
                  <NavLink
                    to="/products/ceramic-fiber-blanket"
                    className={({ isActive }) =>
                      `icon-div ${isActive ? 'active' : ''}`
                    }
                    title='ceramic fiber blanket'
                  >
                    <div className="blanket-icon" dangerouslySetInnerHTML={{ __html: productConfig['ceramic-fiber-blanket']?.icon || '' }} />
                    <p>orwool blanket</p>
                  </NavLink>
                  <NavLink
                    to="/products/ceramic-fiber-board"
                    className={({ isActive }) =>
                      `icon-div ${isActive ? 'active' : ''}`
                    }
                    title='ceramic fiber board'
                  >
                    <div className="board-icon" dangerouslySetInnerHTML={{ __html: productConfig['ceramic-fiber-board']?.icon || '' }} />
                    <p>orwool board</p>
                  </NavLink>
                  <NavLink
                    to="/products/ceramic-fiber-bulk"
                    className={({ isActive }) =>
                      `icon-div ${isActive ? 'active' : ''}`
                    }
                    title='ceramic fiber bulk'
                  >
                    <div className="bulk-icon" dangerouslySetInnerHTML={{ __html: productConfig['ceramic-fiber-bulk']?.icon || '' }} />
                    <p>orwool bulk</p>
                  </NavLink>
                  <NavLink
                    to="/products/ceramic-fiber-module"
                    className={({ isActive }) =>
                      `icon-div ${isActive ? 'active' : ''}`
                    }
                    title='ceramic fiber module'
                  >
                    <div className="module-icon" dangerouslySetInnerHTML={{ __html: productConfig['ceramic-fiber-module']?.icon || '' }} />
                    <p>orwool module</p>
                  </NavLink>
                  <NavLink
                    to="/products/ceramic-fiber-paper"
                    className={({ isActive }) =>
                      `icon-div ${isActive ? 'active' : ''}`
                    }
                    title='ceramic fiber paper'
                  >
                    <div className="paper-icon" dangerouslySetInnerHTML={{ __html: productConfig['ceramic-fiber-paper']?.icon || '' }} />
                    <p>orwool paper</p>
                  </NavLink>
                </div>
                <div className="product-name-header" >
                  <h1 id="product_name_header" >{activeProduct?.title}</h1>
                </div>
              </div>
            </Container>
            <div className="active-product-wrapper">
              <div
                className="active-product-icon-div"
                id="active_product_icon_div"
                dangerouslySetInnerHTML={{ __html: activeProduct?.icon || '' }}
              />
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Products;