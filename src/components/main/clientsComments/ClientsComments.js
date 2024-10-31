import React, { useEffect, useState,useCallback } from 'react';

// import clientImg from '../../../imgs/clientPhoto/client7.jpg';
import clientImg from '../../../imgs/clientPhoto/client7.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./client.css"
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';




const loremText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.`

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

    const[ currentSlide, setCurrentSlide] = useState(0)

    const handleCurrentSlide = (swiper =>{
        setCurrentSlide(swiper.activeIndex)
    })





    return(
        <section className="clientSection">
                    <div className='ClientCommentsTexts'>
                        <h1 className='tittleClientSection'>O que os nossos Clientes Falam:</h1>
                        <p className='textClientSection'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    <Swiper
                        direction={slideDirection}
                        className="mySwiperAbout"
                        slidesPerView={slidesPerView}
                        loop={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        
                        spaceBetween={10}
                        modules={[Autoplay, Pagination]}
                        onSlideChange={handleCurrentSlide}
                    >
                        {[...Array(9)].map((_, i) => (
                            <SwiperSlide key={i}
                             className="swiperSlideAbout">
                                
                                <img src={clientImg} className="clienPhoto" alt="client-Photo" />
                                <div className="clientComment">
                                    <div className='commentsHeader'>
                                        <p className="clientName">Marcelo Martins</p>
                                        <i className="quoteIcon fa-solid fa-quote-right"></i>
                                    </div>
                                    <p className="clientCommentText">
                                    Lorem Ipsum is simply dummy text of 
                                    the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s. 
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
        </section>
    )
}