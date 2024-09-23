import React, { useEffect, useRef } from 'react';
import './navbarback.css'


function NavbarBackground(props){
    
    const canvasRef = useRef(null);
    const columns = Math.floor(window.innerWidth / 20);
    const matrix = useRef(Array.from({ length: columns }, () => 0));

    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'hsl(291, 100%, 50%)'; // purple color

            ctx.font = '15pt Arial ';

            matrix.current.forEach((value, index) => {
                const text = String.fromCharCode(Math.floor(Math.random() * 128));
                const x = index * 20;
                const y = value * 20;
                ctx.fillText(text, x, y);
                if (y > canvas.height && Math.random() > 0.975) {
                    matrix.current[index] = 0;
                }
                matrix.current[index]++;
            });

            requestAnimationFrame(draw);
        };



        draw();

        // Limpar o intervalo quando o componente for desmontado
        return () => cancelAnimationFrame(draw);
    }, []);








    // return(
    //     <section className="container2">
    //         <div classNames="matrix-container">
    //      <canvas ref={canvasRef} id="matrix" />
    //         </div>
    //     </section>
    // )
    return(
        <section className="navbarBackground" id='pagetop'>
              <div classNames="matrix-container">
                <canvas ref={canvasRef} id="matrix" />
                <div className='apresentationsContainer'>
                {/* Fazer primeiro o carrossel para os pricing e depois usar um container
                    transparente aqui para mostrar dois textos:
                    
                    Independentemente do tamanho da sua empresa, nós temos a solução de conectividade
                    perfeita para você!

                    Oferecemos links dedicados de 10 Mbps a 10 Gbps e planos corporativos com o que há 
                    de mais eficiente em atendimento pós-venda.

                    Nosso Núcleo de Operações de Rede é totalmente automatizado, permitindo ações proativas 
                    na resolução de possíveis problemas.

                    Entre em contato com o nosso setor de vendas e solicite uma visita para conhecer nossos 
                    produtos.








                    Banda Larga Viaband: Conectando um Mundo Melhor

                    Na Viaband, acreditamos no poder da conexão para transformar vidas. 
                    Com nossa banda larga de alta velocidade, você pode explorar novas oportunidades, 
                    colaborar globalmente e desfrutar de um mundo mais conectado. Seja para sua casa ou empresa, 
                    oferecemos soluções de internet que vão além da simples conexão – nós conectamos você a um 
                    mundo melhor.

                    */}
                </div>
             </div>
        </section>
    )
}



export default NavbarBackground