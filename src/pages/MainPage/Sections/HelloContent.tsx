import React from "react";
import { Button } from "../../../components/Button/Button";
import { Carousel } from "../../../components/Slider/Slider";

import mainPageBanner from '../../../assets/images/main_page_banner.png';
import mainPageRing from '../../../assets/images/main_page_ring.svg';
import mainPageRing1 from '../../../assets/images/slider_ring.png';
import mainPageRing2 from '../../../assets/images/slider_ring1.png';

export const HelloContent = ({ isMainShadowed, screenWidth }: { isMainShadowed: boolean, screenWidth: any }) => {
    return (
        <section className="hello-content">
            <div className="jewellery-text">
                <p>Your Luxury Jewellery</p>
                <Button
                    text="SHOP NOW"
                    type="bordered"
                    isRounded
                    onClick={() => alert('Shop')}
                />
            </div>
            <img src={mainPageBanner} width={830} height={478} alt="banner" className="banner-image" />
            <div className="carousel-container">
                <Carousel
                    settings={{
                        dots: true,
                        infinite: true,
                        arrows: screenWidth > 768,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }}
                >
                    <div className={`ring-container ${isMainShadowed ? 'no-blur' : ''}`}>
                        <img src={mainPageRing} alt="ring" width={347} height={347} />
                        <div className="ring-text">
                            <p className="ring-title">TANZANITE DIAMOND RING</p>
                            <p className="ring-price">$4,884</p>
                        </div>
                    </div>
                    <div className={`ring-container ${isMainShadowed ? 'no-blur' : ''}`}>
                        <img src={mainPageRing1} alt="ring" width={347} height={347} />
                        <div className="ring-text">
                            <p className="ring-title">PENDANT LP2392</p>
                            <p className="ring-price">$2,090</p>
                        </div>
                    </div>
                    <div className={`ring-container ${isMainShadowed ? 'no-blur' : ''}`}>
                        <img src={mainPageRing2} alt="ring" width={347} height={347} />
                        <div className="ring-text">
                            <p className="ring-title">TWIST WEDDING SET LR2636</p>
                            <p className="ring-price">$2,230</p>
                        </div>
                    </div>
                    <div className={`ring-container ${isMainShadowed ? 'no-blur' : ''}`}>
                        <img src={mainPageRing} alt="ring" width={347} height={347} />
                        <div className="ring-text">
                            <p className="ring-title">TANZANITE DIAMOND RING</p>
                            <p className="ring-price">$8,224</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};
