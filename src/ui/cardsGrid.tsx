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

   
    // navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >


      {cards.map((card, index) => (
        <SwiperSlide className='p-[3rem] ' key={index}>
          <div className="displayCard p-4 ">


            <h1 className='  font-extrabold  mb-4'>{card.title}</h1>

            <img className=' hover:grayscale-[1] hover:blur-[3px] rounded-[6px] aspect-[9/16] object-cover' src={card.src} />
            
            </div>
          </SwiperSlide>
      ))}
      
      
      
      {console.log(Swiper)}

    </Swiper>







  );
}
