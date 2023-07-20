import { useEffect } from 'react'

// css
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// assets
import ProfilePic from '../../assets/profile-pic.jpg'
import CV from '../../assets/JeremiahWangaruroResume.pdf'

// icons
import {HiDownload} from 'react-icons/hi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'



const socials = [
    {id: 1, link: 'https://github.com/jeremiah-wa', icon: <BsGithub/>},
    {id: 2, link: 'https://www.linkedin.com/in/jeremiahwangaruro', icon: <BsLinkedin/>}
]

function About() {
  
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <section id="about" data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={ProfilePic} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <div className='about__header'>
                        <h2>About Me</h2>
                    </div>
                    <div className="about__socials">
                    {
                            socials.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                        }
                    </div>
                    <p>
                    Hi, my name is Jeremiah Wangaruro from Dundalk, Ireland. I'm a Data Scientist with a Bachelors degree in Computer Science and 3 years experience in industry. Specifically, experience in using Python for predictive modelling and machine learning. And SQL, SSAS and Power BI for data modelling and report building.Check out my resume below for more info!
                    </p>
                    <div className="about__cta"  data-aos="fade-up">
                        <a href="#contact" className='btn primary'>Let's Talk</a>
                        <a href={CV} download='Jeremiah_Wangaruro_CV' className='btn primary'>Download CV <HiDownload/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About