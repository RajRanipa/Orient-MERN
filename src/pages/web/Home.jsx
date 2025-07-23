import { useEffect } from 'react';
import Container from '../../components/Container';
import About from './About';
import AboutProduct from './AboutProduct';
import ScrollReveal from '../../components/ScrollReveal';

const Home = () => {
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
        const header_height = document.getElementById('navHeader').getBoundingClientRect().height;

        if (!hero_home) return;

        const hero_home_Rect = hero_home.getBoundingClientRect();

        // Optional: Set header color on scroll
        if (window.scrollY > hero_home_Rect.height - header_height) {
          document.documentElement.style.setProperty('--h-color', '#0f1c36');
        } else {
          document.documentElement.style.setProperty('--h-color', 'white');
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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 object-[20%_50%] sm:object-center"
          src="/front-image/home-bg-video.mp4"
        />

        {/* === Overlay (optional, if video is too noisy) === */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>

        {/* === Foreground Content === */}
        <Container className="relative z-20 flex flex-col items-center justify-center text-center h-[calc(100vh-72px)]">
          <ScrollReveal className="flex flex-col items-center justify-center gap-4" id={"hero_text_div"}>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Ignite Your Performance
            </h1>
            <p className="mt-4 max-w-xl text-white text-opacity-90 text-lg">
              Discover ceramic fiber insulation reimagined for the modern industry.
            </p>
          </ScrollReveal>
        </Container>
      </section>
      <About />
      <AboutProduct />
    </>
  );
};

export default Home;