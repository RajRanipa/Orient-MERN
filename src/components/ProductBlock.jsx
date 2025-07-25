import React from 'react';
import ScrollReveal from './ScrollReveal'; // if you're using a global scroll observer
import '../pages/web/home.css';

const ProductBlock = () => {
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[5rem]">
                {/* Image Section */}
                <ScrollReveal animation="fade-right" id="blanket-img"
                    className="relative flex-1 max-w-[80%] w-full sm:max-w-[90%] lg:max-w-full lg:flex-[0_1_40%] h-auto overflow-hidden bg-center bg-cover"
                    style={{ filter: 'blur(var(--progress))' }}
                >
                    {/* <img
                        src="/front-image/blanket_crop.png"
                        alt="High-Temperature Ceramic Fiber Blanket"
                        loading="lazy"
                        className="blanket-img"
                    /> */}
                    <img
                        src="/front-image/blanket_crop_small.png"
                        srcSet="
                            /front-image/blanket_crop_small.png 600w,
                            /front-image/blanket_crop.png 1920w"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        alt="High-Temperature Ceramic Fiber Blanket"
                        loading="lazy"
                        className="blanket-img"
                    />
                </ScrollReveal>
                {/* Details Section */}
                <ScrollReveal animation="fade-left" className="product-details" id="blanket-desc">
                    <h1>
                        Ceramic Fiber <br /> Blanket
                    </h1>
                    <h2 className="text-ui-regular">
                        High-Temperature Insulation Solution
                    </h2>
                    <p className="text-ui-muted">
                        Lightweight yet incredibly durable, our Ceramic Fiber Blanket provides
                        exceptional thermal resistance for high-temperature environments. This
                        <em className="italic"> high-performance ceramic fiber insulation </em>
                        withstands <strong className="font-semibold"> temperatures up to 1425°C</strong>,
                        ensuring energy efficiency and reliability in industrial applications such as furnace
                        linings, kiln insulation, and boiler seals.
                    </p>
                    <a
                        href="/ceramic-fiber-blanket"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more-a "
                    >
                        Explore Ceramic Fiber Blanket Applications
                    </a>
                </ScrollReveal>
            </div>
            <div className="w-full flex flex-col-reverse  lg:flex-row items-center justify-between gap-10 lg:gap-[5rem]">
                {/* Image Section */}
                <ScrollReveal className="product-details lg:text-right lg:items-end" animation='fade-right' id="board-desc">
                    <h1>Ceramic Fiber <br />Board</h1>
                    <h2 className="text-ui-regular">
                        Durable High-Temperature Insulation
                    </h2>
                    <p className="text-ui-muted">
                        Our <strong>Ceramic Fiber Board</strong> is engineered for extreme temperatures,
                        providing unmatched thermal insulation and durability. Constructed from
                        <em>alumina-silicate fibers</em>, it resists thermal shock and chemical erosion, making
                        it ideal for furnace linings, kiln insulation, and high-temperature gaskets. Ensure
                        reliable performance in heavy-duty manufacturing environments with our high-quality
                        boards.
                    </p>
                    <a
                        className="read-more-a lg:text-right"
                        href="/ceramic-fiber-board"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Discover Ceramic Fiber Board Applications
                    </a>
                </ScrollReveal>
                {/* Details Section */}
                <ScrollReveal animation='fade-left' id="board-img" className="relative flex-1 max-w-[80%] sm:max-w-[90%] lg:max-w-full w-full lg:flex-[0_1_40%] h-auto overflow-hidden bg-center bg-cover">
                    <img className="board-img" loading="lazy" src="/front-image/board_crop.png" alt="Ceramic Fiber Board" />
                </ScrollReveal>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[5rem]">
                {/* Image Section */}
                <ScrollReveal animation="fade-right" id="bulk-img"
                    className="relative flex-1 max-w-[80%] sm:max-w-[90%] lg:max-w-full w-full lg:flex-[0_1_40%] h-auto overflow-hidden bg-center bg-cover"
                    style={{ filter: 'blur(var(--progress))' }}
                >
                    <img className="bulk-img" loading="lazy" src="/front-image/bulk_crop.png" alt="Ceramic Fiber Bulk" />
                </ScrollReveal>
                {/* Details Section */}
                <ScrollReveal className="product-details" animation="fade-left" id="bulk-desc">
                    <h1>
                        Ceramic Fiber <br />Bulk
                    </h1>
                    <h2 className="text-ui-regular">
                        Versatile Thermal Insulation Material
                    </h2>
                    <p className="text-ui-muted">
                        Composed of high-purity <em>aluminosilicate fibers</em>, our Ceramic Fiber
                        Bulk offers exceptional thermal resistance and flexibility. A cornerstone
                        for creating other ceramic fiber products, it delivers <strong>low thermal conductivity
                            and superior shock resistance</strong>. Perfect for industrial environments managing
                        extreme heat, it ensures efficiency and reliability in diverse applications.
                    </p>
                    <a
                        className="read-more-a"
                        href="/ceramic-fiber-bulk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More About Ceramic Fiber Bulk Applications
                    </a>
                </ScrollReveal>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-[5rem]">
                <ScrollReveal className="product-details lg:text-right lg:items-end" animation="fade-right" id="module-desc">
                    <h1>
                        Ceramic Fiber <br /> Module
                    </h1>
                    <h2 className="text-ui-regular">
                        Pre-Engineered High-Temperature Insulation
                    </h2>
                    <p className="text-ui-muted">
                        Our <strong>Ceramic Fiber Modules</strong> are designed for high-temperature industrial
                        environments, offering advanced thermal stability and energy efficiency. With
                        pre-engineered anchoring systems and compressed ceramic fiber blankets, these modules
                        ensure quick installation and long-lasting insulation for furnaces, kilns, and more.
                    </p>
                    <a
                        className="read-more-a lg:text-right"
                        href="/ceramic-fiber-module"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More About Ceramic Fiber Module Features
                    </a>
                </ScrollReveal>
                <ScrollReveal id="module-img" className="relative flex-1 max-w-[80%] sm:max-w-[90%] lg:max-w-full w-full lg:flex-[0_1_40%] h-auto overflow-hidden bg-center bg-cover"
                    animation="fade-left" >
                    <img
                        className="module-img"
                        loading="lazy"
                        src="/front-image/module_crop.png"
                        alt="Ceramic Fiber Module"
                    />
                </ScrollReveal>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[5rem]">
                {/* Image Section */}
                <ScrollReveal animation="fade-right" id="paper-img"
                    className="relative flex-1 max-w-[80%] sm:max-w-[90%] lg:max-w-full w-full lg:flex-[0_1_40%] h-auto overflow-hidden bg-center bg-cover"
                    style={{ filter: 'blur(var(--progress))' }}
                >
                    <img
                        className="module-img"
                        loading="lazy"
                        src="/front-image/paper_crop.png"
                        alt="Ceramic Fiber Paper"
                    />
                </ScrollReveal>
                {/* Details Section */}
                <ScrollReveal className="product-details" id="paper-decs">
                    <h1>
                        Ceramic Fiber <br />Paper
                    </h1>
                    <h2 className="text-ui-regular">
                        Precision High-Temperature Insulation
                    </h2>
                    <p className="text-ui-muted">
                        Lightweight and flexible, our <strong>Ceramic Fiber Paper</strong> is designed for
                        space-constrained environments requiring <em>thermal precision</em>. With excellent
                        thermal properties, it is perfect for aerospace, automotive, and industrial
                        applications. Ensure efficiency and reliability with our advanced insulation solutions.
                    </p>
                    <a
                        className="read-more-a"
                        href="/ceramic-fiber-paper"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore Ceramic Fiber Paper Benefits
                    </a>
                </ScrollReveal>
            </div>
        </>
    );
};

export default ProductBlock;