import React from 'react'
import {HiDownload} from 'react-icons/hi'
import './About.css'


// assets
import profilePic from '../../assets/about.jpg'
import CV from '../../assets/JeremiahWangaruroResume.pdf'

function About() {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={profilePic} alt="Profile Picture" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <p>
                Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
                </p>
                <p>
                Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About