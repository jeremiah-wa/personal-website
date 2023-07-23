import Card from '../../components/card/Card'
import Carousel from '../../components/carousel/Carousel'
import './Entertainment.css'
import data from './data'
import starImage from '../../assets/star.png'


const Item = ({item}) => {
  return (
    <Card onClick={() => {
        window.open(item.link, "_blank", "popup=false noopner noreferrer")
    }}>
        {item.image &&
            <img className='poster' src={item.image} alt="Carousel Item Image" />
        }
        <h3 className='title'>{item.title}</h3>
        
        <p className='description'>
          {item.description.substring(0, 100).trimEnd() + '....'}
        </p>
        <span className='rating'>
          <img className='starImage' src={starImage} />
          <h3>{item.rating}</h3><h4>/{item.ratingOutOf}</h4>
        </span>
        
    </Card>
  )
}

export default function Entertainment() {
  
  return (
    <section id="entertainment">
      <h2>Entertainment</h2>
      <p>
      Check out some of the recent movies and shows I'm watching and some of the books I've read!
      </p>
      <Carousel data={data} Item={Item}/>
    </section>
  )
}
