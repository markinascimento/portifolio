// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';


export function Skills() {
  return (
    <div className='w-full h-full'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="w-screen max-w-[384px] bg-red-500 mx-auto p-8"
      >
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-blue-500 border-4 max-w-48 min-h-48'>Slide 1</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-orange-500 border-4 max-w-48 min-h-48'>Slide 2</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-pallet-primary border-4 max-w-48 min-h-48'>Slide 3</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-pallet-primary border-4 max-w-48 min-h-48'>Slide 4</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-pallet-primary border-4 max-w-48 min-h-48'>Slide 5</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-pallet-primary border-4 max-w-48 min-h-48'>Slide 6</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-pallet-primary border-4 max-w-48 min-h-48'>Slide 7</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-pallet-primary border-4 max-w-48 min-h-48'>Slide 8</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-2xl text-white bg-pallet-primary border-4 max-w-48 min-h-48'>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}
