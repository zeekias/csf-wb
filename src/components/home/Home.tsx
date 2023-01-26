import Image from 'next/image'
import React, { useState } from 'react'
import { HomeContactSection, HomeSliderSection, HomeStyled, RepresentativesSection, SectionTitle, SoluctionsSection } from './styles'
import { IoMdCart } from "react-icons/io";
import { FaPrint, FaWrench } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import samsungLogo from '@/src/assets/logo-samsung-bgnone.png'
import kyoceraLogo from '@/src/assets/logo-kyocera-bgnone.png'
import xeroxLogo from '@/src/assets/logo-xerox-bgnone.png'
import hpLogo from '@/src/assets/hp-logo.png'
import ricohLogo from '@/src/assets/ricoh-logo.png'
import brotherLogo from '@/src/assets/brother-logo.png'

import CarouselComponent from '../carousel/CarouselComponent';


export default function Home() {

    const date = new Date();
    const numeroDoMes = date.getMonth();
    const numeroDoDiaDoMes = date.getDate();
    const horaAtual = date.getUTCHours();
    const minutosAtual = date.getUTCMinutes();
    const segundosAtual = date.getUTCSeconds();
    const quantidadeDeSegundosAtual = 15000000 * numeroDoMes + (numeroDoDiaDoMes - 1) * 24 * 60 * 60 + horaAtual * 60 * 60 + minutosAtual * 60 + segundosAtual;
    const quantidadeDeImpressoes = quantidadeDeSegundosAtual * 6;
    const contadorDeImpressoesAtual = quantidadeDeImpressoes + 2160000000;

    const [contadorDeImpressoes, setContadorDeImpressoes] = useState(contadorDeImpressoesAtual);

    const [percentage, setPercentage] = useState(quantidadeDeImpressoes - (15000000 * numeroDoMes));
    function incrementar() {
        let timer = setInterval(() => {
            clearInterval(timer);
            setContadorDeImpressoes(contadorDeImpressoes + 6);
            setPercentage(percentage + 6);
        }, 1000)
    }

    incrementar();

    return (
        <HomeStyled>
            <HomeSliderSection>
                <CarouselComponent />
            </HomeSliderSection>

            <RepresentativesSection>
                <SectionTitle>
                    <h2>Focado em boas impressões</h2>
                    <p>Soluções de Impressão e Documentos Digitais, abrangendo tanto o mercado corporativo como governamental. Estamos presentes com técnicos residentes em todos os estados do Nordeste do Brasil, com contrato amplo de outsourcing no setor Bancário, sendo um dos maiores players deste segmento. Trabalhamos com os representantes autorizados: Kyocera, Samsung e Xerox.</p>
                </SectionTitle>

                <ul className="logos-list">


                    <li ><Image src={samsungLogo} alt={''} width={350} /></li>
                    <li><Image src={xeroxLogo} alt={''} width={350} /></li>
                    <li ><Image src={kyoceraLogo} alt={''} width={350} /></li>


                    <li ><Image src={hpLogo} alt={''} width={120} /></li>
                    <li ><Image src={ricohLogo} alt={''} width={220} /></li>
                    <li ><Image src={brotherLogo} alt={''} width={220} /></li>

                </ul>
            </RepresentativesSection>

            <SoluctionsSection>
                <SectionTitle>
                    <h2>Nossas Soluções</h2>
                </SectionTitle>
                <ul className="soluctions-list">
                    <li>
                        <IoMdCart color='c43336' size={55} />
                        <h3>Vendas e Locações</h3>
                        <p>Equipamentos de pequeno, médio e grande porte, preto & branco e coloridos, com tecnologias Laser e Cera Sólida</p>
                    </li>
                    <li>
                        <FaWrench color='c43336' size={55} />
                        <h3>Assistência técnica</h3>
                        <p>Atuamos com técnicos treinados e certificados diretamente pelos fabricantes</p>
                    </li>
                    <li>
                        <MdOutlineComputer color='c43336' size={55} />
                        <h3>Processo de GED</h3>
                        <p>Gestão Eletrônica de Documentos. Tratamento e arquivamento digital para documentos</p>
                    </li>
                    <li>
                        <FaPrint color='c43336' size={55} />
                        <h3>Impressão com variáveis</h3>
                        <p>Impressão de Contracheques, cobranças, boletos bancários, material de marketing personalizado</p>
                    </li>
                </ul>
                <div className='button-container'><button><span>Veja todos</span></button></div>
            </SoluctionsSection>

            <HomeContactSection>

                <div className='form'>
                    <div className="form-title">
                        <h3>Entre em contato</h3>
                        <span>Boas impressões fecham negócio</span>
                    </div>

                    <div className='form-info'>
                        <div className="f nome">
                            <label>Seu nome</label>
                            <input type="text" placeholder='Meu nome' />
                        </div>
                        <div className="f email">
                            <label>Seu E-mail</label>
                            <input type="text" placeholder='exemplo@meuemail.com' />
                        </div>
                        <div className="f mensagem">
                            <label>Uma mensagem</label>
                            <textarea placeholder='Gostaria de uma consultoria...' />
                        </div>

                        <button><span>ENVIAR</span></button>
                    </div>
                </div>

                <div className='from-contact-section'>
                    <div className='contact-title'>
                        <h2>Nós temos o que você precisa</h2>
                        <p>Excelência em soluções e serviços na área de produção e armazenagem de documentos, de forma atrativa e viável aos clientes, com retorno positivo sobre o investimento.</p>
                    </div>
                    <ul className='progress-bar'>

                        <li className='a'>

                            <CircularProgressbar value={70} text={`210K+`}
                                styles={buildStyles({
                                    rotation: 0.85,
                                    strokeLinecap: 'butt',
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgb(196, 51, 54)`,
                                    textColor: 'white',
                                    trailColor: 'rgb(134, 142, 150, 0.5)',
                                    backgroundColor: 'red',
                                })} />
                            <span>Serviços</span>
                        </li>
                        <li className='b'>
                            <CircularProgressbar value={90} text={`80+`}
                                styles={buildStyles({
                                    rotation: 0.7,
                                    strokeLinecap: 'butt',
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgb(196, 51, 54)`,
                                    textColor: 'white',
                                    trailColor: 'rgb(134, 142, 150, 0.5)',
                                    backgroundColor: 'red',
                                })} />
                            <span>Clientes</span>
                        </li>
                        <li className='c'>
                            <CircularProgressbar value={80} text={`33+`}
                                styles={buildStyles({
                                    rotation: 0.8,
                                    strokeLinecap: 'butt',
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgb(196, 51, 54)`,
                                    textColor: 'white',

                                    trailColor: 'rgb(134, 142, 150, 0.5)',
                                    backgroundColor: 'red',
                                })} />
                            <span>Parceiros</span>
                        </li>
                        <li className='d'>
                            <CircularProgressbar value={percentage} text={`${contadorDeImpressoes.toLocaleString().padStart(10, "" + ".")}`}
                                styles={buildStyles({
                                    rotation: 0.8,
                                    strokeLinecap: 'butt',
                                    textSize: '12px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgb(196, 51, 54)`,
                                    textColor: 'white',

                                    trailColor: 'rgb(134, 142, 150, 0.5)',
                                    backgroundColor: 'red',
                                })} maxValue={15000000} />
                            <span>Impressões</span>
                        </li>
                    </ul>

                </div>

            </HomeContactSection>

        </HomeStyled>
    )
}
