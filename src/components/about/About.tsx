import React from 'react'
import Image from 'next/image'
import { AboutContainer, AboutSectionContainer, SectionTitle, ValuesSectionContainer } from './styles'
import { FaGraduationCap } from 'react-icons/fa'
import { BsFillCameraVideoFill, BsTrophyFill } from 'react-icons/bs'

import csfImage from '@/src/assets/logo_home.png';
export default function About() {
    return (
        <AboutContainer>
            <AboutSectionContainer>
                <div className="image-container">
                    <Image src={csfImage} alt={''}></Image>
                </div>
                <SectionTitle className='section-title'>
                    <h2>Sobre a CSF Digital</h2>
                    <p>&nbsp;&nbsp;&nbsp;A CSF SERVIÇOS DIGITAIS LTDA atua no campo de Soluções de Impressão e Documentos Digitais, abrangendo tanto o mercado corporativo como governamental. Através da experiência adquirida em dez anos de mercado, reunimos colaboradores especialistas nas áreas técnicas e tecnológicas evidenciando assim, a expertise ímpar no desenvolvimento e implementação de projetos. Com isso, a CSF é reconhecida, tanto no mercado quanto por seus clientes, como uma empresa especializada em Projetos de Outsourcing, munida de equipamentos e ferramentas de software de alta complexidade técnica garantindo a excelência em seus serviços prestados. Além da Matriz em São Luís - MA e a filial na cidade de Fortaleza - CE, a CSF conta com técnicos residentes em todos os estados do Nordeste do Brasil, com contrato amplo de outsourcing no setor Bancário, sendo um dos maiores players deste segmento.</p>
                </SectionTitle>
            </AboutSectionContainer>

            <ValuesSectionContainer>
                <div className='values'>
                    <div className='value'>
                        <div className="title">
                            <FaGraduationCap size={50}/>
                            <h2>Missão</h2>
                        </div>

                        <p>&nbsp;&nbsp;&nbsp;Prover excelência em soluções e serviços na área de produção e armazenagem de documentos, de forma atrativa e viável aos clientes, com retorno positivo sobre o investimento.</p>
                    </div>
                    <div className='value'>
                        <div className="title">
                            <BsFillCameraVideoFill size={40}/>
                            <h2>Visão</h2>
                        </div>

                        <p>&nbsp;&nbsp;&nbsp;Ser reconhecida, até dezembro de 2020, como a maior, mais capacitada e lucrativa empresa de outsourcing na área de documentos na região Nordeste do Brasil.</p>
                    </div>

                </div>
                <div className='value-content'>
                    <div className="title">
                        <BsTrophyFill size={40}/>
                        <h2>Valores</h2>
                    </div>
                    <ul>
                        <li>
                            1. O cliente está em primeiro plano;
                        </li>
                        <li>
                            2. Trabalhamos com pessoas qualificadas, motivadas e prestativas;
                        </li>
                        <li>
                            3. Propiciamos dignidade e respeito aos funcionário e colaboradores:
                        </li>
                        <li>
                            4. Vivemos a tecnologia no estado da arte;
                        </li>
                        <li>
                            5. Buscamos Qualidade e Excelência em tudo que fazemos;
                        </li>
                        <li>
                            6. Nossos negócios devem ser rentáveis;
                        </li>
                        <li>
                            7. Cumprimos nossas responsabilidades sociais e ambientais;
                        </li>
                    </ul>
                </div>
            </ValuesSectionContainer>
        </AboutContainer>
    )
}
