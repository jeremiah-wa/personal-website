import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './sections/header/Header';
import Portfolio from './sections/portfolio/Portfolio';
import Entertainment from './sections/entertainment/Entertainment'
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import About from './sections/about/About'

function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
