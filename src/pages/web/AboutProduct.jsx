
import Container from '../../components/Container';
import './home.css';
import ProductBlock from '../../components/ProductBlock';
import React, { useState, useRef, useEffect } from 'react';

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

const AboutProduct = () => {
    const listHeadRef = useRef(null);

    useEffect(() => {
        const isTouchDevice = () =>
            'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice()) return;

        const list_head = listHeadRef.current;
        if (!list_head) return;

        const divLists = list_head.querySelectorAll('.list-div');
        const listeners = [];

        const handleClick = (header) => {
            const content_wrapper = header.nextElementSibling;
            const openDiv = list_head.querySelector('.list-div.open');

            if (openDiv && openDiv !== header) {
                openDiv.classList.remove('open');
                if (openDiv.nextElementSibling) {
                    openDiv.nextElementSibling.style.height = '0px';
                }
            }

            if (header.classList.contains('open')) {
                header.classList.remove('open');
                content_wrapper.style.height = '0px';
            } else {
                header.classList.add('open');
                const content_wrapper_height = content_wrapper.scrollHeight + 'px';
                content_wrapper.style.height = content_wrapper_height;
            }
        };

        divLists.forEach((header) => {
            const handler = () => handleClick(header);
            header.addEventListener('click', handler);
            listeners.push({ header, handler });
        });

        const handleOutsideClick = (event) => {
            const openDiv = list_head.querySelector('.list-div.open');
            if (openDiv && !list_head.contains(event.target)) {
                openDiv.classList.remove('open');
                if (openDiv.nextElementSibling) {
                    openDiv.nextElementSibling.style.height = '0px';
                }
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            listeners.forEach(({ header, handler }) => {
                header.removeEventListener('click', handler);
            });
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        const product = document.getElementById("products");
        const onScroll = () => {
            if (product) {
                var product_rect = product.getBoundingClientRect();
                if (product_rect.top < window.innerHeight) {
                    const slideX = (window.scrollY / product_rect.height) * 20 + "vw";
                    document.documentElement.style.setProperty('--slide-x', slideX);
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <Container className="flex flex-col items-center gap-12 z-10 relative" padding="true" id="products">

            {/* Text Content  */}
            <div className="product-headline" id="product_headline">
                <h3 className="headline-h3-right text-[1.8em] lg:text-[3em]">TOP QUALITY IS</h3>
                <h3 className="headline-h3-left text-[1.8em] lg:text-[3em]">OUR FIRST PRIORITY</h3>
            </div>
            <div className="product-description">
                <ProductBlock />
            </div>
            <div className="vision-wrapper">
                <h3 className="vision-headline">Shaping Tomorrow with Purpose</h3>
                <p>Our journey is driven by innovative minds and a shared commitment to excellence, crafting
                    solutions that inspire progress and deliver value.</p>
            </div>
            <div className="vision-description">
                <div className="list-wrapper p-[3rem_1rem] pb-[15rem] touch-portrait:pb-0">
                    <div className="list-heads" id="list_head" ref={listHeadRef}>
                        <button
                            onClick={() => toggleAccordion(0)}
                            id={"listdiv" + 0}
                            className={`list-div group p-4 flex justify-between border-t border-black items-center py-4 text-left flex-[0_1_50%] touch-portrait:flex-[0_1_100%] focus:outline-none`}
                        >
                            <h1
                                className={`opacity-40 group-hover:opacity-100 duration-500 touch-portrait:opacity-100 text-[1.8em] capitalize font-sangbleu`}>
                                {"vision"}
                            </h1>
                            <img
                                src="/front-image/arrow.svg"
                                alt="arrow"
                                className="opacity-0 group-hover:opacity-100 translate-x-[-30px] duration-500 group-hover:translate-x-[0px] hover:transition-all hover:duration-500 touch-portrait:opacity-100 group-[.open]:touch-portrait:rotate-[-90deg] touch-portrait:rotate-[90deg] touch-portrait:scale-[0.7] touch-portrait:translate-x-[0px]" />
                        </button>

                        <div
                            className={`content-wrapper transition-all duration-300 ease-in flex-[0_1_50%] touch-portrait:flex-[0_1_100%]  touch-portrait:h-0`}
                        >
                            <div
                                className={`content-div`}
                            >
                                <p
                                    className="content-p"
                                    // dangerouslySetInnerHTML={{ __html: item.content }}
                                >
                                    At Orient Ceramic Fibertech LLP, we envision a future where
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
                                    people or the planet.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => toggleAccordion(1)}
                            id={"listdiv" + 1}
                            className={`list-div group p-4 flex justify-between border-t border-black items-center py-4 text-left flex-[0_1_50%] touch-portrait:flex-[0_1_100%] focus:outline-none`}
                        >
                            <h1
                                className={`opacity-40 group-hover:opacity-100 duration-500 touch-portrait:opacity-100 text-[1.8em] capitalize font-sangbleu`}>
                                {"mission"}
                            </h1>
                            <img
                                src="/front-image/arrow.svg"
                                alt="arrow"
                                className="opacity-0 group-hover:opacity-100 translate-x-[-30px] duration-500 group-hover:translate-x-[0px] hover:transition-all hover:duration-500 touch-portrait:opacity-100 group-[.open]:touch-portrait:rotate-[-90deg] touch-portrait:rotate-[90deg] touch-portrait:scale-[0.7] touch-portrait:translate-x-[0px]" />
                        </button>

                        <div
                            className={`content-wrapper transition-all duration-300 ease-in flex-[0_1_50%] touch-portrait:flex-[0_1_100%]  touch-portrait:h-0`}
                        >
                            <div
                                className={`content-div`}
                            >
                                <p
                                    className="content-p"
                                    // dangerouslySetInnerHTML={{ __html: item.content }}
                                >
                                    Our mission at Orient Ceramic Fibertech LLP is to create innovative ceramic
                fiber solutions that combine exceptional performance with environmental
                stewardship. We are dedicated to developing products that reduce energy
                consumption, improve industrial efficiency, and contribute to a sustainable
                future.
                By embracing advanced manufacturing processes and adhering to stringent quality
                standards, we aim to exceed customer expectations while ensuring our operations
                remain eco-friendly. Our team is driven by the belief that sustainability and
                innovation go hand in hand, and we work every day to build a better tomorrow for
                industries and communities alike.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => toggleAccordion(2)}
                            id={"listdiv" + 2}
                            className={`list-div group p-4 flex justify-between border-t border-black items-center py-4 text-left flex-[0_1_50%] touch-portrait:flex-[0_1_100%] focus:outline-none`}
                        >
                            <h1
                                className={`opacity-40 group-hover:opacity-100 duration-500 touch-portrait:opacity-100 text-[1.8em] capitalize font-sangbleu`}>
                                {"quality assurance"}
                            </h1>
                            <img
                                src="/front-image/arrow.svg"
                                alt="arrow"
                                className="opacity-0 group-hover:opacity-100 translate-x-[-30px] duration-500 group-hover:translate-x-[0px] hover:transition-all hover:duration-500 touch-portrait:opacity-100 group-[.open]:touch-portrait:rotate-[-90deg] touch-portrait:rotate-[90deg] touch-portrait:scale-[0.7] touch-portrait:translate-x-[0px]" />
                        </button>

                        <div
                            className={`content-wrapper transition-all duration-300 ease-in flex-[0_1_50%] touch-portrait:flex-[0_1_100%]  touch-portrait:h-0`}
                        >
                            <div
                                className={`content-div`}
                            >
                                <p
                                    className="content-p"
                                    // dangerouslySetInnerHTML={{ __html: item.content }}
                                >
                                    At Orient Ceramic Fibertech LLP, quality is the cornerstone of everything we do.
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
                                    <span>• Durability and Wear Resistance Testing</span><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    );
}
export default AboutProduct;
