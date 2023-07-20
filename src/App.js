import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './sections/header/Header';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
