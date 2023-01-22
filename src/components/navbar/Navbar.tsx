import React from 'react'
import { Nav } from './styles'

export default function Navbar() {
  return (
    <Nav>
        <ul className='content'>
            <li><span>home</span></li>
            <li><span>sobre</span></li>
            <li><span>serviços</span></li>
            <li><span>contato</span></li>
            <li><span>área do cliente</span></li>
        </ul>
        <button ><span>contratar agora</span></button>
    </Nav>
  )
}
