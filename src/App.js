import './App.css';
import Navbar from './components/navbar/Navbar';
import FloatingNav from './components/floatingNav/FloatingNav';
import Header from './sections/header/Header';
import Portfolio from './sections/portfolio/Portfolio';
import Entertainment from './sections/entertainment/Entertainment'
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import About from './sections/about/About'
import {useState,  useEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { BsInstagram, BsPersonFill } from 'react-icons/bs';
import {AiFillAppstore, AiFillMessage} from 'react-icons/ai'
import { RiMusic2Fill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import Music from './sections/music/Music';


const Professional = ({showFloatingNav}) => {
  const links = [
    {id: 1, link: '#about', title: 'About', icon: <BsPersonFill/>},
    {id: 2, link: '#portfolio', title: 'Portfolio', icon: <AiFillAppstore/>},
    {id: 3, link: '#contact', title: 'Contact', icon: <AiFillMessage/>}
  ]

  return (
    <>
      <Navbar links={links}/>
      <About/>
      <Portfolio/>
      <Contact/>
      {showFloatingNav && <FloatingNav links={links}/>}
    </>
  )
}

const Personal = ({showFloatingNav}) => {
  const links = [
    {id: 1, link: '#music', title: 'Music', icon: <RiMusic2Fill/>},
    {id: 2, link: '#entertainment', title: 'Entertainment', icon: <AiFillAppstore/>},
    {id: 3, link: '#contact', title: 'Contact', icon: <AiFillMessage/>}
  ]

  const contacts = [
    {id: 1, icon: <BsInstagram/>, link: 'https://www.instagram.com/jeremiah_ruro/'},
    {id: 2, icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/jeremiahwangaruro'}
  ]

  return (
    <>
      <Navbar links={links}/>
      <Music/>
      <Entertainment/>
      <Contact contacts={contacts}/>
      {showFloatingNav && <FloatingNav links={links}/>}
    </>
  )
}


function App() {

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion])

  return (
    <main>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Professional showFloatingNav/>}/>
          <Route path="/personal" element = {<Personal showFloatingNav/>}/>
          <Route path="*" element = {<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </main>
  );
}

export default App;
