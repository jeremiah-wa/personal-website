import React from 'react'
import './Portfolio.css'
import useRepos  from '../../hooks/useRepos'
import Carousel from '../../components/carousel/Carousel'
import Card from '../../components/card/Card'


const Item = ({item}) => {
  return (
    <Card onClick={() => {
        window.open(item.link, "_blank", "popup=false noopner noreferrer")
    }}>
        <h4>{item.title}</h4>
        {item.description &&
          <p className='description'>
            {item.description.substring(0, 100).trimEnd() + '....'}
          </p>
        }
        {item.topics &&
          <div className='topic__wrapper'>
            {item.topics.slice(0, 3).map(topic => <div className='topic'>{topic}</div>)}
          </div>
        }

    </Card>
  )
}

export default function Portfolio() {
  const {repos} = useRepos()
  
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
      Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      <Carousel data={repos} Item={Item}/>
    </section>
  )
}
