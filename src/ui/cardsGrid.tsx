import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export  function FocusCards({ cards }) {


  return (






    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    // pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >


      {cards.map((card, index) => (
        <SwiperSlide className='p-[3rem]' key={index}><div className="displayCard ">{card.title}</div></SwiperSlide>
      ))}
      
      
      
      

    </Swiper>







  );
}
