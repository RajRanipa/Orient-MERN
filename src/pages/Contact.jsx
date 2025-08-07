import { useEffect , useRef } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Container from '../components/Container';
import './contact.css';
import ScrollReveal from '../components/ScrollReveal';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const formRef = useRef();
  useEffect(() => {
    const loginout_icon = document.querySelector('#loginout_button img');
    loginout_icon.style.filter = 'invert(0%)';
    document.documentElement.style.setProperty('--h-color', '#0f1c36');
    window.scrollTo({ top: 0 });
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tnuhefg',
      'template_ztmh83p',
      formRef.current,
      'Bq_HXi-8MYi4dkdYr'
    )
      .then(() => {
        alert('Message sent successfully!');
        formRef.current.reset(); // This resets all form fields
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message');
      });
  };
  return (<>
    <Helmet>
      {/* Page Title */}
      <title>Contact Us | Orient Fibertech</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Get in touch with Orient Ceramic Fibertech LLP – leading ceramic fiber insulation manufacturer in Morbi, Gujarat, India. We are here to assist you with your industrial thermal insulation needs."
      />

      {/* Keywords for SEO */}
      <meta
        name="keywords"
        content="contact Orient ceramic Fibertech, ceramic fiber insulation contact, ceramic fiber manufacturer in Gujarat, ceramic fiber manufacturer in morbi,ceramic fiber manufacturer in india, thermal insulation, ceramic blanket, industrial insulation"
      />

      {/* Open Graph Meta for Social Sharing */}
      <meta property="og:title" content="Contact Orient Fibertech" />
      <meta
        property="og:description"
        content="Contact Orient Ceramic Fibertech LLP for premium ceramic fiber insulation products in India. Fast response, expert support."
      />
      <meta property="og:url" content="https://orientfibertech.com/Contact" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Container title="" className='pt-[var(--padding-top)]' childClassName='gradient-bg'>

      <h1 className="contact-h1">enquiry</h1>
      <div className="enquiry-wrapper flex-50 flex-col md:flex-row">
        <ScrollReveal className="enquiry-info-wrapper flex-50-child" id="enquiry_div" animation='fade-left'>
          <div className="info-title-wrapper">
            <h1 className="info-title">for sales enquiry</h1>
            <p className="flex gap-2 items-center"> <FiMail /> orientfibertechllp@gmail.com</p>
            <p className="flex gap-2 items-center"> <FiPhone /> +91 98253 55877</p>
          </div>
          <div className="info-title-wrapper">
            <h1 className="info-title">for Marketing enquiry</h1>
            <p className="flex gap-2 items-center"> <FiMail /> orientfibertechllp@gmail.com</p>
            <p className="flex gap-2 items-center"> <FiPhone /> +91 7575078616</p>
          </div>
          <div className="info-title-wrapper">
            <h1 className="info-title">For HR & Account related enquiry</h1>
            <p className="flex gap-2 items-center"> <FiPhone /> +91 98256 73951</p>
          </div>
          <div className="info-title-wrapper">
            <h1 className="info-title">For Other enquiry</h1>
            <p className="flex gap-2 items-center"> <FiMail /> orientfibertechllp@gmail.com</p>
            <p className="flex gap-2 items-center"> <FiPhone /> +91 90238 78926</p>
          </div>
        </ScrollReveal>
        <ScrollReveal className="enquiry-QR-wrapper flex-50-child" id="enquiry_qr_div" animation='fade-right'>
          <div className="enquiry-QR-div">
            <p>for quick support <br /> on whatsapp</p>
            <img loading="lazy" src="/front-image/qr-code.png" alt="" />
            <p>scan qr code</p>
          </div>
        </ScrollReveal>
      </div>
      <div className="form-wrapper flex-50 flex-col md:flex-row">
        <ScrollReveal id="address_div" className="address-wrapper flex-50-child" animation='fade-left'>
          <div className="info-address-wrapper">
            <h1 className="address-title">Factory & Registered Address</h1>
            <div className="flex items-start p-[4px_1em]">
              <div>
                <FiMapPin className="mt-[0.8em]" />
              </div>
              <div>
                <p className="company-title">orient ceramic fibertech LLp</p>
                <p>GST NO : 24AAGFO4823P1ZW </p>
                <p>27 National Highway
                  Near Railway Crossing
                  Hasanpar
                  Wankaner – 363 621, Gujarat, India.</p>
                <p>orientfibertechllp@gmail.com</p>
                <div itemScope itemType="https://schema.org/Organization" className='lg:flex-[0_0_50%] md:flex-[0_0_60%]'>
                  <div itemProp="addressPoint" itemScope itemType="https://schema.org/addressPoint">
                    <span itemProp="address" className='group flex items-center justify-center gap-2 pt-[0.5em] w-fit'>
                      <a href="https://maps.app.goo.gl/4RLM1eWvzkdxZeCf8" target="_blank" rel="noopener noreferrer" className="peer text-[var(--cl-blue-logo)] pl-[1em] text-[0.98em] hover:underline w-full">
                        google map link
                      </a>
                      <img loading="lazy" src="/front-image/arrow.svg" alt="arrow icon" className='w-[1em] rotate-[-45deg] translate-x-[-50%] translate-y-[50%] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-[0] group-hover:translate-y-[0]'/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal id="address_form_div" className="form-div flex-50-child" animation='fade-right'>
          <form id="contactForm" action="#" method="post" ref={formRef} onSubmit={handleSubmit}>
            <h1 className='text-[1.5em]'>Send Us A Message</h1>

            {/* <!-- Name --> */}
            <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" required />

            {/* <!-- Phone number with validation pattern --> */}
            <input type="number" id="mobileNumber" name="mobileNumber" placeholder="Your Mobile Number" pattern="^[0-9]{10}$" required />

            {/* <!-- Email with pattern validation --> */}
            <input type="email" id="email" name="email" autoComplete="off" placeholder="Your Email" required />

            {/* <!-- Address --> */}
            <input type="text" id="address" name="address" autoComplete="off" placeholder="Your Address" required />

            {/* <!-- Education --> */}
            <textarea type="" id="enquiry" name="enquiry" placeholder="Your enquiry" rows="5" required />

            <button type="submit">Submit</button>
            <div id="contact-successMessage" className="successMessage">Form submitted successfully!</div>
            <div id="contact-errorMessage" className="errorMessage">There was an error submitting the form. <br />Please try again.</div>
          </form>
        </ScrollReveal>
      </div>
    </Container>
  </>
  );
}

export default Contact;
