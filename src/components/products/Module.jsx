import Container from '../../components/Container';
import '../../pages/web/product.css'
import ScrollReveal from '../ScrollReveal';
import Atag from '../Atag';
import { cn } from '../../utils/cn';


const Module = () => {

    return (
        <>
            <Container className="flex flex-col items-center gap-12 z-10 relative" id="products">
                <div className="product-details-wrapper">
                    <div className="product-brief-wrapper">
                        <ScrollReveal className="product-brief" id="product_brief">
                            <p>Crafted from folded and compressed ceramic fiber blankets, Ceramic Fiber Modules are designed for use in extreme-temperature environments. Equipped with pre-installed anchoring systems, they offer enhanced thermal insulation, reduce installation time, and boost energy efficiency in furnaces, kilns, and industrial equipment.</p>
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
                                    <p> <span>• </span>Reduces heat loss</p>
                                    <p> <span>• </span>Asbestos-free</p>
                                </div>
                            </div>
                            <div className="pro-wrap text-center md:text-start">
                                <h1>specification</h1>
                                <div className="pro-sub-detail">
                                    <h6>density range</h6>
                                    <p>128 -  160 - 190 kg/m3</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>temperature range</h6>
                                    <p>1260 - 1425 °C</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>size</h6>
                                    <p>305 x 305 x 305 <span className="unit-span">mm</span></p>
                                    <span className="note-span">customized size available*</span>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>module type</h6>
                                    <p>folded module</p>
                                    <p>anchor module</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>anchor type</h6>
                                    <p>cerlock anchor</p>
                                    <span className="note-span">customized anchor available*</span>
                                </div>
                                <div className="pro-sub-detail">
                                    <a className="a-download-link justify-self-center md:justify-self-start" href="/front-image/Module.pdf" download>
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
                                            <img src="/front-image/module_power_plant.jpg" alt="" />
                                            <p>power plant</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/module_funace_lining_1.jpg" alt="" />
                                            <p>Furnace Lining</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/module_kilin.jpg" alt="" />
                                            <p>high-temperature kiln</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/module_shuttle_kiln.jpg" alt="" />
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
                                    href={"/products/ceramic-fiber-blanket"}
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
                            <p>ceramic fiber <br />bulk</p>
                            <div className="a-tag-wrapper">
                                <Atag
                                    key={"explore"}
                                    linkname={"explore"}
                                    href={"/products/ceramic-fiber-bulk"}
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
export default Module;
