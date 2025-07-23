
import Container from '../../components/Container';
import React, { useState, useRef, useEffect } from 'react';
import '../../pages/web/product.css'
import ScrollReveal from '../ScrollReveal';
import Atag from '../Atag';
import { cn } from '../../utils/cn';

const aboutData = [
    {
        title: 'vision',
        content: `At Orient Ceramic Fibertech LLP, we envision a future where
                                    innovation, quality, and sustainability converge to redefine thermal insulation
                                    solutions. Our journey began in 2019 with a commitment to delivering products
                                    that are not only of the highest quality but also designed to address the
                                    evolving needs of industries worldwide. By 2030, we aspire to become a global
                                    leader in ceramic fiber solutions, known for our unwavering focus on customer
                                    satisfaction, environmental responsibility, and technological advancements.
                                    To achieve this vision, we continually invest in cutting-edge technologies and
                                    sustainable practices that enhance product performance while minimizing
                                    environmental impact. Our goal is to build a future where superior thermal
                                    insulation supports industrial growth without compromising the well-being of
                                    people or the planet.`
    },
    {
        title: 'mission',
        content: `Our mission at Orient Ceramic Fibertech LLP is to create innovative ceramic
                fiber solutions that combine exceptional performance with environmental
                stewardship. We are dedicated to developing products that reduce energy
                consumption, improve industrial efficiency, and contribute to a sustainable
                future.
                By embracing advanced manufacturing processes and adhering to stringent quality
                standards, we aim to exceed customer expectations while ensuring our operations
                remain eco-friendly. Our team is driven by the belief that sustainability and
                innovation go hand in hand, and we work every day to build a better tomorrow for
                industries and communities alike.`
    },
    {
        title: 'quality assurance',
        content: `At Orient Ceramic Fibertech LLP, quality is the cornerstone of everything we do.
                                    We adhere to rigorous quality control standards and leverage state-of-the-art
                                    testing facilities to ensure our products meet and exceed customer expectations.
                                    Our commitment to excellence is backed by internationally recognized
                                    certifications and a comprehensive range of testing capabilities:
                                    <br />
                                    <span>• ISO 9001:2015 Certified</span> <br />
                                    <span>• Thermal Conductivity Testing</span><br />
                                    <span>• Dimensional Stability Testing</span><br />
                                    <span>• Density and Compression Strength Testing</span><br />
                                    <span>• Thermal Shock Resistance Testing</span><br />
                                    <span>• Chemical Composition Analysis</span><br />
                                    <span>• Durability and Wear Resistance Testing</span><br />`
    }
];

const Blanket = () => {
    return (
        <>
            <Container className="flex flex-col items-center gap-12 z-10 relative" id="products">
                <div className="product-details-wrapper">
                    <div className="product-brief-wrapper">
                        <ScrollReveal className="product-brief" id="product_brief">
                            <p>The Ceramic Fiber Blanket is made from interwoven ceramic fibers, designed to handle temperatures up to 1425°C. It combines low thermal conductivity with exceptional resistance to thermal shock, making it ideal for industrial uses like furnace linings, kiln insulation, and boiler seals. Its lightweight and flexible structure ensure seamless installation and long-lasting performance.</p>
                        </ScrollReveal>
                    </div>
                </div>
                {/* Text Content  */}
            </Container>
            <div className="strock-img">
                <img src="/front-image/GadientStrock.svg" alt="" srcSet="" />
            </div>
            <div className="pro-details-section">
                <Container >
                    <div className="pro-details-wrapper flex-col items-center md:flex-row md:items-start">
                        <ScrollReveal className="pro-specification-div" animation="fade-right" id="left_specification_div">
                            <div className="pro-wrap text-center md:text-start">
                                <h1>benefits</h1>
                                <div className="pro-sub-detail">
                                    <p> <span>• </span>reduces heat loss</p>
                                    <p> <span>• </span>asbestos-free</p>
                                </div>
                            </div>
                            <div className="pro-wrap text-center md:text-start">
                                <h1>specification</h1>
                                <div className="pro-sub-detail">
                                    <h6>density range</h6>
                                    <p>64 - 96 - 128 kg/m3</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>temperature range</h6>
                                    <p>1260 - 1425 °C</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>size</h6>
                                    <p>7300 x 610 x 12 <span className="unit-span">mm</span></p>
                                    <p>7300 x 610 x 25 <span className="unit-span">mm</span></p>
                                    <p>3650 x 610 x 50 <span className="unit-span">mm</span></p>
                                    <span className="note-span">customized size available*</span>
                                </div>
                                <div className="pro-sub-detail">
                                    <a className="a-download-link justify-self-center md:justify-self-start" href="/front-image/Blanket.pdf" download="">
                                        <span className="download-span">Download PDF</span>
                                        <img className="arrow-img" src="/front-image/arrow.svg" alt="" />
                                    </a>
                                </div>


                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="pro-specification-div" animation="fade-left" id="right_specification_div">
                            <div className="pro-wrap text-center md:text-start">
                                <h1>application</h1>
                                <div className="pro-sub-detail">
                                    <div className="application-img items-center justify-center md:items-start md:justify-start">
                                        <div className="app-img">
                                            <img src="/front-image/Gemini_funace_lining_2.jpg" alt="" />
                                            <p>Furnace Lining</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/Gemini_small_furnace.jpg" alt="" />
                                            <p>Small Furnace</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/Gemini_boiler.jpg" alt="" />
                                            <p>Boiler Insulation</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/Gemini_pipe.jpg" alt="" />
                                            <p>Pipe Insulation</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/Gemini_kilin.jpg" alt="" />
                                            <p>kiln Insulation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="more-pro-wrapper flex-col md:flex-row">
                        <h1>related products</h1>
                        <div className="explore-wrapper border-b-[0.5px] border-black w-full md:w-[50%] md:border-r-[0.5px] md:border-b-0">
                            <p>ceramic fiber <br />board</p>
                            <div className="a-tag-wrapper ">
                                <Atag
                                    key={"explore"}
                                    linkname={"explore"}
                                    href={"/products/ceramic-fiber-board"}
                                    onClick={() => { }}
                                    className={cn(
                                        'transition duration-200',
                                    )}
                                >
                                </Atag>
                                <img src="/front-image/arrow.svg" alt="" />
                            </div>

                        </div>
                        <div className="explore-wrapper border-t-[0.5px] border-black w-full md:w-[50%] md:border-l-[0.5px] md:border-t-0">
                            <p>ceramic fiber <br />module</p>
                            <div className="a-tag-wrapper">
                                <Atag
                                    key={"explore"}
                                    linkname={"explore"}
                                    href={"/products/ceramic-fiber-module"}
                                    onClick={() => { }}
                                    className={cn(
                                        'transition duration-200',
                                    )}
                                >
                                </Atag>
                                <img src="/front-image/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Blanket;
