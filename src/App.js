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

import { BsPersonFill } from 'react-icons/bs';
import {AiFillAppstore, AiFillMessage} from 'react-icons/ai'


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
      <Footer/>
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
      <Professional showFloatingNav/>
    </main>
  );
}

export default App;
