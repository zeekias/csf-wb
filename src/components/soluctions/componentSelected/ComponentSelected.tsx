import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ComponentSelectedContainer } from './styles'
import locacaoJPG from '@/src/assets/locacao.jpg'
import manutencaoPNG from '@/src/assets/manutencao.png'
import processoGEDPNG from '@/src/assets/processo-ged.png'
import gerenciamentoImpressaoPNG from '@/src/assets/gerenciamento-impressao.png'
import impressaoComDadosVariaveisPNG from '@/src/assets/impressao-com-dados-variaveis.png'
import divisaoGraficaPNG from '@/src/assets/divisao-grafica.png'
import { CSSTransition } from 'react-transition-group';

interface iProps {
    soluctionArrayPosition: number;
    animate: boolean;
    setAnimate: () => void;
}

const vendasELocacoes = {
    imageObject: locacaoJPG,
    title: 'Vendas e Locações',
    subTitle: 'Equipamentos, suprimentos e peças',
    description: 'Atuamos com toda a linha de produtos das marcas Xerox e Kyocera: Equipamentos de pequeno, médio e grande porte, preto & branco e coloridos, com tecnologias Laser e Cera Sólida, provendo, além dos equipamentos, os suprimentos e peças originais de fábrica; Na linha de equipamentos temos: Impressoras, copiadoras, fax, scanners simples, scanners profissionais, máquinas multifuncionais, plotters para aplicações CAD (arquitetura) e plotters para aplicações GIS (imagens).'
}

const assistenciaTecnica = {
    imageObject: manutencaoPNG,
    title: 'Assistência Técnica',
    subTitle: 'Autorizada',
    description: 'Atuamos com técnicos treinados e certificados diretamente pelos fabricantes, com suporte de analistas de sistemas e equipe de Tecnologia da Informação, dando aos nossos clientes a garantia de excelentes níveis de serviço.'
}

const processoDeGed = {
    imageObject: processoGEDPNG,
    title: 'Processo de GED',
    subTitle: 'Digitalização incorporada',
    description: 'Temos equipe especializada em projeto e implantação de Soluções de Digitalização, Tratamento e Arquivamento Digital para Documentos; Contamos com parcerias de fabricantes especializados (empresas: Autostore, Light Infocon e Microsoft).'
}

const gerenciamento = {
    imageObject: gerenciamentoImpressaoPNG,
    title: 'Gerenciamento',
    subTitle: 'Impressão e cópia',
    description: 'Temos total domínio na área de Gerenciamento de Impressão, incluindo a contabilização de cópias, digitalizações e fax, com implantação de cotas por usuários e/ou grupos de usuários, tudo acompanhado via WEB, com geração de relatórios personalizados e customizáveis pelo próprio cliente (software de BI).'
}

const impressaoComVariaveis = {
    imageObject: impressaoComDadosVariaveisPNG,
    title: 'Impressão com variáveis',
    subTitle: 'Dados Variáveis',
    description: 'Dominamos a tecnologia de impressão com dados variáveis, provenientes diretamente de servidores de dados e/ou mainframes. Nossos principais serviços nesta área são: Impressão de Contracheques do Governo do Estado do Maranhão, impressão de cobranças da CAEMA (Cia de Águas e Esgotos do Maranhão), impressão de boletos bancários, impressão de material de marketing personalizado; Produção de documentos diversos com dados variáveis (boletos bancários, carnês, malas diretas personalizadas, relatórios personalizados...);'
}

const divisaoGrafica = {
    imageObject: divisaoGraficaPNG,
    title: 'Divisão gráfica',
    subTitle: '(Serviços Internos)',
    description: 'Contamos com os mais modernos equipamentos de produção para Gráfica Digital, apoiado por equipe própria de diagramadores e pessoal de acabamento, instalada num ambiente que proporciona segurança e confiabilidade ao cliente;'
}

const soluctionsArray = [vendasELocacoes, assistenciaTecnica, processoDeGed, gerenciamento, impressaoComVariaveis, divisaoGrafica];

export default function ComponentSelected(props: iProps) {
    const nodeRef = useRef(null);
    return (
        <ComponentSelectedContainer>

            <CSSTransition nodeRef={nodeRef} in={props.animate} onEnter={()=>props.setAnimate()} timeout={200} classNames="">
                <div ref={nodeRef} className="content">
                    <div className="image-container">
                        <Image src={soluctionsArray[props.soluctionArrayPosition].imageObject} alt={''}></Image>
                    </div>
                    <div className="title-and-description">
                        <div className="title">
                            <h2>{soluctionsArray[props.soluctionArrayPosition].title}</h2>
                            <span>{soluctionsArray[props.soluctionArrayPosition].subTitle}</span>
                        </div>
                        <div className="description">
                            <p>
                                {soluctionsArray[props.soluctionArrayPosition].description}
                            </p>
                        </div>
                    </div>
                </div>

            </CSSTransition>
        </ComponentSelectedContainer>
    )
}
