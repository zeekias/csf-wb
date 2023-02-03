import React from 'react';
import Image from 'next/image';
import { ContactContainer, SectionsContainer, SectionStyled, SectionTitle } from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
export default function Contact() {

    return (
        <ContactContainer>

            <SectionTitle>
                <h2>Informações para contato</h2>
                <p>A CSF conta com filiais nas cidades de São Luís - MA e Fortaleza - CE, estruturadas com as áreas: Comercial, Técnica, Sistemas, Logística, Contábil, Financeira e Administrativa.</p>
            </SectionTitle>


            <SectionsContainer>
                <SectionStyled>
                    <div className='section-info'>
                        <h3>CSF Digital • São Luís - MA</h3>
                        <div className="info-container">
                            <div className="info phone-and-fax">
                                <div className="icon-container">
                                    <BsFillTelephoneFill color='rgb(196, 51, 54)' />
                                </div>
                                <div className='info-content phone'>
                                    <h4>Ligue agora</h4>
                                    <a href=""><span>(98) 3301-2400</span></a>
                                </div>
                            </div>
                            <div className="info email-container">
                                <div className="icon-container">
                                    <MdEmail color='rgb(196, 51, 54)' />
                                </div>
                                <div className='info-content email'>
                                    <h4>Envie uma mensagem</h4>
                                    <a href=""><span>vendas@csfdigital.com.br</span></a>
                                </div>
                            </div>
                            <div className="info location-container">
                                <div className="icon-container">
                                    <MdLocationOn color='rgb(196, 51, 54)' />
                                </div>
                                <div className='info-content location'>
                                    <h4>Localização</h4>
                                    <span>Av. dos Holandeses, Qda. 32, Nº 1, Ed. Praia Shopping | Lojas 06 e 07, - Calhau, São Luís-MA, Cep: 65071-380</span>
                                </div>
                            </div>
                        </div>
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31888.41390090298!2d-44.254794!3d-2.489826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdea18629a3df9f7a!2sCSF%20Servi%C3%A7os%20Digitais%20LTDA!5e0!3m2!1spt-BR!2sus!4v1675175582961!5m2!1spt-BR!2sus" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </SectionStyled>
                <SectionStyled>
                    <div className='section-info'>
                        <h3>CSF Digital • Fortaleza - CE</h3>
                        <div className="info-container">
                            <div className="info phone-and-fax">
                                <div className="icon-container">
                                    <BsFillTelephoneFill color='rgb(196, 51, 54)' />
                                </div>
                                <div className='info-content phone'>
                                    <h4>Ligue agora</h4>
                                    <a href=""><span>(85) 3022-0900 </span></a>
                                </div>
                            </div>
                            <div className="info email-container">
                                <div className="icon-container">
                                    <MdEmail color='rgb(196, 51, 54)' />
                                </div>
                                <div className='info-content email'>
                                    <h4>Envie uma mensagem</h4>
                                    <a href=""><span>vendas@csfdigital.com.br</span></a>
                                </div>
                            </div>
                            <div className="info location-container">
                                <div className="icon-container">
                                    <MdLocationOn color='rgb(196, 51, 54)' />
                                </div>
                                <div className='info-content location'>
                                    <h4>Localização</h4>
                                    <span>Rua Raimundo Oliveira Filho (antiga Rua Paulo Morais), Nº 332 - Papicu, Fortaleza-CE. CEP: 60175-175</span>
                                </div>
                            </div>
                        </div>
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31850.707367430008!2d-38.481601!3d-3.736228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8da762e13d7da9!2sCSF%20Digital!5e0!3m2!1spt-BR!2sus!4v1675179322126!5m2!1spt-BR!2sus" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </SectionStyled>
            </SectionsContainer>

        </ContactContainer>
    )
}
