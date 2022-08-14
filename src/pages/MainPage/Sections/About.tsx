import React from "react";

import aboutImage1 from '../../../assets/images/about_image1.png';
import aboutImage2 from '../../../assets/images/about_image2.png';

import './About.css';

export const About = () => {

    return (
        <section className="about-section-container">
            <p className="about-title">About 24 karat</p>
            <div className="about-images">
                <img src={aboutImage1} width={565} height={386} alt="about" />
                <img src={aboutImage2} width={565} height={386} alt="about" />
            </div>
            <div className="about-text">
                <p>Founded in Amsterdam. 24 karat believes that by combining traditional craftmanship and modern technology that we can offer the world's most beautiful diamond jewels and the best experience for outstanding prices.</p>
                <ul className="about-list">
                    <li className="about-list-item">We offer, due to that we are a diamond importer and an internet based company, worldwide the best possible prices.</li>
                    <li className="about-list-item">We offer a viewing period of 14 days.</li>
                    <li className="about-list-item">We accept a down payment for telephone orders and orders made by email.</li>
                    <li className="about-list-item">We offer the possibilty to view and pick up our diamonds in person.</li>
                </ul>
            </div>
        </section>
    );
};
