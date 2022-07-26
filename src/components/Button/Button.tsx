import React from "react";

import './Button.css';

type ButtonType = {
    text: string,
    onClick: any,
    type: 'filled' | 'bordered',
    disabled?: boolean,
    isRounded?: boolean,
    width?: number,
    height?: number,
};

export const Button = ({ text, type, onClick, disabled, width, height, isRounded }: ButtonType) => {
    return (
        <button
            className={`button-${type} ${isRounded ? 'rounded' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={disabled ? null : onClick}
            style={{
                width: width,
                height: height,
            }}
        >
            {text}
        </button>
    );
};
