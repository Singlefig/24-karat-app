import React from "react";
import { Button } from "../../../components/Button/Button";

import customRingPicture from '../../../assets/images/CustomRingPicture.png';
import mainPageRing from '../../../assets/images/main_page_ring.svg';

import './CreateACustomRing.css';

export const CreateACustomRing = () => {

    return (
        <section className="custom-ring-container">
            <div className="create-custom-ring-container">
                <div className="ring-container">
                    <img src={mainPageRing} alt="ring" width={347} height={347} />
                    <div className="ring-text">
                        <p className="ring-title">CUSTOM RING</p>
                        <p className="ring-price">FROM $704</p>
                    </div>
                </div>
                <div className="picture-container">
                    <img src={customRingPicture} width={465} height={588} alt="create a custom ring" />
                </div>
                <div className="info-container">
                    <p className="info-title">Create a custom ring</p>
                    <span className="info-description">Our Design Your Own Service Lets You Create Your Own Custom Wedding or Engagement Ring. Using Actual Gemstones Images, Not Renders, Design Your Perfect Ring And Buy Online. </span>
                    <Button
                        text="CREATE NOW"
                        type="bordered"
                        backgroundColor="#EEEEEE"
                        isRounded
                        onClick={() => alert('Shop')}
                    />
                </div>
            </div>
        </section>
    );
};
