import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

import arrowNext from '../../assets/icons/arrow-next-menu.svg';
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
import facebook from '../../assets/icons/facebook-white.svg';
import youtube from '../../assets/icons/youtube-white.svg';
import tiktok from '../../assets/icons/tiktok-white.svg';
import pinterest from '../../assets/icons/pinterest-white.svg';
import twitter from '../../assets/icons/twitter-white.svg';

import './Sidebar.css';

export const Sidebar = (props: any) => {
    const [isNextClicked, setIsNextClicked] = useState(false);
    const [items, setItems] = useState([
        {
            content: <span onClick={() => getNextItem(items[0])} className="menu-item">MEN'S <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
            next: <div className="next-menu">
                <div onClick={() => getPrevItem(items)} className="item title">
                    <img src={arrowNext} className="prev-arrow-menu" width={24} height={24} alt="prev arrow" />
                    <p>MEN'S</p>
                </div>
                <div className="item">
                    <img src={necklaceIcon} width={60} height={60} alt="menu item" />
                    <p>Necklaces & Pendants</p>
                </div>
                <div className="item">
                    <img src={watchIcon} width={60} height={60} alt="menu item" />
                    <p>Fine Watches</p>
                </div>
                <div className="item">
                    <img src={hoopEarringIcon} width={60} height={60} alt="menu item" />
                    <p>Hoop Earrings</p>
                </div>
                <div className="item">
                    <img src={earringIcon} width={60} height={60} alt="menu item" />
                    <p>Earrings</p>
                </div>
                <div className="item">
                    <img src={broochIcon} width={60} height={60} alt="menu item" />
                    <p>Brooches</p>
                </div>
                <div className="item">
                    <img src={stackingRingIcon} width={60} height={60} alt="menu item" />
                    <p>Stacking Rings</p>
                </div>
                <div className="item">
                    <img src={braceletIcon} width={60} height={60} alt="menu item" />
                    <p>Bracelets</p>
                </div>
                <div className="item">
                    <img src={charmIcon} width={60} height={60} alt="menu item" />
                    <p>Charms</p>
                </div>
                <div className="item">
                    <img src={diamondJewelryIcon} width={60} height={60} alt="menu item" />
                    <p>Diamond Jewelry</p>
                </div>
                <div className="item no-border">
                    <img src={ringIcon} width={60} height={60} alt="menu item" />
                    <p>Rings</p>
                </div>
                <div className="item no-border">
                    <img src={studEarringIcon} width={60} height={60} alt="menu item" />
                    <p>Stud Earrings</p>
                </div>
                <div className="item no-border">
                    <img src={pearlJewelryIcon} width={60} height={60} alt="menu item" />
                    <p>Pearl Jewelry</p>
                </div>
            </div>,
        },
        {
            content: <span className="menu-item">WEDDING <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
            next: <span className="menu-item">WEDDING <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
        },
        {
            content: <span className="menu-item">WOMEN'S <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
            next: <span className="menu-item">WOMEN'S <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
        },
        {
            content: <span className="menu-item">GIFTS <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
            next: <span className="menu-item">GIFTS <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
        },
        {
            content: <span className="menu-item">CUSTOM A RING</span>,
            next: false,
        },
        {
            content: <span className="menu-item colored-item">NEW <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
            next: <span className="menu-item colored-item">NEW <img src={arrowNext} width={24} height={24} alt="arrow" /></span>,
        },
    ]);

    const getNextItem = (item: any) => {
        setItems(item.next);
        setIsNextClicked(true);
    };

    const getPrevItem = (items: any) => {
        const temp = items;
        setItems([...temp]);
        setIsNextClicked(false);
    };

    return (
        <Menu {...props}>
            {items.map ? items.map((el, index) => {
                return <div key={index}>{el.content}</div>;
            }) : items}
            {!isNextClicked ? (
                <div className="bottom-mobile-header">
                    <a href="/">Our Story</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Where To Buy</a>
                    <a href="/">Authenticity Card Request</a>
                    <div className="socials">
                        <p>SOCIAL MEDIA</p>
                        <div className="images">
                            <img src={facebook} width={24} height={24} alt="facebook" />
                            <img src={youtube} width={24} height={24} alt="youtube" />
                            <img src={tiktok} width={24} height={24} alt="tiktok" />
                            <img src={pinterest} width={24} height={24} alt="pinterest" />
                            <img src={twitter} width={24} height={24} alt="twitter" />
                        </div>
                    </div>
                </div>
            ) : null}
        </Menu>
    );
};
