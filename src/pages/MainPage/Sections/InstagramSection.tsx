import React from "react";
import { Carousel } from "../../../components/Slider/Slider";

import instaImage1 from '../../../assets/images/insta_image1.png';
import instaImage2 from '../../../assets/images/insta_image2.png';
import instaImage3 from '../../../assets/images/insta_image3.png';
import instaImage4 from '../../../assets/images/insta_image4.png';
import instaImage5 from '../../../assets/images/insta_image5.png';

import './InstagramSection.css';

export const InstagramSection = ({ screenWidth } : { screenWidth: any }) => {

    

    return (
        <section className="instagram-section-container">
            <div className="title">
                <p>Follow us in Instagtam</p>
                <p className="follow-text">@24karat.jewellery</p>
            </div>
            <div className="carousel-container">
            <Carousel
                settings={{
                    dots: false,
                    infinite: true,
                    speed: 500,
                    arrows: screenWidth > 768,
                    slidesToShow: screenWidth <= 1366 ? screenWidth <= 768 ? 2 : 3 : 5,
                    slidesToScroll: 1,
                }}
            >
                <div className="slider-item">
                <img src={instaImage1} width={294} height={285} alt="instagram" />

                </div>
                <div className="slider-item">
                <img src={instaImage2} width={294} height={285} alt="instagram" />

                </div>
                <div className="slider-item">
                <img src={instaImage3} width={294} height={285} alt="instagram" />
                    
                </div>
                <div className="slider-item">
                <img src={instaImage4} width={294} height={285} alt="instagram" />
                    
                </div>
                <div className="slider-item">
                <img src={instaImage5} width={294} height={285} alt="instagram" />
                    
                </div>
                <div className="slider-item">
                <img src={instaImage1} width={294} height={285} alt="instagram" />
                    
                </div>
                <div className="slider-item">
                <img src={instaImage4} width={294} height={285} alt="instagram" />
                    
                </div>
                <div className="slider-item">
                <img src={instaImage3} width={294} height={285} alt="instagram" />

                </div>
            </Carousel>
            </div>
        </section>
    );
};
