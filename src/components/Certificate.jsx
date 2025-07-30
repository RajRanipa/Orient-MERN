import React from 'react';
import ScrollReveal from './ScrollReveal'; // if you're using a global scroll observer
import './certificate.css';
import Container from './Container';

const Certificate = () => {
    return (
        <>
        <section id="contact" className="contact-section">
            <Container className="pt-[var(--padding-top)]" bg='certificate-bg'>
                <h1 className="Certificates-tag">Certificates</h1>
                <div className="Certificates-Div">
                   
                    <div className="wrraper-div">
                        <div className="Certificates-flexDiv">
                            <img loading="lazy" className="certificate-img" src="./front-image/pdf/Certificate1.jpg" alt="certificate" />
                            <img loading="lazy" className="certificate-img" src="./front-image/pdf/Certificate2.jpg" alt="certificate" />
                            <img loading="lazy" className="certificate-img" src="./front-image/pdf/Certificate3.jpg" alt="certificate" />
                            <img loading="lazy" className="certificate-img" src="./front-image/pdf/Certificate4.jpg" alt="certificate" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    );
};

export default Certificate;
