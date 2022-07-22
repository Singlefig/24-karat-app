import React from "react";

import './Button.css';

type ButtonType = {
    text: string,
    border: string,
    textColor: string,
    backgroundColor: string,
    onClick: any,
    disabled?: boolean,
    width?: number,
    height?: number,
};

export const Button = ({ text, border, textColor, backgroundColor, onClick, disabled, width, height }: ButtonType) => {
    return (
        <button
            onClick={disabled ? null : onClick}
            style={{
                border: border,
                color: textColor,
                backgroundColor: backgroundColor,
                width: width,
                height: height
            }}
        >
            {text}
        </button>
    );
};
