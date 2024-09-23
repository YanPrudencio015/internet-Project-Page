import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ScrollReveal from 'scrollreveal';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './pricing.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from '../cards/Card';
import { CardPricing } from '../../main/cards/cardDetails';

// Hook customizado para pegar o tamanho da janela
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

// Hook customizado para definir o número de slides por visualização
function useSlidesPerView() {
    const { width } = useWindowSize();
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        if (width >= 1200) {
            setSlidesPerView(4);
        } else if (width >= 901) {
            setSlidesPerView(3);
        } else if (width >= 601) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    }, [width]);

    return slidesPerView;
}

export default function Pricing() {
    const slidesPerView = useSlidesPerView();

    return (
        <div className='pricing'>
            <div className='pricingApresentation'>
                <h4 className='pricingTitle'  id='plain'>
                    Viaband
                    <span className='pricingTitleSpan' >Fibra</span>
                </h4>
                <p className='pricingDescription'>Escolha seu plano de internet residencial</p>
            </div>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                loop={true}
                // autoplay={{
                //     delay: 4500,
                //     disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {CardPricing.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Card cdn={card.cdn} mega={card.mega} name={card.name} price={card.price} down={card.downloadValue} up={card.uploadValue} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
