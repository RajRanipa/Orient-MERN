import Container from '../../components/Container';
import '../../pages/web/product.css'
import ScrollReveal from '../ScrollReveal';
import Atag from '../Atag';
import { cn } from '../../utils/cn';


const Board = () => {

    return (
        <>
            <Container className="flex flex-col items-center gap-12 z-10 relative" id="products">
                <div className="product-details-wrapper">
                    <div className="product-brief-wrapper">
                        <ScrollReveal className="product-brief" id="product_brief">
                            <p>Made from high-purity alumina-silicate fibers, Ceramic Fiber Boards are dense, rigid
                                insulation materials ideal for high-temperature applications. They offer outstanding
                                mechanical strength, thermal insulation, and resistance to chemical erosion and thermal
                                shock. Applications include furnace linings, kiln insulation, and high-temperature
                                gaskets, ensuring reliable performance in the harshest conditions.</p>
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
                                    <p> <span>• </span>high mechanical strength</p>
                                    <p> <span>• </span>chemical stability</p>
                                </div>
                            </div>
                            <div className="pro-wrap text-center md:text-start">
                                <h1>specification</h1>
                                <div className="pro-sub-detail">
                                    <h6>density range</h6>
                                    <p>reg. <br />high-density</p>
                                </div>
                                <div className="pro-sub-detail">
                                    <h6>temperature range</h6>
                                    <p>1100 - 1260 - 1425 °C</p>
                                </div>
                                <div className="pro-sub-detail flex">
                                    <h6>size</h6>
                                    <p>1000 x 500 x 25 <span className="unit-span">mm</span></p>
                                    <p>1000 x 500 x 50 <span className="unit-span">mm</span></p>
                                    <p>1000 x 500 x 12 <span className="unit-span">mm</span></p>
                                    <p>1000 x 600 x 25 <span className="unit-span">mm</span></p>
                                    <p>1000 x 600 x 50 <span className="unit-span">mm</span></p>
                                    <p>1000 x 600 x 12 <span className="unit-span">mm</span></p>
                                    <p>1200 x 500 x 25 <span className="unit-span">mm</span></p>
                                    <p>1200 x 500 x 50 <span className="unit-span">mm</span></p>
                                    <p>1200 x 500 x 12 <span className="unit-span">mm</span></p>
                                    <p>1200 x 600 x 25 <span className="unit-span">mm</span></p>
                                    <p>1200 x 600 x 50 <span className="unit-span">mm</span></p>
                                    <p>1200 x 600 x 12 <span className="unit-span">mm</span></p>
                                    <p>900 x 500 x 25 <span className="unit-span">mm</span></p>
                                    <p>900 x 500 x 50 <span className="unit-span">mm</span></p>
                                    <p>900 x 500 x 12 <span className="unit-span">mm</span></p>
                                    <p>900 x 600 x 25 <span className="unit-span">mm</span></p>
                                    <p>900 x 600 x 50 <span className="unit-span">mm</span></p>
                                    <p>900 x 600 x 12 <span className="unit-span">mm</span></p>
                                    <span className="note-span">customized size available*</span>
                                </div>
                                <div className="pro-sub-detail">
                                    <a className="a-download-link justify-self-center md:justify-self-start" href="/front-image/Board.pdf" download>
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
                                            <img src="/front-image/board_furnace_lining.jpg" alt="" />
                                            <p>Furnace Lining</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/board_small_furnace.jpg" alt="" />
                                            <p>Small Furnace</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/high_temp_gasket.jpg" alt="" />
                                            <p>High-temperature gaskets</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/expansion_board_joint.jpg" alt="" />
                                            <p>Expansion Joints</p>
                                        </div>
                                        <div className="app-img">
                                            <img src="/front-image/chimny_board.jpg" alt="" />
                                            <p>Flue and chimney linings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="more-pro-wrapper">
                        <h1>related products</h1>
                        <div className="explore-wrapper border-b-[0.5px] border-black w-full md:w-[50%] md:border-r-[0.5px] md:border-b-0">
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
export default Board;
