import Image from 'next/image';
import React, { useState } from 'react';

import { SectionTitle, SoluctionsContainer, SoluctionsList } from './styles'
import locacaoJPG from '@/src/assets/locacao.jpg'
import manutencaoPNG from '@/src/assets/manutencao.png'
import processoGEDPNG from '@/src/assets/processo-ged.png'
import gerenciamentoImpressaoPNG from '@/src/assets/gerenciamento-impressao.png'
import impressaoComDadosVariaveisPNG from '@/src/assets/impressao-com-dados-variaveis.png'
import divisaoGraficaPNG from '@/src/assets/divisao-grafica.png'
import ComponentSelected from './componentSelected/ComponentSelected';
import { BiSearchAlt } from 'react-icons/bi'

export default function Soluctions() {
    const [soluctionNumberSelected, setSoluctionNumberSelected] = useState(-1);
    const [animate, setAnimate] = useState(false);
    function updateAnimateState() {
        setAnimate(false);
    }

    function handleSoluctionSelected(soluctionNumber: number) {
        if (soluctionNumber === soluctionNumberSelected) return;
        setAnimate(!animate);
        setSoluctionNumberSelected(soluctionNumber);
        if(window) window.scroll(0,200);
    }
    return (
        <SoluctionsContainer>
            <SectionTitle>
                <h2>Nossas soluções</h2>
                <p>A experiência acumulada na área de Equipamentos, Softwares e Projetos, se dá pela capacidade técnica do corpo de colaboradores, em sua grande maioria proveniente de multinacionais que atuam no Mercado Reprográfico.</p>
            </SectionTitle>
            {
                soluctionNumberSelected != -1 ?
                    <ComponentSelected soluctionArrayPosition={soluctionNumberSelected} animate={animate} setAnimate={updateAnimateState} />
                    : <></>

            }
            <SoluctionsList>
                <li >
                    <div className={`image-container ${soluctionNumberSelected === 0 && 'selected'}`}>
                        <div className="icon-container">
                            <BiSearchAlt className='search-icon' size={30} color={'white'} onClick={() => {
                                handleSoluctionSelected(0)
                            }} />
                        </div>
                        <Image src={locacaoJPG} alt={''} />
                    </div>
                    <div className='title'>
                        <h4>Vendas e Locações</h4>
                        <span>Equipamentos, suprimentos e peças</span>
                    </div>
                    <p>Equipamentos de pequeno, médio e grande porte, preto & branco e coloridos, com tecnologias Laser e Cera Sólida</p>
                </li>
                <li >
                    <div className={`image-container ${soluctionNumberSelected === 1 && 'selected'}`}>
                        <div className="icon-container">
                            <BiSearchAlt className='search-icon' size={30} color={'white'} onClick={() => {
                                handleSoluctionSelected(1)
                            }} />
                        </div>
                        <Image src={manutencaoPNG} alt={''}></Image>
                    </div>
                    <div className='title'>
                        <h4>Assistência técnica</h4>
                        <span>Autorizada</span>
                    </div>
                    <p>Atuamos com técnicos treinados e certificados diretamente pelos fabricantes</p>
                </li>
                <li >
                    <div className={`image-container ${soluctionNumberSelected === 2 && 'selected'}`}>
                        <div className="icon-container">
                            <BiSearchAlt className='search-icon' size={30} color={'white'} onClick={() => {
                                handleSoluctionSelected(2)
                            }} />
                        </div>
                        <Image src={processoGEDPNG} alt={''}></Image>
                    </div>
                    <div className='title'>
                        <h4>Processo de GED</h4>
                        <span>Digitalização incorporada</span>
                    </div>
                    <p>Gestão Eletrônica de Documentos. Acesso pleno aos documentos e às informações necessárias à tomada diária de decisões</p>
                </li>
                <li >
                    <div className={`image-container ${soluctionNumberSelected === 3 && 'selected'}`}>
                        <div className="icon-container">
                            <BiSearchAlt className='search-icon' size={30} color={'white'} onClick={() => {
                                handleSoluctionSelected(3)
                            }} />
                        </div>
                        <Image src={gerenciamentoImpressaoPNG} alt={''}></Image>
                    </div>
                    <div className='title'>
                        <h4>Soluções de gerenciamento</h4>
                        <span>Impressão e cópia</span>
                    </div>
                    <p>Contabilização de cópias, digitalizações, fax, e tudo com acompanhado via WEB</p>
                </li>
                <li >
                    <div className={`image-container ${soluctionNumberSelected === 4 && 'selected'}`}>
                        <div className="icon-container">
                            <BiSearchAlt className='search-icon' size={30} color={'white'} onClick={() => {
                                handleSoluctionSelected(4)
                            }} />
                        </div>
                        <Image src={impressaoComDadosVariaveisPNG} alt={''}></Image>
                    </div>
                    <div className='title'>
                        <h4>Impressão com variáveis</h4>
                        <span>Dados Variáveis</span>
                    </div>
                    <p>Boletos bancários, carnês, malas diretas personalizadas, relatórios personalizados</p>
                </li>
                <li>
                    <div className={`image-container ${soluctionNumberSelected === 5 && 'selected'}`}>
                        <div className="icon-container">
                            <BiSearchAlt className='search-icon' size={30} color={'white'} onClick={() => {
                                handleSoluctionSelected(5)
                            }} />
                        </div>
                        <Image src={divisaoGraficaPNG} alt={''}></Image>
                    </div>
                    <div className='title'>
                        <h4>Divisão gráfica</h4>
                        <span>(Serviços internos)</span>
                    </div>
                    <p>Produção para Gráfica Digital, apoiado por equipe própria de diagramadores e pessoal de acabamento</p>
                </li>
            </SoluctionsList>
        </SoluctionsContainer>
    )
}
