import React, { useState } from "react";
import { useLocation } from "react-router";
import { CatalogNavigation } from "../../components/CatalogNavigation/CatalogNavigation";
import { Carousel } from "../../components/Slider/Slider";
import { Filter } from "../../components/Filter/Filter";
import { CatalogItem } from "../../components/CatalogItem/CatalogItem";
import { About } from "../MainPage/Sections/About";
import { InstagramSection } from "../MainPage/Sections/InstagramSection";

import catalogCarouselPicture1 from '../../assets/images/catalog-carousel-picture1.png';
import catalogCarouselPicture2 from '../../assets/images/catalog-carousel-picture2.png';
import catalogCarouselPicture3 from '../../assets/images/catalog-carousel-picture3.png';
import catalogCarouselPicture4 from '../../assets/images/catalog-carousel-picture4.png';
import filterCross from '../../assets/icons/filter-cross.svg';
import list from '../../assets/icons/list.svg';
import squares from '../../assets/icons/squares.svg';
import catalogPicture1 from '../../assets/images/catalog_picture1.png';
import catalogPicture2 from '../../assets/images/catalog_picture2.png';
import catalogPicture3 from '../../assets/images/catalog_picture3.png';
import catalogPicture4 from '../../assets/images/catalog_picture4.png';
import catalogPicture5 from '../../assets/images/catalog_picture5.png';
import catalogPicture6 from '../../assets/images/catalog_picture6.png';
import catalogPicture7 from '../../assets/images/catalog_picture7.png';
import catalogPicture8 from '../../assets/images/catalog_picture8.png';
import catalogPicture9 from '../../assets/images/catalog_picture9.png';

import './CatalogPage.css';
import { Pagination } from "../../components/Pagination/Pagination";
import { LastSeen } from "../../components/LastSeen/LastSeen";

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
type CatalogItemType = { isHovered: boolean, imgSrc: string, title: string, price: string, salePrice?: string, isClicked: boolean, isSale?: boolean, isNewCollection?: boolean };
type CatalogItemsType = Array<CatalogItemType>;

const items: CatalogItemsType = [
    {
        isHovered: false,
        imgSrc: catalogPicture1,
        title: 'PENDANT MP1272',
        price: '$3,542',
        salePrice: '$2,242',
        isClicked: false,
        isSale: true,
        isNewCollection: true,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture2,
        title: 'CROSS PENDANT NP204',
        price: '$5,463',
        isClicked: false,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture3,
        title: 'FALLEN LEAVES PENDANT DP113',
        price: '$1,264',
        isClicked: false,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture4,
        title: 'SG PENDANT LP4586',
        price: '$1,264',
        isClicked: false,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture5,
        title: 'PENDANT MP1478',
        price: '$5,463',
        isClicked: false,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture6,
        title: 'SET PENDANT LP2379',
        price: '$3,542',
        salePrice: '$2,242',
        isClicked: false,
        isSale: true,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture7,
        title: 'TRELLIS PENDANT LP4525',
        price: '$1,264',
        isClicked: false,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture8,
        title: 'PENDANT LP4804',
        price: '$2,242',
        isClicked: false,
        isNewCollection: true,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture9,
        title: 'PENDANT LP4467',
        price: '$3,542',
        salePrice: '$2,242',
        isClicked: false,
        isSale: true,
    },
    {
        isHovered: false,
        imgSrc: catalogPicture1,
        title: 'PENDANT MP1275',
        price: '$3,542',
        salePrice: '$2,242',
        isClicked: false,

    },
    {
        isHovered: false,
        imgSrc: catalogPicture2,
        title: 'PENDANT MP1274',
        price: '$3,542',
        salePrice: '$2,242',
        isClicked: false,

    },
    {
        isHovered: false,
        imgSrc: catalogPicture3,
        title: 'PENDANT MP1273',
        price: '$3,542',
        salePrice: '$2,242',
        isClicked: false,
    },
];

export const CatalogPage = (screenWidth: { screenWidth: any }) => {
    const location = useLocation();
    const [usedFilters, setUsedFilters] = useState([]);
    const [catalogItems, setCatalogItems] = useState(items);

    filters.forEach(el => el.setIsUsed = setUsedFilters);
    let i = 1;

    const changeItemParam = (param: 'isHovered' | 'isClicked', newParam: boolean, index: number) => {
        const temp = [...catalogItems];
        temp[index][param] = newParam;
        setCatalogItems([...temp]);
    }

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
                    <div className="catalog-items">
                        {catalogItems.map((item, index) => {
                            if (i === 3) {
                                i = 1;
                                return (
                                    <CatalogItem
                                        key={item.title}
                                        {...item}
                                        changeItemParam={changeItemParam}
                                        index={index}
                                        isRight
                                    />)
                            }
                            i++;
                            return (
                                <CatalogItem
                                    key={item.title}
                                    {...item}
                                    changeItemParam={changeItemParam}
                                    index={index}
                                />)
                        })
                        }
                    </div>
                    <Pagination />
                </div>
            </div>
            <LastSeen screenWidth={screenWidth} />
            <About />
            <InstagramSection
                screenWidth={screenWidth}
            />
        </main>
    )
};
