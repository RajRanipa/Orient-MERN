// import ProductDetail from './ProductDetail';
// import { useOutletContext } from 'react-router-dom';
import Container  from "../Container";
import ScrollReveal from "../ScrollReveal";
import Atag from "../Atag";
import { cn } from "../../utils/cn";
import ResponsiveImage from "../ResponsiveImage";

const Blanket = () => {
    return (
         <>
            <Container className="flex flex-col items-center gap-12 z-10 relative" id="products">
                <div className="product-details-wrapper">
                    <div className="product-brief-wrapper">
                        <div className="product-brief" id="product_brief">
                            <p>The Ceramic Fiber Blanket is made from interwoven ceramic fibers, designed to handle temperatures up to 1425°C. It combines low thermal conductivity with exceptional resistance to thermal shock, making it ideal for industrial uses like furnace linings, kiln insulation, and boiler seals. Its lightweight and flexible structure ensure seamless installation and long-lasting performance.</p>
                        </div>
                    </div>
                </div>
                {/* Text Content  */}
            </Container>
            <div className="strock-img">
                <img loading="lazy"  src="/front-image/product/GadientStrock.svg" alt="" srcSet="" />
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
                                    <h2>density range</h2>
                                    <p>64 - 96 - 128 kg/m3</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h2>temperature range</h2>
                                    <p>1260 - 1425 °C</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h2>size</h2>
                                    <p>7300 x 610 x 12 mm</p>
                                    <p>7300 x 610 x 25 mm</p>
                                    <p>3650 x 610 x 50 mm</p>
                                    <span className="note-span">customized size available*</span>
                                </div>
                                <div className="pro-sub-detail">
                                    <a className="a-download-link justify-self-center md:justify-self-start" href="/front-image/Blanket.pdf" download>
                                        <span className="download-span">Download PDF</span>
                                        <img loading="lazy"  className="arrow-img" src="/front-image/arrow.svg" alt="" />
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
                                            <ResponsiveImage folder="product" name="Blanket_funace_lining_2" alt="furnace" />
                                            <p>Furnace Lining</p>
                                        </div>
                                        <div className="app-img">
                                            <ResponsiveImage folder="product" name="Blanket_small_furnace" alt="furnace" />
                                            <p>Small Furnace</p>
                                        </div>
                                        <div className="app-img">
                                            <ResponsiveImage folder="product" name="Blanket_boiler" alt="furnace" />
                                            <p>Boiler Insulation</p>
                                        </div>
                                        <div className="app-img">
                                            <ResponsiveImage folder="product" name="Blanket_pipe" alt="furnace" />
                                            <p>Pipe Insulation</p>
                                        </div>
                                        <div className="app-img">
                                            <ResponsiveImage folder="product" name="Blanket_kilin" alt="furnace" />
                                            <p>kiln Insulation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="more-pro-wrapper">
                        <h1>related products</h1>
                        <div className="explore-wrapper border-b-[0.5px] border-black w-full md:w-[50%] md:border-r-[0.5px] md:border-b-0">
                            <p>ceramic fiber <br />board</p>
                            <div className="a-tag-wrapper">
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
                                <img loading="lazy"  src="/front-image/arrow.svg" alt="" />
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
                                <img loading="lazy"  src="/front-image/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Blanket;