import React, { useRef, useState } from "react";
import { RangeSlider } from "../Range/Range";

import plus from '../../assets/icons/plus-colored.svg';
import minus from '../../assets/icons/minus-colored.svg';

import './Filter.css';

export const Filter = ({ text, type, min, max, options, setIsUsed, usedFilters, isFilterOpen }: { text: string, type: string, min?: number, max?: number, options?: Array<string>, setIsUsed: any, usedFilters: any, isFilterOpen?: boolean, }) => {
    const [values, setValues] = useState(min && max ? [min, max] : []);
    const [isOpen, setIsOpen] = useState(isFilterOpen);
    const ref = useRef<any>();
    let component = null;

    const handleFilterOnCheck = (e: any, el: string) => {
        if (e.target.checked) {
            const temp = [...usedFilters];
            temp.push(el);
            setIsUsed([...new Set(temp)]);
        } else {
            let temp = [...usedFilters];
            temp = temp.filter(selectedFilter => selectedFilter !== el);
            setIsUsed([...new Set(temp)]);
        }
    };

    switch (type) {
        case 'range': {
            component = (
                <div className="filter range-filter">
                    <div className="filter-info range-info">
                        <p className="filter-title">{text}</p>
                        <img
                            className="filter-icon"
                            src={isOpen ? minus : plus}
                            width={32}
                            height={32}
                            onClick={() => setIsOpen(!isOpen)}
                            alt="open-close"
                        />
                    </div>
                    <div
                        className="range-inputs"
                        style={{
                            display: isOpen ? 'flex' : 'none',
                        }}
                    >
                        <input
                            type="number"
                            value={values[0]}
                            onChange={(e) => {
                                if (!isNaN(+e.target.value) && +e.target.value > 0 && (+e.target.value <= 345667 || +e.target.value >= 156) && +e.target.value <= values[1]) {
                                    const temp = [...values];
                                    temp[0] = +e.target.value;
                                    setValues([...temp]);
                                }
                            }}
                        />
                        <div className="divider" />
                        <input
                            type="number"
                            value={values[1]}
                            onChange={(e) => {
                                if (!isNaN(+e.target.value) && +e.target.value > 0 && (+e.target.value <= 345667 || +e.target.value >= 156) && +e.target.value >= values[0]) {
                                    const temp = [...values];
                                    temp[1] = +e.target.value;
                                    setValues([...temp]);
                                }
                            }}
                        />
                    </div>
                    <RangeSlider
                        style={isOpen ? 'flex' : 'none'}
                        values={values}
                        setValues={setValues}
                    />
                    <div className="values">
                        <p>${values[0].toString().length > 5 ? values[0].toString().substring(0, 3) + ' ' + values[0].toString().substring(3) : values[0]}</p>
                        <p>${values[1].toString().length > 5 ? values[1].toString().substring(0, 3) + ' ' + values[1].toString().substring(3) : values[1]}</p>
                    </div>
                </div>
            );
            break;
        }
        case 'list': {
            component = (
                <div className="filter">
                    <div className="filter-info">
                        <p className="filter-title">{text}</p>
                        <img
                            className="filter-icon"
                            src={isOpen ? minus : plus}
                            width={32}
                            height={32}
                            onClick={() => setIsOpen(!isOpen)}
                            alt="open-close"
                        />
                    </div>
                    <div
                        className="options"
                        style={{
                            display: isOpen ? 'flex' : 'none',
                        }}
                    >
                        {options?.map(el =>
                            <div className="option" key={el}>
                                <label className="checkbox-container">{el}
                                    <input
                                        ref={ref}
                                        type="checkbox"
                                        onChange={(e) => handleFilterOnCheck(e, el)}
                                        checked={usedFilters.includes(el)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                {usedFilters.includes(el) ? (
                                    <div className="tooltip">
                                        <div className="tooltip-content">
                                            <div className="triangle" />
                                            <span>Show 764 Products</span>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                </div>
            );
            break;
        }
    }

    return component;
};
