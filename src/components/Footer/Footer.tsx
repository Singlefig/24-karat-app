import React, { useEffect, useRef, useState } from "react";

import { DropdownMenu } from "../DropdownMenu/DropdownMenu";

import logo from '../../assets/icons/24karat.svg';
import sendEmail from '../../assets/icons/send_email.svg';
import facebookLogo from '../../assets/icons/facebook.svg';
import youtubeLogo from '../../assets/icons/youtube.svg';
import tiktokLogo from '../../assets/icons/tiktok.svg';
import pinterestLogo from '../../assets/icons/pinterest.svg';
import twitterLogo from '../../assets/icons/twitter.svg';

import './Footer.css';

export const Footer = ({ screenWidth }: { screenWidth: any }) => {
    const [email, setEmail] = useState('');
    const btnRef = useRef<any>();

    useEffect(() => {
        const btnEl = btnRef.current;
        btnEl.addEventListener('click', (e: any) => {
            e.preventDefault();
            btnEl.classList.add('is-done');

            setTimeout(() => {
                btnEl.innerHTML = "Thanks! Check Your Email"
            }, 500);
        });
    }, []);

    return (
        <footer>
            <div className="offers">
                <p className="offers-text">Get Exclusive Offers and News</p>
                <div className="offers-input">
                    <input
                        type="text"
                        placeholder="e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                    />
                    <button
                        className="submit-btn"
                        ref={btnRef}
                    >
                        <img src={sendEmail} width={24} height={24} alt="send email" />
                    </button>
                </div>
            </div>
            <div className="footer-content">
                <img src={logo} width={158} height={26} alt="logo" className="footer-logo" />
                {screenWidth <= 768 ? <DropdownMenu title="CUSTOMER SERVICE" items={['Search', 'Authenticity Card Request', 'Custom Ring', '24 karat\'s Story', 'Press', 'Blog']} /> :
                    <div className="footer-section">
                        <p className="footer-section-title">CUSTOMER SERVICE</p>
                        <div className="footer-section-menu">
                            <span>Search</span>
                            <span>Authenticity Card Request</span>
                            <span>Custom Ring</span>
                            <span>24 karat's Story</span>
                            <span>Press</span>
                            <span>Blog</span>
                        </div>
                        <div className="socials">
                            <p className="footer-section-title">Social media</p>
                            <div className="socials-images">
                                <img src={facebookLogo} width={24} height={24} alt="facebook" />
                                <img src={youtubeLogo} width={24} height={24} alt="youtube" />
                                <img src={tiktokLogo} width={24} height={24} alt="tiktok" />
                                <img src={pinterestLogo} width={24} height={24} alt="pinterest" />
                                <img src={twitterLogo} width={24} height={24} alt="twitter" />
                            </div>
                        </div>
                    </div>}
                {screenWidth <= 768 ? <DropdownMenu title="CONTACT" items={['Where To Buy', 'My Wishlist', 'Contact Us']} /> :
                    <div className="footer-section">
                        <p className="footer-section-title">CONTACT</p>
                        <div className="footer-section-menu">
                            <span>Where To Buy</span>
                            <span>My Wishlist</span>
                            <span>Contact Us</span>
                        </div>
                    </div>}
                {screenWidth <= 768 ? <DropdownMenu title="TOOLS" items={['Developers', 'Retailers', 'FAQ', 'Privacy Policy', 'Terms of Service']} marginBottom={66} /> :
                    <div className="footer-section">
                        <p className="footer-section-title">Tools</p>
                        <div className="footer-section-menu">
                            <span>Developers</span>
                            <span>Retailers</span>
                            <span>FAQ</span>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>}
                {screenWidth <= 768 ? (
                    <div className="socials">
                        <p className="footer-section-title">Social media</p>
                        <div className="socials-images">
                            <img src={facebookLogo} width={24} height={24} alt="facebook" />
                            <img src={youtubeLogo} width={24} height={24} alt="youtube" />
                            <img src={tiktokLogo} width={24} height={24} alt="tiktok" />
                            <img src={pinterestLogo} width={24} height={24} alt="pinterest" />
                            <img src={twitterLogo} width={24} height={24} alt="twitter" />
                        </div>
                    </div>
                ) : null}
            </div>
        </footer>
    );
};
