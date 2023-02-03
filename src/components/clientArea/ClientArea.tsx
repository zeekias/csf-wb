import React from 'react'
import Image from 'next/image';
import { ClientAreaContainer, ContactSection, FaqSection, SectionsContainer, SectionTitle } from './styles'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
export default function ClientArea() {
    return (
        <ClientAreaContainer>

            <SectionTitle>
                <h2>Área do cliente</h2>
                <p>Queremos que você encontre todas as respostas que procura por aqui.
                    Tudo de forma simples, prática e ágil.</p>
            </SectionTitle>
            <SectionsContainer>
                <ContactSection>
                    <div className="title">
                        <h3>Entrar em contato</h3>
                        <span>Você pode usar um dos meios de comunicação abaixo para contato ou abertura de chamado</span>
                    </div>

                    <div className="contact-fonts">
                        <div className="content">
                            <div className="contact">
                                <h4>Maranhão</h4>
                                <div className="info phone-and-fax">
                                    <div className="icon-container">
                                        <BsFillTelephoneFill color='rgb(196, 51, 54)' />
                                    </div>
                                    <div className='info-content phone'>
                                        <a href=""><span>(98) 3301-2414</span></a>
                                    </div>
                                </div>
                                <div className="info email-container">
                                    <div className="icon-container">
                                        <MdEmail color='rgb(196, 51, 54)' />
                                    </div>
                                    <div className='info-content email'>
                                        <a href=""><span>atendimento.ma@csfdigital.com.br</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact">
                                <h4>Ceará</h4>
                                <div className="info phone-and-fax">
                                    <div className="icon-container">
                                        <BsFillTelephoneFill color='rgb(196, 51, 54)' />
                                    </div>
                                    <div className='info-content phone'>
                                        <a href=""><span>(85) 3299-5516</span></a>
                                    </div>
                                    <div className="icon-container">
                                        <BsFillTelephoneFill color='rgb(196, 51, 54)' />
                                    </div>
                                    <div className='info-content phone'>
                                        <a href=""><span>(85) 3299-5517</span></a>
                                    </div>
                                </div>

                                <div className="info email-container">
                                    <div className="icon-container">
                                        <MdEmail color='rgb(196, 51, 54)' />
                                    </div>
                                    <div className='info-content email'>
                                        <a href=""><span>sac@csfdigital.com.br</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="chamado">
                                <Image src={''} alt={''}></Image>
                                <div className="button-container">
                                    <h4>Abertura de Chamado</h4>

                                    <a href="https://psfx.com.br/pws/index.php/pws" target={'_blank'}>
                                        <span>
                                            Portal Web de Serviços
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </ContactSection>

                <FaqSection >
                    <div className="title">
                        <h3>EVITE O DESPERDÍCIO DE SUPRIMENTO</h3>
                        <span>Siga as instruções básicas para melhor conservação e desempenho dos cartuchos</span>
                    </div>
                    <div className="instructions">

                        <ul className='list'>
                            <li>1. Evitar o desperdício de toner, utilizando o cartucho até o final.</li>
                            <li>2. Caso o toner apresente defeito, comunicar imediatamente
                                através do Portal de Serviço ou pelo CAC.
                            </li>
                            <li>3. Para a devolução do toner vazio ou com defeito, manter a
                                embalagem original.
                            </li>
                            <li>4. Manusear o toner com cuidado, evitando quedas e movimentos
                                bruscos para melhor desempenho do produto.</li>
                            <li>5. Agitar o toner antes de instalar na impressora; não colocar na
                                posição vertical ou inclinada evitando vazamentos e falhas.</li>
                        </ul>
                        <p className='observation'> <strong>Caso o produto esteja em desacordo com o solicitado, o cliente
                            deverá recusar o recebimento do pedido, registrar o motivo e
                            comunicar o CAC. </strong></p>
                    </div>

                </FaqSection>

            </SectionsContainer>

        </ClientAreaContainer>
    )
}
