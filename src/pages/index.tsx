import { useState } from 'react'
import Footer from '@/src/components/footer/Footer'
import Header from '@/src/components/header/Header'
import Navbar from '@/src/components/navbar/Navbar'
import NavbarMobile from '@/src/components/navbarMobile/NavbarMobile'
import { IndexContainer } from './styles/styles'
import Main from '@/src/components/main/MainComponent'

export default function Home() {
  const [navBarOption, setNavBarOption] = useState(0);

  function handleNavBarOption(optionNumber: number) {
    if (navBarOption === optionNumber) return;
    setNavBarOption(optionNumber);
  }
  return (
    
      <IndexContainer>
        <Header />
        <Navbar navBarOptionNumber={navBarOption} handleNavBarOption={handleNavBarOption} />
        <NavbarMobile navBarOptionNumber={navBarOption} handleNavBarOption={handleNavBarOption} />
        <Main navBarOptionNumber={navBarOption} handleNavBarOption={handleNavBarOption} />
        <Footer />
      </IndexContainer>
      )
} 
