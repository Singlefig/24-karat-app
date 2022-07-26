import React from "react";
import { HelloContent } from "./Sections/HelloContent";
import { TopSelling } from "./Sections/TopSelling";
import { CreateACustomRing } from "./Sections/CreateACustomRing";
import { MoreCollections } from "./Sections/MoreCollections";
import { Feedback } from "./Sections/Feedback";

import './MainPage.css';

export const MainPage = ({ isMainShadowed } : { isMainShadowed: boolean }) => {

    return (
        <main className={`${isMainShadowed ? 'shadowed' : ''}`}>
            <HelloContent isMainShadowed />
            <TopSelling />
            <CreateACustomRing />
            <MoreCollections />
            <Feedback />
        </main>
    );
};
