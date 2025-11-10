import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../assets/4hb5rv-1024x873.png'
import img2 from '../assets/4tbv.jpg'
import img3 from '../assets/r2g3vc3r.png'

const HeroSection = () => {
    return (
        <div className='bg-[#c9f0ff] w-full md:h-[800px] my-10 md:my-20 px-10 md:px-20 rounded-2xl py-10 md:py-0 container mx-auto'>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
                    <div className='w-full md:h-[800px] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5'>
                       <div className='flex-1'>
                         <h1 className='text-2xl text-[#54595F] md:text-6xl mt-2 md:mt-7 mb-5 md:mb-10 font-bold'>AI powered learning experiences</h1>
                         <p className='text-xl'>Gipo uses AI to provide personalized learning experiences for students.</p>
                       </div>
                      <div className='flex-1'>
                        <img className='w-full h-full rounded-2xl' src={img1} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='w-full md:h-[800px] flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-5'>
                       <div className='flex-1'>
                         <h1 className='text-2xl text-[#54595F] md:text-6xl mt-2 md:mt-7 mb-5 md:mb-10 font-bold'>The Potential of AI-Powered Education</h1>
                         <p className='text-xl'>Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec enim elit, interdum eu tellus quis, fermentum vehicula dolor.</p>
                       </div>
                      <div className='flex-1'>
                        <img className='w-full h-full rounded-2xl' src={img2} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='w-full md:h-[800px] flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-5'>
                       <div className='flex-1'>
                         <h1 className='text-2xl md:text-6xl mt-2 md:mt-7 mb-5 md:mb-10 font-bold text-[#54595F]'>Personalized Learning is Transforming Student Success</h1>
                         <p className='text-xl'>Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales ac urna</p>
                       </div>
                      <div className='flex-1'>
                        <img className='w-full h-full rounded-2xl' src={img3} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default HeroSection;