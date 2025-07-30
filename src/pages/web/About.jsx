import Container from '../../components/Container';
import ResponsiveImage from '../../components/ResponsiveImage';
import ScrollReveal from '../../components/ScrollReveal';
import './home.css';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = () => (
  <>
    <Helmet>
        <title>About Us | Orient Fibertech</title>
        <meta name="description" content="Learn about Orient Ceramic Fibertech LLP, a leading ceramic fiber insulation manufacturer in Gujarat." />
        <meta name="keywords" content="ceramic fiber products, Gujarat manufacturer, thermal blankets, Orient Fibertech" />
        <meta property="og:title" content="About Orient Fibertech" />
        <meta property="og:description" content="We specialize in ceramic fiber products for industrial insulation applications." />
      </Helmet>
  <section className="w-full bg-ui-bg-medium py-16 relative" id='about_us'>
    {/* Visual / Image */}
    <div className="flex-1 w-full absolute top-0 left-0 z-0 opacity-50 overflow-visible ">
      <ResponsiveImage folder='home' name="orient_vector" alt="About Orient Fibertech" className="w-full h-[200vh] object-[0%_0%] object-cover " />
    </div>
    <Container className="flex flex-col lg:flex-row items-center gap-12 z-10 relative" padding="true">

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left flex flex-col gap-[6rem]">
        <div className="flex flex-col lg:flex-row portrait:flex-col relative gap-20 portrait:gap-4 items-center justify-items-center sm:justify-around ">
          <div className="who-we-are-head">
            <h1>who we</h1>
            <h1>are</h1>
          </div>
          <div className="who-we-are-description ">
            <p className="text-center lg:text-end portrait:text-center text-[1.1em] sm:text-[1.8em]">We specialize in manufacturing high-quality ceramic fiber products, meeting the stringent
              demands of
              modern industries.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row portrait:flex-col relative gap-20 portrait:gap-8 items-center justify-around">
          <ScrollReveal id="perspective_one" className="perspective" animation="fade-right">
            <div className="tile" id="tile1">
              <div className="sine" id="sine1"></div>
              <div className="icon-svg">
              <ResponsiveImage folder='home' name="shield_arrow1" alt="About Orient Fibertech" className="pointer-event-none" />
                <div className="title">
                  <h2 className="childe-title">15+ years of excellence in thermal insulation
                    solutions.</h2>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <div id="perspective_two" className="perspective" >
            <div className="tile" id="tile2">
              <div className="sine" id="sine2"></div>
              <div className="icon-svg">
                <ResponsiveImage folder='home' name="gears2" alt="About Orient Fibertech" className="pointer-event-none" />
                <div className="title">
                  <h2 className="childe-title">Custom-tailored solutions for diverse industries.</h2>
                </div>
              </div>
            </div>
          </div>
          <ScrollReveal id="perspective_three" className="perspective" animation="fade-left">
            <div className="tile" id="tile3">
              <div className="sine" id="sine3"></div>
              <div className="icon-svg">
                <ResponsiveImage folder='home' name="isologo" alt="About Orient Fibertech" className="pointer-event-none" />
                <div className="title">
                  <h2 className="childe-title">ISO-certified, internationally recognized standards.
                  </h2>
                </div>
                <NavLink id="a-certificates" to="/certificates" target="_blank"
                  rel="noopener noreferrer">see our certificates</NavLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Container>
  </section>
  </>
);

export default About;
