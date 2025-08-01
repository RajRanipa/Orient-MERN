import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { lazy, Suspense } from 'react';
const About = lazy(() => import('./About'));
import AboutProduct from './AboutProduct';

const Home = () => {
  const [videoReady, setVideoReady] = useState(false);
  const useHeaderColor = () => {
    useEffect(() => {
      console.log(location.pathname)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    useEffect(() => {
      const scrollToHash = () => {
        const hash = window.location.hash;
        if (hash) {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) {
            const elRect = el.getBoundingClientRect();
            window.scrollTo({
              behavior: 'smooth',
              top: elRect.top + window.scrollY,
            });
          }
        }
      };

      // Scroll on mount
      scrollToHash();

      // Scroll on click of any link with #
      const anchorLinks = document.querySelectorAll('a[href*="#"]');
      anchorLinks.forEach((link) => {
        link.addEventListener('click', () => {
          // Delay scroll to wait for DOM updates from route change
          setTimeout(() => {
            scrollToHash();
          }, 100);
        });
      });

      // Cleanup
      return () => {
        anchorLinks.forEach((link) => {
          link.removeEventListener('click', scrollToHash);
        });
      };
    }, [location]);

    useEffect(() => {
      const setHeaderColor = () => {
        const hero_home = document.getElementById('hero_home');
        const loginout_icon = document.querySelector('#loginout_button img');
        const header_height = document.getElementById('navHeader').getBoundingClientRect().height;

        if (!hero_home) return;

        const hero_home_Rect = hero_home.getBoundingClientRect();

        // Optional: Set header color on scroll
        if (window.scrollY > hero_home_Rect.height - header_height) {
          document.documentElement.style.setProperty('--h-color', '#0f1c36');
          loginout_icon.style.filter = 'invert(0%)';
        } else {
          document.documentElement.style.setProperty('--h-color', 'white');
          loginout_icon.style.filter = 'invert(100%)';
        }
      };

      // Call once on mount
      setHeaderColor();

      // Attach listeners
      window.addEventListener('resize', setHeaderColor);
      window.addEventListener('scroll', setHeaderColor);

      // Optional: on route change or dynamic content
      const interval = setInterval(setHeaderColor, 500);

      return () => {
        window.removeEventListener('resize', setHeaderColor);
        window.removeEventListener('scroll', setHeaderColor);
        clearInterval(interval);
      };
    }, []);
  };
  useHeaderColor();
  return (
    <>
      <section className="relative min-h-screen pt-[var(--padding-top)]" id='hero_home'>
        {/* === Background Video === */}
        {/* <video aria-hidden="true" className="absolute inset-0 w-full h-full object-cover z-[5] object-[20%_50%] sm:object-center" 
          autoPlay loop muted playsInline 
          alt="Video placeholder"
          onCanPlayThrough={() => setVideoReady(true)} // or use onPlaying
        >
          <source src="/front-image/home/home-bg-video.mp4" type="video/mp4" />
        </video>
        <img src="/front-image/home/home-bg-video.jpeg" 
          // className="absolute inset-0 w-full h-full object-cover z-[1] object-[20%_50%] sm:object-center"
          className={`absolute inset-0 w-full h-full object-cover z-[1] object-[20%_50%] sm:object-center transition-opacity duration-500 ${
            videoReady ? 'opacity-0' : 'opacity-100'
          }`}
        /> */}
        <video
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-[5] object-[20%_50%] sm:object-center"
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setVideoReady(true)} // or use onPlaying
      >
        <source src="/front-image/home/home-bg-video.mp4" type="video/mp4" />
      </video>

      {/* === Poster image (hidden after video is ready) === */}
      {!videoReady && (
        <img
          src="/front-image/home/home-bg-video.jpeg"
          alt="Video placeholder"
          className="absolute inset-0 w-full h-full object-cover z-[1] object-[20%_50%] sm:object-center transition-opacity duration-500"
        />
      )}
        {/* === Overlay (optional, if video is too noisy) === */}
        <div className="absolute inset-0 bg-black/30 z-[10]"></div>

        {/* === Foreground Content === */}
        <Container className="relative z-20 flex flex-col items-center justify-center text-center h-[calc(100vh-72px)]">
          <div className="flex flex-col items-center justify-center gap-4" id={"hero_text_div"}>
            <h1 className="leading-[1.5] text-[4em] text-white font-sangbleu w-full md:w-[65%]  capitalize">
              <strong> We are manufacturer of cermiac fiber products</strong>
            </h1>
            <p className="mt-4 max-w-xl text-white text-opacity-90 text-lg">
              Discover ceramic fiber insulation reimagined for the modern industry.
            </p>
          </div>
          <button className="scroll-down-wrapper" id="scroll_to_Down" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            <div className="scroll-down">
              <div className="text-wrapper">
                <p>scroll</p>
              </div>
              <div className="text-wrapper">
                <p>down</p>
              </div>
            </div>
          </button>
        </Container>
      </section>

      <Suspense fallback={<div>Loading about section...</div>}>
        <About />
      </Suspense>
      <AboutProduct />
    </>
  );
};

export default Home;