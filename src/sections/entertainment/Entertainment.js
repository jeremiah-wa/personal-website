import './Entertainment.css'
import data from './data'



export default function Entertainment() {
  
  return (
    <section id="entertainment">
      <h2>Entertainment</h2>
      <p>
      Check out some of the recent movies and shows I'm watching and some of the books I've read!
      </p>
      <p>
        {data[6].description.substring(0, 200).trimEnd() + '....'}
      </p>
    </section>
  )
}
