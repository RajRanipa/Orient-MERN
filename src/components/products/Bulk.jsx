import Container from '../../components/Container';
import '../../pages/web/product.css'
import ScrollReveal from '../ScrollReveal';
import Atag from '../Atag';
import { cn } from '../../utils/cn';


const Bulk = () => {

    return (
        <>
            <Container className="flex flex-col items-center gap-12 z-10 relative" id="products">
                <div className="product-details-wrapper">
                    <div className="product-brief-wrapper">
                        <ScrollReveal className="product-brief" id="product_brief">
                            <p>Composed of high-purity aluminosilicate fibers, Ceramic Fiber Bulk is a raw material used
                                for creating blankets, boards, and paper. With exceptional thermal resistance, low
                                thermal conductivity, and thermal shock resistance, it serves as a crucial component in
                                industries requiring high-performance heat management solutions.</p>
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
                                    <p> <span>• </span>thermal shock resistance</p>
                                    <p> <span>• </span>Light weight</p>
                                    <p> <span>• </span>Low thermal conductivity</p>
                                </div>
                            </div>
                            <div className="pro-wrap text-center md:text-start">
                                <h1>specification</h1>
                                <div className="pro-sub-detail">
                                    <h6>colour</h6>
                                    <p>white</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>temperature range</h6>
                                    <p>1260 - 1425 °C</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <a className="a-download-link justify-self-center md:justify-self-start" href="/front-image/Bulk.pdf" download>
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
                                            <img src="/front-image/bulk_furnace.jpg" alt="" />
                                            <p>Furnace insulation</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/bulk_duck.jpg" alt="" />
                                            <p>Pipe and duct wrap</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/bulk_automotive.jpg" alt="" />
                                            <p>Automotive heat shields</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/bulk_textile.jpg" alt="" />
                                            <p>ceramic fiber textile industries</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/bulk_ceramic_fiber_product.jpg" alt="" />
                                            <p>ceramic fiber product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="more-pro-wrapper">
                        <h1>related products</h1>
                        <div className="explore-wrapper border-b-[0.5px] border-black w-full md:w-[50%] md:border-r-[0.5px] md:border-b-0">
                            <p>ceramic fiber <br />paper</p>
                            <div className="a-tag-wrapper">
                                <Atag
                                    key={"explore"}
                                    linkname={"explore"}
                                    href={"/products/ceramic-fiber-paper"}
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
                                <img src="/front-image/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Bulk;
