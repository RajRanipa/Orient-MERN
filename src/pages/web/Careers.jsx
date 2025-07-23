import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import './careers.css';
import Container from '../../components/Container';
import ScrollReveal from '../../components/ScrollReveal';

const Careers = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--h-color', '#0f1c36');
    window.scrollTo({ top: 0});
  })
  return (
    <>
      <Container childClassName='overflow-visible'>
        <div className="career-wrapper">
          <h1 className="career-heading">Be A Part <br />Of Our Team</h1>
          <p>Do you think you can make a positive contribution to our team? If
            yes, then fill up the form and take the next step towards realizing
            your dream. Kindly fill in your details or contact us on the
            information given below.</p>
        </div>
        <div className="career-divform-wrapper ">
          <div className="form-wrapper flex-50 flex-col md:flex-row">
            <ScrollReveal id="career_info" className="more-info flex-50-child">
              <h1>at orient</h1>
              <p>you'll be part of a team that delivers unparalleled quality and innovation in every product
                we create. Experience a rewarding contact at Silver, where excellence and superior service
                are our benchmarks.</p>
              <p>to become a part of the accelerated growth at orient.</p>
            </ScrollReveal>
            <ScrollReveal id="career_form_div" className="form-div flex-50-child flex justify-center">
              <form id="careerForm" action="#" method="post">
                <h1 className='text-[1.5em]'>Send Us A Message</h1>

                {/* <!-- Name --> */}
                <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" required />

                {/* <!-- Phone number with validation pattern --> */}
                <input type="number" id="mobileNumber" name="mobileNumber" placeholder="Your Mobile Number" pattern="^[0-9]{10}$" required />

                {/* <!-- Email with pattern validation --> */}
                <input type="email" id="email" autoComplete="off" name="email" placeholder="Your Email" required />

                {/* <!-- Address --> */}
                <input type="text" id="address" autoComplete="off" name="address" placeholder="Your Address" required />

                {/* <!-- Education --> */}
                <input type="text" id="education" name="education" placeholder="Your Education" required />

                {/* <!-- File Upload --> */}
                <div className="input-wrapper">
                  <input type="file" id="resume" name="resume" accept=".pdf,.docx" required />
                </div>

                <button type="submit">Submit</button>
                <div id="career-successMessage" className="successMessage">Form submitted successfully!</div>
                <div id="career-errorMessage" className="errorMessage">There was an error submitting the form. <br />Please try again.</div>
              </form>

              {/* <!-- Add success/failure message --> */}
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </>)
};

export default Careers;

