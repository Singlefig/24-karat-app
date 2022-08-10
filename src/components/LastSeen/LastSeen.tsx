import React, { useState } from "react";
import { Carousel } from "../../components/Slider/Slider";
import { Button } from "../../components/Button/Button";
import { SliderItem } from "../../components/SliderItem/SliderItem";

import braceletImg from '../../assets/images/top-selling-carousel-bracelet.svg';
import bracelet2Img from '../../assets/images/top-selling-carousel-bracelet-2.svg';
import bracelet3Img from '../../assets/images/top-selling-carousel-bracelet-3.svg';
import bracelet4Img from '../../assets/images/top-selling-carousel-bracelet-4.svg';

import './LastSeen.css';

const sliderItems = [
    {
        imgSrc: braceletImg,
        title: 'HARMONIE BANGLE LB2165-R',
        price: '$3,542'
    },
    {
        imgSrc: bracelet2Img,
        title: 'HARMONIE BANGLE LB2165-R',
        price: '$3,542'
    },
    {
        imgSrc: bracelet3Img,
        title: 'HARMONIE BANGLE LB2165-R',
        price: '$3,542'
    },
    {
        imgSrc: bracelet4Img,
        title: 'HARMONIE BANGLE LB2165-R',
        price: '$3,542'
    },
    {
        imgSrc: braceletImg,
        title: 'HARMONIE BANGLE LB2165-R',
        price: '$3,542'
    }
];

export const LastSeen = ({ screenWidth } : { screenWidth: any }) => {
    const [isHovered, setIsHovered] = useState([false, false, false, false, false]);
    const [isClicked, setIsClicked] = useState([false, false, false, false, false]);

    return (
        <section className="top-selling-container">
            <h2 className="top-selling-title">Last Seen</h2>
            <div className="top-selling-carousel-container">
                <div className="gradient" />
                <Carousel
                    settings={{
                        dots: screenWidth <= 390,
                        infinite: true,
                        speed: 500,
                        arrows: screenWidth.screenWidth > 768,
                        slidesToShow: screenWidth <= 1205 ? screenWidth <= 768 ? 1 : 2 : 4,
                        slidesToScroll: 1,
                        centerMode: screenWidth <= 390,
                    }}
                >
                    {sliderItems.map((el, index) => {
                        return (<SliderItem
                            key={el.imgSrc}
                            isHovered={isHovered}
                            setIsHovered={setIsHovered}
                            index={index}
                            isClicked={isClicked}
                            setIsClicked={setIsClicked}
                            imgSrc={el.imgSrc}
                            title={el.title}
                            price={el.price}
                        />);
                    })}
                </Carousel>
            </div>
            <Button
                text="SEE All"
                type="bordered"
                isRounded
                onClick={() => alert('SEE All')}
            />
        </section>
    );
};
