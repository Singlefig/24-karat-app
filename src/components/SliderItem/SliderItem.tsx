import React from "react";
import heartIcon from '../../assets/icons/favourite_black.svg';
import heartBorderedIcon from '../../assets/icons/favourite_hovered.svg';
import heartIconFilled from '../../assets/icons/favourite_filled.svg';

import './SliderItem.css';

export const SliderItem = ({ isHovered, setIsHovered, index, imgSrc, title, price, isClicked, setIsClicked }: { isHovered: Array<boolean>, setIsHovered: any, index: number, imgSrc: any, title: string, price: string, isClicked: Array<boolean>, setIsClicked: any }) => {

    return (
        <div className="ring-container">
            <img
                onMouseEnter={() => {
                    const temp = isHovered;
                    temp[index] = true;
                    setIsHovered([...temp]);
                }}
                onMouseLeave={() => {
                    const temp = isHovered;
                    temp[index] = false;
                    setIsHovered([...temp]);
                }}
                onClick={() => {
                    const temp = isClicked;
                    temp[index] = !temp[index];
                    setIsClicked([...temp]);
                }}
                className="heart-icon"
                src={isClicked[index] ? heartIconFilled : isHovered[index] ? heartBorderedIcon : heartIcon}
                width={32}
                height={32}
                alt="heart"
            />
            <img src={imgSrc} alt="ring" width={330} height={350} />
            <div className="ring-text">
                <p className="ring-title">{title}</p>
                <p className="ring-price">{price}</p>
            </div>
        </div>
    );
};

