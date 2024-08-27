import React, { useEffect, useState } from 'react';

import clientImg from '../../../imgs/clientPhoto/client7.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';


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

function useSlideSettings() {
    const size = useWindowSize();
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [slideDirection, setSlideDirection] = useState('vertical');

    useEffect(() => {
        if (size.width < 601) {
            setSlidesPerView(1);
            setSlideDirection('horizontal');
        } else {
            setSlidesPerView(3);
            setSlideDirection('vertical');
        }
    }, [size.width]);

    return { slidesPerView, slideDirection };
}

export default function Client(props){
    const { slidesPerView, slideDirection } = useSlideSettings();
    return(
        <section className="clientSection">
                    <Swiper
                        direction={slideDirection}
                        className="mySwiperAbout"
                        slidesPerView={slidesPerView}
                        loop={true}
                        // autoplay={{
                        //     delay: 4500,
                        //     disableOnInteraction: false,
                        // }}
                        spaceBetween={10}
                        modules={[Autoplay, Pagination]}
                    >
                        {[...Array(9)].map((_, i) => (
                            <SwiperSlide key={i} className="swiperSlideAbout">
                                <div className="clientComment">
                                    <img src={clientImg} className="clienPhoto" alt="client Photo" />
                                    <p className="clientInformation">Marcelo Martins - Cliente a 8 anos</p>
                                    <i className="quoteIcon fa-solid fa-quote-left"></i>
                                    <p className="clientCommentText">{loremText}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
        </section>
    )
}