import './Contact.css'
import AOS from 'aos'
import { useEffect } from 'react'

// icons
import {HiOutlineMail} from 'react-icons/hi'
import {FaLinkedin} from 'react-icons/fa'



const defaultContacts = [
  {id: 1, icon: <HiOutlineMail/>, link: 'mailto:jeremiah.ruro@gmail.com'},
  {id: 2, icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/jeremiahwangaruro'}
]


function Contact({contacts=defaultContacts}) {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Shoot me a message on any of the links below!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact