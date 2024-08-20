import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './main.css';

import './pricing.css'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from '../cards/Card';
// import {CardPricing} from '../main/cards/cardDetails'
import {CardPricing} from '../../main/cards/cardDetails'



function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

function SlideforWindow() {
    const size = useWindowSize();
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        if (size.width >= 1200) {
            setSlidesPerView(4);
        } else if (size.width >= 901) {
            setSlidesPerView(3);
        } else if (size.width >= 601) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    }, [size.width]);

    return slidesPerView;
}

export default function Pricing() {
    const slidesPerView = SlideforWindow();

    return (
        <div className='pricing'>
            <div className='pricingApresentation'>
                <h4 className='pricingTitle'>
                    Viaband
                    <span className='pricingTitleSpan'>Fibra</span>
                </h4>
                <p className='pricingDescription'>Escolha seu plano de internet residencial</p>
            </div>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                    {CardPricing.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Card name={card.name} price={card.price} down={card.downloadValue} up={card.uploadValue} />
                    </SwiperSlide>
                    ))}
                    
                {/* <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card/>
                </SwiperSlide> */}

            </Swiper>
        </div>
    );
}

