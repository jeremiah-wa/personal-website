import { useState } from 'react'
import './Categories.css'

const CategoryButton = ({category, className, onChangeCategory}) => {
    return (
      <button className={className} onClick={() => onChangeCategory(category)}>{category}</button>
    )
}

const Categories = ({categories, onFilterItems}) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat);
        onFilterItems(activeCat);
    }

  return (
    <div className='categories__container'>
        {
            categories.map(category => (
                ((category) ? 
                  <CategoryButton key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)} className={`btn cat__btn ${activeCategory == category ? 'primary' : 'white'}`}/>
                :
                  <CategoryButton key={'other'} category={'other'} onChangeCategory={() => changeCategoryHandler(undefined)} className={`btn cat__btn ${activeCategory == 'other' ? 'primary' : 'white'}`}/>
                )
            ))
        }
    </div>
  )
}

export default Categories