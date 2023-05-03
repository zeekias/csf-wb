import React, { useEffect, useState } from 'react'
import { Nav } from './styles'
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
interface iProps {
  navBarOptionNumber: number;
  handleNavBarOption: (optionNumber: number) => void;
}



export default function Navbar(props: iProps) {
  const [stickyClass, setStickyClass] = useState('relative');

  const [isOpenNavBar, setIsOpenNavBar] =useState("none");

  const handleNavbar = ()=>{
    isOpenNavBar === "flex" ? setIsOpenNavBar("none") : setIsOpenNavBar("flex"); 
  }

  let navbarElement = null;
  let sticky: number | undefined = undefined;

  if (typeof Document !== 'undefined') {
    navbarElement = document.getElementById("navbar");
  }
  sticky = navbarElement?.offsetTop;

  const stickNavbar = () => {
    if (window !== undefined) {
      console.log("");
      if (sticky) window.pageYOffset > sticky ? setStickyClass('fixed') : setStickyClass('relative');
    } 
  };

  useEffect(() => {
    typeof window !== 'undefined' ? window.addEventListener('scroll', stickNavbar) : '';

    return () => {
      typeof window !== 'undefined' ? window.removeEventListener('scroll', stickNavbar) : '';
    };
  }, []);



  return (
    <Nav id='navbar-mobile' className={` ${stickyClass} `} >
        <button className='navbar-button' onClick={()=>handleNavbar()}>
          
          {
            isOpenNavBar === "flex"? 
            <BiArrowFromLeft /> : <BiArrowFromRight /> 
          }

          </button>
        <ul className={`content ${isOpenNavBar}`} >
          <li onClick={() => props.handleNavBarOption(0)}><span className={`${props.navBarOptionNumber === 0 && 'selected'}`}>home</span></li>
          <li onClick={() => props.handleNavBarOption(1)}><span className={`${props.navBarOptionNumber === 1 && 'selected'}`}>sobre</span></li>
          <li onClick={() => props.handleNavBarOption(2)}><span className={`${props.navBarOptionNumber === 2 && 'selected'}`}>serviços</span></li>
          <li onClick={() => props.handleNavBarOption(3)}><span className={`${props.navBarOptionNumber === 3 && 'selected'}`}>contato</span></li>
          <li onClick={() => props.handleNavBarOption(4)}><span className={`${props.navBarOptionNumber === 4 && 'selected'}`}>área do cliente</span></li>
          <button ><span>contratar agora</span></button>
        </ul>
    </Nav>
  )
}
