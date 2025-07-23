import { useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiMap } from 'react-icons/fi'; // optional icon pack
import Container from '../../components/Container';
import './contact.css';
import ScrollReveal from '../../components/ScrollReveal';

const Contact = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--h-color', '#0f1c36');
    window.scrollTo({ top: 0});
  })
  return (<>
    <Container title="" className='pt-[var(--padding-top)]' childClassName='gradient-bg'>

      <h1 className="contact-h1">enquiry</h1>
      <div className="enquiry-wrapper flex-50 flex-col md:flex-row">
        <ScrollReveal className="enquiry-info-wrapper flex-50-child" id="enquiry_div" animation='fade-left'>
          <div className="info-title-wrapper">
            <h1 className="info-title">for sales enquiry</h1>
            <p className="flex gap-2 items-center"> <FiMail /> orientfibertechllp@gmail.com</p>
            {/* <p> <FiMapPin />orientfibertechllp@gmail.com</p>
                            <p> <FiMap />orientfibertechllp@gmail.com</p> */}
            <p className="flex gap-2 items-center"> <FiPhone /> +91 98253 55877</p>
          </div>
          <div className="info-title-wrapper">
            <h1 className="info-title">for Marketing enquiry</h1>
            <p className="flex gap-2 items-center"> <FiMail /> orientmarketing@gmail.com</p>
            <p className="flex gap-2 items-center"> <FiPhone /> +91 7575078616</p>
          </div>
          <div className="info-title-wrapper">
            <h1 className="info-title">For HR & Account related enquiry</h1>
            <p className="flex gap-2 items-center"> <FiPhone /> +91 98256 73951</p>
          </div>
          <div className="info-title-wrapper">
            <h1 className="info-title">For Other enquiry</h1>
            <p className="flex gap-2 items-center"> <FiMail /> orientfibertechllp@gmail.com</p>
            <p className="flex gap-2 items-center"> <FiPhone /> +91 95370 80483</p>
          </div>
        </ScrollReveal>
        <ScrollReveal className="enquiry-QR-wrapper flex-50-child" id="enquiry_qr_div" animation='fade-right'>
          <div className="enquiry-QR-div">
            <p>for quick support <br /> on whatsapp</p>
            <img src="/front-image/qr-code.svg" alt="" />
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
              <FiMapPin  className="mt-[0.8em]" />
            </div>
              <div>
                <p className="company-title">orient ceramic fibertech LLp</p>
                <p>GST NO : 24AAGFO4823P1ZW </p>
                <p>27 National Highway
                  Near Railway Crossing
                  Hasanpar
                  Wankaner – 363 621, Gujarat, India.</p>
                <p>orientfibertechllp@gmail.com</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal id="address_form_div" className="form-div flex-50-child" animation='fade-right'>
          <form id="contactForm" action="#" method="post">
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
