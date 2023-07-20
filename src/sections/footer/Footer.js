import './Footer.css'
import { RiArrowUpSFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer>
    <div className="container footer__container">
      <a href='#'>
        <RiArrowUpSFill/>  
        Back to Top
      </a>
    </div>
  </footer>
  )
}
