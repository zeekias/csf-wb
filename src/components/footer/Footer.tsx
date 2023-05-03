import React from 'react';
import Image from "next/image";
import { FooterStyled } from './styles';
import { FiClock } from "react-icons/fi";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { IoMdMail, IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";


import footerImage from '@/src/assets/footer.png';

export default function Footer() {

    const [iconColor, setIconColor] = useState(["ccc", "ccc", "ccc", "white"]);
    function changeIconColor(position: number = 0, isOver: boolean = true) {
        const aux = [...iconColor];
        aux[position] = isOver ? "c43336" : "ccc";
        if (position === 3) aux[position] = isOver ? "black" : "white";

        setIconColor(aux);
    }

    return (
        <FooterStyled>

            <div className="image-container">
                <Image src={footerImage} alt={'CSF-DIGITAL'} height={100} />
            </div>

            <ul className='content'>
                <li >
                    <h2>CSF Digital • São Luís - MA</h2>
                    <ul>
                        <li>
                            <BsFillTelephoneFill color="c43336" />
                            <a href="">
                                <span>TELEFONE:  (98) 3301-2400</span>
                            </a>
                        </li>
                        <li>
                            <IoMdMail color="c43336" />
                            <a href="">
                                <span>EMAIL:  vendas@csfdigital.com.br</span>
                            </a>
                        </li>
                        <li>
                            <FiClock color="c43336" />
                            <a href=""> 
                                <span>ABERTO:  08:00 às 12:30 e 13:30 às 18:00</span>
                            </a>
                        </li>
                        <li className='localization'>
                            <MdLocationOn color="c43336" size={18}/>
                            <a href="">
                                <span>LOCALIZAÇÃO:  Av. dos Holandeses, Qda. 32, Nº 1, Ed. Praia Shopping | Lojas 06 e 07, - Calhau, São Luís-MA, Cep: 65071-380</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='widget-about'>
                    <h2>CSF Digital • Fortaleza - CE</h2>
                    <ul>
                        <li>
                            <BsFillTelephoneFill color="c43336" />
                            <a href="">
                                <span>TELEFONE:  (85) 3022-0900</span>
                            </a>
                        </li>
                        <li>
                            <IoMdMail color="c43336" />
                            <a href="">
                                <span>EMAIL:  vendas@csfdigital.com.br</span>
                            </a>
                        </li>
                        <li>
                            <FiClock color="c43336" />
                            <a href="">
                                <span>ABERTO:  08:00 às 12:30 e 13:30 às 18:00</span>
                            </a>
                        </li>
                        <li className='localization'>
                            <MdLocationOn color="c43336" size={18}/>
                            <a  href="">
                                <span>LOCALIZAÇÃO:  Rua Raimundo Oliveira Filho (antiga Rua Paulo Morais), Nº 332 - Papicu, Fortaleza-CE. CEP: 60175-175</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Menus</h2>
                    <ul>
                        <li>
                            <IoIosArrowForward color='white' />
                            <span>Home</span>
                        </li>
                        <li>
                            <IoIosArrowForward color='white' />
                            <span>Sobre</span>
                        </li>
                        <li>
                            <IoIosArrowForward color='white' />
                            <span>Serviços</span>
                        </li>
                        <li>
                            <IoIosArrowForward color='white' />
                            <span>Contato</span>
                        </li>
                        <li>
                            <IoIosArrowForward color='white' />
                            <span>Área do Cliente</span>
                        </li>
                    </ul>
                </li>
                <li className='newsletter'>
                    <h2>Receba nossas novidades</h2>
                    <p>Adicione seu e-mail e entre na nossa lista<br /> de contatos VIP</p>
                    <div className='form'>

                        <input type="email" placeholder="Seu e-mail" />
                        <button type='submit'
                            onMouseOver={() => changeIconColor(3)}
                            onMouseOut={() => changeIconColor(3, false)}>
                            <IoMdMail color={iconColor[3]} size={25} />
                        </button>
                    </div>
                </li>

            </ul>
            <div className="divisor" />

            <ul className="social">
                <li
                    onMouseOver={() => changeIconColor()}
                    onMouseOut={() => changeIconColor(0, false)}
                >
                    <a href="https://pt-br.facebook.com/csfdigital/" target={"_blank"} rel="noreferrer">
                        <FaFacebookF color={iconColor[0]} size={15} />
                    </a>
                </li>
                <li
                    onMouseOver={() => changeIconColor(1)}
                    onMouseOut={() => changeIconColor(1, false)}
                >
                    <a href="https://www.instagram.com/csfdigital/" target={"_blank"} rel="noreferrer">
                        <BsInstagram color={iconColor[1]} size={15} />
                    </a>
                </li>
                <li
                    onMouseOver={() => changeIconColor(2)}
                    onMouseOut={() => changeIconColor(2, false)}
                >
                    <a href="https://www.linkedin.com/company/csfdigital/about/" target={"_blank"} rel="noreferrer">
                        <FaLinkedinIn color={iconColor[2]} size={15} />
                    </a>
                </li>
            </ul>
            <p className='footer-about'>© Copyright 2023 <a href="\">CSF Digital</a> . Todos Os Direitos Reservados</p>
        </FooterStyled>
    )
}

