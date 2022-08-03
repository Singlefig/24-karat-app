import React from "react";
import { HeaderLink } from "../HeaderLink/HeaderLink";

import './Header.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import cartIcon from '../../assets/icons/cart.svg';
import { ReactComponent as FavouriteIcon } from '../../assets/icons/favourite.svg';
import karatIcon from '../../assets/icons/24karat.svg';

export const Header = ({ setIsMainShadowed }: { setIsMainShadowed: any }) => {

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
                <HeaderLink setIsMainShadowed={setIsMainShadowed} withCascade text="Men's" link="#mens" />
                <HeaderLink text="Wedding" link="#wedding" />
                <HeaderLink text="Women's" link="#womens" />
                <HeaderLink text="Gifts" link="#gifts" />
                <img className="logo" alt="24 karat logo" src={karatIcon} width={157} height={26} />
                <HeaderLink text="Custom a ring" link="#custom-a-ring" />
                <HeaderLink className="colored-link" text="New" link="#new" />
                <div className="icons">
                    <SearchIcon stroke="white" width={32} height={32} />
                    <FavouriteIcon fill="#333333" stroke="white" width={32} height={32} />
                    <img src={cartIcon} alt="cart" width={32} height={32} />
                </div>
            </div>
        </header>
    );
};
