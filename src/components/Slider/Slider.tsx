import React from "react";
import Slider from "react-slick";

import './Slider.css';

export const Carousel = ({ settings, children } : { settings: any, children: any }) => {
    return (
        <Slider
            {...settings}
        >
            {children}
        </Slider>
    );
};
