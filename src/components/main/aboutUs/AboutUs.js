import React, { useEffect, useState, useRef } from 'react';
import './aboutUs.css';
import ScrollReveal from 'scrollreveal';

import image1 from '../../../imgs/aboutUs.jpg';
import image2 from '../../../imgs/nossoServicosImg.jpg';

const loremText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`;

function AboutUs() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [numberThree, setNumberThree] = useState(0);
    const [activeCounter, setActiveCounter] = useState(null);

    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                const targetRef = entry.target;
                if (targetRef === refOne.current && activeCounter === null) {
                    setActiveCounter('one');
                } else if (targetRef === refTwo.current && activeCounter === null) {
                    setActiveCounter('two');
                } else if (targetRef === refThree.current && activeCounter === null) {
                    setActiveCounter('three');
                }
            }
        }, { threshold: 0.1 });

        if (refOne.current) observer.observe(refOne.current);
        if (refTwo.current) observer.observe(refTwo.current);
        if (refThree.current) observer.observe(refThree.current);

        return () => {
            if (refOne.current) observer.unobserve(refOne.current);
            if (refTwo.current) observer.unobserve(refTwo.current);
            if (refThree.current) observer.unobserve(refThree.current);
        };
    }, [activeCounter]);

    useEffect(() => {
        let intervalId;

        if (activeCounter === 'one') {
            intervalId = setInterval(() => {
                setNumberOne(prevNumber => {
                    const newNumber = prevNumber + 1;
                    if (newNumber >= 20) {
                        clearInterval(intervalId);
                        setActiveCounter('two'); // Move para o próximo contador
                        return newNumber;
                    }
                    return newNumber;
                });
            }, 30);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [activeCounter]);

    useEffect(() => {
        let intervalId;

        if (activeCounter === 'two') {
            intervalId = setInterval(() => {
                setNumberTwo(prevNumber => {
                    const newNumber = prevNumber + 1;
                    if (newNumber >= 17) {
                        clearInterval(intervalId);
                        setActiveCounter('three'); // Move para o próximo contador
                        return newNumber;
                    }
                    return newNumber;
                });
            }, 30);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [activeCounter]);

    useEffect(() => {
        let intervalId;

        if (activeCounter === 'three') {
            intervalId = setInterval(() => {
                setNumberThree(prevNumber => {
                    const newNumber = prevNumber + 1;
                    if (newNumber >= 83) {
                        clearInterval(intervalId);
                        return newNumber;
                    }
                    return newNumber;
                });
            }, 30);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [activeCounter]);


    // scroll animation



    return (
        <section className="aboutSection">
            <div className='aboutPart1'>
                <h1 className='aboutUsTittle'>Sobre Nós</h1>
                <div className='aboutUsPart1Info'>
                    <div className='AboutUsLinksSection'>
                        <p className='AboutUsLinks'>Sobre Nós</p>
                        <p className='AboutUsLinks'>Serviços</p>
                        <p className='AboutUsLinks'>Diferenciais</p>
                    </div>
                    <div className='AboutUsText1'>
                        Desde sua fundação no início do século, a VIABAND tem se destacado por um
                        compromisso contínuo com o atendimento ao cliente, seu principal objetivo.
                        Com uma equipe técnica altamente especializada, a empresa busca
                        incessantemente a excelência no suporte pós-venda e valoriza o
                        bem-estar dos clientes.
                        <br />
                        <br />
                        A VIABAND está na vanguarda da tecnologia, inovação e criatividade.
                        Graças ao desenvolvimento de ferramentas avançadas, conseguimos
                        otimizar a gestão e oferecer serviços mais eficientes e competitivos.
                        Isso nos coloca em igualdade com as maiores operadoras, proporcionando
                        preços excepcionais para conexões estáveis e de alta disponibilidade.
                        <br />
                        <br />
                        Com um crescimento sólido e sustentável, estamos sempre prontos para
                        atender às suas necessidades. Junte-se a nós e experimente um atendimento
                        que reflete nosso compromisso com a qualidade e a satisfação.
                    </div>
                </div>
                <div className='BackgroundAourTeam'>
                </div>
            </div>
            <div className='aboutPart2'>
                <div className='aboutpart2InfoLeft'>
                    <h1 className='aboutUsTittleTwo'>Serviços</h1>
                    <p className='AboutUsText2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className='aboutpart2InfoRight'>
                    <img className='NossoServicosImg' src={image1} alt='Nossos Serviços (imagem)' />
                </div>
            </div>
            <div className='aboutPart3'>
                <div className='aboutPart3Left'>
                    <h1 className='titleAbout3'>Diferenciais</h1>
                    <p className='AboutUsText3'>{loremText}</p>
                </div>
                <div className='aboutPart3Right'>
                    <div className='cardAbout'>
                        <h3 className='titleCardAbout'>Lorem</h3>
                        <p className='descCardAbout'>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since the
                            1500s.
                        </p>
                        <p className='NumberCount' ref={refOne}> +{numberOne}</p>
                    </div>
                    <div className='cardAbout'>
                        <h3 className='titleCardAbout'>Lorem</h3>
                        <p className='descCardAbout'>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since the
                            1500s.
                        </p>
                        <p className='NumberCount' ref={refTwo}> +{numberTwo}</p>
                    </div>
                    <div className='cardAbout'>
                        <h3 className='titleCardAbout'>Lorem</h3>
                        <p className='descCardAbout'>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since the
                            1500s.
                        </p>
                        <p className='NumberCount' ref={refThree}> +{numberThree}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
