import { useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/Navbar'
import { IndexContainer } from './styles/styles'

export default function Home() {
  const [navBarOption, setNavBarOption] = useState(0);

  function handleNavBarOption(optionNumber: number) {
    if (navBarOption === optionNumber) return;
    setNavBarOption(optionNumber);
  }
  return (
    
      <IndexContainer>
        {/* <Header /> */}
        {/* <Navbar navBarOptionNumber={navBarOption} handleNavBarOption={handleNavBarOption} /> */}
        <Main navBarOptionNumber={navBarOption} handleNavBarOption={handleNavBarOption} />
        {/* <Footer /> */}
      </IndexContainer>
      )
} 
