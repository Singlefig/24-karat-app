import React from "react";
import { HelloContent } from "./Sections/HelloContent";
import { TopSelling } from "./Sections/TopSelling";
import { CreateACustomRing } from "./Sections/CreateACustomRing";
import { MoreCollections } from "./Sections/MoreCollections";
import { Feedback } from "./Sections/Feedback";
import { About } from "./Sections/About";
import { InstagramSection } from "./Sections/InstagramSection";

import './MainPage.css';

export const MainPage = ({ screenWidth, isMainShadowed }: { screenWidth: any, isMainShadowed: boolean }) => {

    return (
        <main className={`${isMainShadowed ? 'shadowed' : ''}`}>
            <HelloContent isMainShadowed />
            <TopSelling screenWidth={screenWidth} />
            <CreateACustomRing />
            <MoreCollections />
            <Feedback screenWidth={screenWidth} />
            <About />
            <InstagramSection screenWidth={screenWidth} />
        </main>
    );
};
