import React from "react";
import { Button } from "../../../components/Button/Button";

import moreCollectionItem1 from '../../../assets/images/MoreCollectionItem1.png';
import moreCollectionItem2 from '../../../assets/images/MoreCollectionItem2.png';
import moreCollectionItem3 from '../../../assets/images/MoreCollectionItem3.png';
import moreCollectionItem4 from '../../../assets/images/MoreCollectionItem4.png';
import moreCollectionItem5 from '../../../assets/images/MoreCollectionItem5.png';
import moreCollectionItem6 from '../../../assets/images/MoreCollectionItem6.png';

import './MoreCollections.css';

const moreCollectionsItems = [
    {
        text: 'The paradise collection',
        img: moreCollectionItem1,
    },
    {
        text: 'Hoops & studs',
        img: moreCollectionItem2,
    },
    {
        text: 'Rings & Stackables',
        img: moreCollectionItem3,
    },
    {
        text: 'Layaring',
        img: moreCollectionItem4,
    },
    {
        text: 'Gifts For Her',
        img: moreCollectionItem5,
    },
    {
        text: 'Engagement',
        img: moreCollectionItem6,
    },
];

export const MoreCollections = () => {

    return (
        <section className="more-collections-container">
            <p className="more-collections-title">More collections</p>
            <div className="more-collections-items">
                {moreCollectionsItems.map((item) => {
                    return (
                        <div key={item.img} className="more-collections-item">
                            <div className="more-collection-item-picture">
                                <img src={item.img} width={447} height={244} alt="more collections item" />
                            </div>
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </div>
            <Button
                text="SHOP NOW"
                type="bordered"
                isRounded
                width={234}
                onClick={() => alert('Shop')}
            />
        </section>
    );
};
