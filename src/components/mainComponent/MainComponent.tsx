import React from 'react'
import About from '../about/About'
import ClientArea from '../clientArea/ClientArea'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Soluctions from '../soluctions/Soluctions'
import { MainStyled } from './styles'

interface iProps{
  navBarOptionNumber: number;
  handleNavBarOption: (optionNumber: number)=>void;
}

export default function MainComponent(props: iProps) {
  function handleSubComponentMain(navBarOptionNumber: number){
    switch(navBarOptionNumber){
      case 0:
        return <Home handleNavBarOption={props.handleNavBarOption}/>
      case 1:
        return <About />
      case 2:
        return <Soluctions />
      case 3: 
        return <Contact />
      case 4: 
        return <ClientArea />
  
    }
  }
  return (
    <MainStyled>
        {
          handleSubComponentMain(props.navBarOptionNumber)
        }
    </MainStyled>
  )
}
 