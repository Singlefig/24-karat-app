import React from "react";
import heartIcon from '../../assets/icons/favourite_black.svg';
import heartBorderedIcon from '../../assets/icons/favourite_hovered.svg';
import heartIconFilled from '../../assets/icons/favourite_filled.svg';
import cart from '../../assets/icons/cart_colored.svg';

import './CatalogItem.css';

export const CatalogItem = ({ isHovered, imgSrc, title, price, isClicked, salePrice, isSale, isNewCollection, isRight, index, changeItemParam }: { isHovered: boolean, imgSrc: string, title: string, price: string, salePrice?: string, isClicked: boolean, isSale?: boolean, isNewCollection?: boolean, isRight?: boolean, index: number, changeItemParam: any }) => {

    return (
        <div className="catalog-item-container">
            <div className={`catalog-item ${isRight ? 'right-catalog-item': ''}`}>
                <img
                    onMouseEnter={() => {
                        changeItemParam('isHovered', true, index);
                    }}
                    onMouseLeave={() => {
                        changeItemParam('isHovered', false, index);
                    }}
                    onClick={() => {
                        changeItemParam('isClicked', !isClicked, index);
                    }}
                    className="heart-icon"
                    src={isClicked ? heartIconFilled : isHovered ? heartBorderedIcon : heartIcon}
                    width={32}
                    height={32}
                    alt="heart"
                />
                <div className="image-container">
                    <img src={imgSrc} alt="catalog item" />
                </div>
                <div className="sales">
                    {isSale && <p className="new">NEW</p>}
                    {isNewCollection && <p className="sale">SALE</p>}
                </div>
                <div className="catalog-item-text">
                    <p className="catalog-item-title">{title}</p>
                    <div className="prices">
                        <p className={`catalog-item-price ${salePrice ? 'striped' : ''}`}>{price}</p>
                        {salePrice && <p className="catalog-item-sale-price">{salePrice}</p>}
                        <img src={cart} width={32} height={32} alt="cart" />
                    </div>
                </div>
            </div>
        </div>
    );
};

