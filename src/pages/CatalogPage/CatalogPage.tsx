import React, { useState } from "react";
import { useLocation } from "react-router";
import { CatalogNavigation } from "../../components/CatalogNavigation/CatalogNavigation";
import { Carousel } from "../../components/Slider/Slider";
import { Filter } from "../../components/Filter/Filter";

import catalogCarouselPicture1 from '../../assets/images/catalog-carousel-picture1.png';
import catalogCarouselPicture2 from '../../assets/images/catalog-carousel-picture2.png';
import catalogCarouselPicture3 from '../../assets/images/catalog-carousel-picture3.png';
import catalogCarouselPicture4 from '../../assets/images/catalog-carousel-picture4.png';
import filterCross from '../../assets/icons/filter-cross.svg';
import list from '../../assets/icons/list.svg';
import squares from '../../assets/icons/squares.svg';

import './CatalogPage.css';

const filters: Array<{ text: string, type: string, min?: number, max?: number, options?: Array<string>, setIsUsed?: any, isOpen?: boolean, }> = [
    {
        text: 'PRICE',
        type: 'range',
        min: 156,
        max: 345667,
        setIsUsed: null,
        isOpen: true,
    },
    {
        text: 'COLLECTION',
        type: 'list',
        options: ['Chains', 'Diamonds'],
        setIsUsed: null,
        isOpen: true,
    },
    {
        text: 'COLOR',
        type: 'list',
        options: ['Rose', 'White', 'White And Rose', 'White Yellow And Rose', 'Yellow', 'Yellow And White'],
        setIsUsed: null,
        isOpen: true,
    },
    {
        text: 'METAL',
        type: 'list',
        options: ['14k Gold', '18k Gold', 'Gray', 'Platinum'],
        setIsUsed: null,
    },
    {
        text: 'SHAPE',
        type: 'list',
        options: ['Emerald', 'Cushion', 'Marquise', 'Oval', 'Pear', 'Round'],
        setIsUsed: null,
    },
    {
        text: 'GEMSTONES',
        type: 'list',
        options: ['Diamond', 'Opal', 'Emerald'],
        setIsUsed: null,
    },
];

export const CatalogPage = () => {
    const location = useLocation();
    const [usedFilters, setUsedFilters] = useState([]);

    filters.forEach(el => el.setIsUsed = setUsedFilters);

    return (
        <main id="main-page" className="catalog-page-container">
            <CatalogNavigation location={location} />
            <div className="catalog-carousel-container">
                <p className="catalog-carousel-title">Necklaces & Pendants</p>
                <Carousel
                    settings={{
                        dots: false,
                        infinite: true,
                        arrows: true,
                        speed: 500,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }}
                >
                    <div className="catalog-carousel-item">
                        <img src={catalogCarouselPicture1} alt="carousel" />
                        <span>Everyday Diamonds</span>
                    </div>
                    <div className="catalog-carousel-item">
                        <img src={catalogCarouselPicture2} alt="carousel" />
                        <span>Chain</span>
                    </div>
                    <div className="catalog-carousel-item">
                        <img src={catalogCarouselPicture3} alt="carousel" />
                        <span>Layaring</span>
                    </div>
                    <div className="catalog-carousel-item">
                        <img src={catalogCarouselPicture4} alt="carousel" />
                        <span>Bold</span>
                    </div>
                    <div className="catalog-carousel-item">
                        <img src={catalogCarouselPicture2} alt="carousel" />
                        <span>Everyday Diamonds</span>
                    </div>
                    <div className="catalog-carousel-item">
                        <img src={catalogCarouselPicture1} alt="carousel" />
                        <span>Everyday Diamonds</span>
                    </div>
                </Carousel>
            </div>
            <div className="catalog-content">
                <div className="filters">
                    {usedFilters.length > 0 ? (
                        <div className="selected-filters">
                            {usedFilters.map(el =>
                                <div className="selected-filter">
                                    <p>{el}</p>
                                    <img
                                        onClick={() => {
                                            let temp = [...usedFilters];
                                            temp = temp.filter(selectedFilter => selectedFilter !== el);
                                            setUsedFilters([...new Set(temp)]);
                                        }}
                                        src={filterCross}
                                        width={14}
                                        height={14}
                                        alt="cross"
                                    />
                                </div>
                            )}
                        </div>
                    ) : null}
                    {filters.map(filter =>
                        <Filter
                            key={filter.text}
                            type={filter.type}
                            text={filter.text}
                            min={filter.min}
                            max={filter.max}
                            options={filter.options}
                            setIsUsed={filter.setIsUsed}
                            usedFilters={usedFilters}
                            isFilterOpen={filter.isOpen}
                        />
                    )}
                </div>
                <div className="catalog">
                    <div className="catalog-controls">
                        <div className="catalog-sorting">
                            <p>Sort by:</p>
                            <select>
                                <option>popular</option>
                                <option>new</option>
                            </select>
                        </div>
                        <div className="catalog-items-count">
                            <p>Showing 1 - 12 of 764</p>
                        </div>
                        <div className="catalog-icons">
                            <img src={squares} width={32} height={32} alt="squares" />
                            <img src={list} width={32} height={32} alt="list" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
