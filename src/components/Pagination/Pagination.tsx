import React, { useState } from "react";
import caretRight from '../../assets/icons/caret-right-colored.svg';
import './Pagination.css';

export const Pagination = () => {
    const [active, setActive] = useState(1);

    return (
        <div className="pagination">
            {[1, 2, 3, 4, 5].map((el, index) => <div className={`pagination-item ${active === index ? 'active' : ''}`} onClick={() => setActive(index)}>{el}</div>)}
            <div className="pagination-item">...</div>
            <div className="pagination-item">34</div>
            <div className="pagination-item">
                <img src={caretRight} width={20} height={20} alt="caret" />
            </div>
        </div>
    );
};
