import React, { useState } from "react";

import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';

import './DropdownMenu.css';

export const DropdownMenu = ({ items, title, marginBottom }: { items: Array<any>, title: string, marginBottom?: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnIconClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown"
            style={{
                marginBottom: marginBottom,
            }}
        >
            <div className="dropdown-controls">
                <p className="dropdown-title">{title}</p>
                <img
                    className="dropdown-icon"
                    src={isOpen ? minus : plus}
                    width={32}
                    height={32}
                    alt="dropdown"
                    onClick={handleOnIconClick}
                />
            </div>
            <div
            className="dropdown-items"
            style={{
                display: isOpen ? 'flex' : 'none',
                height: isOpen ? '100%' : '0',
            }}
            >
                {items.map((item: any) => <div key={item} className="dropdown-item">{item}</div>)}
            </div>
        </div>
    );
};
