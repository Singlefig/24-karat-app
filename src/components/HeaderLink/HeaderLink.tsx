import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CascadeMenu } from "../CascadeMenu/CascadeMenu";

import './HeaderLink.css';

export const HeaderLink = ({ text, link, className, withCascade, setIsMainShadowed } : { text: string, link: string, className?: string, withCascade?: boolean, setIsMainShadowed?: any })  => {
    const [isCascadeMenuDisplayed, setIsCascadeMenuDisplayed] = useState(false);

    return (
        <div className="header-link-container">
            <Link
            className={className}
            to={link}
            onMouseEnter={() => {
                setIsMainShadowed(true);
                setIsCascadeMenuDisplayed(true);
            }}
            >
                {text}
                </Link>
            {withCascade ? <CascadeMenu setIsMainShadowed={setIsMainShadowed} isCascadeMenuDisplayed={isCascadeMenuDisplayed} setIsCascadeMenuDisplayed={setIsCascadeMenuDisplayed} /> : null}
        </div>
    );
};
