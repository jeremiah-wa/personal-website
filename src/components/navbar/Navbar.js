import React from 'react'
import './Navbar.css'
import {IoIosColorPalette} from 'react-icons/io'
import Logo from '../../assets/logo.jpg'

const data = [
  {id: 1, link: '#', title: 'Home'},
  {id: 2, link: '#about', title: 'About'},
  {id: 3, link: '#services', title: 'Services'},
  {id: 4, link: '#portfolio', title: 'Portfolio'},
  {id: 5, link: '#contact', title: 'Contact'}
]


export default function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__header'>
          <img src={Logo} alt="Logo"  className='nav__logo'/>
          <h3>Jeremiah Wangaruro</h3>
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon' ><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}
