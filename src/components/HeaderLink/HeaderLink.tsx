import React from "react";
import { Link } from "react-router-dom";

export const HeaderLink = ({ text, link } : { text: string, link: string })  => {
    return (
        <Link to={link}>{text}</Link>
    );
};
