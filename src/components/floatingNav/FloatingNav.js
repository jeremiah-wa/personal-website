import Scrollspy from 'react-scrollspy'
import './FloatingNav.css'


function FloatingNav({links}){
  
  return (
    <ul id="floating__nav">
      <Scrollspy offset={-350} className='scrollspy' items={links.map(item => item.title.toLowerCase())} currentClassName="active">
        {
          links.map(item => (
            <li key={item.id}>
              <a href={item.link}>
                {item.icon}
              </a>
            </li>
          ))
        }
      </Scrollspy>
    </ul>
  )
}

export default FloatingNav