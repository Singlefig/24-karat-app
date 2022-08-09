import React from "react";
import { useNavigate } from "react-router";

import necklaceIcon from '../../assets/icons/necklace-icon.svg';
import earringIcon from '../../assets/icons/earring-icon.svg';
import braceletIcon from '../../assets/icons/bracelet.svg';
import ringIcon from '../../assets/icons/ring-icon-menu.svg';
import watchIcon from '../../assets/icons/fine-watches-icon.svg';
import broochIcon from '../../assets/icons/brooch-icon.svg';
import charmIcon from '../../assets/icons/charm-icon.svg';
import studEarringIcon from '../../assets/icons/stud-earring-icon.svg';
import hoopEarringIcon from '../../assets/icons/hoop-earring-icon.svg';
import stackingRingIcon from '../../assets/icons/stacking-ring-icon.svg';
import diamondJewelryIcon from '../../assets/icons/diamond-jewelry-icon.svg';
import pearlJewelryIcon from '../../assets/icons/pearl-jewelry-icon.svg';

import './CascadeMenu.css';

export const CascadeMenu = ({ isCascadeMenuDisplayed, setIsCascadeMenuDisplayed, setIsMainShadowed }: { isCascadeMenuDisplayed: boolean, setIsCascadeMenuDisplayed: any, setIsMainShadowed?: any }) => {
    const navigate = useNavigate();
    const onItemClick = (path: string) => {
        navigate(path);
    };

    return (
        <div
            className="cascade-menu-container"
            style={{
                display: isCascadeMenuDisplayed ? 'grid' : 'none'
            }}
            onMouseLeave={() => {
                setIsMainShadowed(false);
                setIsCascadeMenuDisplayed(false);
            }}
        >
            <div className="item" onClick={() => onItemClick(`/Women's/Necklaces & Pendants`)} >
                <img src={necklaceIcon} width={80} height={80} alt="menu item" />
                <p>Necklaces & Pendants</p>
            </div>
            <div className="item">
                <img src={watchIcon} width={80} height={80} alt="menu item" />
                <p>Fine Watches</p>
            </div>
            <div className="item">
                <img src={hoopEarringIcon} width={80} height={80} alt="menu item" />
                <p>Hoop Earrings</p>
            </div>
            <div className="item">
                <img src={earringIcon} width={80} height={80} alt="menu item" />
                <p>Earrings</p>
            </div>
            <div className="item">
                <img src={broochIcon} width={80} height={80} alt="menu item" />
                <p>Brooches</p>
            </div>
            <div className="item">
                <img src={stackingRingIcon} width={80} height={80} alt="menu item" />
                <p>Stacking Rings</p>
            </div>
            <div className="item">
                <img src={braceletIcon} width={80} height={80} alt="menu item" />
                <p>Bracelets</p>
            </div>
            <div className="item">
                <img src={charmIcon} width={80} height={80} alt="menu item" />
                <p>Charms</p>
            </div>
            <div className="item">
                <img src={diamondJewelryIcon} width={80} height={80} alt="menu item" />
                <p>Diamond Jewelry</p>
            </div>
            <div className="item no-border">
                <img src={ringIcon} width={80} height={80} alt="menu item" />
                <p>Rings</p>
            </div>
            <div className="item no-border">
                <img src={studEarringIcon} width={80} height={80} alt="menu item" />
                <p>Stud Earrings</p>
            </div>
            <div className="item no-border">
                <img src={pearlJewelryIcon} width={80} height={80} alt="menu item" />
                <p>Pearl Jewelry</p>
            </div>
        </div>
    );
};
