import Image from 'next/image'

import React, { useEffect, useRef, useState } from 'react'
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
import { emailService } from '@/src/services/emailService';
import ReCAPTCHA from "react-google-recaptcha"
import { APP_SITE_KEY } from '@/src/services/captchaService';
import { Carousel } from 'react-responsive-carousel';

import app from '@/firebase/clientApp';

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from 'firebase/firestore';

interface iProps {
    handleNavBarOption: (optionNumber: number) => void;
}

export default function Home(props: iProps) {

    const formContactHome = useRef(null);
    const [email, setEmail] = useState('');
    const [isRenderOnServer, setIsRenderOnServer] = useState(true);
    const [value, loading, error] = useCollection(
        collection(getFirestore(app), 'hooks'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    useEffect(() => setIsRenderOnServer(false), []);
    
    const sendEmail = async (e: any) => {
        e.preventDefault();
        await emailService.sendEmail(formContactHome.current);
    };



    return (
        <HomeStyled>
            <HomeSliderSection>
                <CarouselComponent />
            </HomeSliderSection>

            <RepresentativesSection>
                <span>
                    Collection:{' '}
                    {value?.docs.map((doc) => (
                        <React.Fragment key={doc.id}>
                            {JSON.stringify(doc.data())},{' '}
                        </React.Fragment>
                    ))}
                </span>
                <SectionTitle>
                    <h2>Focado em boas impressões</h2>
                    <p>Soluções de Impressão e Documentos Digitais, abrangendo tanto o mercado corporativo como governamental. Estamos presentes com técnicos residentes em todos os estados do Nordeste do Brasil, com contrato amplo de outsourcing no setor Bancário, sendo um dos maiores players deste segmento. Trabalhamos com os representantes autorizados: Kyocera, Samsung e Xerox.</p>
                </SectionTitle>


                <ul className="logos-list">


                    <li ><Image src={samsungLogo} alt={''} width={350} /></li>
                    <li><Image src={xeroxLogo} alt={''} width={350} /></li>
                    <li ><Image src={hpLogo} alt={''} width={120} /></li>
                    <li ><Image src={kyoceraLogo} alt={''} width={350} /></li>


                    <li ><Image src={ricohLogo} alt={''} width={220} /></li>
                    <li ><Image src={brotherLogo} alt={''} width={220} /></li>

                </ul>
                <ul className="logos-list mobile" >
                    {!isRenderOnServer ?
                        
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false}>

                            <li ><Image src={samsungLogo} alt={''} width={350} /></li>
                            <li><Image src={xeroxLogo} alt={''} width={350} /></li>
                            <li ><Image src={hpLogo} alt={''} width={120} /></li>
                            <li ><Image src={kyoceraLogo} alt={''} width={350} /></li>


                            <li ><Image src={ricohLogo} alt={''} width={220} /></li>
                            <li ><Image src={brotherLogo} alt={''} width={220} /></li>
                        </Carousel> : ""}
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

                <ul className="soluctions-list mobile">
                    {!isRenderOnServer ?
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false}>
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
                        </Carousel> : ""}
                </ul>

                <div className='button-container'><button onClick={() => props.handleNavBarOption(2)}><span>Veja todos</span></button></div>
            </SoluctionsSection>

            <HomeContactSection>

                <div className='form'>
                    <div className="form-title">
                        <h3>Entre em contato</h3>
                        <span>Boas impressões fecham negócio</span>
                    </div>

                    <form ref={formContactHome} className='form-info' onSubmit={sendEmail} method='POST'>
                        <div className="f nome">
                            <label>Seu nome</label>
                            <input type="text" placeholder='Meu nome' name='from_name' />
                        </div>
                        <div className="f email">
                            <label>Seu E-mail</label>
                            <input type="text" placeholder='exemplo@meuemail.com' name='email' onChange={(e) => setEmail(e.target.value)} />
                            <input hidden type="text" defaultValue={email} name='reply_to' />
                        </div>
                        <div className="f mensagem">
                            <label>Uma mensagem</label>
                            <textarea placeholder='Gostaria de uma consultoria...' name='message' />
                        </div>
                        <div className="captcha-container">
                            <ReCAPTCHA sitekey={APP_SITE_KEY} style={{ width: "100%", height: "100%" }} />
                        </div>
                        <button className="g-recaptcha" type='submit'><span>ENVIAR</span></button>
                    </form>
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
                            <CircularProgressbar value={70} text={`${"230000000".toLocaleString().padStart(10, "" + ".")}`}
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
