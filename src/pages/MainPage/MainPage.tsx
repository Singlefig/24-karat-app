import React from "react";
import { Button } from "../../components/Button/Button";

import mainPageBanner from '../../assets/images/main_page_banner.png';
import './MainPage.css';

export const MainPage = () => {
    return (
        <main>
            <section className="hello-content">
                <div className="jewellery-text">
                    <p>Your Luxury Jewellery</p>
                    <Button
                        text="SHOP NOW"
                        border="2px solid #CD5341"
                        textColor="#CD5341"
                        backgroundColor="white"
                        onClick={() => alert('Shop')}
                    />
                </div>
                <img src={mainPageBanner} width={830} height={478} alt="banner" />
            </section>
        </main>
    );
};
