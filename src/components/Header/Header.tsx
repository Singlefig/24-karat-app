import React from "react";
import { HeaderLink } from "../HeaderLink/HeaderLink";

import './Header.css';
import searchIcon from '../../assets/icons/search.svg';
import cartIcon from '../../assets/icons/cart.svg';
import favouriteIcon from '../../assets/icons/favourite.svg';
import karatIcon from '../../assets/icons/24karat.svg';

export const Header = () => {
    return (
        <header className="header-container">
            <div className="top-content">
                <HeaderLink text="Our Story" link="#our-story" />
                <HeaderLink text="Blog" link="#blog" />
                <HeaderLink text="Contact Us" link="#contact-us" />
                <HeaderLink text="Where To Buy" link="#where-to-buy" />
                <HeaderLink text="Authenticity Card Request" link="#authenticity-card-request" />
            </div>
            <div className="bottom-content">
                <HeaderLink text="Men's" link="#mens" />
                <HeaderLink text="Wedding" link="#wedding" />
                <HeaderLink text="Women's" link="#womens" />
                <HeaderLink text="Gifts" link="#gifts" />
                <img className="logo" alt="24 karat logo" src={karatIcon} width={157} height={26} />
                <HeaderLink text="Custom a ring" link="#custom-a-ring" />
                <HeaderLink text="New" link="#new" />
                <div className="icons">
                    <img src={searchIcon} alt="search" width={32} height={32} />
                    <img src={favouriteIcon} alt="favourite" width={32} height={32} />
                    <img src={cartIcon} alt="cart" width={32} height={32} />
                </div>
            </div>
        </header>
    );
};
