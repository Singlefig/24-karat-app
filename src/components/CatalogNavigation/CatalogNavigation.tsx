import React from "react";

import caretRight from '../../assets/icons/caret-right.svg';

import './CatalogNavigation.css';

export const CatalogNavigation = ({ location }: { location: { pathname: string } }) => {

    return (
        <div className="catalog-navigation">
            <div className="catalog-navigation-item">
                <a href="/">Main</a>
                <img src={caretRight} width={14} height={14} alt="caret right" />
            </div>
            <div className="catalog-navigation-item">
                <a href={`/${location.pathname.split('/')[1]}`}>{location.pathname.split('/')[1]}</a>
                <img src={caretRight} width={14} height={14} alt="caret right" />
            </div>
            <div className="catalog-navigation-item">
                <a href={`/${location.pathname.split('/')[2]}`}>{location.pathname.split('/')[2].replaceAll('%20', ' ')}</a>
                <img src={caretRight} width={14} height={14} alt="caret right" />
            </div>
        </div>
    );
};
