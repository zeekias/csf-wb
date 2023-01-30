import React from 'react'
import About from '../about/About'
import Budget from '../budget/Budget'
import Home from '../home/Home'
import Soluctions from '../soluctions/Soluctions'
import { MainStyled } from './styles'


export default function Main() {
  return (
    <MainStyled>
        <Soluctions />
    </MainStyled>
  )
}
