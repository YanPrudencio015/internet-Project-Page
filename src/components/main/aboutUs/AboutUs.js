import React, { useEffect, useState } from 'react';
import './aboutUs.css';
import image from '../../../imgs/viabandTeam.jpg';
import clientImg from '../../../imgs/clientPhoto/client7.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const text = `Fundada no início do século, a VIABAND tem se destacado no mercado há mais de 15 anos, sempre focada no bom atendimento ao cliente, seu principal objetivo. Com uma equipe técnica altamente especializada e comprometida com a satisfação do cliente, a VIABAND persegue incansavelmente a excelência no suporte pós-venda. Nosso time não só possui um alto grau de conhecimento técnico, mas também valoriza e prioriza o bem-estar e a satisfação dos nossos clientes. A VIABAND se orgulha de estar na vanguarda da tecnologia, inovação e criatividade. Desenvolvemos importantes ferramentas que nos permitem otimizar nossa gestão, oferecendo mais com menos e garantindo uma competição saudável e justa. Isso nos coloca no mesmo patamar das grandes operadoras do mercado, oferecendo excelentes preços por uma conexão estável e de alta disponibilidade. Venha fazer parte da família VIABAND. Com um crescimento sólido e sustentável, estamos sempre presentes para atender você!`;

const loremText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

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

function AboutUs() {
    const { slidesPerView, slideDirection } = useSlideSettings();

    return (
        <section className="aboutSection">
            <div className="aboutSectionLeft">
                <h1 className='sobreNostitulo'> Sobre Nós</h1>
                <div className="aboutUsImage">
                    <img className="img" src={image} alt="Viaband Team" />
                </div>
                <div className="AboutUsTextSection">
                    <p className="AboutUsText">{text}</p>
                </div>
            </div>

            <div className="aboutSectionRight">
                <div className="TestemunialsSection">
                    <h1 className='clientTestimonials'>Depoimentos dos nossos clientes</h1>
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
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
