import Image from "next/image";
import { HeaderInner, HeaderStyled, TopBar } from "./styles";
import logoHome from "@/src/assets/logo_home.png";
import { FiClock } from "react-icons/fi";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [iconColor, setIconColor] = useState(["ccc", "ccc", "ccc"]);
  function changeIconColor(position: number = 0, isOver: boolean = true) {
    const aux = [...iconColor];
    aux[position] = isOver ? "c43336" : "ccc";
    setIconColor(aux);
  }

  return ( 
    <HeaderStyled>
      <TopBar>
        <ul className="content">
          <li>
            <FiClock color="c43336" />
            <span>
              Horário • 08:00 às 12:30 | 13:30 às 18:00
            </span>
          </li>

        </ul>
        <ul className="social">
          <li
            onMouseOver={() => changeIconColor()}
            onMouseOut={() => changeIconColor(0, false)}
          >
            <a href="https://pt-br.facebook.com/csfdigital/" target={"_blank"} rel="noreferrer">
              <FaFacebookF color={iconColor[0]} />
            </a>
          </li>
          <li
            onMouseOver={() => changeIconColor(1)}
            onMouseOut={() => changeIconColor(1, false)}
          >
            <a href="https://www.instagram.com/csfdigital/" target={"_blank"} rel="noreferrer">
              <BsInstagram color={iconColor[1]}  />
            </a>
          </li>
          <li
            onMouseOver={() => changeIconColor(2)}
            onMouseOut={() => changeIconColor(2, false)}
          >
            <a href="https://www.linkedin.com/company/csfdigital/about/" target={"_blank"} rel="noreferrer">
              <FaLinkedinIn color={iconColor[2]} />
            </a>
          </li>
        </ul> 
      </TopBar>

      <HeaderInner className="header-innner">
        <div className="image-container">
          <Image src={logoHome} alt={"Logo - CSF DIGITAL"} height={100} />
        </div>
        <ul className="content">
          <li>
            <div className="icon-container">
              <BsFillTelephoneFill color="c43336" />
            </div>
            <h4>
              Telefone • São Luís - MA
              <a href="tel:9833012400">
                <span>(98) 3301-2400 </span>
              </a>
            </h4>
          </li>
          <li>
            <div className="icon-container">
              <BsFillTelephoneFill color="c43336" />
            </div>
            <h4>
              Telefone • Fortaleza - CE
              <a href="tel:8530220900">
                <span>(85) 3022-0900 </span>
              </a>
            </h4>
          </li>
          <li>
            <div className="icon-container">
              <IoMdMail color="c43336" />
            </div>

            <h4>
              Envie uma mensagem
              <a href="mailto:vendas@csfdigital.com.br">
                <span>vendas@csfdigital.com.br</span>
              </a>
            </h4>
          </li>
        </ul>
      </HeaderInner>
    </HeaderStyled>
  );
}
