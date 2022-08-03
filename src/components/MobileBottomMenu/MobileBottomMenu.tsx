import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/mobile-menu-heart.svg';
import { ReactComponent as HeartColoredIcon } from '../../assets/icons/mobile-menu-heart-colored.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as DiamondIcon } from '../../assets/icons/diamond.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/mobile-menu-cart.svg';
import { ReactComponent as CartColoredIcon } from '../../assets/icons/mobile-menu-cart-colored.svg';

import './MobileBottomMenu.css';

export const MobileBottomMenu = () => {
    const location = useLocation();

    return (
        <div className="mobile-bottom-menu">
            <Link
                to="/"
            >
                <HomeIcon fill="white" stroke={location.pathname === '/' ? "#D16757" : '#333333'} width={32} height={32} />
            </Link>
            <Link
                to="/favourites"
            >
                {location.pathname === '/favourites' ? <HeartColoredIcon fill="white" width={32} height={32} /> : <HeartIcon fill="white" width={32} height={32} />}
            </Link>
            <Link
                to="/search"
            >
                <SearchIcon fill="white" stroke={location.pathname === '/search' ? "#D16757" : '#333333'} width={32} height={32} />
            </Link>
            <Link
                to="/create"
            >
                <DiamondIcon fill="white" stroke={location.pathname === '/create' ? "#D16757" : '#333333'} width={32} height={32} />
            </Link>
            <Link
                to="/cart"
            >
                {location.pathname === '/cart' ? <CartColoredIcon fill="white" width={32} height={32} /> : <CartIcon fill="white" width={32} height={32} />}
            </Link>
        </div>
    )
};
