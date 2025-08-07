import Container from "../../components/Container";
import ScrollReveal from "../../components/ScrollReveal";
import Atag from "../../components/Atag";
import { cn } from "../../utils/cn";
import ResponsiveImage from "../../components/ResponsiveImage";
import { Helmet } from 'react-helmet';
import Products from "../Products";

const Module = () => {
    return (
        <>
            <Helmet>
                <title>Ceramic Fiber Modules</title>
                <meta
                    name="description"
                    content="Explore high-quality ceramic fiber blankets, modules, boards, paper & bulk fiber from Orient Ceramic Fibertech LLP. Based in Gujarat, India."
                />
                <meta
                    name="keywords"
                    content="ceramic fiber blanket, ceramic fiber boards, ceramic fiber bulk, thermal insulation products, fiber modules, insulation paper, blankets, modules, boards, paper , bulk, manufacturer in Gujarat"
                />
                <meta property="og:title" content="Ceramic Fiber Insulation Products | Orient Fibertech" />
                <meta
                    property="og:description"
                    content="We manufacture world-class ceramic fiber insulation solutions including blankets, boards, and modules. Delivered across India from our Gujarat facility."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://orientfibertech.com/ceramic-fiber-blanket" />
                <meta property="og:image" content="https://orientfibertech.com/front-image/home/blanket_crop_1800.webp" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Products/>
            <Container className="flex flex-col items-center gap-12 z-5 relative" id="products">
                <div className="product-details-wrapper">
                    <div className="product-brief-wrapper">
                        <div className="product-brief" id="product_brief">
                            <p>Crafted from folded and compressed ceramic fiber blankets, Ceramic Fiber Modules are designed for use in extreme-temperature environments. Equipped with pre-installed anchoring systems, they offer enhanced thermal insulation, reduce installation time, and boost energy efficiency in furnaces, kilns, and industrial equipment.</p>
                        </div>
                    </div>
                </div>
                {/* Text Content  */}
            </Container>
            <div className="strock-img">
                <img loading="lazy" src="/front-image/product/GadientStrock.svg" alt="" srcSet="" />
            </div>
            <div className="pro-details-section">
                <Container >
                    <div className="pro-details-wrapper flex-col items-center md:flex-row md:items-start">
                        <ScrollReveal className="pro-specification-div" animation="fade-right" id="left_specification_div">
                            <div className="pro-wrap text-center md:text-start">
                                <h1>benefits</h1>
                                <div className="pro-sub-detail">
                                    <p> <span>• </span>Reduces heat loss</p>
                                    <p> <span>• </span>Asbestos-free</p>
                                </div>
                            </div>
                            <div className="pro-wrap text-center md:text-start">
                                <h1>specification</h1>
                                <div className="pro-sub-detail">
                                    <h2>density range</h2>
                                    <p>128 -  160 - 190 kg/m3</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h2>temperature range</h2>
                                    <p>1260 - 1425 °C</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h2>size</h2>
                                    <p>305 x 305 x 305 <span className="unit-span">mm</span></p>
                                    <span className="note-span">customized size available*</span>
                                </div>
                                <div className="pro-sub-detail">
                                    <h2>module type</h2>
                                    <p>folded module</p>
                                    <p>anchor module</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h2>anchor type</h2>
                                    <p>cerlock anchor</p>
                                    <span className="note-span">customized anchor available*</span>
                                </div>
                                <div className="pro-sub-detail">
                                    <a className="a-download-link justify-self-center md:justify-self-start" href="/front-image/Module.pdf" download>
                                        <span className="download-span">Download PDF</span>
                                        <img loading="lazy" className="arrow-img" src="/front-image/arrow.svg" alt="" />
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
                                            <ResponsiveImage folder="product" name="module_power_plant" alt="furnace" />
                                            <p>power plant</p>
                                        </div>
                                        <div className="app-img">
                                            <ResponsiveImage folder="product" name="module_small_furnace" alt="furnace" />
                                            <p>Furnace Lining</p>
                                        </div>
                                        <div className="app-img">
                                            <ResponsiveImage folder="product" name="module_kilin" alt="furnace" />
                                            <p>high-temperature kiln</p>
                                        </div>
                                        <div className="app-img">
                                            <ResponsiveImage folder="product" name="module_shuttle_kiln" alt="furnace" />
                                            <p>Shuttle kiln</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="more-pro-wrapper">
                        <h1>related products</h1>
                        <div className="explore-wrapper border-b-[0.5px] border-black w-full md:w-[50%] md:border-r-[0.5px] md:border-b-0">
                            <p>ceramic fiber <br />blanket</p>
                            <div className="a-tag-wrapper">
                                <Atag
                                    key={"explore"}
                                    linkname={"explore"}
                                    href={"/ceramic-fiber-blanket"}
                                    onClick={() => { }}
                                    className={cn(
                                        'transition duration-200',
                                    )}
                                >
                                </Atag>
                                <img loading="lazy" src="/front-image/arrow.svg" alt="" />
                            </div>

                        </div>
                        <div className="explore-wrapper border-t-[0.5px] border-black w-full md:w-[50%] md:border-l-[0.5px] md:border-t-0">
                            <p>ceramic fiber <br />bulk</p>
                            <div className="a-tag-wrapper">
                                <Atag
                                    key={"explore"}
                                    linkname={"explore"}
                                    href={"/ceramic-fiber-bulk"}
                                    onClick={() => { }}
                                    className={cn(
                                        'transition duration-200',
                                    )}
                                >
                                </Atag>
                                <img loading="lazy" src="/front-image/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Module;
