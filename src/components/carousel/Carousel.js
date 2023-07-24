// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

import './Carousel.css'
import Card from '../card/Card'
import Categories from '../categories/Categories'
import { useEffect, useState } from "react";


const defaultItem = ({item}) => {
  return (
    <Card onClick={() => {
        window.open(item.link, "_blank", "popup=false noopner noreferrer")
    }}>
        <h4>{item.title}</h4>
    </Card>
  )
}


const Carousel = ({data, withCategories=true,  Item=defaultItem}) => {
  const [items, setItems] = useState(data);

  let categories = data.map(item => item.category)
  let uniqueCategories = ["all", ...new Set(categories)]
  
  const filterItemsHandler = (category) => {
    if(category === "all" || category == null) {
      setItems(data);
      return;
    }
    setItems(data.filter(item => item.category === category));
  }

  useEffect(() => { 
    setItems(data)
    categories = data.map(item => item.category)
    uniqueCategories = ["all", ...new Set(categories)]
    }, 
  [data])

  return (
    <>
      <div className="container carousel__container">
        {uniqueCategories && withCategories && <Categories categories={uniqueCategories} onFilterItems={filterItemsHandler}/> }
        
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            601: {slidesPerView: 2},
            1025: {slidesPerView: 3}
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {
            items.map(item => (
              <SwiperSlide key={item.id}>
                <Item item={item} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  )
}

export default Carousel