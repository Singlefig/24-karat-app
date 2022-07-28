import React from "react";
import { Carousel } from "../../../components/Slider/Slider";

import feedbackImg1 from '../../../assets/images/feedbackItem1.png';
import feedbackImg2 from '../../../assets/images/feedbackItem2.png';
import feedbackImg3 from '../../../assets/images/feedbackItem3.png';
import feedbackImg4 from '../../../assets/images/feedbackItem4.png';
import epmtyStar from '../../../assets/icons/empty_star.svg';
import filledStar from '../../../assets/icons/filled_star.svg';

import './Feedback.css';
import { Button } from "../../../components/Button/Button";

const feedbackItems = [
    {
        author: 'Randy',
        item: 'HARMONIE BANGLE',
        comment: 'Absolutely beautiful, my girlfriend loved it. The perfect size!',
        img: feedbackImg1,
        rate: 4
    },
    {
        author: 'Leo',
        item: 'HARMONIE BANGLE',
        comment: 'Love this style, wish you still offered it. Earrings are lovely',
        img: feedbackImg2,
        rate: 5
    },
    {
        author: 'Monica',
        item: 'HARMONIE BANGLE',
        comment: 'Fantastic value for the money.',
        img: feedbackImg3,
        rate: 4
    },
    {
        author: 'Marcus',
        item: 'HARMONIE BANGLE',
        comment: 'Love this style, wish you still offered it. Earrings are lovely',
        img: feedbackImg4,
        rate: 5
    },
    {
        author: 'Leo',
        item: 'HARMONIE BANGLE',
        comment: 'Love this style, wish you still offered it. Earrings are lovely',
        img: feedbackImg2,
        rate: 5
    },
    {
        author: 'Monica',
        item: 'HARMONIE BANGLE',
        comment: 'Fantastic value for the money.',
        img: feedbackImg3,
        rate: 4
    },
];

export const Feedback = ({ screenWidth } : { screenWidth: any }) => {

    const getStars = (rate: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rate) {
                stars.push(filledStar);
            } else {
                stars.push(epmtyStar);
            }
        }
        return stars.map((star, index) => <img key={star + index} src={star} width={24} height={24} alt="star" />);
    };

    return (
        <section className="feedback-container">
            <div className="feedback">
                <p className="feedback-title">What Our Customers Are Saying About Us</p>
                <div className="carousel-container">
                    <Carousel
                        settings={{
                            dots: false,
                            infinite: true,
                            speed: 500,
                            slidesToShow: screenWidth <= 1366 ? screenWidth <= 768 ? 1 : 2 : 4,
                            slidesToScroll: 1,
                        }}
                    >
                        {feedbackItems.map((item, index) => {
                            return (
                                <div key={item.author} className={`feedback-carousel-item ${index % 2 === 1 ? 'reversed' : ''}`}>
                                    <div className="feedback-info">
                                        <div className="author-info">
                                            <span className="author-name">{item.author}</span>
                                            <div className="stars">
                                                {getStars(item.rate)}
                                            </div>
                                        </div>
                                        <p className="feedback-item">{item.item}</p>
                                        <p className="feedback-comment">{item.comment}</p>
                                    </div>
                                    <div className={`feedback-image ${index % 2 === 1 ? 'reversed-image' : ''}`}>
                                        <img src={item.img} width={330} height={239} alt="feedback" />
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <Button
                    text="LEAVE A FEEDBACK"
                    type="bordered"
                    backgroundColor="#EEEEEE"
                    isRounded
                    onClick={() => alert('Shop')}
                />
            </div>
        </section>
    );
};
