import React, { useEffect, useState } from 'react'
import { Nav } from './styles'

interface iProps {
  navBarOptionNumber: number;
  handleNavBarOption: (optionNumber: number) => void;
}



export default function Navbar(props: iProps) {
  const [stickyClass, setStickyClass] = useState('relative');

  let navbarElement = null;
  let sticky: number | undefined = undefined;

  if(typeof Document !== 'undefined'){
     navbarElement = document.getElementById("navbar");
  }
   sticky = navbarElement?.offsetTop;

  const stickNavbar = () => {
    if (window !== undefined) {

      if(sticky) window.pageYOffset > sticky ? setStickyClass('fixed') : setStickyClass('relative');
    }
  };

  useEffect(() => {
    typeof window !== 'undefined' ? window.addEventListener('scroll', stickNavbar) : '';

    return () => {
      typeof window !== 'undefined' ? window.removeEventListener('scroll', stickNavbar) : '';
    };
  }, []);



  return (
    <Nav id='navbar-large' className={` ${stickyClass}`} >
      <ul className='content'>
        <li onClick={() => props.handleNavBarOption(0)}><span className={`${props.navBarOptionNumber === 0 && 'selected'}`}>home</span></li>
        <li onClick={() => props.handleNavBarOption(1)}><span className={`${props.navBarOptionNumber === 1 && 'selected'}`}>sobre</span></li>
        <li onClick={() => props.handleNavBarOption(2)}><span className={`${props.navBarOptionNumber === 2 && 'selected'}`}>serviços</span></li>
        <li onClick={() => props.handleNavBarOption(3)}><span className={`${props.navBarOptionNumber === 3 && 'selected'}`}>contato</span></li>
        <li onClick={() => props.handleNavBarOption(4)}><span className={`${props.navBarOptionNumber === 4 && 'selected'}`}>área do cliente</span></li>
      </ul>
      <button ><span>contratar agora</span></button>
    </Nav>
  )
}
