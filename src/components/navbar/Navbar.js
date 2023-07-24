import React from 'react'
import './Navbar.css'
import {IoIosColorPalette} from 'react-icons/io'
import Logo from '../../assets/logo.jpg'


export default function Navbar({links}) {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__header'>
          <img src={Logo} alt="Logo"  className='nav__logo'/>
          <h3>Jeremiah Wangaruro</h3>
        </a>
        <ul className='nav__menu'>
          {
            links.map(item => <li key={item.id}>
              <a href={item.link}>
                {item.title}
              </a>
            </li>)
          }
        </ul>
        <button id='theme__icon' ><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}
